const switchLabel = document.querySelectorAll(".switch-label");

switchLabel.forEach((switchLabels) => {
  const switchOn = switchLabels.querySelector(".switch-input");

  if (switchOn) {
    switchLabels.addEventListener("click", () => {
      if (switchOn.checked === true) {
        switchOn.checked = false;
      } else if (switchOn.checked === false) {
        switchOn.checked = true;
      }
    });
  }
});
