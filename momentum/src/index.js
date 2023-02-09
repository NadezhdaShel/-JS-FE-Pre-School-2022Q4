import showTime from './js/time.js';
import { setLocalStorage, getLocalStorage } from './js/personal.js';

showTime();

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
