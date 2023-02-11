import showTime from './js/time.js';
import { setLocalStorage, getLocalStorage } from './js/personal.js';
import setBg from './js/slider.js';
import getQuotes from './js/quote.js';

showTime();
setBg();
getQuotes();

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
