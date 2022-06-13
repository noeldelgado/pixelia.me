export const $ = document.querySelector.bind(document);

export const $$ = document.querySelectorAll.bind(document);

export const randomFloatInclusive = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/* Copyright (c) 2011 David Walsh
 * http://davidwalsh.name/detect-scrollbar-width
 */
export const getScrollbarWidth = () => {
    const e = document.createElement('div');
    let scrollbarWidth = 0;

    e.style.position = 'absolute';
    e.style.top = '-9999px';
    e.style.width = '100px';
    e.style.height = '100px';
    e.style.overflow = 'scroll';
    e.style.msOverflowStyle = 'scrollbar';
    document.body.appendChild(e);
    scrollbarWidth = (e.offsetWidth - e.clientWidth);
    document.body.removeChild(e);

    return scrollbarWidth;
}

/**
 * Limit the amount of times a function is called.
 * @see https://medium.com/@TCAS3/debounce-deep-dive-javascript-es6-e6f8d983b7a1
 */
export const debounce = (fn, time) => {
    let timeout = null;

    return function debounceFn() {
        const functionCall = () => fn.apply(this, arguments);

        clearTimeout(timeout);
        timeout = setTimeout(functionCall, time);
    }
}

export const createElementFromString = (htmlString) => {
  const el = document.createElement('div');
  el.insertAdjacentHTML('beforeend', htmlString);
  return el.firstElementChild;
}
