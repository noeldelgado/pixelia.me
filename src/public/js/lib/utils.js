const { floor, random } = Math;

export const $ = document.querySelector.bind(document);

export const $$ = document.querySelectorAll.bind(document);

export const randomInt = (min, max) => {
    return floor(random() * (max - min + 1)) + min;
};
