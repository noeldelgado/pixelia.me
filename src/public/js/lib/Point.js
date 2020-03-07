const { floor, random } = Math;

import { randomInt } from './utils';

const internals = {
    COLORS: [
        'rgba(238, 170, 238, .3)',
        'rgba(238, 170, 238, .8)',
        'rgba(153, 255, 235, .3)',
        'rgba(153, 255, 235, .8)',
        'rgba(161, 170, 243, .3)',
        'rgba(161, 170, 243, .8)'
    ],
    MAX_POINT_SPEED: 0.05,
    MIN_POINT_SPEED: -0.05,
    MIN_POINT_RADIO: 0.6,
    MAX_POINT_RADIO: 1
};

export default class Point {
    constructor(index) {
        this.index = index;
        this.alpha = random();
        this.alphaFactor = this.alpha * 0.1 * 0.1;
        this.update({
            maxWidth: window.innerWidth,
            maxHeight: window.innerHeight
        });
    }

    checkUpdate({ maxWidth, maxHeight }) {
        const point = this;

        point.x += point.sx;
        point.y += point.sy;
        point.alpha += point.alphaFactor;

        if (point.x > maxWidth || point.x < 0) {
            point.sx *= -1;
        }

        if (point.y > maxHeight || point.y < 0) {
            point.sy *= -1;
        }

        if (point.alpha > 1 || point.alpha < 0) {
            point.alphaFactor *= -1;
        }

        if (point.alpha < 0) {
            point.update({
                maxWidth,
                maxHeight
            });
        }
    }

    update({ maxWidth, maxHeight }) {
        const point = this;

        point.x = random() * maxWidth;
        point.y = random() * maxHeight;
        point.color = internals.COLORS[floor(random() * internals.COLORS.length)];
        point.r = randomInt(internals.MIN_POINT_RADIO, internals.MAX_POINT_RADIO);
        point.sx = random() < 0.5 ? internals.MIN_POINT_SPEED : internals.MAX_POINT_SPEED;
        point.sy = random() < 0.5 ? internals.MIN_POINT_SPEED : internals.MAX_POINT_SPEED;
    }
}
