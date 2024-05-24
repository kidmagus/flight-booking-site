const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModal = document.querySelector(".btn--open-modal");
const closeModal = document.querySelector(".btn--close-modal");

openModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
