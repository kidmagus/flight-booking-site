const loadFile = document.querySelector(".loadFile");

loadFile.addEventListener("change", (event) => {
  const image = document.querySelector(".output");
  image.src = URL.createObjectURL(event.target.files[0]);
});

const box = document.querySelectorAll(".box");

box.forEach((box) => {
  const boxHead = box.querySelector(".head");

  if (boxHead) {
    boxHead.addEventListener("click", () => {
      box.classList.toggle("expanded");
    });
  }
});
