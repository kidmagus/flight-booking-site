const loadFile = document.querySelector(".loadFile");

loadFile.addEventListener("change", (event) => {
  const image = document.querySelector(".output");
  image.src = URL.createObjectURL(event.target.files[0]);
});
