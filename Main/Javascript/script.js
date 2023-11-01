const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather() {
    const cityName = document.getElementById('city-input').value;

    fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherDisplay = document.getElementById('weather-display');
            weatherDisplay.innerHTML = `
                <h2>${data.name}</h2>
                <p>${data.main.temp}°C</p>
                <p>${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            alert('Error fetching weather data. Please try again.');
        });
}
