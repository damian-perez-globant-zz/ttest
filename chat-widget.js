(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ChatWidget"] = factory();
	else
		root["ChatWidget"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/smooch/lib/index.js":
/*!******************************************!*\
  !*** ./node_modules/smooch/lib/index.js ***!
  \******************************************/
/***/ ((module) => {

/*!
 * smooch 5.3.14 
 * License : https://smooch.io/terms
 * 
 * All files located in the node_modules and external directories are
 * externally maintained libraries used by this software which have their
 * own licenses; we recommend you read them, as their terms may differ from
 * the terms above.
 * 
 */
module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="https://cdn.smooch.io/",n(n.s=6)}([function(t,e,n){var o=n(3);t.exports=new o},function(t,e){t.exports={isFunction:function(t){return"function"==typeof t},isArray:function(t){return"[object Array]"===Object.prototype.toString.apply(t)},each:function(t,e){for(var n=0,o=t.length;n<o&&!1!==e(t[n],n);n++);}}},function(t,e,n){t.exports={iframe:"_2ChX4GFAl1-UBiWknYZyEQ",displayButton:"avcHn2VQJenBvoR5hilPG",widgetClosed:"_3fQbteJd3oQu4il3LpMKkX","iframe-button-close-lg":"_3FxKeTOOgcsFroUq6se9N7","iframe-button-close-md":"_1GmqPtlICLsWVMg2Kpdx_0","iframe-button-close-sm":"_36mHeCXpAKdhEsuuD5g8oV","iframe-button-close-xs":"_1ZWQW0p6AI6UGwBFbdBf9M",displayTab:"_3dtqBiGeC8k3yop4A-9Lwm",widgetOpened:"_2TELtk5nDKlQudVSivRjpt",widgetEmbedded:"_24n-ftZlG3wDvoWFR8zUnn"}},function(t,e,n){var o=n(4),r=n(1),i=r.each,a=r.isFunction,s=r.isArray;function c(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}c.prototype={constructor:c,register:function(t,e,n){var r=this.queries,c=n&&this.browserIsIncapable;return r[t]||(r[t]=new o(t,c)),a(e)&&(e={match:e}),s(e)||(e=[e]),i(e,(function(e){a(e)&&(e={match:e}),r[t].addHandler(e)})),this},unregister:function(t,e){var n=this.queries[t];return n&&(e?n.removeHandler(e):(n.clear(),delete this.queries[t])),this}},t.exports=c},function(t,e,n){var o=n(5),r=n(1).each;function i(t,e){this.query=t,this.isUnconditional=e,this.handlers=[],this.mql=window.matchMedia(t);var n=this;this.listener=function(t){n.mql=t.currentTarget||t,n.assess()},this.mql.addListener(this.listener)}i.prototype={constuctor:i,addHandler:function(t){var e=new o(t);this.handlers.push(e),this.matches()&&e.on()},removeHandler:function(t){var e=this.handlers;r(e,(function(n,o){if(n.equals(t))return n.destroy(),!e.splice(o,1)}))},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){r(this.handlers,(function(t){t.destroy()})),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";r(this.handlers,(function(e){e[t]()}))}},t.exports=i},function(t,e){function n(t){this.options=t,!t.deferSetup&&this.setup()}n.prototype={constructor:n,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},t.exports=n},function(t,e,n){"use strict";n.r(e);var o=n(2),r=n.n(o);function i(t){"complete"!==document.readyState&&"loaded"!==document.readyState&&"interactive"!==document.readyState||!document.body?document.addEventListener("DOMContentLoaded",(function(){t()})):t()}function a(t){var e=["screen"];return t.minHeight&&e.push("(min-height: ".concat(t.minHeight,"px)")),t.maxHeight&&e.push("(max-height: ".concat(t.maxHeight,"px)")),t.minWidth&&e.push("(min-width: ".concat(t.minWidth,"px)")),t.maxWidth&&e.push("(max-width: ".concat(t.maxWidth,"px)")),e.join(" and ")}var s=n(0),c=n.n(s),u={lg:{minHeight:668,minWidth:1200},md:[{minHeight:508,minWidth:768,maxWidth:1199},{minHeight:508,maxHeight:667,minWidth:768}],sm:{maxHeight:507,minWidth:768},xs:{maxWidth:767}},d=["lg","md","sm","xs"];function l(t){for(var e=0;e<d.length;e++){var n=d[e],o=u[n];"[object Array]"!==Object.prototype.toString.call(o)&&(o=[o]);for(var r=0;r<o.length;r++){t({rule:o[r],size:n})}}}function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function f(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var m,y,v,g,b,w={},x=[],_=[],C=/lebo|awle|pide|obo|rawli|dsbo/i.test(navigator.userAgent),O=/PhantomJS/.test(navigator.userAgent)&&!0,S=["init","login","on","off","logout","sendMessage","triggerPostback","createConversation","updateConversation","updateUser","getDisplayedConversation","getConversationById","getConversations","getMoreConversations","hasMoreConversations","getUser","open","close","isOpened","loadConversation","setDelegate","markAllAsRead","showNotificationChannelPrompt","setPredefinedMessage","startTyping","stopTyping"];if(C){var A=document.createElement("a");A.href="https://smooch.io/live-web-chat/?utm_source=widget",A.text="Powered by Zendesk Sunshine",i((function(){document.body.appendChild(A)}))}function j(){var t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.href="https://cdn.smooch.io/smooch.5.3.14.css",document.body.appendChild(t)}function M(t){var e;window.__onWebMessengerFrameReady__=function(){},m=t,v||(e=y,l((function(t){var n=t.rule,o=t.size;c.a.register(a(n),(function(){e.contentWindow.postMessage({type:"sizeChange",value:o},"".concat(location.protocol,"//").concat(location.host))}))})));for(var n=S[0],o=0;o<S.length;n=S[++o])w[n]=m[n];if(_){for(var r=_[0],i=0;i<_.length;r=_[++i]){var s;(s=m).on.apply(s,f(r.args))}_=void 0}if(b){var u,d=(u=m).init.apply(u,f(b));b=void 0;for(var h=x[0],p=0;p<x.length;h=x[++p])d="then"===h.type?d.then(h.next):d.catch(h.next);x=[]}}var W=function(t){return t.contentWindow&&t.contentWindow.document};function q(){if(!y){var t=null,e=!1;(y=document.createElement("iframe")).id="web-messenger-container",y.frameBorder=0,y.allowFullscreen=!0,y.allowTransparency=!0,y.scrolling="no",y.className=r.a.iframe;var n=function(){e=!0,clearInterval(t),delete y.onload;var n=W(y);n.open(),n.write("\n                    <!DOCTYPE html>\n                    <html>\n                        <head>\n                            ".concat("",'\n                            <link rel="stylesheet" href="').concat("https://cdn.smooch.io/frame.5.3.14.css",'" type="text/css" />\n                            <script src="').concat("https://cdn.smooch.io/frame.5.3.14.min.js",'" async crossorigin="anonymous"><\/script>\n                        </head>\n                        <body>\n                            <div id="mount"></div>\n                        </body>\n                    </html>\n                    ')),n.close()};t=setInterval((function(){var t=W(y);e||!t||"complete"!==t.readyState&&"interactive"!==t.readyState||n()}),1e3),y.onload=function(){e||n()}}v?g&&(g.appendChild(y),g=void 0):document.body.appendChild(y)}var H={VERSION:"5.3.14",on:function(){_||(_=[]);for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];_.push({args:e})},init:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];b=e,v=e.length>0&&!!e[0].embedded,C||O||i((function(){j(),q()}));var o={then:function(t){return x.push({type:"then",next:t}),o},catch:function(t){return x.push({type:"catch",next:t}),o}};return o},render:function(t){y?t.appendChild(y):g=t},destroy:function(){m&&(m.destroy(),y.remove?y.remove():y.parentNode.removeChild(y),l((function(t){var e=t.rule;c.a.unregister(a(e))})),I())}};function I(){if(!document.getElementById("web-messenger-container")){m=void 0,y=void 0,window.__onWebMessengerFrameReady__=M;for(var t=S[0],e=0;e<S.length;t=S[++e])w[t]&&delete w[t];h(w,H)}}I();e.default=w}]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/chat-widget.js":
/*!****************************!*\
  !*** ./src/chat-widget.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "isOpened": () => (/* binding */ isOpened),
/* harmony export */   "close": () => (/* binding */ close),
/* harmony export */   "open": () => (/* binding */ open),
/* harmony export */   "destroy": () => (/* binding */ destroy)
/* harmony export */ });
/* harmony import */ var smooch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smooch */ "./node_modules/smooch/lib/index.js");
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/config.json */ "./src/config/config.json");



//Smooch instance left outside of the init function so that it can be used in the chat widget
const smooch = smooch__WEBPACK_IMPORTED_MODULE_0__["default"];

function init({ jwtToken, email, ...data }) {

  const removeElements = (elms) => [...elms].forEach(el => el.remove());

  const domain = window.location.hostname;
  const domainConfigs = _config_config_json__WEBPACK_IMPORTED_MODULE_1__.domains[domain][data.language];
  console.log("🚀 ~ file: chat-widget.js ~ line 13 ~ init ~ domainConfigs", domainConfigs)

  //If there is an active instance of the chat widget already, open it
  if (typeof smooch.isOpened !== 'undefined' && !smooch.isOpened()) {
    smooch.open();
    return;
  }

  smooch.on('widget:opened', () => {
    const chatWidgetIFrame = document.getElementById('web-messenger-container');
    chatWidgetIFrame.style.visibility = 'initial';

    if (chatWidgetIFrame.contentWindow.document.getElementsByClassName("logo").length) {
      removeElements(chatWidgetIFrame.contentWindow.document.getElementsByClassName("logo"));
      removeElements(chatWidgetIFrame.contentWindow.document.getElementsByClassName("header-icon"));
    }
  });
  smooch.on('widget:closed', () => {
    const chatWidgetIFrame = document.getElementById('web-messenger-container');
    setTimeout(() => {
      chatWidgetIFrame.style.visibility = 'hidden';
    }, 350);
  });

  smooch.init({
    integrationId: domainConfigs.integrationId,
    canUserSeeConversationList: false,
    jwt: jwtToken,
    externalId: email,
    locale: domainConfigs.locale,
    soundNotificationEnabled: domainConfigs.soundNotificationEnabled,
    menuItems: domainConfigs.menuItems,
    //Chat Widget default button is hidden by default, 'Contact Us' button from PP will replace it
    buttonWidth: '0',
    buttonHeight: '0',
    fixedHeader: false,
  }).then(() => {
    const existingConversation = smooch.getConversations()
      .find((conversation) => {
        if (conversation.metadata.orderNumber === data.orderNumber) {
          smooch.loadConversation(conversation.id);
          smooch.open();
          return true;
        }
      });

    if (!existingConversation) {
      smooch.createConversation({
        displayName: data.orderNumber,
        metadata: {
          ...data,
        }
      }).then((conversation) => {
        smooch.loadConversation(conversation.id);
        smooch.open();
      });
    }
  });
}

function isOpened() {
  return smooch.isOpened();
}
function close() {
  return smooch.close();
}
function open() {
  return smooch.open();
}

/*
This method is called every time the users goes from the orders details page
 to the order history page. When the user clicks on a new order details page and then on the 
 'contact us' button, the chat widget will call the init() method
*/

function destroy() {
  return smooch.destroy();

}

/***/ }),

