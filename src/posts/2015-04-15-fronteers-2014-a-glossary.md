---
title: "Fronteers 2014: A Glossary"
cover: "https://picsum.photos/800/600?image=3"
date: "15-04-2015"
category: "webdevelopment"
tags:
    - webdevelopment
---

As I noted in [my previous post about Fronteers 2014](../fronteers-2014-css/) there were not as many talks about usable new techniques or tools as I would have liked. This doesn't mean that no interesting new terms were mentioned. That's why I will supply a list of the subjects that were new to me.

<style>
.gloss {
  margin-bottom: 1rem;
}
.gloss h3 {
    display: inline-block;
}
.gloss i {
    display: inline-block;
    margin-left: 0.5em;
}
.gloss p {
    margin-top: 0;
}
.gloss h3::after {
    border: 1px solid transparent;
    border-radius: 2px;
    color: #303030;
    display: inline-block;
    font-size: 80%;
    line-height: 60%;
    margin-left: 0.5em;
    padding: 2px;
}
.css h3::after {
    content: 'CSS';
    background-color: #006DB8;
}
.tool h3::after {
    content: 'Tool';
    background-color: #028134;
}
.js h3::after {
    content: 'JS';
    background-color: #F0DB4F;
}
</style>

<div class="gloss">
    <h3>A Spacecraft for All</h3>

<p>An <a href="https://www.chromeexperiments.com/experiment/a-spacecraft-for-all">interactive documentary</a> about the ISEE-3 spacecraft. A Chrome experiment using WebGL.</p>
</div>

<div class="gloss js">
    <h3>BlobAPI</h3>
    <i>from the lecture by Paul Kinlan</i>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Blob">Blobs</a> (Binary Large OBjects) are common in most programming languages but relatively new in JavaScript. The File API is based on Blob and Blob content can be read with a FileReader object.</p>
</div>

<div class="gloss css">
    <h3>CSS Animate</h3>
    <i>from the lecture by Nathan Ford</i>

<p>CSS generator for CSS 3 keyframe animations at <a href="http://cssanimate.com/">http://cssanimate.com/</a>.</p>
</div>

<div class="gloss">
    <h3>Dialog</h3>
    <i>from the lecture by Paul Kinlan</i>

<p>The experimental Dialog HTML element is a semantic element that can be used for e.g. modal dialogs. It's only supported in Chrome 37+ at the moment. Naming conventions around this common component are very unclear (modal, dialog, "popup" and backdrop, fade, "fog", overlay) so it would make a very useful addition, in my opinion. Check out this <a href="http://jsfiddle.net/mdvanes/k7t22u5h/">jsfiddle (Chrome only)</a>.</p>
</div>

<div class="gloss js">
    <h3>ES6 Compatibility Table</h3>

<p>An <a href="https://kangax.github.io/compat-table/es6/">overview</a> of supported ES6 features for different platforms (polyfills, browsers, runtimes).</p>
</div>

<div class="gloss css">
    <h3>Flexy Boxes</h3>
    <i>from the lecture by Nathan Ford</i>

<p>CSS generator for flexbox at <a href="http://the-echoplex.net/flexyboxes/">http://the-echoplex.net/flexyboxes/</a>.</p>
</div>

<div class="gloss js">
    <h3>getUserMedia</h3>
    <i>from the lecture by Swetank Dixit</i>

<p>API for accessing video/audio devices from the browser. See many demos <a href="http://shinydemos.com/getusermedia/">here</a>, e.g. a real-life color-picker. As noted in the talk, using https will allow for the browser to store the permission to access the multimedia devices. A very detailed tutorial can be found on <a href="http://www.html5rocks.com/en/tutorials/getusermedia/intro/">html5rocks</a>. In this tutorial getUserMedia is also combined with CSS filters to apply real-time effects to a video stream.</p>
</div>

<div class="gloss js">
    <h3>Intern</h3>
    <i>from the lecture by Nicholas Gallagher</i>

<p><a href="https://theintern.github.io/">The Intern</a> is a test framework for JavaScript like <a href="http://karma-runner.github.io/0.12/index.html">Karma</a> and <a href="https://github.com/airportyh/testem">Testem</a>, focused on compatibility.</p>
</div>

