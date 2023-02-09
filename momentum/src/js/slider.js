import { getTimeOfDay } from './general.js'

let randomNum = 0;
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

function getRandomNum(min, max) {
    randomNum = Math.floor(Math.random() * (max - min) + min);
}

function setBg() {
    const date = new Date();
    const hours = date.getHours();
    const timeOfDay = getTimeOfDay(hours);
    const bgNum = String(randomNum).padStart(2, '0');
    const bgLink = `https://raw.githubusercontent.com/NadezhdaShel/momentum-backgrounds/main/${timeOfDay}/${bgNum}.webp`
    const img = new Image();
    img.src = bgLink;
    img.onload = () => {
        document.body.style.backgroundImage = `url(${bgLink})`;
    };
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

getRandomNum(0, 9);
slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

export default setBg;