import {getTimeOfDay} from './general.js';

const greeting = document.querySelector('.greeting');


function showGreeting() {
    const date = new Date();
    const hours = date.getHours();
    const timeOfDay = getTimeOfDay(hours);
    const greetingText = `Good ${timeOfDay}`;
    greeting.textContent = greetingText;
}

export default showGreeting;