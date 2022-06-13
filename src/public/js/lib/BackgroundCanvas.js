import { debounce } from './utils';
import Point from './Point';

export default class BackgroundCanvas {
  #points = [];

  #maxWidth = 0;

  #maxHeight = 0;

  #raf = null;

  #ctx = null;

  constructor(config) {
    this.config = {
      totalPoints: 100,
      bgColor: '#000',
      ...config,
    };

    this.element = document.createElement('canvas');
    this.#ctx = this.element.getContext('2d', { alpha: false });
  }

  render(element, position = 'beforeend') {
    element.insertAdjacentElement(position, this.element);

    return this;
  }

  run() {
    this.#bindEvents()._updateDynamics().loop();

    for (let i = 0; i < this.config.totalPoints; i+=1)
      this.#points.push(new Point());

    return this;
  }

  pause() {
    window.cancelAnimationFrame(this.#raf);
    return this;
  }

  resume() {
    this.loop();
    return this;
  }

  _updateDynamics() {
    this.#maxWidth = window.innerWidth;
    this.#maxHeight = window.innerHeight;
    this.element.width = this.#maxWidth;
    this.element.height = this.#maxHeight;

    return this;
  }

  loop() {
    this.#raf = window.requestAnimationFrame(this.loop);
    this.draw();
  }

  draw() {
    this.#ctx.beginPath();
    this.#ctx.rect(0, 0, this.#maxWidth, this.#maxHeight);
    this.#ctx.fillStyle = this.config.bgColor;
    this.#ctx.fill();
    this.#ctx.closePath();

    for (let i = 0, len = this.#points.length; i < len; i += 1) {
      let point = this.#points[i];

      this.#ctx.beginPath();
      this.#ctx.arc(point.x, point.y, point.r, Math.PI * 2, false);
      this.#ctx.fillStyle = point.color;
      this.#ctx.globalAlpha = point.alpha;
      this.#ctx.fill();
      this.#ctx.globalAlpha = 1.0;
      this.#ctx.closePath();

      point.update(this.#maxWidth, this.#maxHeight);

      point = null;
    }
  }

  #bindEvents() {
    this.loop = this.loop.bind(this);
    this._updateDynamics = this._updateDynamics.bind(this);

    window.addEventListener('resize', debounce(this._updateDynamics, 500));

    return this;
  }
}
