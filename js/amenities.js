const all = document.querySelector(".all");
const dinner = document.querySelector(".dinner");
const entertainment = document.querySelector(".entertainment");
const shopping = document.querySelector(".shopping");
const lounge = document.querySelector(".lounge");
const serviceShop = document.querySelectorAll(".service--shop");
const serviceDining = document.querySelectorAll(".service--dining");
const serviceEntertainment = document.querySelectorAll(".service--entertainment");
const serviceLounge = document.querySelectorAll(".service--lounge");

const showServiceShop = function () {
  serviceShop.forEach((serviceShops) => {
    serviceShops.classList.remove("service--inactive");
  });
};

const hideServiceShop = function () {
  serviceShop.forEach((serviceShops) => {
    serviceShops.classList.add("service--inactive");
  });
};

const showServiceDining = function () {
  serviceDining.forEach((serviceDinings) => {
    serviceDinings.classList.remove("service--inactive");
  });
};

const hideServiceDining = function () {
  serviceDining.forEach((serviceDinings) => {
    serviceDinings.classList.add("service--inactive");
  });
};

const showServiceEntertainment = function () {
  serviceEntertainment.forEach((serviceEntertainments) => {
    serviceEntertainments.classList.remove("service--inactive");
  });
};

const hideServiceEntertainment = function () {
  serviceEntertainment.forEach((serviceEntertainments) => {
    serviceEntertainments.classList.add("service--inactive");
  });
};

const showServiceLounge = function () {
  serviceLounge.forEach((serviceLounges) => {
    serviceLounges.classList.remove("service--inactive");
  });
};

const hideServiceLounge = function () {
  serviceLounge.forEach((serviceLounges) => {
    serviceLounges.classList.add("service--inactive");
  });
};

all.addEventListener("click", () => {
  all.classList.add("selected");
  dinner.classList.remove("selected");
  entertainment.classList.remove("selected");
  shopping.classList.remove("selected");
  lounge.classList.remove("selected");
  showServiceDining();
  showServiceEntertainment();
  showServiceLounge();
  showServiceShop();
});

dinner.addEventListener("click", () => {
  dinner.classList.add("selected");
  all.classList.remove("selected");
  entertainment.classList.remove("selected");
  shopping.classList.remove("selected");
  lounge.classList.remove("selected");
  showServiceDining();
  hideServiceEntertainment();
  hideServiceLounge();
  hideServiceShop();
});

entertainment.addEventListener("click", () => {
  entertainment.classList.add("selected");
  all.classList.remove("selected");
  dinner.classList.remove("selected");
  shopping.classList.remove("selected");
  lounge.classList.remove("selected");
  showServiceEntertainment();
  hideServiceDining();
  hideServiceLounge();
  hideServiceShop();
});

shopping.addEventListener("click", () => {
  shopping.classList.add("selected");
  all.classList.remove("selected");
  entertainment.classList.remove("selected");
  dinner.classList.remove("selected");
  lounge.classList.remove("selected");
  showServiceShop();
  hideServiceEntertainment();
  hideServiceLounge();
  hideServiceDining();
});

lounge.addEventListener("click", () => {
  lounge.classList.add("selected");
  all.classList.remove("selected");
  entertainment.classList.remove("selected");
  shopping.classList.remove("selected");
  dinner.classList.remove("selected");
  showServiceLounge();
  hideServiceEntertainment();
  hideServiceDining();
  hideServiceShop();
});
