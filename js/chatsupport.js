const support = document.querySelector(".support");
const chat = document.querySelector(".chat");
const chatBtn = document.querySelector(".chat__btn");

support.addEventListener("click", () => {
  chat.classList.remove("hide");
  support.classList.add("hide");
});

chatBtn.addEventListener("click", () => {
  chat.classList.add("hide");
  support.classList.remove("hide");
});
