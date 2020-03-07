const { log } = console;
const { PI  } = Math;

import Point from './Point';

const internals = {
    maxWidth: 0,
    maxHeight: 0,
    pointsArray: []
};

export default class BackgroundCanvas {
    constructor(config) {
        log('🖼');

        const that = this;

        Object.assign(that.config = {}, {
            totalPoints: 100,
            bgColor: '#000'
        }, config);

        that.raf = null;
        that.canvas = document.createElement('canvas');
        that.ctx = that.canvas.getContext('2d');
        if (!that.ctx) return;

        document.body.insertBefore(that.canvas, document.body.firstElementChild);
        that._updateDynamics();

        for (let i = 0; i < that.config.totalPoints; i+=1) {
            internals.pointsArray.push(new Point(i));
        }
    }

    run() {
        const that = this;

        that._bindEvents();
        that._loop();

        return that;
    }

    pause() {
        window.cancelAnimationFrame(this.raf);
        return this;
    }

    restart() {
        this._loop();
        return this;
    }

    _bindEvents() {
        const that = this;

        that._loop = that._loop.bind(that);

        that._updateDynamics = that._updateDynamics.bind(that);
        window.addEventListener('resize', that._updateDynamics);

        return that;
    }

    _updateDynamics() {
        const that = this;

        internals.maxWidth = window.innerWidth;
        internals.maxHeight = window.innerHeight;
        that.canvas.width = internals.maxWidth;
        that.canvas.height = internals.maxHeight;
    }

    _loop() {
        this.raf = window.requestAnimationFrame(this._loop);
        this._draw();
    }

    _draw() {
        const that = this;

        that.ctx.beginPath();
        that.ctx.globalAlpha = 1;
        that.ctx.rect(0, 0, internals.maxWidth, internals.maxHeight);
        that.ctx.fillStyle = that.config.bgColor;
        that.ctx.fill();
        that.ctx.closePath();

        for (let i = 0; i < internals.pointsArray.length; i += 1) {
            let point = internals.pointsArray[i];

            that.ctx.beginPath();
            that.ctx.globalAlpha = point.alpha;
            that.ctx.fillStyle = point.color;
            that.ctx.arc(point.x, point.y, point.r, PI * 2, false);
            that.ctx.fill();
            that.ctx.closePath();

            point.checkUpdate({
                maxWidth: internals.maxWidth,
                maxHeight: internals.maxHeight
            });
        }
    }
}