/***/ "./src/config/config.json":
/*!********************************!*\
  !*** ./src/config/config.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"domains":{"ticketmaster.com":{"en-us":{"integrationId":"61684da2c9fd4b00df540ad6","canUserSeeConversationList":false,"locale":"en-US","soundNotificationEnabled":false,"languageFile":"en-US.json","menuItems":{"imageUpload":false,"fileUpload":false,"shareLocation":false},"fixedHeader":false}},"ticketmaster.co.uk":{"en-gb":{"integrationId":"Use co.uk domain integrationId","canUserSeeConversationList":false,"locale":"en-GB","soundNotificationEnabled":false,"languageFile":"en-GB.json","menuItems":{"imageUpload":false,"fileUpload":false,"shareLocation":false},"fixedHeader":false}},"ticketmaster.ca":{"fr-ca":{"integrationId":"Use fr-ca domain integrationId","canUserSeeConversationList":false,"locale":"fr-CA","soundNotificationEnabled":false,"languageFile":"fr-CA.json","menuItems":{"imageUpload":false,"fileUpload":false,"shareLocation":false},"fixedHeader":false},"en-ca":{"integrationId":"Use en-CA integrationId","canUserSeeConversationList":false,"locale":"en-CA","soundNotificationEnabled":false,"languageFile":"en-CA.json","menuItems":{"imageUpload":false,"fileUpload":false,"shareLocation":false},"fixedHeader":false}},"127.0.0.1":{"en-us":{"integrationId":"61684da2c9fd4b00df540ad6","canUserSeeConversationList":false,"soundNotificationEnabled":false,"locale":"en-US","menuItems":{"imageUpload":false,"fileUpload":false,"shareLocation":false},"fixedHeader":false}}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* reexport safe */ _chat_widget_js__WEBPACK_IMPORTED_MODULE_0__.init),
