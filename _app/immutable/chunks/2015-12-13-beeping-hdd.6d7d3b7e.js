import{S as F,i as G,s as J,k as c,q as n,a as A,l as h,m,r,h as t,c as H,n as x,b as u,D as a,E as R}from"./index.ce9a7868.js";function K(L){let o,_,y,l,T,p,B,S,v,i,k,b,E,M,g,I,P,w,d,j=`<code class="language-undefined">/dev/sdb &#123;
    apm=255
&#125;</code>`;return{c(){o=c("p"),_=n("Recently I replaced the 1,5 TB HDD that is used as an archive in Dop by a 3TB Seagate Barracuda ST3000DM001. Silly choice apparently, because it is known to have some defects. Imagine my horror when it started beeping at certain intervals."),y=A(),l=c("p"),T=n("The time in between is large enough to seem random, but it apparently only happens after awaking from hibernate. After looking up "),p=c("a"),B=n("some forums"),S=n(" this seems to be a problem with Advanced Power Management with Seagate drives."),v=A(),i=c("p"),k=n("By disabling APM with "),b=c("code"),E=n("sudo hdparm -B 255 /dev/sdb"),M=n(" the sound indeed disappeared. This setting is not maintained after reboots, but it should be possible to configure it in the "),g=c("code"),I=n("/etc/hdparm.conf"),P=n(" e.g. like this:"),w=A(),d=c("pre"),this.h()},l(e){o=h(e,"P",{});var s=m(o);_=r(s,"Recently I replaced the 1,5 TB HDD that is used as an archive in Dop by a 3TB Seagate Barracuda ST3000DM001. Silly choice apparently, because it is known to have some defects. Imagine my horror when it started beeping at certain intervals."),s.forEach(t),y=H(e),l=h(e,"P",{});var D=m(l);T=r(D,"The time in between is large enough to seem random, but it apparently only happens after awaking from hibernate. After looking up "),p=h(D,"A",{href:!0,rel:!0});var C=m(p);B=r(C,"some forums"),C.forEach(t),S=r(D," this seems to be a problem with Advanced Power Management with Seagate drives."),D.forEach(t),v=H(e),i=h(e,"P",{});var f=m(i);k=r(f,"By disabling APM with "),b=h(f,"CODE",{});var q=m(b);E=r(q,"sudo hdparm -B 255 /dev/sdb"),q.forEach(t),M=r(f," the sound indeed disappeared. This setting is not maintained after reboots, but it should be possible to configure it in the "),g=h(f,"CODE",{});var O=m(g);I=r(O,"/etc/hdparm.conf"),O.forEach(t),P=r(f," e.g. like this:"),f.forEach(t),w=H(e),d=h(e,"PRE",{class:!0});var z=m(d);z.forEach(t),this.h()},h(){x(p,"href","http://lime-technology.com/forum/index.php?topic=29076.msg259784"),x(p,"rel","nofollow"),x(d,"class","language-undefined")},m(e,s){u(e,o,s),a(o,_),u(e,y,s),u(e,l,s),a(l,T),a(l,p),a(p,B),a(l,S),u(e,v,s),u(e,i,s),a(i,k),a(i,b),a(b,E),a(i,M),a(i,g),a(g,I),a(i,P),u(e,w,s),u(e,d,s),d.innerHTML=j},p:R,i:R,o:R,d(e){e&&t(o),e&&t(y),e&&t(l),e&&t(v),e&&t(i),e&&t(w),e&&t(d)}}}const Q={title:"Dop Beeping HDD",cover:"https://picsum.photos/g/800/600?image=0",date:"13-12-2015",category:"mypc",tags:["mypc"],preview:`Recently I replaced the 1,5 TB HDD that is used as an archive in Dop by a 3TB Seagate Barracuda ST3000DM001. Silly choice apparently, because it is known to have some defects. Imagine my horror when it started beeping at certain intervals. 

The...`,previewHtml:"<p>Recently I replaced the 1,5 TB HDD that is used as an archive in Dop by a 3TB Seagate Barracuda ST3000DM001. Silly choice apparently, because it is known to have some defects. Imagine my horror when it started beeping at certain intervals. </p> <p>The time ...</p>"};class U extends F{constructor(o){super(),G(this,o,null,K,J,{})}}export{U as default,Q as metadata};
