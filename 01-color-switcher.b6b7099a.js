!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var a={};function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t,n){t&&l(e.prototype,t);n&&l(e,n);return e};var u=o("hKHmD");(new(function(){"use strict";function t(){e(i)(this,t),e(u)(this,"DELAY",1e3),this.intervalID=null,this.body=document.querySelector("body"),this.startBtn=document.querySelector("button[data-start]"),this.stopBtn=document.querySelector("button[data-stop]"),this.stopBtn.disabled=!0}return e(a)(t,[{key:"getRandomHexColor",value:function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}},{key:"interval",value:function(){var e=this;this.intervalID=setInterval((function(){e.body.style.backgroundColor=e.getRandomHexColor()}),this.DELAY)}},{key:"start",value:function(){var e=this;this.startBtn.addEventListener("click",(function(){e.interval(),e.startBtn.disabled=!0,e.stopBtn.disabled=!1})),this.stop()}},{key:"stop",value:function(){var e=this;this.stopBtn.addEventListener("click",(function(){clearInterval(e.intervalID),e.startBtn.disabled=!1,e.stopBtn.disabled=!0,e.body.style.backgroundColor="#ffffff"}))}}]),t}())).start()}();
//# sourceMappingURL=01-color-switcher.b6b7099a.js.map
