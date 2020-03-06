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

        that._demoWrapper = $('.iframe-wrapper');
        that._iframe = that._demoWrapper.querySelector('iframe');
        that._demoCloseButton = $('.iframe-wrapper button');
        that._iframeLoader = $('.iframe-loader');
        that._iframeLoaderSecLayer = $('.iframe-loader > div:nth-child(1)');
        that._iframeLoaderMainLayer = $('.iframe-loader > div:nth-child(2)')
        that._previousFocusedElement;
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

        that.config.links.forEach(l => l.addEventListener('click', that._handleLinkClick));
        that._demoCloseButton.addEventListener('click', that._handleCloseIframe);

        return that;
    }

    _handleLinkClick(ev) {
        const that = this;

        ev.preventDefault();

        document.body.style.overflow = 'hidden';

        that._demoWrapper.style.opacity = 0;
        that._demoWrapper.style.display = 'block';
        that._iframe.src = ev.currentTarget.href;

        that._iframeLoader.classList.add('-show');
        that._previousFocusedElement = document.activeElement;
        that._demoCloseButton.focus();

        that._iframe.addEventListener('load', () => {
            that._demoWrapper.style.opacity = 1;
            that._iframeLoader.classList.add('-hide');

            that._iframeLoaderSecLayer.addEventListener('transitionend', (ev) => {
                that._demoWrapper.classList.add('-loaded');
            }, { once: true });
        }, { once: true });
    }

    _handleCloseIframe(ev) {
        const that = this;

        that._iframeLoader.classList.remove('-hide');

        that._iframeLoaderMainLayer.addEventListener('transitionend', function(ev) {
            that._iframeLoader.classList.remove('-show');

            that._demoWrapper.style.opacity = 0;
            that._demoWrapper.style.display = 'none';
            that._demoWrapper.classList.remove('-loaded');

            that._iframeLoaderMainLayer.addEventListener('transitionend', function(ev) {
                that._iframe.src = '';
                document.body.style.overflow = '';

                if (that._previousFocusedElement) {
                    that._previousFocusedElement.focus();
                }
            }, { once: true });
        }, { once: true });
    }
}
