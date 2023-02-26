import './index.html';
import './css/owfont-regular.css';
import './css/style.css';

import { setLocalStorage, getLocalStorage } from './js/personal.js';
import { addSettings } from './js/settings.js';
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

function createPage() {
    addSettings();
    setBg();
    showTime();
    getQuotes();
    audioPlayer();
    addWeather();
}

export default createPage;
