const nameUser = document.querySelector('.name');
const city = document.querySelector('.city');
const playList = document.querySelector('.play-list');

function setLocalStorage() {
    localStorage.setItem('name', nameUser.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('playListHeight', playList.offsetHeight);
}

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        nameUser.value = localStorage.getItem('name');
    }
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
    if (localStorage.getItem('playListHeight')) {
        playList.style.height = localStorage.getItem('playListHeight') + 'px';
    }
}

export { setLocalStorage, getLocalStorage}