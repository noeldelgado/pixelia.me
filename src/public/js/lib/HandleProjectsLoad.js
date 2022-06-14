import { $, createElementFromString } from './utils';
import FollowingEye from './FollowingEye';

const internals = {
  eye: new FollowingEye().render($('[data-bind-eye="true"]')).update(),
};

export default class HandleProjectsLoad {
  #iframeWrapperTemplate = `
    <div class="iframe-wrapper">
      <iframe
        src="about:blank"
        title="Noel’s demos on Codepen"
        frameborder="0"
        width="100%"
        height="100%"
        style="overflow:hidden;height:100%;width:100%"
      />
    </div>
  `;

  #closeIframeButtonTemplate = `
    <button
      class="iframe-close-button"
      type="button"
      aria-label="Close project detail"
    >
      <svg
        width="40"
        height="40"
        aria-hidden="true"
      >
        <use xlink:href="#svg-close-24px"></use>
      </svg>
    </button>
  `;

  #iframeLoaderTemplate = `
    <div class="iframe-loader">
      <div class="iframe-loader__layer --waves">
        <svg class="loader-wave-top">
          <use xlink:href="#svg-loader-wave-top"></use>
        </svg>
        <svg class="loader-wave-bottom">
          <use xlink:href="#svg-loader-wave-bottom"></use>
        </svg>
      </div>
      <div class="iframe-loader__layer --info">
        <svg class="loader-wave-top">
          <use xlink:href="#svg-loader-wave-top"></use>
        </svg>
        <svg class="loader-wave-bottom">
          <use xlink:href="#svg-loader-wave-bottom"></use>
        </svg>
        <div class="iframe-loading-text">
          <p class="mb05 loading">Loading</p>
          <span class="title"></span>
          <br/>
          <span class="description"></span>
        </div>
      </div>
    </div>
  `;

  constructor(config) {
    this.config = {
      el: document.createElement('div'),
      links: null,
      ...config,
    };

    if (!this.config.links) return;

    this.events = {};
    this._isActive = false;
    this._demoWrapper = createElementFromString(this.#iframeWrapperTemplate);
    this._iframe = this._demoWrapper.querySelector('iframe');
    this._demoCloseButton = createElementFromString(this.#closeIframeButtonTemplate);
    this._iframeLoader = createElementFromString(this.#iframeLoaderTemplate);
    this._iframeLoaderSecLayer = this._iframeLoader.querySelector('div:nth-child(1)');
    this._iframeLoaderMainLayer = this._iframeLoader.querySelector('div:nth-child(2)');
    this._iframeLoadingText = this._iframeLoader.querySelector('.iframe-loading-text');
    this._iframeLoadingTextTitle = this._iframeLoadingText.querySelector('.title');
    this._iframeLoadingTextDescription = this._iframeLoadingText.querySelector('.description');
    this._previousFocusedElement = null;

    document.body.append(this._demoWrapper, this._demoCloseButton, this._iframeLoader);
  }

  get element() {
    return this.config.el;
  }

  run() {
    const that = this;

    that._bindEvents();
    that._iframeLoader.classList.add('-ready');

    return that;
  }

  _bindEvents() {
    const that = this;

    that.events.projectShow = new CustomEvent('projectShow');
    that.events.projectHide = new CustomEvent('projectHide');

    that._handleLinkClick = that._handleLinkClick.bind(that);
    that._handleCloseIframe = that._handleCloseIframe.bind(that);
    that._handleKeyUp = that._handleKeyUp.bind(that);

    that.config.links.forEach(l => {
      l.addEventListener('click', that._handleLinkClick);

      if (l.dataset.bindEye === 'true') {
        l.addEventListener('mouseenter', (ev) => {
          internals.eye.render(ev.currentTarget);
        });
      }
    });
    that._demoCloseButton.addEventListener('click', that._handleCloseIframe);
    document.addEventListener('keyup', that._handleKeyUp);

    return that;
  }

  _handleLinkClick(ev) {
    ev.preventDefault();

    const that = this;
    const target = ev.currentTarget;
    const iframeUrl = target.href;
    const projectName = target.dataset.title;
    const projectDescription = target.dataset.description;

    that.element.dispatchEvent(that.events.projectShow);
    that._previousFocusedElement = document.activeElement;
    that._iframeLoadingTextTitle.innerHTML = projectName;
    that._iframeLoadingTextDescription.innerHTML = projectDescription;
    that._iframeLoader.classList.add('-show');

    that._demoCloseButton.focus();

    that._iframeLoaderMainLayer.addEventListener('transitionend', () => {
      that._iframeLoadingText.style.opacity = 1;

      that._demoWrapper.style.opacity = 0;
      that._demoWrapper.style.display = 'block';
      that._iframe.src = iframeUrl;

      that._iframe.addEventListener('load', () => {
        that._isActive = true;

        that._iframeLoadingText.style.opacity = 0;
        that._iframeLoader.classList.add('-hide');
        that._demoWrapper.style.opacity = 1;

        that._iframeLoaderSecLayer.addEventListener('transitionend', () => {
          that._demoWrapper.classList.add('-loaded');
        }, { once: true });
      }, { once: true });
    }, { once: true });
  }

  _handleKeyUp(ev) {
    const that = this;

    if (that._isActive === false) {
      return;
    }

    if (ev.keyCode === 27) {
      that._handleCloseIframe();
    }
  }

  _handleCloseIframe() {
    const that = this;

    that._isActive = false;
    that._iframeLoader.classList.remove('-hide');

    that._iframeLoaderMainLayer.addEventListener('transitionend', () => {
      that._iframeLoader.classList.remove('-show');

      that._demoWrapper.style.opacity = 0;
      that._demoWrapper.style.display = 'none';
      that._demoWrapper.classList.remove('-loaded');

      that._iframeLoaderMainLayer.addEventListener('transitionend', () => {
        that._iframe.src = '';
        that.element.dispatchEvent(that.events.projectHide);

        if (that._previousFocusedElement) {
          that._previousFocusedElement.focus();
        }
      }, { once: true });
    }, { once: true });
  }
}
