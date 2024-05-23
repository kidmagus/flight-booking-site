const tabTarget = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabTarget.forEach((tabTargets) => {
  const target = tabTargets.getAttribute("data-tab-target");
  const targetContent = document.querySelector(
    `[data-tab-content="${target}"]`
  );

  // Function for Displaying the Content
  tabTargets.addEventListener("click", () => {
    tabTarget.forEach((t) => {
      t.classList.remove("active");
    });

    tabContents.forEach((c) => {
      c.classList.remove("active");
    });

    targetContent.classList.add("active");
    tabTargets.classList.add("active");
  });
});
