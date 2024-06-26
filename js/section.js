const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    return;
  } else {
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  }
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

const btnStarted = document.querySelector(".btn-started");
const signUp = document.getElementById("getStarted");

btnStarted.addEventListener("click", () => {
  signUp.scrollIntoView({
    behavior: "smooth",
  });
});
