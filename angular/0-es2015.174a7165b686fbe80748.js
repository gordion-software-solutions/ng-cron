(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Af8m:function(e,t,n){"use strict";(function(e){var r=n("kq48"),a="object"==typeof exports&&exports&&!exports.nodeType&&exports,i=a&&"object"==typeof e&&e&&!e.nodeType&&e,o=i&&i.exports===a&&r.a.process,s=function(){try{return i&&i.require&&i.require("util").types||o&&o.binding&&o.binding("util")}catch(e){}}();t.a=s}).call(this,n("cyaT")(e))},LMvA:function(e,t,n){"use strict";n.d(t,"a",(function(){return Ge}));var r=n("EM62"),a=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e},i=n("fw2E"),o=i.a.Symbol,s=Object.prototype,l=s.hasOwnProperty,c=s.toString,u=o?o.toStringTag:void 0,g=Object.prototype.toString,p=o?o.toStringTag:void 0,f=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":p&&p in Object(e)?function(e){var t=l.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(i){}var a=c.call(e);return r&&(t?e[u]=n:delete e[u]),a}(e):function(e){return g.call(e)}(e)},d=function(e){return null!=e&&"object"==typeof e},h=function(e){return d(e)&&"[object Arguments]"==f(e)},b=Object.prototype,y=b.hasOwnProperty,v=b.propertyIsEnumerable,m=h(function(){return arguments}())?h:function(e){return d(e)&&y.call(e,"callee")&&!v.call(e,"callee")},w=Array.isArray,j=n("TPB+"),k=/^(?:0|[1-9]\d*)$/,x=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&k.test(e))&&e>-1&&e%1==0&&e<t},F=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},A={};A["[object Float32Array]"]=A["[object Float64Array]"]=A["[object Int8Array]"]=A["[object Int16Array]"]=A["[object Int32Array]"]=A["[object Uint8Array]"]=A["[object Uint8ClampedArray]"]=A["[object Uint16Array]"]=A["[object Uint32Array]"]=!0,A["[object Arguments]"]=A["[object Array]"]=A["[object ArrayBuffer]"]=A["[object Boolean]"]=A["[object DataView]"]=A["[object Date]"]=A["[object Error]"]=A["[object Function]"]=A["[object Map]"]=A["[object Number]"]=A["[object Object]"]=A["[object RegExp]"]=A["[object Set]"]=A["[object String]"]=A["[object WeakMap]"]=!1;var _,O,S,E,$=n("Af8m"),P=$.a&&$.a.isTypedArray,T=P?(_=P,function(e){return _(e)}):function(e){return d(e)&&F(e.length)&&!!A[f(e)]},L=Object.prototype.hasOwnProperty,C=function(e,t){var n=w(e),r=!n&&m(e),a=!n&&!r&&Object(j.a)(e),i=!n&&!r&&!a&&T(e),o=n||r||a||i,s=o?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],l=s.length;for(var c in e)!t&&!L.call(e,c)||o&&("length"==c||a&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||x(c,l))||s.push(c);return s},I=Object.prototype,M=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||I)},D=function(e,t){return function(n){return e(t(n))}},H=D(Object.keys,Object),z=Object.prototype.hasOwnProperty,N=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},R=function(e){if(!N(e))return!1;var t=f(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},q=function(e){return null!=e&&F(e.length)&&!R(e)},B=function(e){return q(e)?C(e):function(e){if(!M(e))return H(e);var t=[];for(var n in Object(e))z.call(e,n)&&"constructor"!=n&&t.push(n);return t}(e)},U=function(e,t){if(null==e)return e;if(!q(e))return function(e,t){return e&&function(e,t,n){for(var r=-1,a=Object(e),i=n(e),o=i.length;o--;){var s=i[++r];if(!1===t(a[s],s,a))break}return e}(e,t,B)}(e,t);for(var n=e.length,r=-1,a=Object(e);++r<n&&!1!==t(a[r],r,a););return e},Z=function(e){return e},W=n("n5u1"),G=n.n(W),J=(O={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},function(e){return null==O?void 0:O[e]}),Y=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a},V=o?o.prototype:void 0,Q=V?V.toString:void 0,X=function(e){return null==e?"":function e(t){if("string"==typeof t)return t;if(w(t))return Y(t,e)+"";if(function(e){return"symbol"==typeof e||d(e)&&"[object Symbol]"==f(e)}(t))return Q?Q.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}(e)},K=/[&<>"']/g,ee=RegExp(K.source),te=/<%=([\s\S]+?)%>/g,ne={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:te,variable:"",imports:{_:{escape:function(e){return(e=X(e))&&ee.test(e)?e.replace(K,J):e}}}},re=i.a["__core-js_shared__"],ae=(S=/[^.]+$/.exec(re&&re.keys&&re.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"",ie=Function.prototype.toString,oe=/^\[object .+?Constructor\]$/,se=RegExp("^"+Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),le=function(){try{var e=function(e){return!(!N(e)||function(e){return!!ae&&ae in e}(e))&&(R(e)?se:oe).test(function(e){if(null!=e){try{return ie.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(e))}(t=function(e,t){return null==e?void 0:e.defineProperty}(Object))?t:void 0;return e({},"",{}),e}catch(n){}var t}(),ce=function(e,t,n){"__proto__"==t&&le?le(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n},ue=function(e,t){return e===t||e!=e&&t!=t},ge=Object.prototype.hasOwnProperty,pe=function(e,t,n){var r=e[t];ge.call(e,t)&&ue(r,n)&&(void 0!==n||t in e)||ce(e,t,n)},fe=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)},de=Math.max,he=Date.now,be=function(e){var t=0,n=0;return function(){var r=he(),a=16-(r-n);if(n=r,a>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}(le?function(e,t){return le(e,"toString",{configurable:!0,enumerable:!1,value:(n=t,function(){return n}),writable:!0});var n}:Z),ye=function(e,t){return be(function(e,t,n){return t=de(void 0===t?e.length-1:t,0),function(){for(var r=arguments,a=-1,i=de(r.length-t,0),o=Array(i);++a<i;)o[a]=r[t+a];a=-1;for(var s=Array(t+1);++a<t;)s[a]=r[a];return s[t]=n(o),fe(e,this,s)}}(e,t,Z),e+"")},ve=function(e,t,n){if(!N(n))return!1;var r=typeof t;return!!("number"==r?q(n)&&x(t,n.length):"string"==r&&t in n)&&ue(n[t],e)},me=Object.prototype.hasOwnProperty,we=(E=function(e,t,n,r){!function(e,t,n,r){var a=!n;n||(n={});for(var i=-1,o=t.length;++i<o;){var s=t[i],l=r?r(n[s],e[s],s,n,e):void 0;void 0===l&&(l=e[s]),a?ce(n,s,l):pe(n,s,l)}}(t,function(e){return q(e)?C(e,!0):function(e){if(!N(e))return function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}(e);var t=M(e),n=[];for(var r in e)("constructor"!=r||!t&&me.call(e,r))&&n.push(r);return n}(e)}(t),e,r)},ye((function(e,t){var n=-1,r=t.length,a=r>1?t[r-1]:void 0,i=r>2?t[2]:void 0;for(a=E.length>3&&"function"==typeof a?(r--,a):void 0,i&&ve(t[0],t[1],i)&&(a=r<3?void 0:a,r=1),e=Object(e);++n<r;){var o=t[n];o&&E(e,o,0,a)}return e}))),je=D(Object.getPrototypeOf,Object),ke=Function.prototype.toString,xe=Object.prototype.hasOwnProperty,Fe=ke.call(Object),Ae=function(e){if(!d(e))return!1;var t=f(e);return"[object Error]"==t||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!function(e){if(!d(e)||"[object Object]"!=f(e))return!1;var t=je(e);if(null===t)return!0;var n=xe.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&ke.call(n)==Fe}(e)},_e=ye((function(e,t){try{return fe(e,void 0,t)}catch(n){return Ae(n)?n:new Error(n)}})),Oe=Object.prototype,Se=Oe.hasOwnProperty,Ee=function(e,t,n,r){return void 0===e||ue(e,Oe[n])&&!Se.call(r,n)?t:e},$e={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Pe=function(e){return"\\"+$e[e]},Te=/\b__p \+= '';/g,Le=/\b(__p \+=) '' \+/g,Ce=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ie=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Me=/($^)/,De=/['\n\r\u2028\u2029\\]/g,He=Object.prototype.hasOwnProperty,ze=n("e4iD");let Ne=(()=>{class e{constructor(e){this.sanitizer=e}highlight(e,t){e instanceof r.l&&(t.code&&(e.nativeElement.innerHTML=this.sanitizer.sanitize(r.H.HTML,this.escapeHtml(t.code))),t.interpolation&&(e.nativeElement.innerHTML=this.interpolate(e.nativeElement.innerHTML,t.interpolation)),G.a.highlightElement(e.nativeElement,t.async,t.callback))}hooks(){return G.a.hooks}escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}interpolate(e,t){return t&&"object"==typeof t?(ne.interpolate=/{{([\s\S]+?)}}/g,function(e,t,n){var r=ne.imports._.templateSettings||ne;n&&ve(e,t,n)&&(t=void 0),e=X(e),t=we({},t,r,Ee);var a,i,o=we({},t.imports,r.imports,Ee),s=B(o),l=function(e,t){return Y(t,(function(t){return e[t]}))}(o,s),c=0,u=t.interpolate||Me,g="__p += '",p=RegExp((t.escape||Me).source+"|"+u.source+"|"+(u===te?Ie:Me).source+"|"+(t.evaluate||Me).source+"|$","g"),f=He.call(t,"sourceURL")?"//# sourceURL="+(t.sourceURL+"").replace(/[\r\n]/g," ")+"\n":"";e.replace(p,(function(t,n,r,o,s,l){return r||(r=o),g+=e.slice(c,l).replace(De,Pe),n&&(a=!0,g+="' +\n__e("+n+") +\n'"),s&&(i=!0,g+="';\n"+s+";\n__p += '"),r&&(g+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),c=l+t.length,t})),g+="';\n";var d=He.call(t,"variable")&&t.variable;d||(g="with (obj) {\n"+g+"\n}\n"),g=(i?g.replace(Te,""):g).replace(Le,"$1").replace(Ce,"$1;"),g="function("+(d||"obj")+") {\n"+(d?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(a?", __e = _.escape":"")+(i?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+g+"return __p\n}";var h=_e((function(){return Function(s,f+"return "+g).apply(void 0,l)}));if(h.source=g,Ae(h))throw h;return h}(e)(t)):e}}return e.\u0275fac=function(t){return new(t||e)(r.Ub(ze.b))},e.\u0275prov=r.Hb({token:e,factory:e.\u0275fac}),e})();const Re=["el"];let qe=(()=>{class e{constructor(e,t){this.changeDetectorRef=e,this.prismService=t,this.ready=!1,this._async=!1}set cd(e){this._cd=e,!0===this.ready&&(this.__properties=e)}get cd(){return this._cd}set async(e){this._async=e}get async(){return this._async}set callback(e){this._callback=e}get callback(){return this._callback}set code(e){this._code=e,this.ready&&!0===this.__properties.code&&this.highlightElement({code:e,language:this.language})}get code(){return this._code}set hooks(e){var t,n,r;this._hooks=e,e instanceof Object&&(n=(e,t)=>{this.prismService.hooks().add(t,e)},(w(t=e)?a:U)(t,"function"==typeof(r=n)?r:Z)),this.highlightElement({code:this.code,language:this.language})}get hooks(){return this._hooks}set language(e){if(!e)throw new Error("Missing property `language`.");if("string"!=typeof e)throw new Error(`Property \`language\` should be \`string\` instead of provided \`${typeof e}\``);this._language=e,this.highlightElement({code:this.code,language:e})}get language(){return this._language}highlightElement(e){!0===this.ready&&this.prismService.highlight(this.el,{async:this.async,callback:this.callback,code:e.code,interpolation:this.interpolation})}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(r.h),r.Lb(Ne))},e.\u0275dir=r.Gb({type:e,viewQuery:function(e,t){var n;1&e&&r.qc(Re,!0,r.l),2&e&&r.gc(n=r.Yb())&&(t.el=n.first)},inputs:{cd:"cd",async:"async",callback:"callback",code:"code",hooks:"hooks",language:"language",interpolation:"interpolation"}}),e})();var Be=n("2kYt");function Ue(e,t){1&e&&r.cc(0,0,["*ngIf","!code"])}function Ze(e,t){if(1&e&&(r.Qb(0,"pre"),r.Qb(1,"code",null,1),r.mc(3,Ue,1,0,"ng-content",2),r.Pb(),r.nc(4,"\n"),r.Pb()),2&e){const e=r.Zb();r.Ab("language-",e.language,""),r.xb(1),r.Ab("language-",e.language,""),r.xb(2),r.ec("ngIf",!e.code)}}const We=["*"];let Ge=(()=>{class e extends qe{constructor(e,t){super(e,t),this.changeDetectorRef=e,this.prismService=t}ngAfterContentInit(){this.cd&&(this.__properties=this.cd)}ngAfterViewInit(){this.ready=!0,this.highlightElement({code:this.code,language:this.language})}}return e.\u0275fac=function(t){return new(t||e)(r.Lb(r.h),r.Lb(Ne))},e.\u0275cmp=r.Fb({type:e,selectors:[["app-ngx-prism"]],features:[r.wb([Ne]),r.ub],ngContentSelectors:We,decls:1,vars:1,consts:[[3,"class",4,"ngIf"],["el",""],[4,"ngIf"]],template:function(e,t){1&e&&(r.dc(),r.mc(0,Ze,5,7,"pre",0)),2&e&&r.ec("ngIf",t.language)},directives:[Be.j],encapsulation:2,changeDetection:0}),e})()},"TPB+":function(e,t,n){"use strict";(function(e){var r=n("fw2E"),a=n("VxF/"),i="object"==typeof exports&&exports&&!exports.nodeType&&exports,o=i&&"object"==typeof e&&e&&!e.nodeType&&e,s=o&&o.exports===i?r.a.Buffer:void 0;t.a=(s?s.isBuffer:void 0)||a.a}).call(this,n("cyaT")(e))},"VxF/":function(e,t,n){"use strict";t.a=function(){return!1}},cyaT:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},f8oL:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("2kYt"),a=(n("LMvA"),n("EM62"));let i=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(t){return new(t||e)},imports:[[r.b]]}),e})()},fw2E:function(e,t,n){"use strict";var r=n("kq48"),a="object"==typeof self&&self&&self.Object===Object&&self,i=r.a||a||Function("return this")();t.a=i},kq48:function(e,t,n){"use strict";var r="object"==typeof global&&global&&global.Object===Object&&global;t.a=r},n5u1:function(e,t,n){var r=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof a?new a(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var a,i;switch(n=n||{},r.util.type(t)){case"Object":if(i=r.util.objId(t),n[i])return n[i];for(var o in n[i]=a={},t)t.hasOwnProperty(o)&&(a[o]=e(t[o],n));return a;case"Array":return i=r.util.objId(t),n[i]?n[i]:(n[i]=a=[],t.forEach((function(t,r){a[r]=e(t,n)})),a);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(r.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var r="no-"+t;e;){var a=e.classList;if(a.contains(t))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!n}},languages:{extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var i=(a=a||r.languages)[e],o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in n)n.hasOwnProperty(l)&&(o[l]=n[l]);n.hasOwnProperty(s)||(o[s]=i[s])}var c=a[e];return a[e]=o,r.languages.DFS(r.languages,(function(t,n){n===c&&t!=e&&(this[t]=o)})),o},DFS:function e(t,n,a,i){i=i||{};var o=r.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],a||s);var l=t[s],c=r.util.type(l);"Object"!==c||i[o(l)]?"Array"!==c||i[o(l)]||(i[o(l)]=!0,e(l,n,s,i)):(i[o(l)]=!0,e(l,n,null,i))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),r.hooks.run("before-all-elements-highlight",a);for(var i,o=0;i=a.elements[o++];)r.highlightElement(i,!0===t,a.callback)},highlightElement:function(n,a,i){var o=r.util.getLanguage(n),s=r.languages[o];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+o;var l=n.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+o);var c={element:n,language:o,grammar:s,code:n.textContent};function u(e){c.highlightedCode=e,r.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r.hooks.run("after-highlight",c),r.hooks.run("complete",c),i&&i.call(c.element)}if(r.hooks.run("before-sanity-check",c),!c.code)return r.hooks.run("complete",c),void(i&&i.call(c.element));if(r.hooks.run("before-highlight",c),c.grammar)if(a&&e.Worker){var g=new Worker(r.filename);g.onmessage=function(e){u(e.data)},g.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(r.highlight(c.code,c.grammar,c.language));else u(r.util.encode(c.code))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return r.hooks.run("before-tokenize",i),i.tokens=r.tokenize(i.code,i.grammar),r.hooks.run("after-tokenize",i),a.stringify(r.util.encode(i.tokens),i.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var l in n)t[l]=n[l];delete t.rest}var c=new i;return o(c,c.head,e),function e(t,n,i,l,c,u){for(var g in i)if(i.hasOwnProperty(g)&&i[g]){var p=i[g];p=Array.isArray(p)?p:[p];for(var f=0;f<p.length;++f){if(u&&u.cause==g+","+f)return;var d=p[f],h=d.inside,b=!!d.lookbehind,y=!!d.greedy,v=0,m=d.alias;if(y&&!d.pattern.global){var w=d.pattern.toString().match(/[imsuy]*$/)[0];d.pattern=RegExp(d.pattern.source,w+"g")}for(var j=d.pattern||d,k=l.next,x=c;k!==n.tail&&!(u&&x>=u.reach);x+=k.value.length,k=k.next){var F=k.value;if(n.length>t.length)return;if(!(F instanceof a)){var A=1;if(y&&k!=n.tail.prev){if(j.lastIndex=x,!($=j.exec(t)))break;var _=$.index+(b&&$[1]?$[1].length:0),O=$.index+$[0].length,S=x;for(S+=k.value.length;_>=S;)S+=(k=k.next).value.length;if(x=S-=k.value.length,k.value instanceof a)continue;for(var E=k;E!==n.tail&&(S<O||"string"==typeof E.value);E=E.next)A++,S+=E.value.length;A--,F=t.slice(x,S),$.index-=x}else{j.lastIndex=0;var $=j.exec(F)}if($){b&&(v=$[1]?$[1].length:0),_=$.index+v;var P=$[0].slice(v),T=(O=_+P.length,F.slice(0,_)),L=F.slice(O),C=x+F.length;u&&C>u.reach&&(u.reach=C);var I=k.prev;T&&(I=o(n,I,T),x+=T.length),s(n,I,A),k=o(n,I,new a(g,h?r.tokenize(P,h):P,m,P)),L&&o(n,k,L),A>1&&e(t,n,i,k.prev,x,{cause:g+","+f,reach:C})}}}}}}(e,c,t,c.head,0),function(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}(c)},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(t)}},Token:a};function a(e,t,n,r){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length}function i(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function o(e,t,n){var r=t.next,a={value:n,prev:t,next:r};return t.next=a,r.prev=a,e.length++,a}function s(e,t,n){for(var r=t.next,a=0;a<n&&r!==e.tail;a++)r=r.next;t.next=r,r.prev=t,e.length-=a}if(e.Prism=r,a.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var a="";return t.forEach((function(t){a+=e(t,n)})),a}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(i.classes,o):i.classes.push(o)),r.hooks.run("wrap",i);var s="";for(var l in i.attributes)s+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+s+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),a=n.language,i=n.immediateClose;e.postMessage(r.highlight(n.code,r.languages[a],a)),i&&e.close()}),!1),r):r;var l=r.util.currentScript();function c(){r.manual||r.highlightAll()}if(l&&(r.filename=l.src,l.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var u=document.readyState;"loading"===u||"interactive"===u&&l&&l.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}return r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=r),"undefined"!=typeof global&&(global.Prism=r),r.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},r.languages.markup.tag.inside["attr-value"].inside.entity=r.languages.markup.entity,r.languages.markup.doctype.inside["internal-subset"].inside=r.languages.markup,r.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(r.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:r.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+t]={pattern:/[\s\S]+/,inside:r.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:a},r.languages.insertBefore("markup","cdata",i)}}),r.languages.html=r.languages.markup,r.languages.mathml=r.languages.markup,r.languages.svg=r.languages.markup,r.languages.xml=r.languages.extend("markup",{}),r.languages.ssml=r.languages.xml,r.languages.atom=r.languages.xml,r.languages.rss=r.languages.xml,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(r),r.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},r.languages.javascript=r.languages.extend("clike",{"class-name":[r.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),r.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,r.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:r.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:r.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:r.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:r.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),r.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:r.languages.javascript}},string:/[\s\S]+/}}}),r.languages.markup&&r.languages.markup.tag.addInlined("script","javascript"),r.languages.js=r.languages.javascript,function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e=window.Prism,t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',r=/\blang(?:uage)?-([\w-]+)\b/i;e.hooks.add("before-highlightall",(function(e){e.selector+=", "+n})),e.hooks.add("before-sanity-check",(function(r){var a=r.element;if(a.matches(n)){r.code="",a.setAttribute("data-src-status","loading");var o=a.appendChild(document.createElement("CODE"));o.textContent="Loading\u2026";var s=a.getAttribute("data-src"),l=r.language;if("none"===l){var c=(/\.(\w+)$/.exec(s)||[,"none"])[1];l=t[c]||c}i(o,l),i(a,l);var u=e.plugins.autoloader;u&&u.loadLanguages(l);var g=new XMLHttpRequest;g.open("GET",s,!0),g.onreadystatechange=function(){4==g.readyState&&(g.status<400&&g.responseText?(a.setAttribute("data-src-status","loaded"),o.textContent=g.responseText,e.highlightElement(o)):(a.setAttribute("data-src-status","failed"),o.textContent=g.status>=400?"\u2716 Error "+g.status+" while fetching file: "+g.statusText:"\u2716 Error: File does not exist or is empty"))},g.send(null)}})),e.plugins.fileHighlight={highlight:function(t){for(var r,a=(t||document).querySelectorAll(n),i=0;r=a[i++];)e.highlightElement(r)}};var a=!1;e.fileHighlight=function(){a||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),a=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}function i(e,t){var n=e.className;n=n.replace(r," ")+" language-"+t,e.className=n.replace(/\s+/g," ").trim()}}()}}]);