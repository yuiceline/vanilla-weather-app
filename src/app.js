
function displayTemperature(response) {
console.log(response.data);
 
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
}

let apiKey = "690c1586235f5c036bd74a5466b0f1f4";
let cityName = "New York"
let apiUrl =
  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(displayTemperature);