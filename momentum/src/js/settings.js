import createPage from "../index.js";
import { setLocalStorage, options } from "./personal.js";
import ruleTranslation from "./translation.js";

const closeBtn = document.querySelector('.settings-close');
const settings = document.querySelector('.settings');
const openBtn = document.querySelector('.settings-icon');
const blocksGroup = document.querySelector('.elements-group');
const languageGroup = document.querySelector('.language-group');
const photoSourceGroup = document.querySelector('.photo-source-group');
const elementsTitle = document.querySelector('.elements-title');
const photoSourceTitle = document.querySelector('.photo-source-title');
const elementsLabel = document.querySelectorAll('.elements-label');
const copyright = document.querySelector('.copyright-name');
const userName = document.querySelector('.name');
const city = document.querySelector('.city');
const photoTagLabel = document.querySelector('.tag-label');
const photoTag = document.getElementById('photoSourceTag');

const blocksContent = ['time', 'date', 'greeting', 'quote', 'weather', 'audio'];

function toggleSettings() {
    settings.classList.toggle('open');
}

function toggleVisibleBlock() {
    blocksContent.forEach(elem => {
        let targetBlock = document.getElementById(`${elem}`);
        if (options.blocks.includes(elem)) {
            targetBlock.classList.remove('hide-element');
        } else {
            targetBlock.classList.add('hide-element');
            // targetBlock.style.transitionDuration = '0s';
        }
    });
}

function addSettings() {
    const language = options.language;
    const checkedPhotoSource = document.querySelector('input[name="photoSource"]:checked');
    elementsTitle.textContent = ruleTranslation.elementsTitle[language];
    elementsLabel.forEach((elem, index) => {
        elem.textContent = ruleTranslation.elementsLabel[language][index];
    })
    closeBtn.textContent = ruleTranslation.closeBtn[language];
    copyright.textContent = ruleTranslation.copyright[language];
    userName.placeholder = ruleTranslation.userName[language];
    city.placeholder = ruleTranslation.city[language];
    photoTagLabel.textContent = ruleTranslation.tagLabel[language];
    photoSourceTitle.textContent = ruleTranslation.photoSourceTitle[language];
    if (checkedPhotoSource.value === "github") {
        photoTag.disabled = true;
    }
    if (checkedPhotoSource.value === "unsplash") {
        photoTag.disabled = false;
    }
}

closeBtn.addEventListener('click', toggleSettings);
openBtn.addEventListener('click', toggleSettings);
document.addEventListener('click', (event) => {
    const target = event.target;
    if (target === openBtn) return;
    const itsSettings = target == settings || settings.contains(target);
    if (settings.classList.contains("open") && !itsSettings) {
        toggleSettings();
    }
});

blocksGroup.addEventListener('change', (event) => {
    setLocalStorage();
    toggleVisibleBlock();

})
languageGroup.addEventListener('change', (event) => {
    setLocalStorage();
    createPage();
})
photoSourceGroup.addEventListener('change', (event) => {
    setLocalStorage();
    createPage();
    if (event.target.value === 'github') photoTag.disabled = true;
    if (event.target.value === 'unsplash') photoTag.disabled = false;
})

export { addSettings, toggleVisibleBlock };