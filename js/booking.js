const book = document.querySelector(".bookflight");
const passenger = document.getElementById("passenger");
const returnDate = document.getElementById("return__date");
const departureDate = document.getElementById("departure__date");
const flight = document.getElementById("flight");

const chosenFlight = document.querySelector(".chosen__flight");
const boarding = document.querySelector(".boarding");
const chosenPassenger = document.querySelector(".chosen__passenger");
const chosenDepart = document.querySelector(".chosen__depart");
const chosenReturn = document.querySelector(".chosen__return");
const chosenBoard = document.querySelector(".chosen__board");
const closeBook = document.querySelector(".btn--close-modal");
book.addEventListener("click", () => {
  boarding.classList.remove("hide");
  chosenFlight.textContent = flight.value;
  chosenPassenger.textContent = passenger.value;
  chosenDepart.textContent = departureDate.value;
  chosenReturn.textContent = returnDate.value;
  chosenBoard.textContent = departureDate.value;
});
