const splide = new Splide(".splide", {
  focus: "center",
  type: "fade",
  rewind: "true",
  perPage: "1",
  autoplay: true,
  interval: 3000,
}).mount();

document.addEventListener("DOMContentLoaded", function () {
  splide.on("active", function (e) {
    const element = document.querySelectorAll(".splide__content");
    element[e.index].classList.add("animate");
  });

  splide.on("inactive", function (e) {
    const element = document.querySelectorAll(".splide__content");
    element[e.index].classList.remove("animate");
  });
});
