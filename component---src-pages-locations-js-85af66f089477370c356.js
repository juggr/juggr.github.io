(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/PtW":function(t,n,r){"use strict";r("a1Th"),r("h7Nl"),r("Btvt"),r("LK8F");n.a=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},"08tI":function(t,n,r){"use strict";function e(t,n){for(var r=0,e=n.length,u=[];r<e;)t(n[r])&&(u[u.length]=n[r]),r+=1;return u}r.d(n,"a",(function(){return e}))},"1z8A":function(t,n,r){"use strict";r.d(n,"a",(function(){return a}));var e=r("SqIO"),u=r("L8iz"),c=r("nr3+");function a(t){return function n(r,a,i){switch(arguments.length){case 0:return n;case 1:return Object(c.a)(r)?n:Object(u.a)((function(n,e){return t(r,n,e)}));case 2:return Object(c.a)(r)&&Object(c.a)(a)?n:Object(c.a)(r)?Object(u.a)((function(n,r){return t(n,a,r)})):Object(c.a)(a)?Object(u.a)((function(n,e){return t(r,n,e)})):Object(e.a)((function(n){return t(r,a,n)}));default:return Object(c.a)(r)&&Object(c.a)(a)&&Object(c.a)(i)?n:Object(c.a)(r)&&Object(c.a)(a)?Object(u.a)((function(n,r){return t(n,r,i)})):Object(c.a)(r)&&Object(c.a)(i)?Object(u.a)((function(n,r){return t(n,a,r)})):Object(c.a)(a)&&Object(c.a)(i)?Object(u.a)((function(n,e){return t(r,n,e)})):Object(c.a)(r)?Object(e.a)((function(n){return t(n,a,i)})):Object(c.a)(a)?Object(e.a)((function(n){return t(r,n,i)})):Object(c.a)(i)?Object(e.a)((function(n){return t(r,a,n)})):t(r,a,i)}}}},"3qHG":function(t,n,r){"use strict";r.d(n,"a",(function(){return u}));var e=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},t}();function u(t){return new e(t)}},D5eF:function(t,n,r){"use strict";r("Vd3H");var e=r("L8iz"),u=Object(e.a)((function(t,n){return Array.prototype.slice.call(n,0).sort((function(n,r){for(var e=0,u=0;0===e&&u<t.length;)e=t[u](n,r),u+=1;return e}))}));n.a=u},FoFn:function(t,n,r){"use strict";r.r(n),r.d(n,"query",(function(){return l}));r("f3/d"),r("91GP"),r("Z2Ku"),r("L9s1");var e=r("q1tI"),u=r.n(e),c=r("Wbzz"),a=r("Bl7J"),i=r("KMkw"),o=r("D5eF"),f=r("ZDN8"),s=r("xOLr");n.default=function(t){var n=t.data,r=n.locations.edges.map((function(t){return t.node})),e=n.talks.edges.map((function(t){return t.node})),l=r.map((function(t){var n=i.a((function(n){return n.frontmatter.location.includes(t.fields.locationId)}))(i.a((function(t){return t.frontmatter.location}))(e));return Object.assign({},t,{talks:n})})),p=o.a([f.a((function(t){return t.talks.length})),s.a((function(t){return t.frontmatter.name}))])(l);return u.a.createElement(a.a,null,u.a.createElement("h2",null,"Alle Locations"),u.a.createElement("ul",null,p.map((function(t){return u.a.createElement("li",{key:t.fields.slug},u.a.createElement(c.Link,{to:t.fields.slug},t.frontmatter.name)," (",t.talks.length," Talks)")}))))};var l="3421597114"},JI66:function(t,n,r){"use strict";r.d(n,"a",(function(){return e}));r("a1Th"),r("h7Nl"),r("Btvt");function e(t){return"[object String]"===Object.prototype.toString.call(t)}},JVDt:function(t,n,r){"use strict";function e(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,r){return n.apply(this,arguments)};case 3:return function(t,r,e){return n.apply(this,arguments)};case 4:return function(t,r,e,u){return n.apply(this,arguments)};case 5:return function(t,r,e,u,c){return n.apply(this,arguments)};case 6:return function(t,r,e,u,c,a){return n.apply(this,arguments)};case 7:return function(t,r,e,u,c,a,i){return n.apply(this,arguments)};case 8:return function(t,r,e,u,c,a,i,o){return n.apply(this,arguments)};case 9:return function(t,r,e,u,c,a,i,o,f){return n.apply(this,arguments)};case 10:return function(t,r,e,u,c,a,i,o,f,s){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}r.d(n,"a",(function(){return e}))},KMkw:function(t,n,r){"use strict";var e=r("L8iz"),u=r("gSdd"),c=r("08tI"),a=r("al6g"),i=r("OEMQ"),o=r("ZMgP"),f=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=o.a.init,t.prototype["@@transducer/result"]=o.a.result,t.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.xf["@@transducer/step"](t,n):t},t}(),s=Object(e.a)((function(t,n){return new f(t,n)})),l=r("ZuG0"),p=Object(e.a)(Object(u.a)(["filter"],s,(function(t,n){return Object(a.a)(n)?Object(i.a)((function(r,e){return t(n[e])&&(r[e]=n[e]),r}),{},Object(l.a)(n)):Object(c.a)(t,n)})));n.a=p},L8iz:function(t,n,r){"use strict";r.d(n,"a",(function(){return c}));var e=r("SqIO"),u=r("nr3+");function c(t){return function n(r,c){switch(arguments.length){case 0:return n;case 1:return Object(u.a)(r)?n:Object(e.a)((function(n){return t(r,n)}));default:return Object(u.a)(r)&&Object(u.a)(c)?n:Object(u.a)(r)?Object(e.a)((function(n){return t(n,c)})):Object(u.a)(c)?Object(e.a)((function(n){return t(r,n)})):t(r,c)}}}},OEMQ:function(t,n,r){"use strict";r.d(n,"a",(function(){return f}));r("DNiP"),r("rE2o"),r("ioFf");var e=r("qOTs"),u=r("3qHG"),c=r("Xbfg");function a(t,n,r){for(var e=r.next();!e.done;){if((n=t["@@transducer/step"](n,e.value))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e=r.next()}return t["@@transducer/result"](n)}function i(t,n,r,e){return t["@@transducer/result"](r[e](Object(c.a)(t["@@transducer/step"],t),n))}var o="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function f(t,n,r){if("function"==typeof t&&(t=Object(u.a)(t)),Object(e.a)(r))return function(t,n,r){for(var e=0,u=r.length;e<u;){if((n=t["@@transducer/step"](n,r[e]))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e+=1}return t["@@transducer/result"](n)}(t,n,r);if("function"==typeof r["fantasy-land/reduce"])return i(t,n,r,"fantasy-land/reduce");if(null!=r[o])return a(t,n,r[o]());if("function"==typeof r.next)return a(t,n,r);if("function"==typeof r.reduce)return i(t,n,r,"reduce");throw new TypeError("reduce: list must be array or iterable")}},SqIO:function(t,n,r){"use strict";r.d(n,"a",(function(){return u}));var e=r("nr3+");function u(t){return function n(r){return 0===arguments.length||Object(e.a)(r)?n:t.apply(this,arguments)}}},Xbfg:function(t,n,r){"use strict";var e=r("JVDt"),u=r("L8iz"),c=Object(u.a)((function(t,n){return Object(e.a)(t.length,(function(){return t.apply(n,arguments)}))}));n.a=c},ZDN8:function(t,n,r){"use strict";var e=r("1z8A"),u=Object(e.a)((function(t,n,r){var e=t(n),u=t(r);return e>u?-1:e<u?1:0}));n.a=u},ZMgP:function(t,n,r){"use strict";n.a={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}}},ZuG0:function(t,n,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var e=r("SqIO"),u=r("wyUd"),c=r("c3xU"),a=!{toString:null}.propertyIsEnumerable("toString"),i=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],o=function(){return arguments.propertyIsEnumerable("length")}(),f=function(t,n){for(var r=0;r<t.length;){if(t[r]===n)return!0;r+=1}return!1},s="function"!=typeof Object.keys||o?Object(e.a)((function(t){if(Object(t)!==t)return[];var n,r,e=[],s=o&&Object(c.a)(t);for(n in t)!Object(u.a)(n,t)||s&&"length"===n||(e[e.length]=n);if(a)for(r=i.length-1;r>=0;)n=i[r],Object(u.a)(n,t)&&!f(e,n)&&(e[e.length]=n),r-=1;return e})):Object(e.a)((function(t){return Object(t)!==t?[]:Object.keys(t)}));n.a=s},al6g:function(t,n,r){"use strict";r.d(n,"a",(function(){return e}));r("a1Th"),r("h7Nl"),r("Btvt");function e(t){return"[object Object]"===Object.prototype.toString.call(t)}},c3xU:function(t,n,r){"use strict";r("a1Th"),r("h7Nl"),r("Btvt");var e=r("wyUd"),u=Object.prototype.toString,c=function(){return"[object Arguments]"===u.call(arguments)?function(t){return"[object Arguments]"===u.call(t)}:function(t){return Object(e.a)("callee",t)}}();n.a=c},gSdd:function(t,n,r){"use strict";r.d(n,"a",(function(){return c}));var e=r("/PtW"),u=r("nVjs");function c(t,n,r){return function(){if(0===arguments.length)return r();var c=Array.prototype.slice.call(arguments,0),a=c.pop();if(!Object(e.a)(a)){for(var i=0;i<t.length;){if("function"==typeof a[t[i]])return a[t[i]].apply(a,c);i+=1}if(Object(u.a)(a)){var o=n.apply(null,c);return o(a)}}return r.apply(this,arguments)}}},nVjs:function(t,n,r){"use strict";function e(t){return null!=t&&"function"==typeof t["@@transducer/step"]}r.d(n,"a",(function(){return e}))},"nr3+":function(t,n,r){"use strict";function e(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}r.d(n,"a",(function(){return e}))},qOTs:function(t,n,r){"use strict";var e=r("SqIO"),u=r("/PtW"),c=r("JI66"),a=Object(e.a)((function(t){return!!Object(u.a)(t)||!!t&&("object"==typeof t&&(!Object(c.a)(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))}));n.a=a},wyUd:function(t,n,r){"use strict";function e(t,n){return Object.prototype.hasOwnProperty.call(n,t)}r.d(n,"a",(function(){return e}))},xOLr:function(t,n,r){"use strict";var e=r("1z8A"),u=Object(e.a)((function(t,n,r){var e=t(n),u=t(r);return e<u?-1:e>u?1:0}));n.a=u}}]);
//# sourceMappingURL=component---src-pages-locations-js-85af66f089477370c356.js.map