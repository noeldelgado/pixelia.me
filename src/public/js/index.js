import { $, $$, getScrollbarWidth } from './lib/utils';
// import BackgroundCanvas from './lib/BackgroundCanvas';
import HandleProjectsLoad from './lib/HandleProjectsLoad';

const internals = {};

internals.body = document.body;
internals.pageTopWave = $('.page-top-wave');

// internals.backgroundCanvas = new BackgroundCanvas({
//     totalPoints: 200,
//     bgColor: getComputedStyle(document.body, null).getPropertyValue('background-color')
// }).run();

internals.projectsHandler = new HandleProjectsLoad({
    links: $$('.demos a:not([target="_blank"]), .oss a:not([target="_blank"])')
}).run();

internals.lastKnownScrollPosition = 0;
internals.onScrollTicking = false;
internals.scrollHandler = () => {
    internals.lastKnownScrollPosition = window.scrollY;

    if (!internals.onScrollTicking) {
        window.requestAnimationFrame(() => {
            internals.handleScrollUpdate(internals.lastKnownScrollPosition);
            internals.onScrollTicking = false;
        });

        internals.onScrollTicking = true;
    }
};
internals.handleScrollUpdate = (scrollPos) => {
    if (scrollPos > 20) {
        internals.pageTopWave.classList.add('-pause');
    }
    else {
        internals.pageTopWave.classList.remove('-pause');
    }
};

internals.loadHandler = () => {
    internals.projectsHandler.loaded();
};

internals.projectsHandler.element.addEventListener('projectShow', () => {
    internals.body.classList.add('-prevent-scrolling');
    internals.pageTopWave.classList.add('-pause');
    // internals.backgroundCanvas.pause();
});

internals.projectsHandler.element.addEventListener('projectHide', () => {
    internals.body.classList.remove('-prevent-scrolling');
    internals.pageTopWave.classList.remove('-pause');
    // internals.backgroundCanvas.restart();
});

window.addEventListener('scroll', internals.scrollHandler);
window.addEventListener('load', internals.loadHandler);

document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);
