---
title: 'Enterprise Asset Tracking with Teltonika and Home Assistant'
cover: ''
date: '08-08-2025'
category: "mypc"
tags:
  - mypc
  - iot
  - homeassistant
  - fleet-management
---

Recently I decided to set up enterprise-grade vehicle tracking for my car. What started as a simple project to monitor location turned into a comprehensive fleet management system with real-time data visualization in Home Assistant. This post covers the complete journey from hardware selection to home automation integration.

I already had a vehicle tracker based on a Marvin Arduino device with LoRa connectivity, but it had some limitiations. LoRa has no coverage outside my country, and it had no on-board GPS, so it used LoRa triangulation to determine its location which is far less accurate.

## Hardware Selection: Teltonika FMC003

After researching various GPS trackers, I settled on the [Teltonika FMC003](https://teltonika-gps.com/products/trackers/fmc003), an enterprise-grade vehicle tracker. Key factors in this decision:

- Listed as compatible on [traccar.org](https://www.traccar.org/devices/), where Traccar integrates well with Home Assistant.
- It plugs into the OBD-II port of the car for power and can read vehicle diagnostics like battery charge and odometer
- Supports 4G connectivity with standard SIM cards and has on-board GPS.

The device costs around €67-97 depending on the supplier, which is reasonable for enterprise hardware and not prohibitively expensive for hobbyists. It's an improvement over my 

## Connectivity: KPN IoT SIM

For connectivity, I used a KPN IoT SIM card. It is possible to request free trial SIMs at portal.kpnthings.com which are limited to 100MB per month and are valid for one year after activation.

The key here is APN selection as I found out:

- `kpnthings2.m2m`: (the default APN) is restricted to the KPN IoT platform only
- `internet.m2m`: provides open internet access while still manageable through KPN's portal

The latter is essential since we need the tracker to communicate with our self-hosted server over the public internet.

## The OpenRemote Challenge

Initially, I planned to use Traccar, but the Teltonika device configuration documentation led me to OpenRemote instead. The device supports MQTT with TLS encryption, which requires a proper certificate authority - this ruled out simple self-signed certificates.

OpenRemote provides a [Fleet Management tutorial](https://github.com/openremote/fleet-management/wiki/Tutorial%3A-Create-your-own-Fleet-Management-System) specifically for Teltonika devices, making it the logical choice.

## Self-Hosting OpenRemote

Setting up OpenRemote required some network configuration due to port conflicts on my home server:

```yaml
# Port mappings in docker-compose.yml
# Standard HTTPS for web interface
9743:443  # Instead of 443:443 (Caddy already uses 443)
# MQTT over TLS for device communication  
8883:8883
# Let's Encrypt certificate renewal
8012:80 # Forwarded via Caddy
```

### Certificate Management Automation

The biggest operational challenge is TLS certificate management. Let's Encrypt certificates expire every 90 days, and each renewal requires updating the certificate on the physical tracking device.

My current server already had port 80 in use by Pi-hole and a Caddy reverse proxy for accessing services on several subdomains that use Let's Encrypt certificates.

To realise this, I forward port 80 on my modem to port 8011 on the docker container for Caddy, but there map port 8011 to port 80. That way Let's Encrypt certification renewal still works.

However, I can't use the existing Caddy reverse proxy for OpenRemote, because it needs MQTTS and Caddy doesn't support that. OpenRemote uses it's own proxy container with HAProxy to support that. To be able to renew certificates for this proxy, I forward unencrypted HTTP traffic from Caddy to the OpenRemote Proxy running on port 8012:

```
# Snippet from Caddyfile

# Redirect port 80 without httpS to openremote HaProxy, so SSL renewal will work
http://my-openremote-server.example.com {
        reverse_proxy 192.168.0.3:8012
}
```

I automated the certificate extraction with a script (`~/openremote/getcert.sh`):

```bash
#!/bin/bash

# Extract the live certificate (symlink to latest)
docker cp -L openremote-proxy-1:/deployment/letsencrypt/live/my-openremote-server.example.com/fullchain.pem .
mv fullchain.pem fullchain1.pem

# Reverse certificate order (required by Teltonika)
awk '/-----BEGIN CERTIFICATE-----/{x="cert"++i".pem"}; {print > x}' fullchain1.pem
ls cert*.pem | sort -V -r | xargs cat > reversed_certchain.pem
rm cert*.pem

echo fullchain1.pem reversed to reversed_certchain.pem

rm fullchain1.pem

mv reversed_certchain.pem fullchain.pem

echo cleaned up files and renamed result to fullchain.pem

# Removed the rest of the script that uses ssmtp to mail the certificate to myself
```

**Critical lesson learned**: Always use the `live/` symlink, not the `archive/` directory. The live certificate automatically points to the latest renewal (e.g., `fullchain4.pem` after multiple renewals).

## Device Configuration with TCT

The Teltonika Configuration Tool (TCT) requires Windows and won't work in ARM-based VMs like Parallels on Apple Silicon. Additionally, the device needs 30V power, so configuration must initially be done with the device connected to the vehicle's OBD-II port. After some time, the battery in the device can be used so it doesn't have to be plugged in to the OBD-II port. But after a reboot of the device, it will first have to be connected to an OBD-II port before it starts up again.

Key configuration settings:

**GPRS Tab:**
- APN: `internet.m2m`
- Enable GPRS

**Server Settings:**
- Domain: `my-openremote-server.example.com`
- Port: `8883` (MQTTS)
- Protocol: `MQTT`
- TLS Encryption: `TLS/DTLS`

**MQTTS Settings:**
- MQTT Client Type: `AWS IoT Custom`
- Data topic: `master/myFmc003/teltonika/%imei%/data`
- Commands topic: `master/myFmc003/teltonika/%imei%/commands`

**System Tab:**
- Data Protocol: `Codec JSON`

**Security Tab:**
- Upload the reversed certificate chain (fullchain.pem)

## Home Assistant Integration

OpenRemote provides REST APIs, but they use OAuth2 with short-lived tokens (60 seconds). Since Home Assistant doesn't natively support OAuth2 token refresh for REST sensors, I created a command-line sensor that handles authentication. I have to stress that this is not a recommended or safe way to deal with OAuth2.

```yaml
command_line:
  - sensor:
      name: fmc003
      command: "token=$(curl -d 'grant_type=client_credentials&client_id=homeassistant&client_secret=SECRET' https://my-openremote-server.example.com:9743/auth/realms/master/protocol/openid-connect/token | jq -r .access_token) && curl -L 'https://my-openremote-server.example.com:9743/api/master/asset/ASSET_ID' -H \"Authorization: Bearer $token\" | jq '{ coordinates: .attributes.location.value.coordinates, longitude: .attributes.location.value.coordinates[0], latitude: .attributes.location.value.coordinates[1], speed: .attributes.sp.value, charge: .attributes[\"57\"].value, odometer: .attributes[\"389\"].value, altitude: .attributes.alt.value }'"
      value_template: "{{ value_json.coordinates}}"
      json_attributes:
        - latitude
        - longitude
        - charge
        - speed
        - odometer
        - altitude
      icon: "mdi:car"
```

This approach:
1. Obtains a fresh OAuth token
2. Fetches asset data from OpenRemote
3. Transforms the JSON to extract relevant attributes
4. Is refreshed by Home Assistant every 60 seconds by default

Note that SECRET and ASSET_ID should be replaced by values from OpenRemote. SECRET can be found under Users > create a service user with "read:assets" rights. The ASSET_ID is visible in the URL on the asset details page.

## Debugging and Troubleshooting

After a couple of months I noted that the data in Home Assistant was no longer update. I enabled detailed logging in the OpenRemote HAProxy container:

```yaml
PROXY_LOGLEVEL: 'info'
```

This revealed the SSL handshake failure:
```
100.200.70.60:38736 [05/Aug/2025:08:37:12.994] mqtt/1: SSL handshake failure (error:0A000418:SSL routines::tlsv1 alert unknown ca)
```

The root cause was using the wrong certificate path in my automation script - it was copying from `archive/fullchain1.pem` instead of the `live/fullchain.pem` symlink.

## Visualization

Home Assistant's [Ultra Vehicle Card](https://ultravehiclecard.com) provides excellent visualization of the tracking data, displaying:

- A picture of the car that changes based on the charging state
- Battery charge level
- Odometer reading

Beside that other Home Assistant cards can be used to show:

- Real-time location on a map
- Current speed
- Altitude

Template sensors extract individual attributes for use in other automations and dashboards.

## Lessons Learned

1. **Certificate management is critical**: Automate extraction but always use the `live/` symlink
2. **OAuth2 complexity**: Command-line sensors can handle authentication better than REST sensors for short-lived tokens
3. **Enterprise hardware requirements**: Don't underestimate power and connectivity requirements
4. **Teltonika peculiarities**: Certificate order must be reversed, Windows required for configuration
5. **Network planning**: Multiple ports required, plan for certificate renewal downtime

## Future Improvements

- Investigate running TCT on an x64 Linux VM with a separate OBD-II power supply so configuration can be done outside the car.

This setup provides enterprise-grade vehicle tracking with full control over data and impressive integration possibilities with home automation systems. While the initial setup requires effort, the result is a robust, self-hosted fleet management solution.