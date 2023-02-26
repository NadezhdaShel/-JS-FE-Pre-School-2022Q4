import { showGreeting } from './greeting.js';
import { options } from "./personal.js";

const time = document.querySelector('.time');
const dateBlock = document.querySelector('.date');

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);
}


function showDate() {
    let language = options.language;
    let languageUpper = language.replace(/^./i, (e) => e.toUpperCase())
    const date = new Date();
    const opt = { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' };
    let currentDate = date.toLocaleDateString(`${language}-${languageUpper}`, opt);
    dateBlock.textContent = currentDate;
}

export default showTime;