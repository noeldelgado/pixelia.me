import { createElementFromString, debounce } from '../utils';
import './style.css';

/**
 * Main logic taken from Blake Bowen’s pen
 * https://codepen.io/osublake/pen/jzNgqY
 */
export default class FollowingEye {
  #template = `
    <svg class="FollowingEye" viewBox="0 0 100 100" width="100%" height="100%">
      <g class="FollowingEye-group">
        <circle class="FollowingEye-outline" stroke-width="6" cx="50" cy="50" r="46"/>
        <circle class="FollowingEye-inner" cx="76" cy="50" r="20"/>
      </g>
    </svg>
  `;

  centerX = null;
  centerY = null;
  point = null
  eye = null

  constructor() {
    this.element = createElementFromString(this.#template);
    this.point = this.element.createSVGPoint();
    this.eye = this.element.querySelector('.FollowingEye-group');

    this.#bindEvents();
  }

  render(element, position = 'beforeend') {
    element.insertAdjacentElement(position, this.element);

    return this;
  }

  update() {
    const { width, x, y } = this.eye.getBBox();

    this.centerX = x + (width / 2);
    this.centerY = y + (width / 2);

    return this;
  }

  #update({ x, y }) {
    const theta = Math.atan2(y - this.centerY, x - this.centerX);
    const angle = (theta * 180 / Math.PI) + 360;

    this.eye.style.transform = `rotate(${angle}deg)`;
  }

  mouseMoveHandler(ev) {
    this.#update(this.#getCoordinates(ev));
  }

  resizeWindowHandler() {
    this.update();
  }

  #getCoordinates(ev) {
    this.point.x = ev.clientX;
    this.point.y = ev.clientY;

    return this.point.matrixTransform(this.element.getScreenCTM().inverse());
  }

  #bindEvents() {
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    this.resizeWindowHandler = this.resizeWindowHandler.bind(this);

    window.addEventListener('mousemove', this.mouseMoveHandler);
    window.addEventListener('resize', debounce(this.resizeWindowHandler, 500));

    return this;
  }
}
