parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tcVT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getScrollbarWidth=exports.randomInt=exports.$$=exports.$=void 0;var e=Math.floor,t=Math.random,o=document.querySelector.bind(document);exports.$=o;var r=document.querySelectorAll.bind(document);exports.$$=r;var l=function(o,r){return e(t()*(r-o+1))+o};exports.randomInt=l;var d=function(){var e,t=document.createElement("div");return t.style.position="absolute",t.style.top="-9999px",t.style.width="100px",t.style.height="100px",t.style.overflow="scroll",t.style.msOverflowStyle="scrollbar",document.body.appendChild(t),e=t.offsetWidth-t.clientWidth,document.body.removeChild(t),e};exports.getScrollbarWidth=d;
},{}],"hDs4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("./utils");function a(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function i(t,a){for(var i=0;i<a.length;i++){var e=a[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function e(t,a,e){return a&&i(t.prototype,a),e&&i(t,e),t}var h=Math.floor,r=Math.random,s={COLORS:["rgba(238, 170, 238, .3)","rgba(238, 170, 238, .8)","rgba(153, 255, 235, .3)","rgba(153, 255, 235, .8)","rgba(161, 170, 243, .3)","rgba(161, 170, 243, .8)"],MAX_POINT_SPEED:.05,MIN_POINT_SPEED:-.05,MIN_POINT_RADIO:.6,MAX_POINT_RADIO:1},n=function(){function i(t){a(this,i),this.index=t,this.alpha=r(),this.alphaFactor=.1*this.alpha*.1,this.update({maxWidth:window.innerWidth,maxHeight:window.innerHeight})}return e(i,[{key:"checkUpdate",value:function(t){var a=t.maxWidth,i=t.maxHeight;this.x+=this.sx,this.y+=this.sy,this.alpha+=this.alphaFactor,(this.x>a||this.x<0)&&(this.sx*=-1),(this.y>i||this.y<0)&&(this.sy*=-1),(this.alpha>1||this.alpha<0)&&(this.alphaFactor*=-1),this.alpha<0&&this.update({maxWidth:a,maxHeight:i})}},{key:"update",value:function(a){var i=a.maxWidth,e=a.maxHeight;this.x=r()*i,this.y=r()*e,this.color=s.COLORS[h(r()*s.COLORS.length)],this.r=(0,t.randomInt)(s.MIN_POINT_RADIO,s.MAX_POINT_RADIO),this.sx=r()<.5?s.MIN_POINT_SPEED:s.MAX_POINT_SPEED,this.sy=r()<.5?s.MIN_POINT_SPEED:s.MAX_POINT_SPEED}}]),i}();exports.default=n;
},{"./utils":"tcVT"}],"BwK6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=i(require("./Point"));function i(t){return t&&t.__esModule?t:{default:t}}function e(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function n(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,i,e){return i&&n(t.prototype,i),e&&n(t,e),t}var s=console,o=s.log,r=Math.PI,h={maxWidth:0,maxHeight:0,pointsArray:[]},c=function(){function i(n){e(this,i),o("🖼");if(Object.assign(this.config={},{totalPoints:100,bgColor:"#000"},n),this.raf=null,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.ctx){document.body.insertBefore(this.canvas,document.body.firstElementChild),this._updateDynamics();for(var a=0;a<this.config.totalPoints;a+=1)h.pointsArray.push(new t.default(a))}}return a(i,[{key:"run",value:function(){return this._bindEvents(),this._loop(),this}},{key:"pause",value:function(){return window.cancelAnimationFrame(this.raf),this}},{key:"restart",value:function(){return this._loop(),this}},{key:"_bindEvents",value:function(){return this._loop=this._loop.bind(this),this._updateDynamics=this._updateDynamics.bind(this),window.addEventListener("resize",this._updateDynamics),this}},{key:"_updateDynamics",value:function(){h.maxWidth=window.innerWidth,h.maxHeight=window.innerHeight,this.canvas.width=h.maxWidth,this.canvas.height=h.maxHeight}},{key:"_loop",value:function(){this.raf=window.requestAnimationFrame(this._loop),this._draw()}},{key:"_draw",value:function(){this.ctx.beginPath(),this.ctx.globalAlpha=1,this.ctx.rect(0,0,h.maxWidth,h.maxHeight),this.ctx.fillStyle=this.config.bgColor,this.ctx.fill(),this.ctx.closePath();for(var t=0;t<h.pointsArray.length;t+=1){var i=h.pointsArray[t];this.ctx.beginPath(),this.ctx.globalAlpha=i.alpha,this.ctx.fillStyle=i.color,this.ctx.arc(i.x,i.y,i.r,2*r,!1),this.ctx.fill(),this.ctx.closePath(),i.checkUpdate({maxWidth:h.maxWidth,maxHeight:h.maxHeight})}}}]),i}();exports.default=c;
},{"./Point":"hDs4"}],"j9dM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./utils");function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}var a=console,r=a.log,o=function(){function i(n){t(this,i),r("🎬");Object.assign(this.config={},{el:document.createElement("div"),links:null},n),this.config.links&&(this.events={},this._isActive=!1,this._demoWrapper=(0,e.$)(".iframe-wrapper"),this._iframe=this._demoWrapper.querySelector("iframe"),this._demoCloseButton=(0,e.$)(".iframe-close-button"),this._iframeLoader=(0,e.$)(".iframe-loader"),this._iframeLoaderSecLayer=(0,e.$)(".iframe-loader > div:nth-child(1)"),this._iframeLoaderMainLayer=(0,e.$)(".iframe-loader > div:nth-child(2)"),this._iframeLoadingText=(0,e.$)(".iframe-loading-text"),this._iframeLoadingTextTitle=(0,e.$)(".iframe-loading-text .title"),this._iframeLoadingTextDescription=(0,e.$)(".iframe-loading-text .description"),this._previousFocusedElement=null)}return n(i,[{key:"run",value:function(){return this._bindEvents(),this}},{key:"_bindEvents",value:function(){var e=this;return e.events.projectShow=new CustomEvent("projectShow"),e.events.projectHide=new CustomEvent("projectHide"),e._handleLinkClick=e._handleLinkClick.bind(e),e._handleCloseIframe=e._handleCloseIframe.bind(e),e._handleKeyUp=e._handleKeyUp.bind(e),e.config.links.forEach(function(t){return t.addEventListener("click",e._handleLinkClick)}),e._demoCloseButton.addEventListener("click",e._handleCloseIframe),document.addEventListener("keyup",e._handleKeyUp),e}},{key:"_handleLinkClick",value:function(e){e.preventDefault();var t=this,i=e.currentTarget,n=i.href,a=i.dataset.title,r=i.dataset.description;t.element.dispatchEvent(t.events.projectShow),t._previousFocusedElement=document.activeElement,t._iframeLoadingTextTitle.innerHTML=a,t._iframeLoadingTextDescription.innerHTML=r,t._iframeLoader.classList.add("-show"),t._demoCloseButton.focus(),t._iframeLoaderMainLayer.addEventListener("transitionend",function(){t._iframeLoadingText.style.opacity=1,t._demoWrapper.style.opacity=0,t._demoWrapper.style.display="block",t._iframe.src=n,t._iframe.addEventListener("load",function(){t._isActive=!0,t._iframeLoadingText.style.opacity=0,t._iframeLoader.classList.add("-hide"),t._demoWrapper.style.opacity=1,t._iframeLoaderSecLayer.addEventListener("transitionend",function(){t._demoWrapper.classList.add("-loaded")},{once:!0})},{once:!0})},{once:!0})}},{key:"_handleKeyUp",value:function(e){e=e||window.event,!1!==this._isActive&&27==e.keyCode&&this._handleCloseIframe()}},{key:"_handleCloseIframe",value:function(){var e=this;e._isActive=!1,e._iframeLoader.classList.remove("-hide"),e._iframeLoaderMainLayer.addEventListener("transitionend",function(){e._iframeLoader.classList.remove("-show"),e._demoWrapper.style.opacity=0,e._demoWrapper.style.display="none",e._demoWrapper.classList.remove("-loaded"),e._iframeLoaderMainLayer.addEventListener("transitionend",function(){e._iframe.src="",e.element.dispatchEvent(e.events.projectHide),e._previousFocusedElement&&e._previousFocusedElement.focus()},{once:!0})},{once:!0})}},{key:"element",get:function(){return this.config.el}}]),i}();exports.default=o;
},{"./utils":"tcVT"}],"wFKc":[function(require,module,exports) {
"use strict";var e=require("./lib/utils"),o=a(require("./lib/BackgroundCanvas")),n=a(require("./lib/HandleProjectsLoad"));function a(e){return e&&e.__esModule?e:{default:e}}var t={};t.body=document.body,t.pageTopWave=(0,e.$)(".page-top-wave"),t.backgroundCanvas=new o.default({totalPoints:200,bgColor:getComputedStyle(document.body,null).getPropertyValue("background-color")}).run(),t.projectsHandler=new n.default({links:(0,e.$$)('.demos a:not([target="_blank"]), .oss a:not([target="_blank"])')}).run(),t.lastKnownScrollPosition=0,t.onScrollTicking=!1,t.scrollHandler=function(){t.lastKnownScrollPosition=window.scrollY,t.onScrollTicking||(window.requestAnimationFrame(function(){t.handleScrollUpdate(t.lastKnownScrollPosition),t.onScrollTicking=!1}),t.onScrollTicking=!0)},t.handleScrollUpdate=function(e){e>20?t.pageTopWave.classList.add("-pause"):t.pageTopWave.classList.remove("-pause")},t.projectsHandler.element.addEventListener("projectShow",function(){t.body.classList.add("-prevent-scrolling"),t.pageTopWave.classList.add("-pause"),t.backgroundCanvas.pause()}),t.projectsHandler.element.addEventListener("projectHide",function(){t.body.classList.remove("-prevent-scrolling"),t.pageTopWave.classList.remove("-pause"),t.backgroundCanvas.restart()}),window.addEventListener("scroll",t.scrollHandler),document.documentElement.style.setProperty("--scrollbar-width","".concat((0,e.getScrollbarWidth)(),"px"));
},{"./lib/utils":"tcVT","./lib/BackgroundCanvas":"BwK6","./lib/HandleProjectsLoad":"j9dM"}]},{},["wFKc"], null)
//# sourceMappingURL=js.315ad4a4.js.map