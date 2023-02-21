import './index.html';
import './css/owfont-regular.css';
import './css/style.css';

import { setLocalStorage, getLocalStorage } from './js/personal.js';
import { addSettings } from './js/settings';
import showTime from './js/time.js';
import setBg from './js/slider.js';
import getQuotes from './js/quote.js';
import addWeather from './js/weather.js';
import audioPlayer from './js/audio.js';

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', () => {
    getLocalStorage();
    createPage();
});
setBg();
addWeather();

function createPage() {
    addSettings();
    addWeather();
    showTime();
    getQuotes();
    audioPlayer();
}

export default createPage;
