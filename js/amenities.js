// //Desktop
// const all = document.querySelector(".all");
// const dinner = document.querySelector(".dinner");
// const entertainment = document.querySelector(".entertainment");
// const shopping = document.querySelector(".shopping");
// const lounge = document.querySelector(".lounge");
// const deals = document.querySelector(".deals");
// const serviceShop = document.querySelectorAll(".service--shop");
// const serviceDining = document.querySelectorAll(".service--dining");
// const serviceEntertainment = document.querySelectorAll(".service--entertainment");
// const serviceLounge = document.querySelectorAll(".service--lounge");
// const serviceDeal = document.querySelectorAll(".service--deals");

// const showServiceShop = function () {
//   serviceShop.forEach((serviceShops) => {
//     serviceShops.classList.remove("service--inactive");
//   });
// };

// const hideServiceShop = function () {
//   serviceShop.forEach((serviceShops) => {
//     serviceShops.classList.add("service--inactive");
//   });
// };

// const showServiceDining = function () {
//   serviceDining.forEach((serviceDinings) => {
//     serviceDinings.classList.remove("service--inactive");
//   });
// };

// const hideServiceDining = function () {
//   serviceDining.forEach((serviceDinings) => {
//     serviceDinings.classList.add("service--inactive");
//   });
// };

// const showServiceEntertainment = function () {
//   serviceEntertainment.forEach((serviceEntertainments) => {
//     serviceEntertainments.classList.remove("service--inactive");
//   });
// };

// const hideServiceEntertainment = function () {
//   serviceEntertainment.forEach((serviceEntertainments) => {
//     serviceEntertainments.classList.add("service--inactive");
//   });
// };

// const showServiceLounge = function () {
//   serviceLounge.forEach((serviceLounges) => {
//     serviceLounges.classList.remove("service--inactive");
//   });
// };

// const hideServiceLounge = function () {
//   serviceLounge.forEach((serviceLounges) => {
//     serviceLounges.classList.add("service--inactive");
//   });
// };

// const showServiceDeals = function () {
//   serviceDeal.forEach((serviceDeals) => {
//     serviceDeals.classList.remove("service--inactive");
//   });
// };

// const hideServiceDeals = function () {
//   serviceDeal.forEach((serviceDeals) => {
//     serviceDeals.classList.add("service--inactive");
//   });
// };

// all.addEventListener("click", () => {
//   all.classList.add("selected");
//   deals.classList.remove("selected");
//   dinner.classList.remove("selected");
//   entertainment.classList.remove("selected");
//   shopping.classList.remove("selected");
//   lounge.classList.remove("selected");
//   showServiceDining();
//   showServiceEntertainment();
//   showServiceLounge();
//   showServiceShop();
//   hideServiceDeals();
// });

// dinner.addEventListener("click", () => {
//   dinner.classList.add("selected");
//   deals.classList.remove("selected");
//   all.classList.remove("selected");
//   entertainment.classList.remove("selected");
//   shopping.classList.remove("selected");
//   lounge.classList.remove("selected");
//   showServiceDining();
//   hideServiceEntertainment();
//   hideServiceLounge();
//   hideServiceShop();
//   hideServiceDeals();
// });

// entertainment.addEventListener("click", () => {
//   entertainment.classList.add("selected");
//   all.classList.remove("selected");
//   deals.classList.remove("selected");
//   dinner.classList.remove("selected");
//   shopping.classList.remove("selected");
//   lounge.classList.remove("selected");
//   showServiceEntertainment();
//   hideServiceDining();
//   hideServiceLounge();
//   hideServiceShop();
//   hideServiceDeals();
// });

// shopping.addEventListener("click", () => {
//   shopping.classList.add("selected");
//   all.classList.remove("selected");
//   deals.classList.remove("selected");
//   entertainment.classList.remove("selected");
//   dinner.classList.remove("selected");
//   lounge.classList.remove("selected");
//   showServiceShop();
//   hideServiceEntertainment();
//   hideServiceLounge();
//   hideServiceDining();
//   hideServiceDeals();
// });

// lounge.addEventListener("click", () => {
//   lounge.classList.add("selected");
//   all.classList.remove("selected");
//   deals.classList.remove("selected");
//   entertainment.classList.remove("selected");
//   shopping.classList.remove("selected");
//   dinner.classList.remove("selected");
//   showServiceLounge();
//   hideServiceEntertainment();
//   hideServiceDining();
//   hideServiceShop();
//   hideServiceDeals();
// });

