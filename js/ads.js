const adsVideo = document.querySelector(".ads__video");
const adsBtn = document.querySelector(".ads__btn");

setInterval(function () {
  adsVideo.classList.remove("ads--none");
  adsBtn.classList.remove("ads--none");
}, 1000);

adsBtn.addEventListener("click", () => {
  adsVideo.classList.add("ads--none");
  adsBtn.classList.add("ads--none");
});
