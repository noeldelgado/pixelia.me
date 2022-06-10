import './style.css';

export default class TopWave {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'TopWave';
    this.#bindEvents();
  }

  render(element, position) {
    element.insertAdjacentElement(position, this.element);
    return this;
  }

  active() {
    this.element.classList.add('-active');
    return this;
  }

  pause() {
    this.element.classList.add('-pause');
    return this;
  }

  resume() {
    this.element.classList.remove('-pause');
    return this;
  }

  _scrollHandler() {
    const that = this;

    that.#lastKnownScrollPosition = window.scrollY;

    if (!that.#onScrollTicking) {
      window.requestAnimationFrame(() => {
        that.#handleScrollUpdate(that.#lastKnownScrollPosition);
        that.#onScrollTicking = false;
      });

      that.#onScrollTicking = true;
    }
  }

  #lastKnownScrollPosition = 0;
  #onScrollTicking = false;

  #handleScrollUpdate = (scrollPos) => {
    this[scrollPos > 20 ? 'pause' : 'resume']();
  };

  #bindEvents() {
    this._scrollHandler = this._scrollHandler.bind(this);
    window.addEventListener('scroll', this._scrollHandler);
    return this;
  }
}
