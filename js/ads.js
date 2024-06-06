const adsVideo = document.querySelector(".ads__video");
const adsBtn = document.querySelector(".ads__btn");

setInterval(function () {
  adsVideo.classList.remove("ads--none");
  adsBtn.classList.remove("ads--none");
}, 10000);

adsBtn.addEventListener("click", () => {
  adsVideo.style.display = "none";
  adsBtn.style.display = "none";
  adsVideo.pause();
});
