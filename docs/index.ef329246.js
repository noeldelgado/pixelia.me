function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire94c2;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequire94c2=o),o.register("c5HCY",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var l={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)l[t[n]]=e[t[n]]},o=function(e){var t=l[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("cM63V",(function(t,n){e(t.exports,"$",(function(){return l})),e(t.exports,"$$",(function(){return i})),e(t.exports,"getScrollbarWidth",(function(){return a})),e(t.exports,"debounce",(function(){return c})),e(t.exports,"createElementFromString",(function(){return s}));const{floor:r,random:o}=Math,l=document.querySelector.bind(document),i=document.querySelectorAll.bind(document),a=()=>{const e=document.createElement("div");let t=0;return e.style.position="absolute",e.style.top="-9999px",e.style.width="100px",e.style.height="100px",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",document.body.appendChild(e),t=e.offsetWidth-e.clientWidth,document.body.removeChild(e),t},c=(e,t)=>{let n=null;return function(){const r=()=>e.apply(this,arguments);clearTimeout(n),n=setTimeout(r,t)}},s=e=>{const t=document.createElement("div");return t.insertAdjacentHTML("beforeend",e),t.firstElementChild}})),o.register("6Gdwn",(function(e,t){e.exports=Promise.all([o("3rDvG")(new URL(o("c5HCY").resolve("kqzTx"),import.meta.url).toString()),import("./"+o("c5HCY").resolve("cslvs"))]).then((()=>o("la94A")))})),o.register("3rDvG",(function(e,t){var n=o("f98aK");e.exports=n((function(e){return new Promise((function(t,n){var r=document.getElementsByTagName("link");if([].concat(r).some((function(t){return t.href===e&&t.rel.indexOf("stylesheet")>-1})))t();else{var o=document.createElement("link");o.rel="stylesheet",o.href=e,o.onerror=function(e){o.onerror=o.onload=null,o.remove(),n(e)},o.onload=function(){o.onerror=o.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(o)}}))}))})),o.register("f98aK",(function(e,t){var n={},r={},o={};function l(e){switch(e){case"preload":return r;case"prefetch":return o;default:return n}}e.exports=function(e,t){return function(n){var r=l(t);return r[n]?r[n]:r[n]=e.apply(null,arguments).catch((function(e){throw delete r[n],e}))}}})),o.register("eHzIW",(function(e,t){e.exports=Promise.all([o("3rDvG")(new URL(o("c5HCY").resolve("9npDP"),import.meta.url).toString()),import("./"+o("c5HCY").resolve("ducot"))]).then((()=>o("cn01c")))})),o("c5HCY").register(JSON.parse('{"lS5BQ":"index.ef329246.js","cslvs":"TopWave.587bd1f3.js","kqzTx":"TopWave.50e0423b.css","bDuPa":"top-wave.b61b5c1c.svg","ducot":"HandleProjectsLoad.35cc1f0b.js","9npDP":"HandleProjectsLoad.40335ca5.css"}'));var l=o("cM63V");const i={loadHandler:async()=>{const e=await o("6Gdwn"),t=await o("eHzIW"),n=(new e.default).render(document.body,"afterbegin"),r=new t.default({links:(0,l.$$)('.demos a, .oss a:not([target="_blank"])')}).run();window.requestAnimationFrame((()=>n.active())),r.element.addEventListener("projectShow",(()=>{var e;document.body.classList.add("-prevent-scrolling"),n.pause(),null===(e=i.backgroundCanvas)||void 0===e||e.pause()})),r.element.addEventListener("projectHide",(()=>{var e;document.body.classList.remove("-prevent-scrolling"),n.resume(),null===(e=i.backgroundCanvas)||void 0===e||e.restart()}))}};window.addEventListener("load",i.loadHandler),document.documentElement.style.setProperty("--scrollbar-width",`${(0,l.getScrollbarWidth)()}px`);
//# sourceMappingURL=index.ef329246.js.map
