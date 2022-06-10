import { $, $$, getScrollbarWidth } from './lib/utils';
// import BackgroundCanvas from './lib/BackgroundCanvas';

const internals = {};

// internals.backgroundCanvas = new BackgroundCanvas({
//     totalPoints: 200,
//     bgColor: getComputedStyle(document.body, null).getPropertyValue('background-color')
// }).run();

internals.loadHandler = async () => {
  const TopWave = await import('./lib/TopWave');
  const HandleProjectsLoad = await import('./lib/HandleProjectsLoad');

  const topWave = new TopWave.default().render(document.body, 'afterbegin');
  const projectsHandler = new HandleProjectsLoad.default({
    links: $$('.demos a, .oss a:not([target="_blank"])')
  }).run();

  window.requestAnimationFrame(() => topWave.active());

  projectsHandler.element.addEventListener('projectShow', () => {
    document.body.classList.add('-prevent-scrolling');
    topWave.pause();
    internals.backgroundCanvas?.pause();
  });

  projectsHandler.element.addEventListener('projectHide', () => {
    document.body.classList.remove('-prevent-scrolling');
    topWave.resume();
    internals.backgroundCanvas?.restart();
  });
};

window.addEventListener('load', internals.loadHandler);

document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);
