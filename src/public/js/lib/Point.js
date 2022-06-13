const { floor, random } = Math;

import { randomFloatInclusive } from './utils';

const internals = {
  COLORS: [
    'rgba(31, 255, 255, .5)',
    'rgba(161, 170, 243, .5)',
    'rgba(255, 255, 255, .5)',
  ],
  MAX_POINT_SPEED: 0.05,
  MIN_POINT_SPEED: -0.05,
  MIN_POINT_RADIO: 0.6,
  MAX_POINT_RADIO: 1,
};

export default class Point {
  constructor() {
    this.alpha = 0;
    this.alphaFactor = random() * 0.01;
    this.reset();
  }

  update(maxWidth = 100, maxHeight = 100) {
    this.x += this.sx;
    this.y += this.sy;
    this.alpha += this.alphaFactor;

    if (this.alpha > 1.0) {
      this.alpha = 1.0;
      this.alphaFactor *= -1;
    }
    else if (this.alpha < 0.0) {
      this.alpha = 0.0;
      this.alphaFactor *= -1;
    }

    if (this.x > maxWidth || this.x < 0) this.sx *= -1;
    if (this.y > maxHeight || this.y < 0) this.sy *= -1;

    if (this.alpha === 0) this.reset(maxWidth, maxHeight);

    return this;
  }

  reset(maxWidth = window.innerWidth, maxHeight = window.innerHeight) {
    this.x = random() * maxWidth;
    this.y = random() * maxHeight;
    this.r = randomFloatInclusive(internals.MIN_POINT_RADIO, internals.MAX_POINT_RADIO);
    this.sx = random() < 0.5 ? internals.MIN_POINT_SPEED : internals.MAX_POINT_SPEED;
    this.sy = random() < 0.5 ? internals.MIN_POINT_SPEED : internals.MAX_POINT_SPEED;
    this.color = internals.COLORS[floor(random() * internals.COLORS.length)];
    return this;
  }
}
