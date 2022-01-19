/*! For license information please see chat-widget.js.LICENSE.txt  3*/
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ChatWidget=t():e.ChatWidget=t()}(self,(function(){return(()=>{var e={472:e=>{e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://cdn.smooch.io/",n(n.s=6)}([function(e,t,n){var o=n(3);e.exports=new o},function(e,t){e.exports={isFunction:function(e){return"function"==typeof e},isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},each:function(e,t){for(var n=0,o=e.length;n<o&&!1!==t(e[n],n);n++);}}},function(e,t,n){e.exports={iframe:"_2ChX4GFAl1-UBiWknYZyEQ",displayButton:"avcHn2VQJenBvoR5hilPG",widgetClosed:"_3fQbteJd3oQu4il3LpMKkX","iframe-button-close-lg":"_3FxKeTOOgcsFroUq6se9N7","iframe-button-close-md":"_1GmqPtlICLsWVMg2Kpdx_0","iframe-button-close-sm":"_36mHeCXpAKdhEsuuD5g8oV","iframe-button-close-xs":"_1ZWQW0p6AI6UGwBFbdBf9M",displayTab:"_3dtqBiGeC8k3yop4A-9Lwm",widgetOpened:"_2TELtk5nDKlQudVSivRjpt",widgetEmbedded:"_24n-ftZlG3wDvoWFR8zUnn"}},function(e,t,n){var o=n(4),i=n(1),a=i.each,r=i.isFunction,s=i.isArray;function c(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}c.prototype={constructor:c,register:function(e,t,n){var i=this.queries,c=n&&this.browserIsIncapable;return i[e]||(i[e]=new o(e,c)),r(t)&&(t={match:t}),s(t)||(t=[t]),a(t,(function(t){r(t)&&(t={match:t}),i[e].addHandler(t)})),this},unregister:function(e,t){var n=this.queries[e];return n&&(t?n.removeHandler(t):(n.clear(),delete this.queries[e])),this}},e.exports=c},function(e,t,n){var o=n(5),i=n(1).each;function a(e,t){this.query=e,this.isUnconditional=t,this.handlers=[],this.mql=window.matchMedia(e);var n=this;this.listener=function(e){n.mql=e.currentTarget||e,n.assess()},this.mql.addListener(this.listener)}a.prototype={constuctor:a,addHandler:function(e){var t=new o(e);this.handlers.push(t),this.matches()&&t.on()},removeHandler:function(e){var t=this.handlers;i(t,(function(n,o){if(n.equals(e))return n.destroy(),!t.splice(o,1)}))},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){i(this.handlers,(function(e){e.destroy()})),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var e=this.matches()?"on":"off";i(this.handlers,(function(t){t[e]()}))}},e.exports=a},function(e,t){function n(e){this.options=e,!e.deferSetup&&this.setup()}n.prototype={constructor:n,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},e.exports=n},function(e,t,n){"use strict";n.r(t);var o=n(2),i=n.n(o);function a(e){"complete"!==document.readyState&&"loaded"!==document.readyState&&"interactive"!==document.readyState||!document.body?document.addEventListener("DOMContentLoaded",(function(){e()})):e()}function r(e){var t=["screen"];return e.minHeight&&t.push("(min-height: ".concat(e.minHeight,"px)")),e.maxHeight&&t.push("(max-height: ".concat(e.maxHeight,"px)")),e.minWidth&&t.push("(min-width: ".concat(e.minWidth,"px)")),e.maxWidth&&t.push("(max-width: ".concat(e.maxWidth,"px)")),t.join(" and ")}var s=n(0),c=n.n(s),d={lg:{minHeight:668,minWidth:1200},md:[{minHeight:508,minWidth:768,maxWidth:1199},{minHeight:508,maxHeight:667,minWidth:768}],sm:{maxHeight:507,minWidth:768},xs:{maxWidth:767}},l=["lg","md","sm","xs"];function u(e){for(var t=0;t<l.length;t++){var n=l[t],o=d[n];"[object Array]"!==Object.prototype.toString.call(o)&&(o=[o]);for(var i=0;i<o.length;i++)e({rule:o[i],size:n})}}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function m(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var p,g,y,v,b,w={},x=[],C=[],S=/lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent),I=/PhantomJS/.test(navigator.userAgent)&&!0,U=["init","login","on","off","logout","sendMessage","triggerPostback","createConversation","updateConversation","updateUser","getDisplayedConversation","getConversationById","getConversations","getMoreConversations","hasMoreConversations","getUser","open","close","isOpened","loadConversation","setDelegate","markAllAsRead","showNotificationChannelPrompt","setPredefinedMessage","startTyping","stopTyping"];if(S){var j=document.createElement("a");j.href="https://smooch.io/live-web-chat/?utm_source=widget",j.text="Powered by Zendesk Sunshine",a((function(){document.body.appendChild(j)}))}function O(){var e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://cdn.smooch.io/smooch.5.3.14.css",document.body.appendChild(e)}function A(e){var t;window.__onWebMessengerFrameReady__=function(){},p=e,y||(t=g,u((function(e){var n=e.rule,o=e.size;c.a.register(r(n),(function(){t.contentWindow.postMessage({type:"sizeChange",value:o},"".concat(location.protocol,"//").concat(location.host))}))})));for(var n=U[0],o=0;o<U.length;n=U[++o])w[n]=p[n];if(C){for(var i=C[0],a=0;a<C.length;i=C[++a]){var s;(s=p).on.apply(s,m(i.args))}C=void 0}if(b){var d,l=(d=p).init.apply(d,m(b));b=void 0;for(var f=x[0],h=0;h<x.length;f=x[++h])l="then"===f.type?l.then(f.next):l.catch(f.next);x=[]}}var E=function(e){return e.contentWindow&&e.contentWindow.document};function _(){if(!g){var e=null,t=!1;(g=document.createElement("iframe")).id="web-messenger-container",g.frameBorder=0,g.allowFullscreen=!0,g.allowTransparency=!0,g.scrolling="no",g.className=i.a.iframe;var n=function(){t=!0,clearInterval(e),delete g.onload;var n=E(g);n.open(),n.write("\n                    <!DOCTYPE html>\n                    <html>\n                        <head>\n                            ".concat("",'\n                            <link rel="stylesheet" href="').concat("https://cdn.smooch.io/frame.5.3.14.css",'" type="text/css" />\n                            <script src="').concat("https://cdn.smooch.io/frame.5.3.14.min.js",'" async crossorigin="anonymous"><\/script>\n                        </head>\n                        <body>\n                            <div id="mount"></div>\n                        </body>\n                    </html>\n                    ')),n.close()};e=setInterval((function(){var e=E(g);t||!e||"complete"!==e.readyState&&"interactive"!==e.readyState||n()}),1e3),g.onload=function(){t||n()}}y?v&&(v.appendChild(g),v=void 0):document.body.appendChild(g)}var W={VERSION:"5.3.14",on:function(){C||(C=[]);for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];C.push({args:t})},init:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];b=t,y=t.length>0&&!!t[0].embedded,S||I||a((function(){O(),_()}));var o={then:function(e){return x.push({type:"then",next:e}),o},catch:function(e){return x.push({type:"catch",next:e}),o}};return o},render:function(e){g?e.appendChild(g):v=e},destroy:function(){p&&(p.destroy(),g.remove?g.remove():g.parentNode.removeChild(g),u((function(e){var t=e.rule;c.a.unregister(r(t))})),H())}};function H(){if(!document.getElementById("web-messenger-container")){p=void 0,g=void 0,window.__onWebMessengerFrameReady__=A;for(var e=U[0],t=0;t<U.length;e=U[++t])w[e]&&delete w[e];f(w,W)}}H(),t.default=w}])},498:(e,t,n)=>{"use strict";n.r(t),n.d(t,{close:()=>c,destroy:()=>l,init:()=>r,isOpened:()=>s,open:()=>d});var o=n(472);const i=JSON.parse('{"z":{"ticketmaster.com":{"en-us":{"integrationId":"61684da2c9fd4b00df540ad6","canUserSeeConversationList":false,"locale":"en-US","soundNotificationEnabled":false,"languageFile":"en-US.json","menuItems":{"imageUpload":false,"fileUpload":false,"shareLocation":false},"fixedHeader":false}},"ticketmaster.co.uk":{"en-gb":{"integrationId":"Use co.uk domain integrationId","canUserSeeConversationList":false,"locale":"en-GB","soundNotificationEnabled":false,"languageFile":"en-GB.json","menuItems":{"imageUpload":false,"fileUpload":false,"shareLocation":false},"fixedHeader":false}},"ticketmaster.ca":{"fr-ca":{"integrationId":"Use fr-ca domain integrationId","canUserSeeConversationList":false,"locale":"fr-CA","soundNotificationEnabled":false,"languageFile":"fr-CA.json","menuItems":{"imageUpload":false,"fileUpload":false,"shareLocation":false},"fixedHeader":false},"en-ca":{"integrationId":"Use en-CA integrationId","canUserSeeConversationList":false,"locale":"en-CA","soundNotificationEnabled":false,"languageFile":"en-CA.json","menuItems":{"imageUpload":false,"fileUpload":false,"shareLocation":false},"fixedHeader":false}},"my-ltmus.aws.ticketmaster.net":{"fr-ca":{"integrationId":"Use fr-ca domain integrationId","canUserSeeConversationList":false,"locale":"fr-CA","soundNotificationEnabled":false,"languageFile":"fr-CA.json","menuItems":{"imageUpload":false,"fileUpload":false,"shareLocation":false},"fixedHeader":false},"en-us":{"integrationId":"61684da2c9fd4b00df540ad6","canUserSeeConversationList":false,"soundNotificationEnabled":false,"locale":"en-US","menuItems":{"imageUpload":false,"fileUpload":false,"shareLocation":false},"fixedHeader":false}},"127.0.0.1":{"en-us":{"integrationId":"61684da2c9fd4b00df540ad6","canUserSeeConversationList":false,"soundNotificationEnabled":false,"locale":"en-US","menuItems":{"imageUpload":false,"fileUpload":false,"shareLocation":false},"fixedHeader":false}}}}'),a=o.default;function r({jwtToken:e,email:t,...n}){const o=e=>[...e].forEach((e=>e.remove())),r=window.location.hostname,s=i.z[r][n.language];console.log("🚀 ~ file: chat-widget.js ~ line 18 ~ init ~ typeof smooch.isOpened",typeof a.isOpened),void 0===a.isOpened||a.isOpened()?(a.on("widget:opened",(()=>{const e=document.getElementById("web-messenger-container");e.style.visibility="initial",e.contentWindow.document.getElementsByClassName("logo").length&&(o(e.contentWindow.document.getElementsByClassName("logo")),o(e.contentWindow.document.getElementsByClassName("header-icon")))})),a.on("widget:closed",(()=>{const e=document.getElementById("web-messenger-container");setTimeout((()=>{e.style.visibility="hidden"}),350)})),a.init({integrationId:s.integrationId,canUserSeeConversationList:!1,jwt:e,externalId:t,locale:s.locale,soundNotificationEnabled:s.soundNotificationEnabled,menuItems:s.menuItems,buttonWidth:"0",buttonHeight:"0",fixedHeader:!1}).then((()=>{a.getConversations().find((e=>{if(e.metadata.orderNumber===n.orderNumber)return a.loadConversation(e.id),a.open(),!0}))||a.createConversation({displayName:n.orderNumber,metadata:{...n}}).then((e=>{a.loadConversation(e.id),a.open()}))}))):a.open()}function s(){return a.isOpened()}function c(){return a.close()}function d(){return a.open()}function l(){return a.destroy()}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}return n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(498)})()}));
