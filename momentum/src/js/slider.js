import { getTimeOfDay } from './general.js';
import { options } from "./personal.js";

let randomNum = 1;
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

function getRandomNum(min, max) {
    randomNum = Math.floor(Math.random() * (max - min) + min);
}

async function getImageAPI(timeOfDay) {
    const tag = options.photoTag || 'nature';
    try {
        const url = `https://api.unsplash.com/photos/random?query=${timeOfDay},${tag}&client_id=Go2xKF4_a5YzywgDAoQheBUNqfMOlGnrqJto7uJ3cpY`;
        const res = await fetch(url);
        const data = await res.json();
        const img = new Image();
        const bgLink = `${data.urls.regular}`;
        console.log(data.urls.regular);
        img.src = bgLink;
        img.onload = () => {
            document.body.style.backgroundImage = `url(${data.urls.regular})`;
        };
    } catch (error) {
        document.body.style.backgroundImage = `url(assets/image/bg.jpg)`;
    }
}

function setBg() {
    const date = new Date();
    const hours = date.getHours();
    const timeOfDay = getTimeOfDay(hours);
    if (options.photoSource === 'github') {
        const bgNum = String(randomNum).padStart(2, '0');
        const bgLink = `https://raw.githubusercontent.com/NadezhdaShel/momentum-backgrounds/main/${timeOfDay}/${bgNum}.webp`;
        const img = new Image();
        img.src = bgLink;
        img.onload = () => {
            document.body.style.backgroundImage = `url(${bgLink})`;
        };
    }
    if (options.photoSource === 'unsplash') {
        getImageAPI(timeOfDay);
    }
}

function getSlideNext() {
    if (randomNum < 20) {
        randomNum++;
    } else {
        randomNum = 1;
    }
    setBg();
}
function getSlidePrev() {
    if (randomNum > 1) {
        randomNum--;
    } else {
        randomNum = 20;
    }
    setBg();
}

getRandomNum(1, 10);
slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

export default setBg;