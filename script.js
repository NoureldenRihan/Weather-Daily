let citiesData = [];
let selectionArea = document.getElementById("CitiesSelection");

const addCity = (cityName) => {
  let found = false;
  let cityData = {
    name: cityName,
  };
  for (let i = 0; i < citiesData.length; i++) {
    if (citiesData[i].name === cityName) {
      found = true;
    }
  }
  if (!found) {
    citiesData.push(cityData);
  }
};

const setCitySelection = () => {
  for (let i = 0; i < citiesData.length; i++) {
    let newOption = new Option(citiesData[i].name, citiesData[i].name);
    selectionArea.add(newOption);
  }
};

const getWeatherData = () => {
  document.getElementById("footer").style.position = "static";
  let selectedCity = citiesData.filter(
    (city) => city.name === selectionArea.value
  );
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity[0].name}&appid=723b2427c50d9797b070849320646e33`
  )
    .then((res) => res.json())
    .then((data) => setupCity(data));
};

const imgPathFinder = (state) => {
  switch (state) {
    case "Clear":
      return "/imgs/Sunny.png";
    case "Clouds":
      return "/imgs/cloudy.png";
    case "Snow":
      return "/imgs/snowy.png";
    case "Thunderstorm":
      return "/imgs/Thunder-rain.png";
    case "Drizzle":
      return "/imgs/Showers.png";
    case "Rain":
      return "/imgs/Showers.png";
    default:
      return "/imgs/Sunny.png";
  }
};

const setupCity = (data) => {
  let cityDataDiv = document.getElementById("cityData");
  cityDataDiv.innerHTML = `
  <div class='cityTitle'>
    <h1 class="title">${data.name}</h1>
  </div>
  <div class='weatherImg'>
    <img src='${imgPathFinder(data.weather[0].main)}' alt='${
    data.weather[0].main
  } Weather Icon' />
  </div>
  <div class='weatherDetails'>
    <h1 class='weatherState'>${data.weather[0].description}</h1>
    <div class='maxTemp'>
        <img src='/imgs/Max-Temp.png' alt='Max Temperature' />
        <h1> ${Math.round(data.main.temp_max - 273.15)}°C </h1>
    </div>
    <div class='minTemp'>
        <img src='/imgs/Min-Temp.png' alt='Min Temperature' />
        <h1> ${Math.round(data.main.temp_min - 273.15)}°C </h1>
    </div>
    <div class="extras">
        <h3>Humidity: ${data.main.humidity}</h3>
        <h3>Wind Degree: ${data.wind.deg}</h3>
        <h3>Wind Speed: ${data.wind.speed}</h3>
    </div>
  </div>
  `;
};

document.getElementById("footer").style.position = "absolute";

addCity("Cairo");
addCity("Giza");
addCity("Paris");
setCitySelection();
