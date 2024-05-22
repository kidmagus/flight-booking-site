const splide = new Splide(".splide", {
  classes: {
    arrows: "splide__arrows your-class-arrows",
    arrow: "splide__arrow your-class-arrow",
    prev: "splide__arrow--prev your-class-prev",
    next: "splide__arrow--next your-class-next",
  },
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
