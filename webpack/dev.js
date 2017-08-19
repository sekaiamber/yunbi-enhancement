// ==UserScript==
// @name         Yunbi test
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yunbi.com/markets/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  $.getScript("https://localhost:8080/index.js");
  var head = document.getElementsByTagName('HEAD').item(0);
  var style = document.createElement('link');
  style.href = 'https://localhost:8080/index.css';
  style.rel = 'stylesheet';
  style.type = 'text/css';
  head.appendChild(style);
  // Your code here...
})();