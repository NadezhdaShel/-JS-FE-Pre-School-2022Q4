

const time = document.querySelector('.time');
const dateBlock = document.querySelector('.date');

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    
    setTimeout(showTime, 1000);
}


function showDate() {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' };
    const currentDate = date.toLocaleDateString('en-En', options);
    dateBlock.textContent = currentDate;
}

export default showTime;