<div class="gloss js">
    <h3>Istanbul</h3>
    <i>from the lecture by Kyle Simpson</i>

<p><a href="https://gotwarlost.github.io/istanbul/">Istanbul</a> is a JavaScript code coverage tool. Of course, there is a <a href="https://www.npmjs.com/package/grunt-istanbul">grunt plugin</a>.</p>
</div>

<div class="gloss js">
    <h3>JSComplexity</h3>
    <i>from the lecture by Kyle Simpson</i>

<p><a href="http://jscomplexity.org">JSComplexity</a> is an online tool for complexity analysis of JavaScript projects. Fortunately, it has a <a href="https://www.npmjs.com/package/grunt-complexity">grunt plugin</a>.</p>
</div>

<div class="gloss">
    <h3>Line-mode browser</h3>
    <i>from the lecture by Nathan Ford</i>

<p>Rebuild by CERN of the original line-mode browser from 1992. <a href="http://line-mode.cern.ch/">See the line-mode browser</a>.</p>
</div>

<div class="gloss css">
    <h3>Penthouse</h3>
    <i>from the lecture by Dave Olson</i>

<p>A <a href="https://www.npmjs.com/package/penthouse">node module</a> (with a <a href="https://www.npmjs.com/package/grunt-penthouse">grunt plugin</a> and an <a href="http://jonassebastianohlsson.com/criticalpathcssgenerator/">online tool</a>) to generate the critical path of CSS to speed up page rendering. The browser waits with displaying any page until the CSS is loaded or times out eventually, resulting in a blank page. Of course it is always recommendable to have the CSS combined and minified (and gzipped), but if performance is important it might be an option to load it inline (!) to prevent failing on bad connections. </p>

<p>Instead of loading all the CSS inline, you can convert the critical CSS for the first page (the above-the-fold CSS) to inline CSS in the document head and load the full CSS in the bottom of the body, where the JavaScript sources should be as well. Extracting this critical CSS is what Penthouse does.</a>
</div>

<div class="gloss js">
    <h3>Phaser</h3>
    <i>from the lecture by Thomas Palef</i>

<p><a href="http://phaser.io">Phaser</a> is an open source framework for building browser based games. See also <a href="http://www.lessmilk.com/">the games</a> that Thomas built.</p>
</div>

<div class="gloss js">
    <h3>Plato</h3>
    <i>from the lecture by Kyle Simpson</i>

<p><a href="https://github.com/es-analysis/plato">Plato</a> is a JavaScript source code visualization, static analysis, and complexity tool. And yes, it has a <a href="https://www.npmjs.com/package/grunt-plato">grunt plugin</a>.</p>
</div>

<div class="gloss js">
    <h3>ServiceWorker</h3>
    <i>from the lecture by Paul Kinlan</i>

<p>A ServiceWorker is a type of JavaScript Worker. A Worker is a solution to run background processes by spawning isolated threads. Service Workers run separately from a web page (just like an OS level service) but still runs in the browser. It can be used to improve the off-line experience of an app. See <a href="http://www.html5rocks.com/en/tutorials/service-worker/introduction/">this introduction</a> and <a href="https://github.com/slightlyoff/ServiceWorker">this implementation</a>.</p>
</div>

<div class="gloss css">
    <h3>Shadow DOM</h3>
    <i>from the lecture by Nicholas Gallagher</i>

<p>The Shadow DOM lets you manipulate parts of an HTML document that are normally invisibly encapsulated within another HTML element. An example is styling the controls (play, rewind) of the video tag with CSS. This <a href="http://webcomponents.org/articles/introduction-to-shadow-dom/">introduction</a> shows some examples. It's part of webcomponents, allowing you to create custom components and hiding the contents in a shadow DOM. It also enables scoping of styles. I also made an <a href="https://jsfiddle.net/mdvanes/oy8dxpka/">example in this fiddle</a>.</p>
</div>

<div class="gloss tool">
    <h3>Spritesmith</h3>
    <i>from the lecture by Dave Olson</i>

