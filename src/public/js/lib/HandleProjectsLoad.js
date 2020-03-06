const { log } = console;

import { $ } from './utils';

export default class HandleProjectsLoad {
    constructor(config) {
        log('🎬');

        const that = this;

        Object.assign(that.config = {}, {
            links: null
        }, config);

        if (!that.config.links) return;

        that._isActive = false;
        that._demoWrapper = $('.iframe-wrapper');
        that._iframe = that._demoWrapper.querySelector('iframe');
        that._demoCloseButton = $('.iframe-close-button');
        that._iframeLoader = $('.iframe-loader');
        that._iframeLoaderSecLayer = $('.iframe-loader > div:nth-child(1)');
        that._iframeLoaderMainLayer = $('.iframe-loader > div:nth-child(2)')
        that._iframeLoadingText = $('.iframe-loading-text');
        that._previousFocusedElement = null;
    }

    run() {
        const that = this;

        that._bindEvents();

        return that;
    }

    _bindEvents() {
        const that = this;

        that._handleLinkClick = that._handleLinkClick.bind(that);
        that._handleCloseIframe = that._handleCloseIframe.bind(that);
        that._handleKeyUp = that._handleKeyUp.bind(that);

        that.config.links.forEach(l => l.addEventListener('click', that._handleLinkClick));
        that._demoCloseButton.addEventListener('click', that._handleCloseIframe);
        document.addEventListener('keyup', that._handleKeyUp);

        return that;
    }

    _handleLinkClick(ev) {
        ev.preventDefault();

        const that = this;
        const iframeUrl = ev.currentTarget.href;

        document.body.style.overflow = 'hidden';

        that._previousFocusedElement = document.activeElement;
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

        ev = (ev || window.event);

        if (that._isActive === false) {
            return;
        }

        if (ev.keyCode == 27) {
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
                document.body.style.overflow = '';

                if (that._previousFocusedElement) {
                    that._previousFocusedElement.focus();
                }
            }, { once: true });
        }, { once: true });
    }
}
