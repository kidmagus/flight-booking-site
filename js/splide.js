const firstSplide = new Splide("#first-slider", {
  focus: "center",
  type: "fade",
  rewind: "true",
  perPage: "1",
  autoplay: true,
  interval: 3000,
}).mount();

document.addEventListener("DOMContentLoaded", function () {
  firstSplide.on("active", function (e) {
    const element = document.querySelectorAll(".splide__content");
    element[e.index].classList.add("animate");
  });

  firstSplide.on("inactive", function (e) {
    const element = document.querySelectorAll(".splide__content");
    element[e.index].classList.remove("animate");
  });
});

const secondSplide = new Splide("#second-slider", {
  focus: "center",
  type: "fade",
  rewind: "true",
  perPage: "1",
  breakpoints: {
    640: {
      arrows: false,
    },
  },
}).mount();
