import { $$ } from './lib/utils';
import BackgroundCanvas from './lib/BackgroundCanvas';
import HandleProjectsLoad from './lib/HandleProjectsLoad';

new BackgroundCanvas({
    totalPoints: 200,
    bgColor: getComputedStyle(document.body, null).getPropertyValue('background-color')
}).run();

new HandleProjectsLoad({
    links: $$('.demos a:not([target="_blank"]), .oss a:not([target="_blank"])')
}).run();

