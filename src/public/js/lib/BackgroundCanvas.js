const { log } = console;
const { floor, PI, random } = Math;

import { randomInt } from './utils';

const internals = {
    w: 0,
    h: 0,
    pointsArray: [],

    MAX_POINT_SPEED: 0.05,
    MIN_POINT_SPEED: -0.05,
    MIN_POINT_RADIO: 0.6,
    MAX_POINT_RADIO: 1,

    COLORS: [
        // "cyan",
        // "tomato",
        // "gold",
        'rgba(238, 170, 238, .25)',
        'rgba(238, 170, 238, .75)',
        'rgba(153, 255, 235, .25)',
        'rgba(153, 255, 235, .75)'
    ]
};

internals.updatePoint = function updatePoint(point) {
    point.x += point.sx;
    point.y += point.sy;
    point.alpha += point.alphaFactor;

    if (point.x > internals.w || point.x < 0) {
        point.sx *= -1;
    }

    if (point.y > internals.h || point.y < 0) {
        point.sy *= -1;
    }

    if (point.alpha > 1 || point.alpha < 0) {
        point.alphaFactor *= -1;
    }

    if (point.alpha < 0) {
        point.update();
    }
};


class Point {
    constructor(index) {
        this.index = index;
        this.alpha = random();
        this.alphaFactor = this.alpha * .1 * .1;
        this.update();
    }

    update() {
        this.x = random() * internals.w;
        this.y = random() * internals.h;
        this.color = internals.COLORS[floor(random() * internals.COLORS.length)];
        this.r = randomInt(internals.MIN_POINT_RADIO, internals.MAX_POINT_RADIO);
        this.sx = random() < 0.5 ? internals.MIN_POINT_SPEED : internals.MAX_POINT_SPEED;
        this.sy = random() < 0.5 ? internals.MIN_POINT_SPEED : internals.MAX_POINT_SPEED;
    }
}

export default class BackgroundCanvas {
    constructor(config) {
        log('🖼');

        const that = this;

        Object.assign(that.config = {}, {
            totalPoints: 100,
            bgColor: '#000'
        }, config);

        that.canvas = document.createElement('canvas');
        that.ctx = that.canvas.getContext('2d');
        if (!that.ctx) return;

        document.body.appendChild(that.canvas);
        that._updateDynamics();

        for (var i = 0; i < that.config.totalPoints; i++) {
            internals.pointsArray.push(new Point(i));
        }
    }

    run() {
        const that = this;

        that._bindEvents();
        that._loop();

        return that;
    }

    _bindEvents() {
        const that = this;

        that._loop = that._loop.bind(that);

        that._updateDynamics = that._updateDynamics.bind(that);
        window.addEventListener('resize', that._updateDynamics);

        return that;
    }

    _updateDynamics() {
        this.canvas.width = internals.w = window.innerWidth;
        this.canvas.height = internals.h = window.innerHeight;
    }

    _loop() {
        window.requestAnimationFrame(this._loop);
        this._draw();
    }

    _draw() {
        const that = this;

        that.ctx.beginPath();
        that.ctx.globalAlpha = 1;
        that.ctx.rect(0, 0 , internals.w, internals.h);
        that.ctx.fillStyle = that.config.bgColor;
        that.ctx.fill();
        that.ctx.closePath();

        for (var i = 0; i < internals.pointsArray.length; i += 1) {
            var point = internals.pointsArray[i];

            that.ctx.beginPath();
            that.ctx.globalAlpha = point.alpha;
            that.ctx.fillStyle = point.color;
            that.ctx.arc(point.x, point.y, point.r, Math.PI * 2, false);
            that.ctx.fill();
            that.ctx.closePath();

            internals.updatePoint(point);
        }
    }
}
