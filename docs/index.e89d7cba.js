function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire94c2;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequire94c2=o),o.register("27Lyk",(function(t,r){var n,o;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var l={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)l[t[r]]=e[t[r]]},o=function(e){var t=l[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("9xPB6",(function(t,r){e(t.exports,"$",(()=>n)),e(t.exports,"$$",(()=>o)),e(t.exports,"randomFloatInclusive",(()=>l)),e(t.exports,"getScrollbarWidth",(()=>i)),e(t.exports,"debounce",(()=>s)),e(t.exports,"createElementFromString",(()=>a));const n=document.querySelector.bind(document),o=document.querySelectorAll.bind(document),l=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,i=()=>{const e=document.createElement("div");let t=0;return e.style.position="absolute",e.style.top="-9999px",e.style.width="100px",e.style.height="100px",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",document.body.appendChild(e),t=e.offsetWidth-e.clientWidth,document.body.removeChild(e),t},s=(e,t)=>{let r=null;return function(){const n=()=>e.apply(this,arguments);clearTimeout(r),r=setTimeout(n,t)}},a=e=>{const t=document.createElement("div");return t.insertAdjacentHTML("beforeend",e),t.firstElementChild}})),o.register("kgxhK",(function(e,t){e.exports=Promise.all([o("fFMZG")(new URL(o("27Lyk").resolve("g4Idi"),import.meta.url).toString()),import("./"+o("27Lyk").resolve("lLov9"))]).then((()=>o("285Pw")))})),o.register("fFMZG",(function(e,t){var r=o("lovBw");e.exports=r((function(e){return new Promise((function(t,r){var n=document.getElementsByTagName("link");if([].concat(n).some((function(t){return t.href===e&&t.rel.indexOf("stylesheet")>-1})))t();else{var o=document.createElement("link");o.rel="stylesheet",o.href=e,o.onerror=function(e){o.onerror=o.onload=null,o.remove(),r(e)},o.onload=function(){o.onerror=o.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(o)}}))}))})),o.register("lovBw",(function(e,t){var r={},n={},o={};function l(e){switch(e){case"preload":return n;case"prefetch":return o;default:return r}}e.exports=function(e,t){return function(r){var n=l(t);return n[r]?n[r]:n[r]=e.apply(null,arguments).catch((function(e){throw delete n[r],e}))}}})),o.register("ekrbN",(function(e,t){e.exports=Promise.all([o("fFMZG")(new URL(o("27Lyk").resolve("heeWg"),import.meta.url).toString()),import("./"+o("27Lyk").resolve("aZUrT"))]).then((()=>o("bNcT3")))})),o.register("2iorW",(function(e,t){e.exports=import("./"+o("27Lyk").resolve("347nX")).then((()=>o("7xI5N")))})),o("27Lyk").register(JSON.parse('{"lKE48":"index.e89d7cba.js","lLov9":"TopWave.e67f525c.js","g4Idi":"TopWave.bf50fc08.css","aZUrT":"HandleProjectsLoad.f70d4a1c.js","heeWg":"HandleProjectsLoad.bfd0122b.css","347nX":"BackgroundCanvas.b7806364.js"}'));var l=o("9xPB6");const i={loadHandler:async()=>{const e=await o("kgxhK"),t=await o("ekrbN"),r=await o("2iorW"),n=new t.default({links:(0,l.$$)('.demos a, .oss a:not([target="_blank"])')}),i=new e.default,s=new r.default({totalPoints:Math.round(window.innerWidth/window.innerHeight*100),bgColor:getComputedStyle(document.documentElement).getPropertyValue("--color-bg")});n?.run(),i?.render(document.body,"afterbegin"),s?.render(document.body,"afterbegin").run(),n?.element.addEventListener("projectShow",(()=>{document.body.classList.add("-prevent-scrolling"),i?.pause(),s?.pause()})),n?.element.addEventListener("projectHide",(()=>{document.body.classList.remove("-prevent-scrolling"),i?.resume(),s?.resume()}))}};window.addEventListener("load",i.loadHandler),document.documentElement.style.setProperty("--scrollbar-width",`${(0,l.getScrollbarWidth)()}px`);
//# sourceMappingURL=index.e89d7cba.js.map