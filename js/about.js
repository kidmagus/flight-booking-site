///////////////////////////////

// const weatherForm = document.querySelector(".weather");
// const cityInput = document.querySelector(".weather__input");
// const card = document.querySelector(".weather__card");
// const apiKey = "80f0b8b8744c97de71a8307094a20ba5";

// weatherForm.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   const city = cityInput.value;

//   if (city) {
//     try {
//       const weatherData = await getWeatherData(city);
//       displayWeatherInfo(weatherData);
//     } catch (error) {
//       console.error(error);
//       displayError(error);
//     }
//   } else {
//     displayError("Please enter a city");
//   }

//   cityInput.value = "";
// });

// async function getWeatherData(city) {
//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//   const response = await fetch(apiUrl);

//   if (!response.ok) {
//     throw new Error("Couldn't fetch weather data");
//   }

//   console.log(response);
//   return await response.json();
// }

// function displayWeatherInfo(data) {
//   console.log(data);
//   const {
//     name: city,
//     sys: { country },
//     main: { temp, humidity },
//     weather: [{ description, id }],
//   } = data;

//   const cityDisplay = document.createElement("h1");
//   const countryDisplay = document.createElement("h1");
//   const tempDisplay = document.createElement("p");
//   const humidityDisplay = document.createElement("p");
//   const descDisplay = document.createElement("p");
//   const weatherEmoji = document.createElement("p");

//   cityDisplay.textContent = city;
//   countryDisplay.textContent = country;
//   tempDisplay.textContent = `${(temp - 273).toFixed(1)} C`;
//   humidityDisplay.textContent = humidity;
//   descDisplay.textContent = description;
//   weatherEmoji.textContent = getWeatherEmoji(id);

//   card.appendChild(cityDisplay);
//   card.appendChild(countryDisplay);
//   card.appendChild(tempDisplay);
//   card.appendChild(humidityDisplay);
//   card.appendChild(descDisplay);
//   card.appendChild(weatherEmoji);
// }

// function getWeatherEmoji(weatherId) {
//   switch (true) {
//     case weatherId >= 200 && weatherId < 300:
//       return "⛈️";
//     case weatherId >= 300 && weatherId < 400:
//       return "🌧️";
//     case weatherId >= 500 && weatherId < 600:
//       return "☔";
//     case weatherId >= 600 && weatherId < 700:
//       return "🌨️";
//     case weatherId >= 700 && weatherId < 800:
//       return "☁️";
//     case weatherId === 800:
//       return "☀️";
//     case weatherId >= 801 && weatherId < 810:
//       return "⛅";
//     default:
//       return "❓";
//   }
// }

// function displayError(message) {
//   const errorDisplay = document.createElement("p");
//   errorDisplay.textContent = message;

//   card.appendChild(errorDisplay);
// }
