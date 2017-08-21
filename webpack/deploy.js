// ==UserScript==
// @name         Yunbi Enhancement
// @namespace    http://isekai.me/
// @version      1.1
// @description  Yunbi market enhancement
// @author       Sekai
// @match        https://yunbi.com/markets/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  var date = new Date();
  var head = document.getElementsByTagName('HEAD').item(0);
  var style = document.createElement('link');
  style.href = 'https://sekaiamber.github.io/yunbi-enhancement/dist/index.css' + '?_=' + date.getMonth() + date.getDate();
  style.rel = 'stylesheet';
  style.type = 'text/css';
  head.appendChild(style);
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = 'https://sekaiamber.github.io/yunbi-enhancement/dist/index.js' + '?_=' + date.getMonth() + date.getDate();
  head.appendChild(script);
})();