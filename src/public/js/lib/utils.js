const { floor, random } = Math;

export const $ = document.querySelector.bind(document);

export const $$ = document.querySelectorAll.bind(document);

export const randomInt = (min, max) => floor(random() * (max - min + 1)) + min;

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