/* harmony export */   "open": () => (/* reexport safe */ _chat_widget_js__WEBPACK_IMPORTED_MODULE_0__.open),
/* harmony export */   "close": () => (/* reexport safe */ _chat_widget_js__WEBPACK_IMPORTED_MODULE_0__.close),
/* harmony export */   "destroy": () => (/* reexport safe */ _chat_widget_js__WEBPACK_IMPORTED_MODULE_0__.destroy),
/* harmony export */   "isOpened": () => (/* reexport safe */ _chat_widget_js__WEBPACK_IMPORTED_MODULE_0__.isOpened)
/* harmony export */ });
/* harmony import */ var _chat_widget_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-widget.js */ "./src/chat-widget.js");

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V2lkZ2V0L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9DaGF0V2lkZ2V0Ly4vbm9kZV9tb2R1bGVzL3Ntb29jaC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQ2hhdFdpZGdldC8uL3NyYy9jaGF0LXdpZGdldC5qcyIsIndlYnBhY2s6Ly9DaGF0V2lkZ2V0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0NoYXRXaWRnZXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0NoYXRXaWRnZXQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9DaGF0V2lkZ2V0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQ2hhdFdpZGdldC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDaGF0V2lkZ2V0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkNoYXRXaWRnZXRcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIvKiFcbiAqIHNtb29jaCA1LjMuMTQgXG4gKiBMaWNlbnNlIDogaHR0cHM6Ly9zbW9vY2guaW8vdGVybXNcbiAqIFxuICogQWxsIGZpbGVzIGxvY2F0ZWQgaW4gdGhlIG5vZGVfbW9kdWxlcyBhbmQgZXh0ZXJuYWwgZGlyZWN0b3JpZXMgYXJlXG4gKiBleHRlcm5hbGx5IG1haW50YWluZWQgbGlicmFyaWVzIHVzZWQgYnkgdGhpcyBzb2Z0d2FyZSB3aGljaCBoYXZlIHRoZWlyXG4gKiBvd24gbGljZW5zZXM7IHdlIHJlY29tbWVuZCB5b3UgcmVhZCB0aGVtLCBhcyB0aGVpciB0ZXJtcyBtYXkgZGlmZmVyIGZyb21cbiAqIHRoZSB0ZXJtcyBhYm92ZS5cbiAqIFxuICovXG5tb2R1bGUuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBuKG8pe2lmKGVbb10pcmV0dXJuIGVbb10uZXhwb3J0czt2YXIgcj1lW29dPXtpOm8sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtvXS5jYWxsKHIuZXhwb3J0cyxyLHIuZXhwb3J0cyxuKSxyLmw9ITAsci5leHBvcnRzfXJldHVybiBuLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLG8pe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpvfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIG89T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIobyksT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciByIGluIHQpbi5kKG8scixmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLHIpKTtyZXR1cm4gb30sbi5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQoZSxcImFcIixlKSxlfSxuLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG4ucD1cImh0dHBzOi8vY2RuLnNtb29jaC5pby9cIixuKG4ucz02KX0oW2Z1bmN0aW9uKHQsZSxuKXt2YXIgbz1uKDMpO3QuZXhwb3J0cz1uZXcgb30sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9e2lzRnVuY3Rpb246ZnVuY3Rpb24odCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdH0saXNBcnJheTpmdW5jdGlvbih0KXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KHQpfSxlYWNoOmZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBuPTAsbz10Lmxlbmd0aDtuPG8mJiExIT09ZSh0W25dLG4pO24rKyk7fX19LGZ1bmN0aW9uKHQsZSxuKXt0LmV4cG9ydHM9e2lmcmFtZTpcIl8yQ2hYNEdGQWwxLVVCaVdrbllaeUVRXCIsZGlzcGxheUJ1dHRvbjpcImF2Y0huMlZRSmVuQnZvUjVoaWxQR1wiLHdpZGdldENsb3NlZDpcIl8zZlFidGVKZDNvUXU0aWwzTHBNS2tYXCIsXCJpZnJhbWUtYnV0dG9uLWNsb3NlLWxnXCI6XCJfM0Z4S2VUT09nY3NGcm9VcTZzZTlON1wiLFwiaWZyYW1lLWJ1dHRvbi1jbG9zZS1tZFwiOlwiXzFHbXFQdGxJQ0xzV1ZNZzJLcGR4XzBcIixcImlmcmFtZS1idXR0b24tY2xvc2Utc21cIjpcIl8zNm1IZUNYcEFLZGhFc3V1RDVnOG9WXCIsXCJpZnJhbWUtYnV0dG9uLWNsb3NlLXhzXCI6XCJfMVpXUVcwcDZBSTZVR3dCRmJkQmY5TVwiLGRpc3BsYXlUYWI6XCJfM2R0cUJpR2VDOGszeW9wNEEtOUx3bVwiLHdpZGdldE9wZW5lZDpcIl8yVEVMdGs1bkRLbFF1ZFZTaXZSanB0XCIsd2lkZ2V0RW1iZWRkZWQ6XCJfMjRuLWZ0WmxHM3dEdm9XRlI4elVublwifX0sZnVuY3Rpb24odCxlLG4pe3ZhciBvPW4oNCkscj1uKDEpLGk9ci5lYWNoLGE9ci5pc0Z1bmN0aW9uLHM9ci5pc0FycmF5O2Z1bmN0aW9uIGMoKXtpZighd2luZG93Lm1hdGNoTWVkaWEpdGhyb3cgbmV3IEVycm9yKFwibWF0Y2hNZWRpYSBub3QgcHJlc2VudCwgbGVnYWN5IGJyb3dzZXJzIHJlcXVpcmUgYSBwb2x5ZmlsbFwiKTt0aGlzLnF1ZXJpZXM9e30sdGhpcy5icm93c2VySXNJbmNhcGFibGU9IXdpbmRvdy5tYXRjaE1lZGlhKFwib25seSBhbGxcIikubWF0Y2hlc31jLnByb3RvdHlwZT17Y29uc3RydWN0b3I6YyxyZWdpc3RlcjpmdW5jdGlvbih0LGUsbil7dmFyIHI9dGhpcy5xdWVyaWVzLGM9biYmdGhpcy5icm93c2VySXNJbmNhcGFibGU7cmV0dXJuIHJbdF18fChyW3RdPW5ldyBvKHQsYykpLGEoZSkmJihlPXttYXRjaDplfSkscyhlKXx8KGU9W2VdKSxpKGUsKGZ1bmN0aW9uKGUpe2EoZSkmJihlPXttYXRjaDplfSksclt0XS5hZGRIYW5kbGVyKGUpfSkpLHRoaXN9LHVucmVnaXN0ZXI6ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLnF1ZXJpZXNbdF07cmV0dXJuIG4mJihlP24ucmVtb3ZlSGFuZGxlcihlKToobi5jbGVhcigpLGRlbGV0ZSB0aGlzLnF1ZXJpZXNbdF0pKSx0aGlzfX0sdC5leHBvcnRzPWN9LGZ1bmN0aW9uKHQsZSxuKXt2YXIgbz1uKDUpLHI9bigxKS5lYWNoO2Z1bmN0aW9uIGkodCxlKXt0aGlzLnF1ZXJ5PXQsdGhpcy5pc1VuY29uZGl0aW9uYWw9ZSx0aGlzLmhhbmRsZXJzPVtdLHRoaXMubXFsPXdpbmRvdy5tYXRjaE1lZGlhKHQpO3ZhciBuPXRoaXM7dGhpcy5saXN0ZW5lcj1mdW5jdGlvbih0KXtuLm1xbD10LmN1cnJlbnRUYXJnZXR8fHQsbi5hc3Nlc3MoKX0sdGhpcy5tcWwuYWRkTGlzdGVuZXIodGhpcy5saXN0ZW5lcil9aS5wcm90b3R5cGU9e2NvbnN0dWN0b3I6aSxhZGRIYW5kbGVyOmZ1bmN0aW9uKHQpe3ZhciBlPW5ldyBvKHQpO3RoaXMuaGFuZGxlcnMucHVzaChlKSx0aGlzLm1hdGNoZXMoKSYmZS5vbigpfSxyZW1vdmVIYW5kbGVyOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuaGFuZGxlcnM7cihlLChmdW5jdGlvbihuLG8pe2lmKG4uZXF1YWxzKHQpKXJldHVybiBuLmRlc3Ryb3koKSwhZS5zcGxpY2UobywxKX0pKX0sbWF0Y2hlczpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1xbC5tYXRjaGVzfHx0aGlzLmlzVW5jb25kaXRpb25hbH0sY2xlYXI6ZnVuY3Rpb24oKXtyKHRoaXMuaGFuZGxlcnMsKGZ1bmN0aW9uKHQpe3QuZGVzdHJveSgpfSkpLHRoaXMubXFsLnJlbW92ZUxpc3RlbmVyKHRoaXMubGlzdGVuZXIpLHRoaXMuaGFuZGxlcnMubGVuZ3RoPTB9LGFzc2VzczpmdW5jdGlvbigpe3ZhciB0PXRoaXMubWF0Y2hlcygpP1wib25cIjpcIm9mZlwiO3IodGhpcy5oYW5kbGVycywoZnVuY3Rpb24oZSl7ZVt0XSgpfSkpfX0sdC5leHBvcnRzPWl9LGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbih0KXt0aGlzLm9wdGlvbnM9dCwhdC5kZWZlclNldHVwJiZ0aGlzLnNldHVwKCl9bi5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOm4sc2V0dXA6ZnVuY3Rpb24oKXt0aGlzLm9wdGlvbnMuc2V0dXAmJnRoaXMub3B0aW9ucy5zZXR1cCgpLHRoaXMuaW5pdGlhbGlzZWQ9ITB9LG9uOmZ1bmN0aW9uKCl7IXRoaXMuaW5pdGlhbGlzZWQmJnRoaXMuc2V0dXAoKSx0aGlzLm9wdGlvbnMubWF0Y2gmJnRoaXMub3B0aW9ucy5tYXRjaCgpfSxvZmY6ZnVuY3Rpb24oKXt0aGlzLm9wdGlvbnMudW5tYXRjaCYmdGhpcy5vcHRpb25zLnVubWF0Y2goKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMub3B0aW9ucy5kZXN0cm95P3RoaXMub3B0aW9ucy5kZXN0cm95KCk6dGhpcy5vZmYoKX0sZXF1YWxzOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLm9wdGlvbnM9PT10fHx0aGlzLm9wdGlvbnMubWF0Y2g9PT10fX0sdC5leHBvcnRzPW59LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtuLnIoZSk7dmFyIG89bigyKSxyPW4ubihvKTtmdW5jdGlvbiBpKHQpe1wiY29tcGxldGVcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGUmJlwibG9hZGVkXCIhPT1kb2N1bWVudC5yZWFkeVN0YXRlJiZcImludGVyYWN0aXZlXCIhPT1kb2N1bWVudC5yZWFkeVN0YXRlfHwhZG9jdW1lbnQuYm9keT9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLChmdW5jdGlvbigpe3QoKX0pKTp0KCl9ZnVuY3Rpb24gYSh0KXt2YXIgZT1bXCJzY3JlZW5cIl07cmV0dXJuIHQubWluSGVpZ2h0JiZlLnB1c2goXCIobWluLWhlaWdodDogXCIuY29uY2F0KHQubWluSGVpZ2h0LFwicHgpXCIpKSx0Lm1heEhlaWdodCYmZS5wdXNoKFwiKG1heC1oZWlnaHQ6IFwiLmNvbmNhdCh0Lm1heEhlaWdodCxcInB4KVwiKSksdC5taW5XaWR0aCYmZS5wdXNoKFwiKG1pbi13aWR0aDogXCIuY29uY2F0KHQubWluV2lkdGgsXCJweClcIikpLHQubWF4V2lkdGgmJmUucHVzaChcIihtYXgtd2lkdGg6IFwiLmNvbmNhdCh0Lm1heFdpZHRoLFwicHgpXCIpKSxlLmpvaW4oXCIgYW5kIFwiKX12YXIgcz1uKDApLGM9bi5uKHMpLHU9e2xnOnttaW5IZWlnaHQ6NjY4LG1pbldpZHRoOjEyMDB9LG1kOlt7bWluSGVpZ2h0OjUwOCxtaW5XaWR0aDo3NjgsbWF4V2lkdGg6MTE5OX0se21pbkhlaWdodDo1MDgsbWF4SGVpZ2h0OjY2NyxtaW5XaWR0aDo3Njh9XSxzbTp7bWF4SGVpZ2h0OjUwNyxtaW5XaWR0aDo3Njh9LHhzOnttYXhXaWR0aDo3Njd9fSxkPVtcImxnXCIsXCJtZFwiLFwic21cIixcInhzXCJdO2Z1bmN0aW9uIGwodCl7Zm9yKHZhciBlPTA7ZTxkLmxlbmd0aDtlKyspe3ZhciBuPWRbZV0sbz11W25dO1wiW29iamVjdCBBcnJheV1cIiE9PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSYmKG89W29dKTtmb3IodmFyIHI9MDtyPG8ubGVuZ3RoO3IrKyl7dCh7cnVsZTpvW3JdLHNpemU6bn0pfX19ZnVuY3Rpb24gaCgpe3JldHVybihoPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciBuPWFyZ3VtZW50c1tlXTtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKHRbb109bltvXSl9cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gZih0KXtyZXR1cm4gZnVuY3Rpb24odCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gcCh0KX0odCl8fGZ1bmN0aW9uKHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QodCkpcmV0dXJuIEFycmF5LmZyb20odCl9KHQpfHxmdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybjtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gcCh0LGUpO3ZhciBuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KS5zbGljZSg4LC0xKTtcIk9iamVjdFwiPT09biYmdC5jb25zdHJ1Y3RvciYmKG49dC5jb25zdHJ1Y3Rvci5uYW1lKTtpZihcIk1hcFwiPT09bnx8XCJTZXRcIj09PW4pcmV0dXJuIEFycmF5LmZyb20obik7aWYoXCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKXJldHVybiBwKHQsZSl9KHQpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIHAodCxlKXsobnVsbD09ZXx8ZT50Lmxlbmd0aCkmJihlPXQubGVuZ3RoKTtmb3IodmFyIG49MCxvPW5ldyBBcnJheShlKTtuPGU7bisrKW9bbl09dFtuXTtyZXR1cm4gb312YXIgbSx5LHYsZyxiLHc9e30seD1bXSxfPVtdLEM9L2xlYm98YXdsZXxwaWRlfG9ib3xyYXdsaXxkc2JvL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxPPS9QaGFudG9tSlMvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJiEwLFM9W1wiaW5pdFwiLFwibG9naW5cIixcIm9uXCIsXCJvZmZcIixcImxvZ291dFwiLFwic2VuZE1lc3NhZ2VcIixcInRyaWdnZXJQb3N0YmFja1wiLFwiY3JlYXRlQ29udmVyc2F0aW9uXCIsXCJ1cGRhdGVDb252ZXJzYXRpb25cIixcInVwZGF0ZVVzZXJcIixcImdldERpc3BsYXllZENvbnZlcnNhdGlvblwiLFwiZ2V0Q29udmVyc2F0aW9uQnlJZFwiLFwiZ2V0Q29udmVyc2F0aW9uc1wiLFwiZ2V0TW9yZUNvbnZlcnNhdGlvbnNcIixcImhhc01vcmVDb252ZXJzYXRpb25zXCIsXCJnZXRVc2VyXCIsXCJvcGVuXCIsXCJjbG9zZVwiLFwiaXNPcGVuZWRcIixcImxvYWRDb252ZXJzYXRpb25cIixcInNldERlbGVnYXRlXCIsXCJtYXJrQWxsQXNSZWFkXCIsXCJzaG93Tm90aWZpY2F0aW9uQ2hhbm5lbFByb21wdFwiLFwic2V0UHJlZGVmaW5lZE1lc3NhZ2VcIixcInN0YXJ0VHlwaW5nXCIsXCJzdG9wVHlwaW5nXCJdO2lmKEMpe3ZhciBBPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO0EuaHJlZj1cImh0dHBzOi8vc21vb2NoLmlvL2xpdmUtd2ViLWNoYXQvP3V0bV9zb3VyY2U9d2lkZ2V0XCIsQS50ZXh0PVwiUG93ZXJlZCBieSBaZW5kZXNrIFN1bnNoaW5lXCIsaSgoZnVuY3Rpb24oKXtkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEEpfSkpfWZ1bmN0aW9uIGooKXt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTt0LnJlbD1cInN0eWxlc2hlZXRcIix0LnR5cGU9XCJ0ZXh0L2Nzc1wiLHQuaHJlZj1cImh0dHBzOi8vY2RuLnNtb29jaC5pby9zbW9vY2guNS4zLjE0LmNzc1wiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodCl9ZnVuY3Rpb24gTSh0KXt2YXIgZTt3aW5kb3cuX19vbldlYk1lc3NlbmdlckZyYW1lUmVhZHlfXz1mdW5jdGlvbigpe30sbT10LHZ8fChlPXksbCgoZnVuY3Rpb24odCl7dmFyIG49dC5ydWxlLG89dC5zaXplO2MuYS5yZWdpc3RlcihhKG4pLChmdW5jdGlvbigpe2UuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSh7dHlwZTpcInNpemVDaGFuZ2VcIix2YWx1ZTpvfSxcIlwiLmNvbmNhdChsb2NhdGlvbi5wcm90b2NvbCxcIi8vXCIpLmNvbmNhdChsb2NhdGlvbi5ob3N0KSl9KSl9KSkpO2Zvcih2YXIgbj1TWzBdLG89MDtvPFMubGVuZ3RoO249U1srK29dKXdbbl09bVtuXTtpZihfKXtmb3IodmFyIHI9X1swXSxpPTA7aTxfLmxlbmd0aDtyPV9bKytpXSl7dmFyIHM7KHM9bSkub24uYXBwbHkocyxmKHIuYXJncykpfV89dm9pZCAwfWlmKGIpe3ZhciB1LGQ9KHU9bSkuaW5pdC5hcHBseSh1LGYoYikpO2I9dm9pZCAwO2Zvcih2YXIgaD14WzBdLHA9MDtwPHgubGVuZ3RoO2g9eFsrK3BdKWQ9XCJ0aGVuXCI9PT1oLnR5cGU/ZC50aGVuKGgubmV4dCk6ZC5jYXRjaChoLm5leHQpO3g9W119fXZhciBXPWZ1bmN0aW9uKHQpe3JldHVybiB0LmNvbnRlbnRXaW5kb3cmJnQuY29udGVudFdpbmRvdy5kb2N1bWVudH07ZnVuY3Rpb24gcSgpe2lmKCF5KXt2YXIgdD1udWxsLGU9ITE7KHk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKSkuaWQ9XCJ3ZWItbWVzc2VuZ2VyLWNvbnRhaW5lclwiLHkuZnJhbWVCb3JkZXI9MCx5LmFsbG93RnVsbHNjcmVlbj0hMCx5LmFsbG93VHJhbnNwYXJlbmN5PSEwLHkuc2Nyb2xsaW5nPVwibm9cIix5LmNsYXNzTmFtZT1yLmEuaWZyYW1lO3ZhciBuPWZ1bmN0aW9uKCl7ZT0hMCxjbGVhckludGVydmFsKHQpLGRlbGV0ZSB5Lm9ubG9hZDt2YXIgbj1XKHkpO24ub3BlbigpLG4ud3JpdGUoXCJcXG4gICAgICAgICAgICAgICAgICAgIDwhRE9DVFlQRSBodG1sPlxcbiAgICAgICAgICAgICAgICAgICAgPGh0bWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLmNvbmNhdChcIlwiLCdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCInKS5jb25jYXQoXCJodHRwczovL2Nkbi5zbW9vY2guaW8vZnJhbWUuNS4zLjE0LmNzc1wiLCdcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cIicpLmNvbmNhdChcImh0dHBzOi8vY2RuLnNtb29jaC5pby9mcmFtZS41LjMuMTQubWluLmpzXCIsJ1wiIGFzeW5jIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PFxcL3NjcmlwdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJvZHk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb3VudFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYm9keT5cXG4gICAgICAgICAgICAgICAgICAgIDwvaHRtbD5cXG4gICAgICAgICAgICAgICAgICAgICcpKSxuLmNsb3NlKCl9O3Q9c2V0SW50ZXJ2YWwoKGZ1bmN0aW9uKCl7dmFyIHQ9Vyh5KTtlfHwhdHx8XCJjb21wbGV0ZVwiIT09dC5yZWFkeVN0YXRlJiZcImludGVyYWN0aXZlXCIhPT10LnJlYWR5U3RhdGV8fG4oKX0pLDFlMykseS5vbmxvYWQ9ZnVuY3Rpb24oKXtlfHxuKCl9fXY/ZyYmKGcuYXBwZW5kQ2hpbGQoeSksZz12b2lkIDApOmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoeSl9dmFyIEg9e1ZFUlNJT046XCI1LjMuMTRcIixvbjpmdW5jdGlvbigpe198fChfPVtdKTtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxlPW5ldyBBcnJheSh0KSxuPTA7bjx0O24rKyllW25dPWFyZ3VtZW50c1tuXTtfLnB1c2goe2FyZ3M6ZX0pfSxpbml0OmZ1bmN0aW9uKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsZT1uZXcgQXJyYXkodCksbj0wO248dDtuKyspZVtuXT1hcmd1bWVudHNbbl07Yj1lLHY9ZS5sZW5ndGg+MCYmISFlWzBdLmVtYmVkZGVkLEN8fE98fGkoKGZ1bmN0aW9uKCl7aigpLHEoKX0pKTt2YXIgbz17dGhlbjpmdW5jdGlvbih0KXtyZXR1cm4geC5wdXNoKHt0eXBlOlwidGhlblwiLG5leHQ6dH0pLG99LGNhdGNoOmZ1bmN0aW9uKHQpe3JldHVybiB4LnB1c2goe3R5cGU6XCJjYXRjaFwiLG5leHQ6dH0pLG99fTtyZXR1cm4gb30scmVuZGVyOmZ1bmN0aW9uKHQpe3k/dC5hcHBlbmRDaGlsZCh5KTpnPXR9LGRlc3Ryb3k6ZnVuY3Rpb24oKXttJiYobS5kZXN0cm95KCkseS5yZW1vdmU/eS5yZW1vdmUoKTp5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeSksbCgoZnVuY3Rpb24odCl7dmFyIGU9dC5ydWxlO2MuYS51bnJlZ2lzdGVyKGEoZSkpfSkpLEkoKSl9fTtmdW5jdGlvbiBJKCl7aWYoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2ViLW1lc3Nlbmdlci1jb250YWluZXJcIikpe209dm9pZCAwLHk9dm9pZCAwLHdpbmRvdy5fX29uV2ViTWVzc2VuZ2VyRnJhbWVSZWFkeV9fPU07Zm9yKHZhciB0PVNbMF0sZT0wO2U8Uy5sZW5ndGg7dD1TWysrZV0pd1t0XSYmZGVsZXRlIHdbdF07aCh3LEgpfX1JKCk7ZS5kZWZhdWx0PXd9XSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgU21vb2NoIGZyb20gJ3Ntb29jaCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnL2NvbmZpZy5qc29uJztcblxuLy9TbW9vY2ggaW5zdGFuY2UgbGVmdCBvdXRzaWRlIG9mIHRoZSBpbml0IGZ1bmN0aW9uIHNvIHRoYXQgaXQgY2FuIGJlIHVzZWQgaW4gdGhlIGNoYXQgd2lkZ2V0XG5jb25zdCBzbW9vY2ggPSBTbW9vY2guZGVmYXVsdDtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoeyBqd3RUb2tlbiwgZW1haWwsIC4uLmRhdGEgfSkge1xuXG4gIGNvbnN0IHJlbW92ZUVsZW1lbnRzID0gKGVsbXMpID0+IFsuLi5lbG1zXS5mb3JFYWNoKGVsID0+IGVsLnJlbW92ZSgpKTtcblxuICBjb25zdCBkb21haW4gPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG4gIGNvbnN0IGRvbWFpbkNvbmZpZ3MgPSBjb25maWcuZG9tYWluc1tkb21haW5dW2RhdGEubGFuZ3VhZ2VdO1xuICBjb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBjaGF0LXdpZGdldC5qcyB+IGxpbmUgMTMgfiBpbml0IH4gZG9tYWluQ29uZmlnc1wiLCBkb21haW5Db25maWdzKVxuXG4gIC8vSWYgdGhlcmUgaXMgYW4gYWN0aXZlIGluc3RhbmNlIG9mIHRoZSBjaGF0IHdpZGdldCBhbHJlYWR5LCBvcGVuIGl0XG4gIGlmICh0eXBlb2Ygc21vb2NoLmlzT3BlbmVkICE9PSAndW5kZWZpbmVkJyAmJiAhc21vb2NoLmlzT3BlbmVkKCkpIHtcbiAgICBzbW9vY2gub3BlbigpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHNtb29jaC5vbignd2lkZ2V0Om9wZW5lZCcsICgpID0+IHtcbiAgICBjb25zdCBjaGF0V2lkZ2V0SUZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYi1tZXNzZW5nZXItY29udGFpbmVyJyk7XG4gICAgY2hhdFdpZGdldElGcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2luaXRpYWwnO1xuXG4gICAgaWYgKGNoYXRXaWRnZXRJRnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibG9nb1wiKS5sZW5ndGgpIHtcbiAgICAgIHJlbW92ZUVsZW1lbnRzKGNoYXRXaWRnZXRJRnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibG9nb1wiKSk7XG4gICAgICByZW1vdmVFbGVtZW50cyhjaGF0V2lkZ2V0SUZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImhlYWRlci1pY29uXCIpKTtcbiAgICB9XG4gIH0pO1xuICBzbW9vY2gub24oJ3dpZGdldDpjbG9zZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY2hhdFdpZGdldElGcmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWItbWVzc2VuZ2VyLWNvbnRhaW5lcicpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2hhdFdpZGdldElGcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgfSwgMzUwKTtcbiAgfSk7XG5cbiAgc21vb2NoLmluaXQoe1xuICAgIGludGVncmF0aW9uSWQ6IGRvbWFpbkNvbmZpZ3MuaW50ZWdyYXRpb25JZCxcbiAgICBjYW5Vc2VyU2VlQ29udmVyc2F0aW9uTGlzdDogZmFsc2UsXG4gICAgand0OiBqd3RUb2tlbixcbiAgICBleHRlcm5hbElkOiBlbWFpbCxcbiAgICBsb2NhbGU6IGRvbWFpbkNvbmZpZ3MubG9jYWxlLFxuICAgIHNvdW5kTm90aWZpY2F0aW9uRW5hYmxlZDogZG9tYWluQ29uZmlncy5zb3VuZE5vdGlmaWNhdGlvbkVuYWJsZWQsXG4gICAgbWVudUl0ZW1zOiBkb21haW5Db25maWdzLm1lbnVJdGVtcyxcbiAgICAvL0NoYXQgV2lkZ2V0IGRlZmF1bHQgYnV0dG9uIGlzIGhpZGRlbiBieSBkZWZhdWx0LCAnQ29udGFjdCBVcycgYnV0dG9uIGZyb20gUFAgd2lsbCByZXBsYWNlIGl0XG4gICAgYnV0dG9uV2lkdGg6ICcwJyxcbiAgICBidXR0b25IZWlnaHQ6ICcwJyxcbiAgICBmaXhlZEhlYWRlcjogZmFsc2UsXG4gIH0pLnRoZW4oKCkgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nQ29udmVyc2F0aW9uID0gc21vb2NoLmdldENvbnZlcnNhdGlvbnMoKVxuICAgICAgLmZpbmQoKGNvbnZlcnNhdGlvbikgPT4ge1xuICAgICAgICBpZiAoY29udmVyc2F0aW9uLm1ldGFkYXRhLm9yZGVyTnVtYmVyID09PSBkYXRhLm9yZGVyTnVtYmVyKSB7XG4gICAgICAgICAgc21vb2NoLmxvYWRDb252ZXJzYXRpb24oY29udmVyc2F0aW9uLmlkKTtcbiAgICAgICAgICBzbW9vY2gub3BlbigpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIGlmICghZXhpc3RpbmdDb252ZXJzYXRpb24pIHtcbiAgICAgIHNtb29jaC5jcmVhdGVDb252ZXJzYXRpb24oe1xuICAgICAgICBkaXNwbGF5TmFtZTogZGF0YS5vcmRlck51bWJlcixcbiAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICB9XG4gICAgICB9KS50aGVuKChjb252ZXJzYXRpb24pID0+IHtcbiAgICAgICAgc21vb2NoLmxvYWRDb252ZXJzYXRpb24oY29udmVyc2F0aW9uLmlkKTtcbiAgICAgICAgc21vb2NoLm9wZW4oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09wZW5lZCgpIHtcbiAgcmV0dXJuIHNtb29jaC5pc09wZW5lZCgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlKCkge1xuICByZXR1cm4gc21vb2NoLmNsb3NlKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gb3BlbigpIHtcbiAgcmV0dXJuIHNtb29jaC5vcGVuKCk7XG59XG5cbi8qXG5UaGlzIG1ldGhvZCBpcyBjYWxsZWQgZXZlcnkgdGltZSB0aGUgdXNlcnMgZ29lcyBmcm9tIHRoZSBvcmRlcnMgZGV0YWlscyBwYWdlXG4gdG8gdGhlIG9yZGVyIGhpc3RvcnkgcGFnZS4gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gYSBuZXcgb3JkZXIgZGV0YWlscyBwYWdlIGFuZCB0aGVuIG9uIHRoZSBcbiAnY29udGFjdCB1cycgYnV0dG9uLCB0aGUgY2hhdCB3aWRnZXQgd2lsbCBjYWxsIHRoZSBpbml0KCkgbWV0aG9kXG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgcmV0dXJuIHNtb29jaC5kZXN0cm95KCk7XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7IGluaXQsIG9wZW4sIGNsb3NlLCBkZXN0cm95LCBpc09wZW5lZCB9IGZyb20gJy4vY2hhdC13aWRnZXQuanMnOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
