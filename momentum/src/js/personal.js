import { toggleVisibleBlock } from "./settings.js";
import { nameChangeWidth } from "./greeting.js";

const nameUser = document.querySelector('.name');
const city = document.querySelector('.city') || 'Minsk';
const playList = document.querySelector('.play-list');
let options = {
    language: 'en',
    photoSource: 'github',
    blocks: ['time', 'date', 'greeting', 'quote', 'weather', 'audio']
}

function getOptions() {
    const checkedLanguage = document.querySelector('input[name="language"]:checked');
    const checkedBlocks = document.querySelectorAll('input[name="elements"]:checked');
    let blocks = [];
    checkedBlocks.forEach(elem => {
        blocks.push(elem.value);
    })
    options.blocks = blocks;
    options.language = checkedLanguage.value;
}

function setOptions() {
    const languageSettings = document.querySelectorAll('input[name="language"]');
    const blocksSettings = document.querySelectorAll('input[name="elements"]');
    languageSettings.forEach(elem => {
        if (elem.value === options.language) {
            elem.checked = true;
        } else {
            elem.checked = false;
        }
    })
    blocksSettings.forEach(elem => {
        if (options.blocks.includes(elem.value)) {
            elem.checked = true;
        } else {
            elem.checked = false;
        }
    })
}

function setLocalStorage() {
    localStorage.setItem('name', nameUser.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('playListHeight', playList.offsetHeight);
    getOptions();
    localStorage.setItem('options', JSON.stringify(options));
}

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        nameUser.value = localStorage.getItem('name');
        nameChangeWidth();
    }
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
    if (localStorage.getItem('playListHeight')) {
        playList.style.height = localStorage.getItem('playListHeight') + 'px';
    }
    if (localStorage.getItem('options')) {
        options = JSON.parse(localStorage.getItem('options'));
        setOptions();
        toggleVisibleBlock();
    }
}

export { setLocalStorage, getLocalStorage, options }