<p><a href="https://github.com/Ensighten/grunt-spritesmith">Grunt plugin</a> to create a spritesheet. I use Compass' magic sprites to do this in Sass, but it might be useful if you want to use libsass or LESS.</p>
</div>

<div class="gloss css">
    <h3>SUIT CSS</h3>
    <i>from the lecture by Nicholas Gallagher</i>

<p><a href="https://suitcss.github.io/">SUIT CSS</a> is a reliable and testable styling methodology for component-based UI development. It offers a.o. a naming convention, a pre-processor and CSS testing.</p>
</div>

<div class="gloss js">
    <h3>SVGInjector</h3>
    <i>from the lecture by Sara Soueidan</i>

<p>A <a href="https://github.com/iconic/SVGInjector">library</a> for inlining SVGs with client-side JavaScript. This combines the benefits of storing the resource in an external file with the benefit of using CSS (normally only for inline SVGs).</p>
</div>

<div class="gloss js">
    <h3>Traceur</h3>
    <i>from the lecture by Kyle Simpson</i>

<p>The <a href="https://github.com/google/traceur-compiler">Traceur compiler</a> lets you write in ES6 syntax and compile it back to ES5 so you can use ES6 features in today's browers. According to <a href="https://kangax.github.io/compat-table/es6/">the ES6 compatibility table</a> it supports 63% of ES6 features at this moment.</p>
</div>

<div class="gloss css">
    <h3>Ultimate CSS Gradient Generator</h3>
    <i>from the lecture by Nathan Ford</i>

<p>CSS generator for CSS 3 linear and radial gradients at <a href="http://www.colorzilla.com/gradient-editor/">http://www.colorzilla.com/gradient-editor/</a>.</p>
</div>

<div class="gloss js">
    <h3>Webpack Module Bundler</h3>
    <i>from the lecture by Nicholas Gallagher</i>

<p><a href="http://webpack.github.io/">Webpack Module Bundler</a> is an alternative to <a href="http://requirejs.org/">RequireJS</a> that isn't necessarily optimized for async loading like RequireJS but supports the much simpeler CommonJS syntax.</p>
</div>

<div class="gloss tool">
    <h3>WebPageTest</h3>
    <i>from the lecture by Dave Olson</i>

<p><a href="http://www.webpagetest.org">Very powerful tool</a> for testing performance of sites. The Chrome plugin <a href="https://chrome.google.com/webstore/detail/spof-o-matic/plikhggfbplemddobondkeogomgoodeg?hl=en-US">SPOF-O-Matic</a> helps to test how sites react when external CDNs are unavailable.</p>
</div>

<div class="gloss js">
    <h3>WebRTC</h3>
    <i>from the lecture by Swetank Dixit</i>

<p>Peer-to-peer connections in the browser, supported in <a href="http://caniuse.com/#feat=rtcpeerconnection">FF and Chrome</a> at the moment. Using the data channels, it was even possible to create a client-side streaming torrent client.</p>
</div>

<div class="gloss css">
    <h3>will-change</h3>
    <i>from the lecture by Rachel Nabors</i>

<p>The CSS property "will-change" is a new feature (Chrome 36, FF 36) that can inform the browser beforehand that certain CSS animation may be applied to an element, helping with optimization. See the <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/will-change">docs</a> or this in-depth <a href="http://www.sitepoint.com/introduction-css-will-change-property/">article on Sitepoint</a>.</p>
</div>

<div class="gloss js">
    <h3>Xibalba</h3>
    <i>from the lecture by Dominic Szablewski.</i>

<p>A web based 3D shooter by <a href="http://phoboslab.org/">phoboslab.org</a> build with the <a href="http://impactjs.com/">Impact</a> Game Engine. Play it <a href="http://phoboslab.org/xibalba/">here</a>. It now even offers <a href="http://phoboslab.org/log/2015/02/xibalba-webvr">WebVR</a> support.</p>
</div>

<div class="gloss tool">
    <h3>Yeast</h3>
    <i>from the lecture by Arnout Kazemier</i>

<p>"Tiny but linear growing unique id generator." A function to create better cachebusting variables, now formalized as <a href="https://github.com/unshiftio/yeast">an NPM package</a>.</p>
</div>
