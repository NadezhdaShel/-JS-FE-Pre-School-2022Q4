import ruleTranslation from "./translation.js";
import { options } from "./personal.js";

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');
const weatherError = document.querySelector('.weather-error');


async function getWeather(cityValue) {
    let language = options.language;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&lang=${language}&appid=ce9410a5a39fcf35d3318c0e8aa32535&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    try {
        const tempUnit = ruleTranslation.temp[language];
        const windUnit = ruleTranslation.wind[language];
        const humidityTitle = ruleTranslation.humidityTitle[language];
        const windTitle = ruleTranslation.windTitle[language];
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)} ${tempUnit}`;
        wind.textContent = `${windTitle} ${Math.round(data.wind.speed)} ${windUnit}`;
        humidity.textContent = `${humidityTitle} ${Math.round(data.main.humidity)} %`;
        weatherDescription.textContent = data.weather[0].description;

    } catch (error) {
        let message = data.message;
        let massageFormated = message.replace(/^./i, (e) => e.toUpperCase());
        weatherError.textContent = massageFormated;
    }

}

function clearWeather() {
    weatherIcon.className = 'weather-icon owf';
    temperature.textContent = '';
    wind.textContent = '';
    humidity.textContent = '';
    weatherDescription.textContent = '';
    weatherError.textContent = '';
}

function addWeather() {
    const cityValue = localStorage.getItem('city') || 'Minsk';
    getWeather(cityValue);
}

city.addEventListener('change', function () {
    const cityValue = city.value || 'Minsk';
    clearWeather();
    getWeather(cityValue);
});

export default addWeather;
