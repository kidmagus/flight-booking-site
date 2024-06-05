const paypal = document.querySelector(".paypal");
const credit = document.querySelector(".credit");
const paypalRadio = document.querySelector(".paypal__radio");
const creditRadio = document.querySelector(".credit__radio");

paypal.addEventListener("click", () => {
  paypalRadio.checked = true;
  creditRadio.checked = false;
  paypal.classList.add("checked");
  credit.classList.remove("checked");
});

credit.addEventListener("click", () => {
  creditRadio.checked = true;
  paypalRadio.checked = false;
  paypal.classList.remove("checked");
  credit.classList.add("checked");
});
