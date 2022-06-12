import { $$, getScrollbarWidth } from './lib/utils';

const internals = {};

internals.loadHandler = async () => {
  const TopWave = await import('./lib/TopWave');
  const HandleProjectsLoad = await import('./lib/HandleProjectsLoad');
  const BackgroundCanvas = await import('./lib/BackgroundCanvas');

  const projectsHandler = new HandleProjectsLoad.default({
    links: $$('.demos a, .oss a:not([target="_blank"])'),
  });
  const topWave = new TopWave.default();
  const backgroundCanvas = new BackgroundCanvas.default({
    totalPoints: Math.round(window.innerWidth / window.innerHeight * 100),
    bgColor: getComputedStyle(document.documentElement).getPropertyValue('--color-bg'),
  });

  projectsHandler?.run();
  topWave?.render(document.body, 'afterbegin');
  backgroundCanvas?.render(document.body, 'afterbegin').run();

  projectsHandler?.element.addEventListener('projectShow', () => {
    document.body.classList.add('-prevent-scrolling');
    topWave?.pause();
    backgroundCanvas?.pause();
  });

  projectsHandler?.element.addEventListener('projectHide', () => {
    document.body.classList.remove('-prevent-scrolling');
    topWave?.resume();
    backgroundCanvas?.resume();
  });
};

window.addEventListener('load', internals.loadHandler);
document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);
