
function formatDate(timestamp) {
 let date = new Date(timestamp);
 let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
 let minutes = date.getMinutes();
 if (minutes < 10) {
    minutes = `0${minutes}`;
 }
 let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 let day = days[date.getDay()];
 return `${day} ${hours}:${minutes}`
}

function displayTemperature(response) {
let currentCity = document.querySelector("#current-city");
currentCity.innerHTML = response.data.name;

 let currentTemperature = document.querySelector("#current-temp");
 currentTemperature.innerHTML = Math.round(response.data.main.temp);

let currentCondition = document.querySelector("#weather-description");
currentCondition.innerHTML = response.data.weather[0].description;

 let currentHumidity = document.querySelector("#current-humidity");
 currentHumidity.innerHTML = response.data.main.humidity;

 let currentWind = document.querySelector("#current-wind");
 currentWind.innerHTML = Math.round(response.data.wind.speed);

 let date = document.querySelector("#date");
 date.innerHTML = formatDate(response.data.dt * 1000);

}

let apiKey = "690c1586235f5c036bd74a5466b0f1f4";
let cityName = "London"
let apiUrl =
  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(displayTemperature);