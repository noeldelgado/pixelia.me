const { log } = console;
const { atan2, PI } = Math;

import { debounce } from './utils';

/**
 * Man logic taken from Blake Bowen’s pen
 * https://codepen.io/osublake/pen/jzNgqY
 */
export default class FollowingEye {
    constructor(config) {
        log('👁');

        const that = this;

        Object.assign(that.config = {}, {
            el: null,
            eye: null
        }, config);


        that._updateDynamics()._bindEvents();
    }

    _bindEvents() {
        const that = this;

        that._handleMouseMove = that._handleMouseMove.bind(that);
        that.config.el.addEventListener('mousemove', that._handleMouseMove);

        that._handleWindowResize = that._handleWindowResize.bind(that);
        window.addEventListener('resize', debounce(that._handleWindowResize, 500));
        return that;
    }

    _updateDynamics() {
        const that = this;
        const { width, x, y } = that.config.eye.getBoundingClientRect();

        that.centerX = x + (width / 2);
        that.centerY = y + (width / 2);

        return that;
    }

    _handleMouseMove(ev) {
        const that = this;
        const dx = ev.clientX - that.centerX;
        const dy = ev.clientY - that.centerY;
        const theta = atan2(dy, dx);
        const angle = (theta * 180 / PI) + 360;

        that.config.eye.style.transform = `rotate(${angle}deg)`;
    }

    _handleWindowResize() {
        this._updateDynamics();
    }
}
