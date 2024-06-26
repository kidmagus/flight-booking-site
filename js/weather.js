const weatherForm = document.querySelector(".weather");
const cityInput = document.querySelector(".weather__input");
const card = document.querySelector(".weather__card");
const apiKey = "80f0b8b8744c97de71a8307094a20ba5";
const weatherClose = document.querySelector(".weather__btn--close");
const weatherPopup = document.querySelector(".popup");
const weatherMessage = document.querySelector(".weather__message");
const weatherPopdown = document.querySelector(".popdown");
const weatherPopBtn = document.querySelector(".popdown__btn");

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityInput.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
      weatherMessage.style.display = "none";
    } catch (error) {
      console.error(error);
      //   displayError(error);
    }
  }
  //   else {
  //     displayError("Please enter a city");
  //   }

  cityInput.value = "";
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Couldn't fetch weather data");
  }

  console.log(response);
  return await response.json();
}

function displayWeatherInfo(data) {
  console.log(data);
  const {
    name: city,
    sys: { country },
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;
  card.textContent = "";
  const cityDisplay = document.createElement("h2");
  const countryDisplay = document.createElement("h2");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  //cityDisplay.className += "weather__card--city";

  countryDisplay.textContent = country;
  countryDisplay.className += "weather__card--country";

  tempDisplay.textContent = `${(temp - 273).toFixed(1)} C`;
  tempDisplay.className += "weather__card--temp";

  descDisplay.textContent = description;
  descDisplay.className += "weather__card--desc";

  weatherEmoji.textContent = getWeatherEmoji(id);
  weatherEmoji.className += "weather__card--emoji";

  const weatherHeading = document.createElement("div");
  weatherHeading.className += "weather__card--heading";
  weatherHeading.append(city + "," + country);

  card.appendChild(weatherEmoji);
  card.appendChild(descDisplay);
  card.append(weatherHeading);
  card.appendChild(tempDisplay);
}

function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "⛈️";
    case weatherId >= 300 && weatherId < 400:
      return "🌧️";
    case weatherId >= 500 && weatherId < 600:
      return "☔";
    case weatherId >= 600 && weatherId < 700:
      return "🌨️";
    case weatherId >= 700 && weatherId < 800:
      return "☁️";
    case weatherId === 800:
      return "☀️";
    case weatherId >= 801 && weatherId < 810:
      return "⛅";
    default:
      return "❓";
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;

  card.appendChild(errorDisplay);
}

weatherClose.addEventListener("click", () => {
  weatherPopup.classList.add("hide");
  weatherPopdown.classList.remove("hide");
});

weatherPopBtn.addEventListener("click", () => {
  weatherPopup.classList.toggle("hide");

  if (!support.classList.contains("hide")) {
    chat.classList.add("hide");
  }
});

//Originally from chatsupport.js
const support = document.querySelector(".support");
const chat = document.querySelector(".chat");
const chatBtn = document.querySelector(".chat__btn");

support.addEventListener("click", () => {
  chat.classList.toggle("hide");

  if (!weatherPopup.classList.contains("hide")) {
    weatherPopup.classList.add("hide");
  }
});

chatBtn.addEventListener("click", () => {
  chat.classList.add("hide");
  support.classList.remove("hide");
});
