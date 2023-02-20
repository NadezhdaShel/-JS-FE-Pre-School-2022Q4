const closeBtn = document.querySelector('.settings-close');
const settings = document.querySelector('.settings');
const openBtn = document.querySelector('.settings-icon');


function toggleSettings() {
    settings.classList.toggle('open');
}

function addSettings() {
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
}

export default addSettings;