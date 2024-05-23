const doubleRadio = document.querySelector(".double-radio");
const singleRadio = document.querySelector(".single-radio");
const double = document.querySelector(".double");
const single = document.querySelector(".single");

double.addEventListener("click", () => {
  doubleRadio.checked = true;

  if (doubleRadio.checked) {
    singleRadio.checked = false;
  }
});

single.addEventListener("click", () => {
  singleRadio.checked = true;

  if (singleRadio.checked) {
    doubleRadio.checked = false;
  }
});
