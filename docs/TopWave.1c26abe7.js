("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire94c2.register("285Pw",(function(e,n){var t,l,s,i;t=e.exports,l="default",s=()=>o,Object.defineProperty(t,l,{get:s,set:i,enumerable:!0,configurable:!0});class o{constructor(){this.element=document.createElement("div"),this.element.className="TopWave",this.#e()}render(e,n){return e.insertAdjacentElement(n,this.element),this}active(){return this.element.classList.add("-active"),this}pause(){return this.element.classList.add("-pause"),this}resume(){return this.element.classList.remove("-pause"),this}_scrollHandler(){const e=this;e.#n=window.scrollY,e.#t||(window.requestAnimationFrame((()=>{e.#l(e.#n),e.#t=!1})),e.#t=!0)}#n=0;#t=!1;#l=e=>{this[e>20?"pause":"resume"]()};#e(){return this._scrollHandler=this._scrollHandler.bind(this),window.addEventListener("scroll",this._scrollHandler),this}}}));
//# sourceMappingURL=TopWave.1c26abe7.js.map