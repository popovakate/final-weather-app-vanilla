function displayTemperature(response) {
  let temperatureElement = document.querySelector("temperature");
  let cityElement = document.querySelector("city");
  let descriptionElement = document.querySelector("description");
  let humidityElement = document.querySelector("humidity");
  let windElement = document.querySelector("wind");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].decription;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.main.speed);
}
let apiKey = "ab01f5429d25b879daffdaa00545a954";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
