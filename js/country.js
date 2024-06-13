const countriesContainer = document.querySelector(".country__card");
const countriesInput = document.querySelector(".country__input");
const countriesForm = document.querySelector(".country");
const countriesClear = document.querySelector(".country__clear");

countriesForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const chosenCountry = countriesInput.value;

  const renderCountry = function (data) {
    const html = `
      <div class="countries">
        <img class="countries__img"src="${data.flags.png}" alt="Flag of ${data.name.common}">
        <div class="countries__desc">
        <h2 class="countries__name">${data.name.common}</h2>
        <p class="countries__capital"><i class="fa-solid fa-landmark-flag"></i> : ${data.capital}</p>
        <p class="countries__region"><i class="fa-solid fa-earth-americas"></i> : ${data.region}</p>
        <p class="countries__popl"><i class="fa-solid fa-person"></i> : ${(+data.population / 1000000).toFixed(1)} million</p>
        <p class="countries__tz"><i class="fa-solid fa-clock"></i> : ${data.timezones[0]}</p>
        <a class="text-hover-primary"href="${data.maps.googleMaps}" target="_blank"><i class="fa-solid fa-map-location-dot"></i> : View on Google Maps</a>
        </div>
      </div>
     
    `;
    countriesInput.value = "";
    countriesContainer.insertAdjacentHTML("beforeend", html);
  };

  const getCountryData = function (name) {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        renderCountry(data[0]);
        countriesClear.classList.remove("hide");
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
        displayError("Couldn't fetch country data");
      });
  };

  getCountryData(chosenCountry);
});

countriesClear.addEventListener("click", () => {
  countriesContainer.innerText = "";
  countriesClear.classList.add("hide");
});
