"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{12746:function(n,t,r){r.d(t,{mU:function(){return b},bd:function(){return y},zj:function(){return p},HB:function(){return g},Wd:function(){return d}});var e=r(67294);r(54098);function o(n){return new CustomEvent("onLocalStorageChange",{detail:n})}o.eventName="onLocalStorageChange";var i=function(){function n(){}return n.prototype.getItem=function(n){return localStorage.getItem(n)},n.prototype.setItem=function(n,t){localStorage.setItem(n,t)},n.prototype.removeItem=function(n){localStorage.removeItem(n)},n.prototype.clear=function(){localStorage.clear()},n}(),a=function(){function n(){this._memoryStorage=new Map}return n.prototype.getItem=function(n){var t;return null!==(t=this._memoryStorage.get(n))&&void 0!==t?t:null},n.prototype.setItem=function(n,t){this._memoryStorage.set(n,t)},n.prototype.removeItem=function(n){this._memoryStorage.delete(n)},n.prototype.clear=function(){this._memoryStorage.clear()},n}();(function(){var n=globalThis.localStorage;if(null==n)return!1;try{var t="__storage_test__";return n.setItem(t,t),n.removeItem(t),!0}catch(r){return r instanceof DOMException&&(22===r.code||1014===r.code||"QuotaExceededError"===r.name||"NS_ERROR_DOM_QUOTA_REACHED"===r.name)&&n&&n.length>0}})()?new i:new a;var u=function(){return(u=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)};function c(n){var t="function"===typeof Symbol&&Symbol.iterator,r=t&&n[t],e=0;if(r)return r.call(n);if(n&&"number"===typeof n.length)return{next:function(){return n&&e>=n.length&&(n=void 0),{value:n&&n[e++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function l(n,t){var r="function"===typeof Symbol&&n[Symbol.iterator];if(!r)return n;var e,o,i=r.call(n),a=[];try{for(;(void 0===t||t-- >0)&&!(e=i.next()).done;)a.push(e.value)}catch(u){o={error:u}}finally{try{e&&!e.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function f(n){return function(n){return n.trim().replace(/^\?/,"").split("&").map((function(n){return n.split("=")})).reduce((function(n,t){var r,e=l(t,2),o=e[0],i=e[1];return u(u({},n),((r={})[o]=i?decodeURIComponent(i):void 0,r))}),{})}(null!=location?location.search:"")[n]}function s(n){var t,r;try{for(var e=c(v),o=e.next();!o.done;o=e.next()){var i=o.value,a=i.copy;if((0,i.validation)(n))return a(n)}}catch(u){t={error:u}}finally{try{o&&!o.done&&(r=e.return)&&r.call(e)}finally{if(t)throw t.error}}return n}var v=[{validation:function(n){var t;return null!==(t=n instanceof Date)&&void 0!==t&&t},copy:function(n){return new Date(n.getTime())}},{validation:function(n){var t;return null!==(t=n instanceof Set)&&void 0!==t&&t},copy:function(n){var t=new Set;return n.forEach((function(n){t.add(s(n))})),t}},{validation:function(n){var t;return null!==(t=n instanceof Map)&&void 0!==t&&t},copy:function(n){var t=new Map;return n.forEach((function(n,r){t.set(r,s(n))})),t}},{validation:Array.isArray,copy:function(n){return n.reduce((function(n,t,r){return n[r]=s(t),n}),[])}},{validation:function(n){var t;return null!==(t="symbol"===typeof n)&&void 0!==t&&t},copy:function(n){var t=String(n),r=t.indexOf("("),e=t.substr(r).replace(/\(|\)/g,"");return parseInt(e)?Symbol(+e):Symbol(e)}},{validation:function(n){return[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].some((function(t){return t===n.constructor}))},copy:function(n){return new n.constructor(n)}},{validation:function(n){return"object"===typeof n&&!Array.isArray(n)&&null!==n},copy:function(n){return Object.keys(n).reduce((function(t,r){return t[r]=s(n[r]),t}),{})}}];r(58354);function y(n,t){(0,e.useEffect)((function(){n()}),t)}function p(n){void 0===n&&(n=!1);var t=(0,e.useState)(n),r=t[0],o=t[1];return[r,(0,e.useCallback)((function(){return o(!0)}),[]),(0,e.useCallback)((function(){return o(!1)}),[])]}function d(n,t){var r=(0,e.useState)(void 0),o=r[0],i=r[1];return(0,e.useEffect)((function(){var r=f(n);i(void 0===r?void 0:null!=t?t(r):r)}),[]),o}var m=function(){return(m=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)};function h(n,t){var r={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(r[e]=n[e]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(e=Object.getOwnPropertySymbols(n);o<e.length;o++)t.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(n,e[o])&&(r[e[o]]=n[e[o]])}return r}var b=function(n){var t=n.children,r=h(n,["children"]),o=function(n){var t=n.onImpressionStart,r=n.onImpressionEnd,o=n.rootMargin,i=void 0===o?0:o,a=n.threshold,u=void 0===a?0:a,c=(0,e.useState)(!1),l=c[0],f=c[1],s=(0,e.useCallback)((function(){!0!==l&&(null===t||void 0===t||t(),f(!0))}),[]),v=(0,e.useCallback)((function(){!1!==l&&(null===r||void 0===r||r(),f(!1))}),[]),y=(0,e.useCallback)((function(n){var t=n[0],r=t.intersectionRatio;(0===u?!t.isIntersecting:r<u)?v():s()}),[v,s]),p=(0,e.useMemo)((function(){if("undefined"!==typeof IntersectionObserver)return new IntersectionObserver(y,{rootMargin:i+"px",threshold:u})}),[i,u]);return(0,e.useCallback)((function(n){void 0!==p&&(p.disconnect(),null!==n&&p.observe(n))}),[p])}(m({},r));return e.createElement("div",{ref:o},t)};function g(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var r=(0,e.useCallback)((function(t){n.forEach((function(n){"function"===typeof n?n(t):null!=n&&(n.current=t)}))}),[n]);return r}}}]);