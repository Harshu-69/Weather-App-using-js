const apiKey = "ce4b206b60fc7d9e3fd7988027aa203e"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".ctop input");
const searchBox = document.querySelector(".ctop .search-box");

// Updating the Weather Image 
const weatherImg = document.querySelector(".weather-icon img")

const card2 = document.querySelector(".card2 ");



async function CheckWeather(city) // It contains all the api data 
{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    console.log(data);



    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + "°km/h";



    if (data.weather[0].main == "Clear") {
        weatherImg.src = "Assets/weather-app-img/images/clear.png"
    } else if (data.weather[0].main == "Clouds") {
        weatherImg.src = "Assets/weather-app-img/images/clouds.png"
    } else if (data.weather[0].main == "Drizzel") {
        weatherImg.src = "Assets/weather-app-img/images/drizzel.png"
    } else if (data.weather[0].main == "Mist") {
        weatherImg.src = "Assets/weather-app-img/images/mist.png"
    } else if (data.weather[0].main == "Rain") {
        weatherImg.src = "Assets/weather-app-img/images/rain.png"
    } else if (data.weather[0].main == "Snow") {
        weatherImg.src = "Assets/weather-app-img/images/snow.png"
    }

    card2.style.display = "block";

    if (data.name == searchInput.value) {

    } else if (data.name == searchInput.value) {

    }

}


document.addEventListener('keydown', handleKeyDown);

// Function to handle keydown event
function handleKeyDown(event) {
    if (event.key === 'Enter') {

        console.log(`Key down: ${event.key}`);
        card2.style.display = "block";
        CheckWeather(searchInput.value);
    }

}


searchBox.addEventListener("click", () => {

    CheckWeather(searchInput.value);
})