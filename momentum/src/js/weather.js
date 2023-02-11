const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');

async function getWeather(cityValue) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&lang=ru&appid=ce9410a5a39fcf35d3318c0e8aa32535&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    wind.textContent = `${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `${Math.round(data.main.humidity)} %`;
    weatherDescription.textContent = data.weather[0].description;

}

function addWeather() {
    window.addEventListener('load', function () {
        const cityValue = localStorage.getItem('city') || 'Minsk';
        getWeather(cityValue);
    });

    city.addEventListener('change', function () {
        const cityValue = city.value || 'Minsk';
        getWeather(cityValue);
    });
}


export default addWeather;
