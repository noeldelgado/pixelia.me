parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tcVT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.randomInt=exports.$$=exports.$=void 0;var e=Math.floor,r=Math.random,t=document.querySelector.bind(document);exports.$=t;var o=document.querySelectorAll.bind(document);exports.$$=o;var n=function(t,o){return e(r()*(o-t+1))+t};exports.randomInt=n;
},{}],"BwK6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("./utils");function i(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function a(t,i){for(var a=0;a<i.length;a++){var n=i[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,i,n){return i&&a(t.prototype,i),n&&a(t,n),t}var e=console,s=e.log,o=Math.floor,h=Math.PI,r=Math.random,l={w:0,h:0,pointsArray:[],MAX_POINT_SPEED:.05,MIN_POINT_SPEED:-.05,MIN_POINT_RADIO:.6,MAX_POINT_RADIO:1,COLORS:["rgba(238, 170, 238, .25)","rgba(238, 170, 238, .75)","rgba(153, 255, 235, .25)","rgba(153, 255, 235, .75)"],updatePoint:function(t){t.x+=t.sx,t.y+=t.sy,t.alpha+=t.alphaFactor,(t.x>l.w||t.x<0)&&(t.sx*=-1),(t.y>l.h||t.y<0)&&(t.sy*=-1),(t.alpha>1||t.alpha<0)&&(t.alphaFactor*=-1),t.alpha<0&&t.update()}},c=function(){function a(t){i(this,a),this.index=t,this.alpha=r(),this.alphaFactor=.1*this.alpha*.1,this.update()}return n(a,[{key:"update",value:function(){this.x=r()*l.w,this.y=r()*l.h,this.color=l.COLORS[o(r()*l.COLORS.length)],this.r=(0,t.randomInt)(l.MIN_POINT_RADIO,l.MAX_POINT_RADIO),this.sx=r()<.5?l.MIN_POINT_SPEED:l.MAX_POINT_SPEED,this.sy=r()<.5?l.MIN_POINT_SPEED:l.MAX_POINT_SPEED}}]),a}(),u=function(){function t(a){i(this,t),s("🖼");if(Object.assign(this.config={},{totalPoints:100,bgColor:"#000"},a),this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.ctx){document.body.appendChild(this.canvas),this._updateDynamics();for(var n=0;n<this.config.totalPoints;n++)l.pointsArray.push(new c(n))}}return n(t,[{key:"run",value:function(){return this._bindEvents(),this._loop(),this}},{key:"_bindEvents",value:function(){return this._loop=this._loop.bind(this),this._updateDynamics=this._updateDynamics.bind(this),window.addEventListener("resize",this._updateDynamics),this}},{key:"_updateDynamics",value:function(){this.canvas.width=l.w=window.innerWidth,this.canvas.height=l.h=window.innerHeight}},{key:"_loop",value:function(){window.requestAnimationFrame(this._loop),this._draw()}},{key:"_draw",value:function(){this.ctx.beginPath(),this.ctx.globalAlpha=1,this.ctx.rect(0,0,l.w,l.h),this.ctx.fillStyle=this.config.bgColor,this.ctx.fill(),this.ctx.closePath();for(var t=0;t<l.pointsArray.length;t+=1){var i=l.pointsArray[t];this.ctx.beginPath(),this.ctx.globalAlpha=i.alpha,this.ctx.fillStyle=i.color,this.ctx.arc(i.x,i.y,i.r,2*Math.PI,!1),this.ctx.fill(),this.ctx.closePath(),l.updatePoint(i)}}}]),t}();exports.default=u;
},{"./utils":"tcVT"}],"j9dM":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./utils");function r(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function n(e,r){for(var n=0;n<r.length;n++){var a=r[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function a(e,r,a){return r&&n(e.prototype,r),a&&n(e,a),e}var i=console,t=i.log,o=function(){function n(a){r(this,n),t("🎬");Object.assign(this.config={},{links:null},a),this.config.links&&(this._demoWrapper=(0,e.$)(".iframe-wrapper"),this._iframe=this._demoWrapper.querySelector("iframe"),this._demoCloseButton=(0,e.$)(".iframe-wrapper button"),this._iframeLoader=(0,e.$)(".iframe-loader"),this._iframeLoaderSecLayer=(0,e.$)(".iframe-loader > div:nth-child(1)"),this._iframeLoaderMainLayer=(0,e.$)(".iframe-loader > div:nth-child(2)"),this._previousFocusedElement)}return a(n,[{key:"run",value:function(){return this._bindEvents(),this}},{key:"_bindEvents",value:function(){var e=this;return e._handleLinkClick=e._handleLinkClick.bind(e),e._handleCloseIframe=e._handleCloseIframe.bind(e),e.config.links.forEach(function(r){return r.addEventListener("click",e._handleLinkClick)}),e._demoCloseButton.addEventListener("click",e._handleCloseIframe),e}},{key:"_handleLinkClick",value:function(e){var r=this;e.preventDefault(),document.body.style.overflow="hidden",r._demoWrapper.style.opacity=0,r._demoWrapper.style.display="block",r._iframe.src=e.currentTarget.href,r._iframeLoader.classList.add("-show"),r._previousFocusedElement=document.activeElement,r._demoCloseButton.focus(),r._iframe.addEventListener("load",function(){r._demoWrapper.style.opacity=1,r._iframeLoader.classList.add("-hide"),r._iframeLoaderSecLayer.addEventListener("transitionend",function(e){r._demoWrapper.classList.add("-loaded")},{once:!0})},{once:!0})}},{key:"_handleCloseIframe",value:function(e){var r=this;r._iframeLoader.classList.remove("-hide"),r._iframeLoaderMainLayer.addEventListener("transitionend",function(e){r._iframeLoader.classList.remove("-show"),r._demoWrapper.style.opacity=0,r._demoWrapper.style.display="none",r._demoWrapper.classList.remove("-loaded"),r._iframeLoaderMainLayer.addEventListener("transitionend",function(e){r._iframe.src="",document.body.style.overflow="",r._previousFocusedElement&&r._previousFocusedElement.focus()},{once:!0})},{once:!0})}}]),n}();exports.default=o;
},{"./utils":"tcVT"}],"wFKc":[function(require,module,exports) {
"use strict";var e=require("./lib/utils"),o=r(require("./lib/BackgroundCanvas")),t=r(require("./lib/HandleProjectsLoad"));function r(e){return e&&e.__esModule?e:{default:e}}var l=console,n=l.log;window.b=new o.default({totalPoints:200,bgColor:getComputedStyle(document.body,null).getPropertyValue("background-color")}).run(),new t.default({links:(0,e.$$)('.demos a:not([target="_blank"]), .oss a:not([target="_blank"])')}).run();
},{"./lib/utils":"tcVT","./lib/BackgroundCanvas":"BwK6","./lib/HandleProjectsLoad":"j9dM"}]},{},["wFKc"], null)
//# sourceMappingURL=js.73e1192a.js.map