---
title: 'CDN, Relative URLs and local testing'
cover: ''
date: '13-05-2013'
category: 'webdevelopment'
tags:
  - webdevelopment
---

Of course I use this CDN refs to jquery and jquery-ui for my (new) sites, with fallbacks to local versions:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script>
      <!--//
      !window.jQuery &&
  document.write(unescape('%3Cscript
   src="file:/C:/local/js/jquery.js"%3E%3C/script%3E'))
      //-->
</script>
<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.1/jquery-ui.min.js"></script>
<script>
      <!--//
      !window.jQuery.ui &&
  document.write(unescape('%3Cscript
   src="file:/C:/local/js/jqueryui.js"%3E%3C/script%3E'));
      //-->
</script>
```

Weirdly enough, when I have a local page with these includes it takes a full 15 seconds to load the page. But only in Chrome, in FF it is as fast as when loading only the local JS, like this:

```html
<script src="file:/C:/local/js/jquery.js"></script>
<script src="file:/C:/local/js/jqueryui.js"></script>
```

This takes less than a second in FF.

Since this happens when I run a standalone HTML, I could imagine that the protocol relative prefix "//" of the CDN URLs, is expanded to file:// which of course wouldn't resolve. And indeed prefixing the URLs with http: solves the problem.

I can solve this by simply adding a variable in the templates that generate the refs to the CDN. This will insert "http:" before the URLs when testing locally and nothing when running in production.
