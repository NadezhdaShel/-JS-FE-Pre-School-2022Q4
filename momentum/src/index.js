import showTime from './js/time.js';
import { setLocalStorage, getLocalStorage } from './js/personal.js';
import setBg from './js/slider.js';

showTime();
setBg();

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
