import { getTimeOfDay } from './general.js';
import { options } from "./personal.js";
import ruleTranslation from './translation.js';

const greeting = document.querySelector('.greeting');
const nameUser = document.querySelector('.name');

function showGreeting() {
    const date = new Date();
    const hours = date.getHours();
    const timeOfDay = getTimeOfDay(hours);
    let greetingText = (options.language !== 'en') ? translateGreeting(timeOfDay) : `Good ${timeOfDay}`;
    greeting.textContent = greetingText;
}

function translateGreeting(text) {
    const language = options.language;
    const index = ruleTranslation.greeting['en'].indexOf(text);
    return ruleTranslation.greeting[language][index];
}

function nameChangeWidth() {
    nameUser.style.width = 0;
    if (nameUser.value === '') {
        nameUser.style.width = '300px';
    } else {
        nameUser.style.width = nameUser.scrollWidth + 'px';
    }
}

function nameUserChange() {
    localStorage.setItem('name', nameUser.value);
    nameChangeWidth();
}

function nameUserKeydown() {
    nameUser.style.width = nameUser.scrollWidth + 'px';
}

nameUser.addEventListener('change', nameUserChange);
nameUser.addEventListener('keydown', nameUserKeydown);

export { showGreeting, nameChangeWidth };