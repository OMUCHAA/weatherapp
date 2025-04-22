const apiKey = 'e0457806ab1860f13a874a82919663b3';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
const searchBtn = document.querySelector('.search button');
const searchBox = document.querySelector('.search input');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    let data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' Km/h';
    console.log(data);
}

searchBtn.addEventListener('click',() => {
    checkWeather(searchBox.value);
})
