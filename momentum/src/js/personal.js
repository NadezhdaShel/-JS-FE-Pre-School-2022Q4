const nameUser = document.querySelector('.name');
const city = document.querySelector('.city');

function setLocalStorage() {
    localStorage.setItem('name', nameUser.value);
    localStorage.setItem('city', city.value);

}

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        nameUser.value = localStorage.getItem('name');
    }
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
}

function addStorage() {
    window.addEventListener('beforeunload', setLocalStorage);
    window.addEventListener('load', getLocalStorage);
}

export default addStorage;