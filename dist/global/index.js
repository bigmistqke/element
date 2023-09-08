(()=>{var __webpack_modules__={574:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";var _utils_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(889),__WEBPACK_DEFAULT_EXPORT__=null,supportsSpread=isSyntaxSupported("Object(...[{}])"),supportsClass=isSyntaxSupported("class Test {}"),supportsNewTarget=isSyntaxSupported("new.target"),TRUE_CONSTRUCTOR=Symbol?Symbol("trueConstructor"):"__newlessTrueConstructor__",setPrototype=Object.setPrototypeOf||function(e,t){e.__proto__=t},construct=Reflect&&Reflect.construct||function(){if(supportsClass)return Function("constructor, args, target",`\n                'use strict';\n\n                if (arguments.length === 3 && typeof target !== 'function')\n                    throw new TypeError(target + ' is not a constructor');\n\n                target = target || constructor;\n\n                // extend target so the right prototype is constructed (or nearly the\n                // right one; ideally we'd do instantiator.prototype = target.prototype,\n                // but a class's prototype property is not writable)\n                class instantiator extends target {};\n                // but ensure the *logic* is 'constructor' for ES2015-compliant engines\n                Object.setPrototypeOf(instantiator, constructor);\n                // ...and for Safari 9\n                instantiator.prototype.constructor = constructor;\n\n                // The spread operator is *dramatically faster, so use it if we can:\n                // http://jsperf.com/new-via-spread-vs-dynamic-function/4\n                ${supportsSpread?"\n\n                    var value = new instantiator(...([].slice.call(args)));\n\n                ":"\n\n                    // otherwise, create a dynamic function in order to use 'new'\n                    // Note using 'function.bind' would be simpler, but is much slower:\n                    // http://jsperf.com/new-operator-with-dynamic-function-vs-bind\n                    var argList = '';\n                    for (var i = 0, len = args.length; i < len; i++) {\n                    if (i > 0) argList += ',';\n                    argList += 'args[' + i + ']';\n                    }\n                    var constructCall = Function('constructor, args',\n                    'return new constructor( ' + argList + ' );'\n                    );\n                    var value = constructCall(constructor, args);\n\n                    args = Array.prototype.slice.call(args);\n                    args = [null].concat(args);\n                    var value = new constructor.bind.apply(constructor, args);\n\n                "}\n\n                // fix up the prototype so it matches the intended one, not one who's\n                // prototype is the intended one :P\n                Object.setPrototypeOf(value, target.prototype);\n                return value;\n            `);var e=function(){};return function(t,n,r){if(3===arguments.length&&"function"!=typeof r)throw new TypeError(r+" is not a constructor");e.prototype=(r||t).prototype;var o=new e,s=t.apply(o,n);return"object"==typeof s&&s?(s.__proto__=(r||t).prototype,s):o}}(),SKIP_PROPERTIES=null;function copyProperties(e,t){if(Object.getOwnPropertyNames&&Object.defineProperty){var n=Object.getOwnPropertyNames(e);Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e)));for(var r=n.length-1;r>=0;r--)-1===SKIP_PROPERTIES.indexOf(n[r])&&Object.defineProperty(t,n[r],Object.getOwnPropertyDescriptor(e,n[r]))}else for(var o in e)t[o]=e[o]}function newless(constructor){var name=constructor.name,usesClassSyntax="class"===constructor.toString().substr(0,5),requiresNew=!!usesClassSyntax||null,newlessConstructor=(()=>function(){if(!requiresNew&&this instanceof newlessConstructor){if(!1===requiresNew){const e=constructor.apply(this,arguments);return"object"==typeof e&&e||this}try{requiresNew=!1;const e=constructor.apply(this,arguments);return"object"==typeof e&&e||this}catch(e){if(!(e instanceof TypeError&&(/class constructor/i.test(e.message)||/use the 'new' operator/i.test(e.message))))throw e instanceof Error&&/Illegal constructor/i.test(e.message)&&Object.create(constructor.prototype)instanceof Node&&console.error(`The following error can happen if a Custom Element is called\nwith 'new' before being defined. The constructor was ${constructor.name}: `,constructor),e;requiresNew=!0}}var newTarget,hasNewTarget=!1;supportsNewTarget&&(eval("newTarget = new.target"),newTarget&&(hasNewTarget=!0)),supportsNewTarget&&hasNewTarget||(newTarget=this instanceof newlessConstructor?this.constructor:constructor);const returnValue=construct(constructor,arguments,newTarget);return this instanceof newlessConstructor&&setPrototype(this,returnValue),returnValue})();if(name){const e=getFunctionBody(newlessConstructor);newlessConstructor=Function("constructor, construct, setPrototype, requiresNew, supportsNewTarget",`\n      var newlessConstructor = function ${name}() { ${e} };\n      return newlessConstructor\n    `)(constructor,construct,setPrototype,requiresNew,supportsNewTarget)}return constructor.length&&setDescriptor(newlessConstructor,"length",{value:constructor.length}),newlessConstructor.prototype=Object.create(constructor.prototype),newlessConstructor.prototype.constructor=newlessConstructor,constructor.prototype.constructor=constructor,newlessConstructor[TRUE_CONSTRUCTOR]=constructor,copyProperties(constructor,newlessConstructor),setPrototype(newlessConstructor,constructor),newlessConstructor}function isSyntaxSupported(e,t=!0){try{return!!Function("",(t?"'use strict';":"")+e)}catch(e){return!1}}},889:(e,t,n)=>{"use strict";n.d(t,{Gm:()=>d,Ie:()=>r,Md:()=>_,Sh:()=>o,U8:()=>h,ld:()=>l,nk:()=>f,q$:()=>i,uh:()=>u,yA:()=>p});class r{constructor(){this.m=new WeakMap}set(e,t){this.m.set(e,t),this.m.set(t,e)}get(e){return this.m.get(e)}has(e){return this.m.has(e)}}function o(e){const t=e.toString().split("\n");return t.shift(),t.pop(),t.join("\n")}const s={enumerable:!0,configurable:!0};function i(e,t,n,r=!1){n=a(r?l(e,t):Object.getOwnPropertyDescriptor(e,t),n),Object.defineProperty(e,t,n)}function c(e,t){let n,r;const o=Object.getOwnPropertyDescriptors(e);for(const e in t)n=t[e],r=o[e],t[e]=a(r,n);Object.defineProperties(e,t)}function a(e,t){if(("get"in t||"set"in t)&&("value"in t||"writable"in t))throw new TypeError("cannot specify both accessors and a value or writable attribute");return e&&("get"in t||"set"in t?(delete e.value,delete e.writable):("value"in t||"writable"in t)&&(delete e.get,delete e.set)),{...s,...e,...t}}function u(e,t,n=!0){let r,o=!1;return r=1===arguments.length?e:n?l(e,t):Object.getOwnPropertyDescriptor(e,t),r&&(r.get||r.set)&&(o=!0),o}function l(e,t){let n,r=e;for(;r;){if(n=Object.getOwnPropertyDescriptor(r,t),n)return n.owner=r,n;r=r.__proto__}}function p(e){let t=e,n=[];for(;t;)n=n.concat(Object.getOwnPropertyNames(t)),t=t.__proto__;return n=Array.from(new Set(n)),n}function f(e,t){let n=e.__proto__;do{if(t===n)return!0;n=n.__proto__}while(n);return!1}function d(e,t,n){const r=Object.getOwnPropertyNames(e);let o=r.length;for(;o--;){const s=r[o],i=Object.getOwnPropertyDescriptor(e,s);n&&n(i),Object.defineProperty(t,s,i)}}function _(e,{defaultClassDescriptor:{writable:t,enumerable:n,configurable:r}}){const o=Object.getOwnPropertyDescriptors(e);let s;for(const e in o)s=o[e],("value"in s||"writable"in s)&&(s.writable=t),s.enumerable=n,s.configurable=r;c(e,o)}function h(e,{defaultClassDescriptor:{writable:t,enumerable:n,configurable:r}},o){const s=Object.getOwnPropertyDescriptors(e);let i;for(const e in s)o&&o.includes(e)?delete s[e]:(i=s[e],("value"in i||"writable"in i)&&(i.writable=t),i.enumerable=n,i.configurable=r);c(e,s)}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__={};(()=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Element:()=>te,_attribute:()=>We,_trackReactiveProperty:()=>xe,attribute:()=>Le,autorun:()=>Ee,booleanAttribute:()=>Be,circular:()=>$e,css:()=>Ge,element:()=>Fe,numberAttribute:()=>Ue,reactify:()=>De,reactive:()=>je,stringAttribute:()=>Ve,variable:()=>ke,version:()=>He});const e={};const t=(Symbol("solid-proxy"),Symbol("solid-track"),Symbol("solid-dev-component"),{equals:(e,t)=>e===t});let n=null,r=M;const o={},s=1,i=2,c={owned:null,cleanups:null,context:null,owner:null},[a,u]=m(!1);var l=null;let p,f=null,d=null,_=null,h=null,b=null,g=null,y=null,w=0;function v(e,t){const n=h,r=l,o=0===e.length,s=o?c:{owned:null,cleanups:null,context:null,owner:t||r},i=o?e:()=>e((()=>$(s)));l=s,h=null;try{return R(i,!0)}finally{h=n,l=r}}function m(e,n){n=n?Object.assign({},t,n):t;const r={value:e,observers:null,observerSlots:null,pending:o,comparator:n.equals||void 0};return[N.bind(r),e=>("function"==typeof e&&(e=f&&f.running&&f.sources.has(r)?e(r.pending!==o?r.pending:r.tValue):e(r.pending!==o?r.pending:r.value)),C(r,e))]}function P(e,t,n){const r=j(e,t,!1,s);d&&f&&f.running?g.push(r):k(r)}function O(e,n,r){r=r?Object.assign({},t,r):t;const i=j(e,n,!0,0);return i.pending=o,i.observers=null,i.observerSlots=null,i.comparator=r.equals||void 0,d&&f&&f.running?(i.tState=s,g.push(i)):k(i),N.bind(i)}function S(e){if(b)return e();let t;const n=b=[];try{t=e()}finally{b=null}return R((()=>{for(let e=0;e<n.length;e+=1){const t=n[e];if(t.pending!==o){const e=t.pending;t.pending=o,C(t,e)}}}),!1),t}function A(e){let t,n=h;return h=null,t=e(),h=n,t}function T(e){const t=O(e);return O((()=>U(t())))}function N(){const e=f&&f.running;if(this.sources&&(!e&&this.state||e&&this.tState)){const t=g;g=null,!e&&this.state===s||e&&this.tState===s?k(this):D(this),g=t}if(h){const e=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(e)):(h.sources=[this],h.sourceSlots=[e]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return e&&f.sources.has(this)?this.tValue:this.value}function C(e,t,n){if(b)return e.pending===o&&b.push(e),e.pending=t,t;if(e.comparator)if(f&&f.running&&f.sources.has(e)){if(e.comparator(e.tValue,t))return t}else if(e.comparator(e.value,t))return t;let r=!1;return f?(r=f.running,(r||!n&&f.sources.has(e))&&(f.sources.add(e),e.tValue=t),r||(e.value=t)):e.value=t,e.observers&&e.observers.length&&R((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];r&&f.disposed.has(n)||((r&&!n.tState||!r&&!n.state)&&(n.pure?g.push(n):y.push(n),n.observers&&I(n)),r?n.tState=s:n.state=s)}if(g.length>1e6)throw g=[],new Error}),!1),t}function k(e){if(!e.fn)return;$(e);const t=l,n=h,r=w;h=l=e,E(e,f&&f.running&&f.sources.has(e)?e.tValue:e.value,r),f&&!f.running&&f.sources.has(e)&&queueMicrotask((()=>{R((()=>{f&&(f.running=!0),E(e,e.tValue,r)}),!1)})),h=n,l=t}function E(e,t,n){let r;try{r=e.fn(t)}catch(e){W(e)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?C(e,r,!0):f&&f.running&&e.pure?(f.sources.add(e),e.tValue=r):e.value=r,e.updatedAt=n)}function j(e,t,n,r=s,o){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:l,context:null,pure:n};if(f&&f.running&&(i.state=0,i.tState=r),null===l||l!==c&&(f&&f.running&&l.pure?l.tOwned?l.tOwned.push(i):l.tOwned=[i]:l.owned?l.owned.push(i):l.owned=[i]),_){const[e,t]=m(void 0,{equals:!1}),n=_(i.fn,t);!function(e){null===l||(null===l.cleanups?l.cleanups=[e]:l.cleanups.push(e))}((()=>n.dispose()));const r=()=>function(e){if(f&&f.running)return e(),f.done;const t=h,n=l;return Promise.resolve().then((()=>{let r;return h=t,l=n,(d||p)&&(r=f||(f={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise((e=>r.resolve=e))),r.running=!0),S(e),h=l=null,r?r.done:void 0}))}(t).then((()=>o.dispose())),o=_(i.fn,r);i.fn=t=>(e(),f&&f.running?o.track(t):n.track(t))}return i}function x(e){const t=f&&f.running;if(!t&&0===e.state||t&&0===e.tState)return;if(!t&&e.state===i||t&&e.tState===i)return D(e);if(e.suspense&&A(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<w);){if(t&&f.disposed.has(e))return;(!t&&e.state||t&&e.tState)&&n.push(e)}for(let r=n.length-1;r>=0;r--){if(e=n[r],t){let t=e,o=n[r+1];for(;(t=t.owner)&&t!==o;)if(f.disposed.has(t))return}if(!t&&e.state===s||t&&e.tState===s)k(e);else if(!t&&e.state===i||t&&e.tState===i){const t=g;g=null,D(e,n[0]),g=t}}}function R(e,t){if(g)return e();let n=!1;t||(g=[]),y?n=!0:y=[],w++;try{const t=e();return function(e){if(g&&(d&&f&&f.running?function(e){for(let t=0;t<e.length;t++){const n=e[t],r=f.queue;r.has(n)||(r.add(n),d((()=>{r.delete(n),R((()=>{f.running=!0,x(n),r.size||(y.push.apply(y,f.effects),f.effects=[])}),!1),f&&(f.running=!1)})))}}(g):M(g),g=null),e)return;let t;if(f&&f.running){if(f.promises.size||f.queue.size)return f.running=!1,f.effects.push.apply(f.effects,y),y=null,void u(!0);const e=f.sources,n=f.disposed;t=f.resolve;for(const e of y)"tState"in e&&(e.state=e.tState),delete e.tState;f=null,S((()=>{for(const e of n)$(e);for(const t of e){if(t.value=t.tValue,t.owned)for(let e=0,n=t.owned.length;e<n;e++)$(t.owned[e]);t.tOwned&&(t.owned=t.tOwned),delete t.tValue,delete t.tOwned,t.tState=0}u(!1)}))}y.length?S((()=>{r(y),y=null})):y=null,t&&t()}(n),t}catch(e){g||(y=null),W(e)}}function M(e){for(let t=0;t<e.length;t++)x(e[t])}function q(t){let n,r=0;for(n=0;n<t.length;n++){const e=t[n];e.user?t[r++]=e:x(e)}var o;e.context&&(e.context=o);const s=t.length;for(n=0;n<r;n++)x(t[n]);for(n=s;n<t.length;n++)x(t[n])}function D(e,t){const n=f&&f.running;n?e.tState=0:e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];o.sources&&(!n&&o.state===s||n&&o.tState===s?o!==t&&x(o):(!n&&o.state===i||n&&o.tState===i)&&D(o,t))}}function I(e){const t=f&&f.running;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!t&&!r.state||t&&!r.tState)&&(t?r.tState=i:r.state=i,r.pure?g.push(r):y.push(r),r.observers&&I(r))}}function $(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(f&&f.running&&e.pure){if(e.tOwned){for(t=0;t<e.tOwned.length;t++)$(e.tOwned[t]);delete e.tOwned}L(e,!0)}else if(e.owned){for(t=0;t<e.owned.length;t++)$(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}f&&f.running?e.tState=0:e.state=0,e.context=null}function L(e,t){if(t||(e.tState=0,f.disposed.add(e)),e.owned)for(let t=0;t<e.owned.length;t++)L(e.owned[t])}function W(e){const t=n&&V(l,n);if(!t)throw e;for(const n of t)n(e)}function V(e,t){return e?e.context&&void 0!==e.context[t]?e.context[t]:V(e.owner,t):void 0}function U(e){if("function"==typeof e&&!e.length)return U(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=U(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function B(e){return function(t){let n;return function(e,t,n){const r=j(e,t,!0,s);d&&f&&f.running?g.push(r):k(r)}((()=>n=A((()=>(l.context={[e]:t.value},T((()=>t.children))))))),n}}function F(e,t,n){let r;return v((o=>{r=o,t===document?e():function(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return Y(e,t,r,n);P((r=>Y(e,t(),r,n)),r)}(t,e(),t.firstChild?null:void 0,n)})),()=>{r(),t.textContent=""}}function Y(t,n,r,o,s){for(e.context&&!r&&(r=[...t.childNodes]);"function"==typeof r;)r=r();if(n===r)return r;const i=typeof n,c=void 0!==o;if(t=c&&r[0]&&r[0].parentNode||t,"string"===i||"number"===i){if(e.context)return r;if("number"===i&&(n=n.toString()),c){let e=r[0];e&&3===e.nodeType?e.data=n:e=document.createTextNode(n),r=H(t,r,o,e)}else r=""!==r&&"string"==typeof r?t.firstChild.data=n:t.textContent=n}else if(null==n||"boolean"===i){if(e.context)return r;r=H(t,r,o)}else{if("function"===i)return P((()=>{let e=n();for(;"function"==typeof e;)e=e();r=Y(t,e,r,o)})),()=>r;if(Array.isArray(n)){const i=[],a=r&&Array.isArray(r);if(X(i,n,r,s))return P((()=>r=Y(t,i,r,o,!0))),()=>r;if(e.context)for(let e=0;e<i.length;e++)if(i[e].parentNode)return r=i;if(0===i.length){if(r=H(t,r,o),c)return r}else a?0===r.length?G(t,i,o):function(e,t,n){let r=n.length,o=t.length,s=r,i=0,c=0,a=t[o-1].nextSibling,u=null;for(;i<o||c<s;)if(t[i]!==n[c]){for(;t[o-1]===n[s-1];)o--,s--;if(o===i){const t=s<r?c?n[c-1].nextSibling:n[s-c]:a;for(;c<s;)e.insertBefore(n[c++],t)}else if(s===c)for(;i<o;)u&&u.has(t[i])||t[i].remove(),i++;else if(t[i]===n[s-1]&&n[c]===t[o-1]){const r=t[--o].nextSibling;e.insertBefore(n[c++],t[i++].nextSibling),e.insertBefore(n[--s],r),t[o]=n[s]}else{if(!u){u=new Map;let e=c;for(;e<s;)u.set(n[e],e++)}const r=u.get(t[i]);if(null!=r)if(c<r&&r<s){let a,l=i,p=1;for(;++l<o&&l<s&&null!=(a=u.get(t[l]))&&a===r+p;)p++;if(p>r-c){const o=t[i];for(;c<r;)e.insertBefore(n[c++],o)}else e.replaceChild(n[c++],t[i++])}else i++;else t[i++].remove()}}else i++,c++}(t,r,i):(r&&H(t),G(t,i));r=i}else if(n instanceof Node){if(e.context&&n.parentNode)return r=c?[n]:n;if(Array.isArray(r)){if(c)return r=H(t,r,o,n);H(t,r,null,n)}else null!=r&&""!==r&&t.firstChild?t.replaceChild(n,t.firstChild):t.appendChild(n);r=n}}return r}function X(e,t,n,r){let o=!1;for(let s=0,i=t.length;s<i;s++){let i=t[s],c=n&&n[s];if(i instanceof Node)e.push(i);else if(null==i||!0===i||!1===i);else if(Array.isArray(i))o=X(e,i,c)||o;else if("function"==typeof i)if(r){for(;"function"==typeof i;)i=i();o=X(e,Array.isArray(i)?i:[i],c)||o}else e.push(i),o=!0;else{const t=String(i);c&&3===c.nodeType&&c.data===t?e.push(c):e.push(document.createTextNode(t))}}return o}function G(e,t,n){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function H(e,t,n,r){if(void 0===n)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let r=!1;for(let s=t.length-1;s>=0;s--){const i=t[s];if(o!==i){const t=i.parentNode===e;r||s?t&&i.remove():t?e.replaceChild(o,i):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}function z(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0,enumerable:!0})}Symbol("fallback"),function(e){const t=Symbol("context");B(t)}();var K,Z,J=function(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)};let Q;const ee=null!==(K=globalThis.HTMLElement)&&void 0!==K?K:class{constructor(){throw new Error("@lume/element needs a DOM to operate with! If this code is running during server-side rendering, it means your app is trying to instantiate elements when it shouldn't be, and should be refactored to avoid doing that when no DOM is present.")}};class te extends ee{constructor(){super(...arguments),this.___init___=(()=>{this.__handleInitialPropertyValuesIfAny()})(),this.hasShadow=!0,this.__root=null,this.__styleRootNode=null,Z.set(this,(e=>`${e} {\n\t\tdisplay: block;\n\t}`)),this.__id=te.__elementId++,this.__dynamicStyle=null}static defineElement(e,t=customElements){if(e){if(t.get(e))return console.warn(`defineElement(): An element class was already defined for tag name ${e}.`),this;{const n=class extends(this){};return n.elementName=e,t.define(e,n),n}}return e=this.elementName,t.get(e)?(console.warn(`defineElement(): An element class was already defined for tag name ${e}.`),this):(t.define(e,this),this)}__handleInitialPropertyValuesIfAny(){const e=Object.keys(this);this._preUpgradeValues=new Map;for(const n of e){const e=Object.getOwnPropertyDescriptor(this,n);"value"in e&&(delete this[n],this._preUpgradeValues.set(n,e.value),t=()=>{var t,r;if(null===(t=this.__propsSetAtLeastOnce__)||void 0===t?void 0:t.has(n))return;const o=n in this.__proto__,s=null===(r=this.__reactifiedProps__)||void 0===r?void 0:r.has(n);(o||s)&&(this[n]=e.value)},Promise.resolve().then(t))}var t}get root(){return this.hasShadow?this.__root?this.__root:this.shadowRoot?this.__root=this.shadowRoot:this.__root=this.attachShadow({mode:"open"}):this}set root(e){if(!this.hasShadow)throw new Error("Can not set root, element.hasShadow is false.");if(this.__root||this.shadowRoot)throw new Error("Element root can only be set once if there is no ShadowRoot.");this.__root=e}get styleRoot(){return this.root}attachShadow(e){return this.__root&&console.warn("Element already has a root defined."),this.__root=super.attachShadow(e)}connectedCallback(){this.__setStyle();const e=this.template;e&&(this.__dispose=F("function"==typeof e?e.bind(this):()=>e,this.root))}disconnectedCallback(){this.__dispose&&this.__dispose(),this.__cleanupStyle()}__setStyle(){Q=this.constructor;const e="function"==typeof Q.css?Q.css=Q.css():Q.css||"",t="function"==typeof this.css?this.css():this.css||"";if(this.hasShadow){const n=":host",r=document.createElement("style");r.innerHTML=`\n\t\t\t\t${J(this,Z,"f").call(this,n)}\n\t\t\t\t${e}\n\t\t\t\t${t}\n\t\t\t`,this.styleRoot.appendChild(r)}else{const n=this.getRootNode();this.__styleRootNode=n===document?document.head:n;let r=te.__styleRootNodeRefCountPerTagName.get(this.__styleRootNode);r||te.__styleRootNodeRefCountPerTagName.set(this.__styleRootNode,r={});const o=r[this.tagName]||0;if(r[this.tagName]=o+1,0===o){const t=this.tagName.toLowerCase(),n=document.createElement("style");n.innerHTML=`\n\t\t\t\t\t${J(this,Z,"f").call(this,t)}\n\t\t\t\t\t${e?e.replaceAll(":host",t):e}\n\t\t\t\t`,n.id=this.tagName.toLowerCase(),this.__styleRootNode.appendChild(n)}if(t){const e=this.tagName.toLowerCase()+"-"+this.__id;this.setAttribute(e,"");const n=this.__dynamicStyle=document.createElement("style");n.id=e,n.innerHTML=t.replaceAll(":host",`[${e}]`);const r=this.getRootNode();this.__styleRootNode=r===document?document.head:r,this.__styleRootNode.appendChild(n)}}}__cleanupStyle(){do{if(this.hasShadow)break;const e=te.__styleRootNodeRefCountPerTagName.get(this.__styleRootNode);if(!e)break;let t=e[this.tagName];if(void 0===t)break;if(e[this.tagName]=--t,0===t){delete e[this.tagName];const t=this.__styleRootNode.querySelector("#"+this.tagName);null==t||t.remove()}}while(0);this.__dynamicStyle&&this.__dynamicStyle.remove()}adoptedCallback(){}}Z=new WeakMap,te.elementName="",te.__styleRootNodeRefCountPerTagName=new WeakMap,te.__elementId=0;var ne=__webpack_require__(889);const re=["subclass","extends",...Object.getOwnPropertyNames(new Function)],oe=new WeakMap,se=new WeakMap,ie=new ne.Ie,ce=new WeakMap,ae=new WeakMap,ue=new WeakMap,le=new WeakMap,pe=new WeakMap,fe={mode:"es5",nativeNaming:!1,prototypeWritable:!1,defaultClassDescriptor:{writable:!0,enumerable:!1,configurable:!0},setClassDescriptors:!0};class de extends Error{}class _e extends Error{}function he(e,t){let n=e.cachedPublicAccesses.get(t);return n||(Oe(e,t)?e.cachedPublicAccesses.set(t,n=ge(t).publicToPrivate.get(t)):Pe(e,t)?e.cachedPublicAccesses.set(t,n=ie.get(t)):e.cachedPublicAccesses.set(t,n=t),n)}function be(e,t){let n=e.cachedProtectedAccesses.get(t);if(n)return n;if(me(e,t))e.cachedProtectedAccesses.set(t,n=ie.get(t)||ye(t));else if(Oe(e,t)){const r=ge(t).publicToPrivate.get(t);e.cachedProtectedAccesses.set(t,n=ie.get(r)||ye(r))}else Pe(e,t)&&e.cachedProtectedAccesses.set(t,n=t);if(!n)throw new _e("invalid access of protected member");return n}function ge(e){return ce.get(e)}function ye(e){const t=function(e){let t=null,n=e.__proto__;for(;n;){if(t=oe.get(n),t)return t;n=n.__proto__}return t}(e),n=Object.create(t);return ie.set(e,n),n}function we(e,t){let n=e.cachedPrivateAccesses.get(t);if(n)return n;if(me(e,t))e.cachedPrivateAccesses.set(t,n=e.publicToPrivate.get(t)||ve(e,t));else if(Pe(e,t)){const r=ie.get(t);e.cachedPrivateAccesses.set(t,n=e.publicToPrivate.get(r)||ve(e,r))}else Oe(e,t)&&e.cachedPrivateAccesses.set(t,n=t);if(!n)throw new _e("invalid access of private member");return n}function ve(e,t){const n=Object.create(e.privatePrototype);return e.publicToPrivate.set(t,n),ce.set(n,e),n}function me(e,t,n=!0){if(!n)return(0,ne.nk)(t,e.publicPrototype);for(const n of Array.from(ae.get(e.classBrand)))if((0,ne.nk)(t,n))return!0;return!1}function Pe(e,t,n=!0){if(!n)return(0,ne.nk)(t,e.protectedPrototype);for(const n of Array.from(ue.get(e.classBrand)))if((0,ne.nk)(t,n))return!0;return!1}function Oe(e,t,n=!0){if(!n)return(0,ne.nk)(t,e.privatePrototype);for(const n of Array.from(le.get(e.classBrand)))if((0,ne.nk)(t,n))return!0;return!1}function Se(e,t,n){const{parentPublicPrototype:r,parentProtectedPrototype:o,parentPrivatePrototype:s}=t;if(me(t,n,!1))return Ae(n,r,e);if(Pe(t,n,!1))return Ae(n,o,e);if(Oe(t,n,!1))return Ae(n,s,e);throw new de("invalid super access")}function Ae(e,t,n){let r=n.get(e);if(!r){n.set(e,r=Object.create(t));const o=(0,ne.yA)(t);let s=o.length;for(;s--;){const n=o[s];(0,ne.q$)(r,n,{get:function(){let r;const o=(0,ne.ld)(t,n);if(o&&(0,ne.uh)(o)){const t=o.get;t&&(r=t.call(e))}else r=t[n];return r&&r.call&&"function"==typeof r&&(r=r.bind(e)),r},set:function(r){const o=(0,ne.ld)(t,n);if(o&&(0,ne.uh)(o)){const t=o.set;t&&(r=t.call(e,r))}else e[n]=r}},!0)}}return r}var Te;!function(e){(e=e?{...fe,...e}:fe).defaultClassDescriptor={...fe.defaultClassDescriptor,...e.defaultClassDescriptor};const{mode:t,prototypeWritable:n,setClassDescriptors:r,nativeNaming:o}=e;function s(...e){let t=!1;if("function"==typeof this&&(t=!0),e.length<=3){let n="",r=null,o=null;"string"==typeof e[0]?n=e[0]:"function"!=typeof e[0]&&"object"!=typeof e[0]||(r=e[0],o=e[1]),"function"!=typeof e[1]&&"object"!=typeof e[1]||(r=e[1],o=e[2]);const s=t?i.call(this,n,r,o):i(n,r,o);return s.extends=function(e,t,s){return t=t||r,s=s||o,i.call(e,n,t,s)},s}throw new TypeError("invalid args")}return s;function i(i,c,a){let u=this;if("string"!=typeof i)throw new TypeError("\n                You must specify a string for the 'className' argument.\n            ");let l=null;if(c&&"object"==typeof c)l=c;else if(!u&&(!c||"function"!=typeof c&&"object"!=typeof c)){let e;return o&&i?e=new Function(`return function ${i}() {}`)():(e=function(){},i&&(0,ne.q$)(e,"name",{value:i})),e.prototype={__proto__:Object.prototype,constructor:e},(0,ne.q$)(e,"subclass",{value:s,writable:!0,enumerable:!1,configurable:!1}),e}const p=a?void 0:new ne.Ie;a&&(pe.get(a)||pe.set(a,new ne.Ie));const f={className:i,get publicToPrivate(){return p||pe.get(a)},classBrand:a=a||{brand:"lexical"},cachedPublicAccesses:new WeakMap,cachedProtectedAccesses:new WeakMap,cachedPrivateAccesses:new WeakMap},d=new WeakMap,_=Se.bind(null,d,f),h=he.bind(null,f),b=be.bind(null,f),g=we.bind(null,f);if(h.prototype={},b.prototype={},g.prototype={},h.Public=h,h.Protected=b,h.Private=g,h.Super=_,b.Public=h,b.Protected=b,b.Private=g,b.Super=_,l=l||c&&c(h,b,g,_),l&&"object"!=typeof l&&"function"!=typeof l)throw new TypeError("\n                The return value of a class definer function, if any, should be\n                an object, or a class constructor.\n            ");let y,w=null;"function"==typeof l&&(w=l,l=l.prototype,u=w.prototype.__proto__.constructor),l&&(y=l.static,delete l.static,"function"==typeof l.public&&(l.public=l.public(b,g)),"function"==typeof l.protected&&(l.protected=l.protected(h,g)),"function"==typeof l.private&&(l.private=l.private(h,b))),u=u||Object;const v=u.prototype,m=l&&l.public||l||Object.create(v);m.__proto__!==v&&(m.__proto__=v);const P=function(e){let t,n=e;for(;n&&!t;)t=oe.get(n),n=n.__proto__;return t||{}}(v),O=l&&l.protected||Object.create(P);O.__proto__!==P&&(O.__proto__=P),oe.set(m,O);const S=function(e){let t,n=e;for(;n&&!t;)t=se.get(n),n=n.__proto__;return t||{}}(v),A=l&&l.private||Object.create(S);if(A.__proto__!==S&&(A.__proto__=S),se.set(m,A),ae.get(a)||ae.set(a,new Set),ue.get(a)||ue.set(a,new Set),le.get(a)||le.set(a,new Set),ae.get(a).add(m),ue.get(a).add(O),le.get(a).add(A),f.publicPrototype=m,f.privatePrototype=A,f.protectedPrototype=O,f.parentPublicPrototype=v,f.parentProtectedPrototype=P,f.parentPrivatePrototype=S,(0,ne.Gm)(h.prototype,m),(0,ne.Gm)(b.prototype,O),(0,ne.Gm)(g.prototype,A),l&&(delete l.public,delete l.protected,delete l.private,l!==m&&(0,ne.Gm)(l,m)),w)return y&&(0,ne.Gm)(y,w),w;const T=m.hasOwnProperty("constructor")?m.constructor:null;let N=null,C=null;if("es5"!==t)throw new TypeError("\n                The lowclass \"mode\" option can only be 'es5' for now.\n            ");if(N=function(){let e=null,t=null;return t=T||u,t!==Object&&(e=t.apply(this,arguments)),!e||"object"!=typeof e&&"function"!=typeof e?this:e},C=m,i)if(o){const e=(0,ne.Sh)(N),t=N.prototype;N=new Function(" userConstructor, ParentClass ",`\n                    return function ${i}() { ${e} }\n                `)(T,u),N.prototype=t}else(0,ne.q$)(N,"name",{value:i});return T&&T.length&&(0,ne.q$)(N,"length",{value:T.length}),N.__proto__=u,y&&(0,ne.Gm)(y,N),(0,ne.q$)(N,"subclass",{value:s,writable:!0,enumerable:!1,configurable:!1}),N.prototype=C,N.prototype.constructor=N,r&&((0,ne.U8)(N,e,re),(0,ne.q$)(N,"prototype",{writable:n}),(0,ne.Md)(N.prototype,e),(0,ne.Md)(O,e),(0,ne.Md)(A,e)),f.constructor=N,N}}(),function(e){e.PROXIES_ON_INSTANCE_AND_PROTOTYPE="PROXIES_ON_INSTANCE_AND_PROTOTYPE",e.PROXIES_ON_PROTOTYPE="PROXIES_ON_PROTOTYPE",e.PROXY_AFTER_INSTANCE_AND_PROTOTYPE="PROXY_AFTER_INSTANCE_AND_PROTOTYPE"}(Te||(Te={})),Te.PROXIES_ON_INSTANCE_AND_PROTOTYPE;new WeakMap;function Ne(){return this()}function Ce(e){return this(e)}function ke(e){const[t,n]=m(e,{equals:!1}),r=e=>void 0===e?t():(n((()=>e)),e),o=Ne.bind(r),s=Ce.bind(r);return r.get=o,r.set=s,r[0]=o,r[1]=s,r[Symbol.iterator]=function*(){yield r[0],yield r[1]},r}function Ee(e){let t;return v((n=>{t=n,function(e,t,n){r=q;const o=j(e,t,!1,s),i=p&&V(l,p.id);i&&(o.suspense=i),o.user=!0,y?y.push(o):k(o)}(e)})),t}function je(e,t,n){if(1===arguments.length&&"kind"in e){const t=e;return"class"===t.kind?{...t,finisher:Re}:{...t,finisher(e){var n,r;return xe(e,t.key),null!==(r=null===(n=t.finisher)||void 0===n?void 0:n.call(t,e))&&void 0!==r?r:e}}}if(1===arguments.length&&"function"==typeof e)return Re(e);xe(e.constructor,t)}function xe(e,t){e.reactiveProperties&&e.hasOwnProperty("reactiveProperties")||(e.reactiveProperties=[]),e.reactiveProperties.includes(t)||e.reactiveProperties.push(t)}function Re(e){var t;return e.hasOwnProperty("__isReactive__")?e:((t=class extends e{constructor(...t){if(h)return A((()=>{const n=Reflect.construct(e,t,new.target);return De(n,e),n}));super(...t),De(this,e)}}).__isReactive__=!0,t)}function Me(e,t){if("string"!=typeof t)throw new Error("TODO: support for non-string fields with @reactive decorator");const n="v_"+t;let r,o,s,i=(0,ne.ld)(e,t);if(i)if(r=i.get,o=i.set,r||o){if(!r||!o)return void console.warn('The `@reactive` decorator was used on an accessor named "'+t+'" which had a getter or a setter, but not both. Reactivity on accessors works only when accessors have both get and set. In this case the decorator does not do anything.');delete i.get,delete i.set}else{if(s=i.value,!i.writable)return void console.warn("The `@reactive` decorator was used on a property named "+t+" that is not writable. Reactivity is not enabled for non-writable properties.");delete i.value,delete i.writable}i={configurable:!0,enumerable:!0,...i,get:r?function(){return qe(this,n,s)(),r.call(this)}:function(){return qe(this,n,s)()},set:o?function(e){o.call(this,e),qe(this,n)(e),this.__propsSetAtLeastOnce__||(this.__propsSetAtLeastOnce__=new Set),this.__propsSetAtLeastOnce__.add(t)}:function(e){qe(this,n)(e),this.__propsSetAtLeastOnce__||(this.__propsSetAtLeastOnce__=new Set),this.__propsSetAtLeastOnce__.add(t)}},e.__reactifiedProps__||(e.__reactifiedProps__=new Set),e.__reactifiedProps__.add(t),Object.defineProperty(e,t,i)}function qe(e,t,n=void 0){let r=e[t];return r||(e[t]=r=ke(n),r)}function De(e,t){if(function(e){return"function"==typeof e}(t)){const n=t.reactiveProperties;Array.isArray(n)&&Ie(e,n)}else Ie(e,t);return e}function Ie(e,t){var n;for(const r of t){if(null===(n=e.__reactifiedProps__)||void 0===n?void 0:n.has(r))continue;const t=e[r];Me(e,r),e[r]=t}}function $e(e,t,n,r){let o=!0;const s=Ee((()=>{const t=e();o&&!(o=!1)?r(t):o=!0})),i=Ee((()=>{const e=n();o&&!(o=!1)?t(e):o=!0}));return function(){s(),i()}}function Le(e,t,n){if(e&&"kind"in e){const t=e;return{...t,finisher(e){var n;return We(e.prototype,t.key),null!==(n=t.finisher&&t.finisher(e))&&void 0!==n?n:e}}}if(e&&t)return We(e,t,n);const r=e;return(e,t,n)=>{if(e&&"kind"in e){const t=e;return{...t,finisher(e){var n;return We(e.prototype,t.key,void 0,r),null!==(n=t.finisher&&t.finisher(e))&&void 0!==n?n:e}}}return We(e,t,n,r)}}function We(e,t,n,r){const o=e.constructor;if(!o.observedAttributes||!o.hasOwnProperty("observedAttributes")){const e=o.__proto__.observedAttributes;if(e&&!Array.isArray(e))throw new TypeError("observedAttributes is in the wrong format. Maybe you forgot to decorate your custom element class with the `element` decorator.");z(o,"observedAttributes",[...e||[]])}if(!Array.isArray(o.observedAttributes))throw new TypeError("observedAttributes is in the wrong format. Maybe you forgot to decorate your custom element class with the `element` decorator.");const s=t.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase();if(o.observedAttributes.includes(s)||o.observedAttributes.push(s),o.reactiveProperties&&o.hasOwnProperty("reactiveProperties")||z(o,"reactiveProperties",[...o.reactiveProperties||[]]),o.reactiveProperties.includes(t)||o.reactiveProperties.push(t),function(e,t,n,r){if(!e.__hasAttributeChangedCallback){e.__hasAttributeChangedCallback=!0;const t=e.attributeChangedCallback;e.attributeChangedCallback=function(n,r,o){var s,i;t?t.call(this,n,r,o):null===(i=null===(s=e.__proto__)||void 0===s?void 0:s.attributeChangedCallback)||void 0===i||i.call(this,n,r,o);const c=this.__attributesToProps&&this.__attributesToProps[n];if(c){const e=c.attributeHandler;this[c.name]=e&&e.from?e.from(o):o}}}e.hasOwnProperty("__attributesToProps")||Object.defineProperty(e,"__attributesToProps",{value:{__proto__:e.__attributesToProps||Object.prototype}}),e.__attributesToProps[t]&&console.warn('The `@attribute` decorator is overriding an already-existing attribute-to-property mapping for the "'+t+'" attribute.'),e.__attributesToProps[t]={name:n,attributeHandler:r}}(e,s,t,r),n)return n}function Ve(e=""){return Le(Le.string(e))}function Ue(e=0){return Le(Le.number(e))}function Be(e=!1){return Le(Le.boolean(e))}function Fe(e,t=!0){let n="";return"string"==typeof e?(n=e,Ye.bind(null,n,t)):Ye(n,t=!1,e)}function Ye(e,t,n){return"kind"in n?{...n,finisher:Xe.bind(null,e,t)}:Xe(e,t,n)}function Xe(e,t,n){const r=n.observedAttributes;if(n.hasOwnProperty("elementName")?e=n.elementName||e:n.elementName=e,Array.isArray(r));else if(r&&"object"==typeof r){n.observedAttributes=void 0;for(const e in r)We(n.prototype,e,void 0,r[e])}n=je(n);class o extends n{constructor(...e){super(...e),function(e){if(e instanceof te)for(const[t,n]of e._preUpgradeValues){if(!(t in e))continue;e._preUpgradeValues.delete(t);const r=Object.getOwnPropertyDescriptor(e,t);r&&"value"in r&&delete e[t],e[t]=n}}(this)}}return e&&t&&customElements.define(e,o),o}__webpack_require__(574),Le.string=(e="")=>({default:e,from(e){return null==e?this.default:e}}),Le.number=(e=0)=>({default:e,from(e){return null==e?this.default:+e}}),Le.boolean=(e=!1)=>({default:e,from(e){return null==e?this.default:"false"!==e}});const Ge=function(e,...t){let n="";for(let r=0;r<t.length;r++)n+=e[r]+String(t[r]);return n+e[e.length-1]},He="0.8.1"})();var __webpack_export_target__=LUME="undefined"==typeof LUME?{}:LUME;for(var i in __webpack_exports__)__webpack_export_target__[i]=__webpack_exports__[i];__webpack_exports__.__esModule&&Object.defineProperty(__webpack_export_target__,"__esModule",{value:!0})})();
//# sourceMappingURL=index.js.map