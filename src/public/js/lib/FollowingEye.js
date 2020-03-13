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
            svg: null,
            eye: null
        }, config);

        that.mouse = that.config.svg.createSVGPoint();
        that.centerX = null;
        that.centerY = null;

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
        const { width, x, y } = that.config.eye.getBBox();

        that.centerX = x + (width / 2);
        that.centerY = y + (width / 2);

        return that;
    }

    _handleMouseMove(ev) {
        const that = this;

        that.mouse.x = ev.clientX;
        that.mouse.y = ev.clientY;

        const point = that.mouse.matrixTransform(that.config.svg.getScreenCTM().inverse());
        const dx = point.x - that.centerX;
        const dy = point.y - that.centerY;
        const theta = atan2(dy, dx);
        const angle = (theta * 180 / PI) + 360;

        that.config.eye.style.transform = `rotate(${angle}deg)`;
    }

    _handleWindowResize() {
        this._updateDynamics();
    }
}
