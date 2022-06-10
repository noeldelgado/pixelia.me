import { $, $$, getScrollbarWidth } from './lib/utils';
// import BackgroundCanvas from './lib/BackgroundCanvas';

const internals = {};

internals.pageTopWave = $('.page-top-wave');

// internals.backgroundCanvas = new BackgroundCanvas({
//     totalPoints: 200,
//     bgColor: getComputedStyle(document.body, null).getPropertyValue('background-color')
// }).run();

internals.loadHandler = async () => {
  const HandleProjectsLoad = await import('./lib/HandleProjectsLoad');

  const projectsHandler = new HandleProjectsLoad.default({
    links: $$('.demos a, .oss a:not([target="_blank"])')
  }).run();

  projectsHandler.element.addEventListener('projectShow', () => {
    document.body.classList.add('-prevent-scrolling');
    internals.pageTopWave.classList.add('-pause');
    internals.backgroundCanvas?.pause();
  });

  projectsHandler.element.addEventListener('projectHide', () => {
    document.body.classList.remove('-prevent-scrolling');
    internals.pageTopWave.classList.remove('-pause');
    internals.backgroundCanvas?.restart();
  });
};

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

window.addEventListener('load', internals.loadHandler);
window.addEventListener('scroll', internals.scrollHandler);

document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);
