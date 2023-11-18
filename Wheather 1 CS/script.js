const apikey = "30a6d4dd0d048cd68ba51ec85bbbeeb8";
const url = `https://api.openweathermap.org/data/2.5/weather?q=`;
const searchBox = document.querySelector("#search input");
const searchbtn = document.querySelector("#search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(url + city + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city-name").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    parseInt(data.main.temp - 273) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weatherIcon.src = "clear.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "rain.png";
  } else if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "mist.png";
  }
  else if (data.weather[0].main === "Humidity") {
    weatherIcon.src = "humidity.png";
  }
  else if (data.weather[0].main === "Snow") {
    weatherIcon.src = "snow.png";
  }
  else if (data.weather[0].main === "Wind") {
    weatherIcon.src = "wind.png";
  }
  else if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "clouds.png";
  }
}
searchbtn.addEventListener("click", function () {
  checkWeather(searchBox.value);
});


// const apikey = "30a6d4dd0d048cd68ba51ec85bbbeeb8";
// const url = `https://api.openweathermap.org/data/2.5/weather?q=lahore`;

// async function checkWeather(){
//   const response = await fetch( url + `&appid = ${apikey}`)
//   let data = await response.json()
//   console.log(data)
// }
// checkWeather()