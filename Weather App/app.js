const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weatherImg = document.querySelector(".weather-img");
const temprature = document.querySelector(".temprature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const locationNotFound = document.querySelector(".location-not-found");
const weatherBody = document.querySelector(".weather-body");

async function checkWeather(city) {

    const api_key = "b4aa8dfc1bba184cf250555055bc0733";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
    const weather_data = await fetch(`${url}`)
    .then(response => 
        response.json()); 

    if(weather_data.cod === '404'){
        locationNotFound.style.display = "flex";
        weatherBody.style.display = "none";
        return;
    }

    locationNotFound.style.display = "none";


    weatherBody.style.display = "flex";
    temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;    
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windSpeed.innerHTML = `${weather_data.wind.speed}Km/Hr`;    
    
    switch(weather_data.weather[0].main){
        case 'Rain' :
            weatherImg.src = "./images/rain.png";
            break;
        case 'Clear' :
            weatherImg.src = "./images/clear.png";
            break;
        case 'Clouds' :
            weatherImg.src = "./images/cloud.png";
            break;
        case 'Mist' :
            weatherImg.src = "./images/mist.png";
            break;
        case 'Snow' :
            weatherImg.src = "./images/snow.png"; 
            break;               
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(inputBox.value);
});