// deals.addEventListener("click", () => {
//   deals.classList.add("selected");
//   lounge.classList.remove("selected");
//   all.classList.remove("selected");
//   entertainment.classList.remove("selected");
//   shopping.classList.remove("selected");
//   dinner.classList.remove("selected");
//   hideServiceLounge();
//   hideServiceEntertainment();
//   hideServiceDining();
//   hideServiceShop();
//   showServiceDeals();
// });

// //Mobile
// const mobAll = document.querySelector(".mob--all");
// const mobDinner = document.querySelector(".mob--dinner");
// const mobEntertainment = document.querySelector(".mob--entertainment");
// const mobShopping = document.querySelector(".mob--shopping");
// const mobLounge = document.querySelector(".mob--lounge");
// const mobDeals = document.querySelector(".mob--deals");

// mobAll.addEventListener("click", () => {
//   mobAll.classList.add("mob--selected");
//   mobDinner.classList.remove("mob--selected");
//   mobEntertainment.classList.remove("mob--selected");
//   mobShopping.classList.remove("mob--selected");
//   mobLounge.classList.remove("mob--selected");
//   mobDeals.classList.remove("mob--selected");
//   showServiceDining();
//   showServiceEntertainment();
//   showServiceLounge();
//   showServiceShop();
//   hideServiceDeals();
// });

// mobDinner.addEventListener("click", () => {
//   mobDinner.classList.add("mob--selected");
//   mobAll.classList.remove("mob--selected");
//   mobEntertainment.classList.remove("mob--selected");
//   mobShopping.classList.remove("mob--selected");
//   mobLounge.classList.remove("mob--selected");
//   mobDeals.classList.remove("mob--selected");
//   showServiceDining();
//   hideServiceEntertainment();
//   hideServiceLounge();
//   hideServiceShop();
//   hideServiceDeals();
// });

// mobEntertainment.addEventListener("click", () => {
//   mobEntertainment.classList.add("mob--selected");
//   mobDinner.classList.remove("mob--selected");
//   mobAll.classList.remove("mob--selected");
//   mobShopping.classList.remove("mob--selected");
//   mobLounge.classList.remove("mob--selected");
//   mobDeals.classList.remove("mob--selected");
//   showServiceEntertainment();
//   hideServiceDining();
//   hideServiceLounge();
//   hideServiceShop();
//   hideServiceDeals();
// });

// mobShopping.addEventListener("click", () => {
//   mobShopping.classList.add("mob--selected");
//   mobDinner.classList.remove("mob--selected");
//   mobEntertainment.classList.remove("mob--selected");
//   mobAll.classList.remove("mob--selected");
//   mobLounge.classList.remove("mob--selected");
//   mobDeals.classList.remove("mob--selected");
//   showServiceShop();
//   hideServiceDining();
//   hideServiceLounge();
//   hideServiceEntertainment();
//   hideServiceDeals();
// });

// mobLounge.addEventListener("click", () => {
//   mobLounge.classList.add("mob--selected");
//   mobDinner.classList.remove("mob--selected");
//   mobEntertainment.classList.remove("mob--selected");
//   mobShopping.classList.remove("mob--selected");
//   mobAll.classList.remove("mob--selected");
//   mobDeals.classList.remove("mob--selected");
//   showServiceLounge();
//   hideServiceEntertainment();
//   hideServiceDining();
//   hideServiceShop();
//   hideServiceDeals();
// });

// mobDeals.addEventListener("click", () => {
//   mobDeals.classList.add("mob--selected");
//   mobDinner.classList.remove("mob--selected");
//   mobEntertainment.classList.remove("mob--selected");
//   mobShopping.classList.remove("mob--selected");
//   mobLounge.classList.remove("mob--selected");
//   mobAll.classList.remove("mob--selected");
//   showServiceDeals();
//   hideServiceLounge();
//   hideServiceEntertainment();
//   hideServiceDining();
//   hideServiceShop();
// });

const hamburger = document.querySelector(".hamburger");
const mobAmenities = document.querySelector(".mob__amenities--tab");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  mobAmenities.classList.toggle("hide");
});

const tabTarget = document.querySelectorAll("[data-tag]");
const tabContents = document.querySelectorAll("[data-tags]");

tabTarget.forEach((tabTargets) => {
  const target = tabTargets.getAttribute("data-tag");
  const targetContent = document.querySelectorAll(`[data-tags*="${target}"]`);

  tabTargets.addEventListener("click", () => {
    tabTarget.forEach((t) => {
      t.classList.remove("selected");
      t.classList.remove("mob--selected");
    });

    tabContents.forEach((c) => {
      c.classList.add("service--inactive");
    });

    targetContent.forEach((tc) => {
      tc.classList.remove("service--inactive");
    });
    tabTargets.classList.add("mob--selected");
    tabTargets.classList.add("selected");
  });
});
