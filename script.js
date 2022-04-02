let citiesData = [];
let selectionArea = document.getElementById("CitiesSelection");

const addCity = (cityName) => {
  let found = false;
  let cityData = {
    name: cityName,
    linkName: cityName.replace(" ", "%20"),
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
    `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity[0].linkName}&appid=723b2427c50d9797b070849320646e33`
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
        <h3>Humidity: ${data.main.humidity}%</h3>
        <h3>Wind Degree: ${data.wind.deg}°</h3>
        <h3>Wind Speed: ${data.wind.speed}km/h</h3>
    </div>
  </div>
  `;
};

document.getElementById("footer").style.position = "absolute";

addCity("Kabul");
addCity("Tirana");
addCity("Algiers");
addCity("Luanda");
addCity("Yerevan");
addCity("Canberra");
addCity("Baku");
addCity("Nassau");
addCity("Manama");
addCity("Dhaka");
addCity("Singapore");
addCity("Madrid");
addCity("Stockholm");
addCity("Ankara");
addCity("Bangkok");
addCity("Vienna");
addCity("Buenos Aires");
addCity("Bridgetown");
addCity("Brussels");
addCity("Minsk");
addCity("Brasilia");
addCity("Ottawa");
addCity("Cameroon");
addCity("Abu Dhabi");
addCity("Mexico City");
addCity("San Fransisco");
addCity("New York");
addCity("Kyiv");
addCity("Dubai");
addCity("London");
addCity("Beijing");
addCity("Zagreb");
addCity("Prague");
addCity("Copenhagen");
addCity("Cairo");
addCity("Oslo");
addCity("Warsaw");
addCity("Lisbon");
addCity("Helsinki");
addCity("Paris");
addCity("Berlin");
addCity("Athens");
addCity("Jakarta");
addCity("Dublin");
addCity("Rome");
addCity("Tokya");
addCity("Santiago");
addCity("Moroni");
addCity("Havana");
addCity("Nicosia");
addCity("Quito");
addCity("Asmara");
addCity("Tallinn");
addCity("Suva");
addCity("Tbilisi");
addCity("Accra");
addCity("Georgetown");
addCity("Budapest");
addCity("Tegucigalpa");
addCity("Reykjavik");
addCity("Tehran");
addCity("Baghdad");
addCity("Kingston");
addCity("Amman");
addCity("Nairobi");
addCity("Beirut");
addCity("Tripoli");
addCity("Vilnius");
addCity("Vaduz");
addCity("Antananarivo");
addCity("Lilongwe");
addCity("Male");
addCity("Bamako");
addCity("Valletta");
addCity("Majuro");
addCity("Nouakchott");
addCity("Monaco");
addCity("Rabat");
addCity("Naypyidaw");
addCity("Amsterdam");
addCity("Wellington");
addCity("Managua");
addCity("Niamey");
addCity("Abuja");
addCity("Muscat");
addCity("Islamabad");
addCity("Lima");
addCity("Manila");
addCity("Doha");
addCity("Moscow");
addCity("Kigali");
addCity("Bucharest");
addCity("Riyadh");
addCity("Dakar");
addCity("Belgrade");
addCity("Victoria");
addCity("Freetown");
addCity("Bratislava");
addCity("Ljubljana");
addCity("Mogadishu");
addCity("Seoul");
addCity("Khartoum");
addCity("Bern");
addCity("Damascus");
addCity("Taipei");
addCity("Dodoma");
addCity("Dili");
addCity("Tunis");
addCity("Funafuti");
addCity("Kampala");
addCity("Caracas");
addCity("Hanoi");
addCity("Lusaka");
addCity("Harare");
addCity("Arizona");
addCity("California");
addCity("Florida");
addCity("Washington");
addCity("New Delhi");
addCity("Belmopan");
addCity("San Jose");
addCity("Addis Ababa");
addCity("Sarajevo");
addCity("San Marino");
addCity("Gaborone");
addCity("Port Louis");
addCity("Sofia");
addCity("Kuala Lumpur");
addCity("Praia");

setCitySelection();
