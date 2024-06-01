// accordions

const box = document.querySelectorAll(".box");

box.forEach((box) => {
  const boxHead = box.querySelector(".head");

  if (boxHead) {
    boxHead.addEventListener("click", () => {
      box.classList.toggle("expanded");
    });
  }
});

const form = document.querySelector(".form");
const fname = document.querySelector(".fname");
const lname = document.querySelector(".lname");
const profileName = document.querySelector(".profile-name");

let fArr = JSON.parse(localStorage.getItem("fname")) || [];
let lArr = JSON.parse(localStorage.getItem("lname")) || [];

const updateLocalStorage = () => {
  localStorage.setItem("fname", JSON.stringify(fArr));
  localStorage.setItem("lname", JSON.stringify(lArr));
};

const renderElement = () => {
  profileName.innerText = " ";
  const Fname = document.createElement("span");
  const Lname = document.createElement("span");

  fArr.forEach((fnameContent, index) => {
    Fname.textContent = fnameContent;
    Fname.setAttribute("data-id", index);
    fArr.splice(index, 1);
  });

  lArr.forEach((lnameContent, index) => {
    Lname.textContent = lnameContent;
    Lname.setAttribute("data-id", index);
    lArr.splice(index, 1);
  });

  profileName.append(Fname, " ", Lname);
};

renderElement();
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const fnameContent = formData.get("fname");
  const lnameContent = formData.get("lname");

  fArr.push(fnameContent);
  lArr.push(lnameContent);

  updateLocalStorage();
  renderElement();
});

const loadFile = document.querySelector(".loadFile");
const imageContent = document.querySelectorAll(".output");
loadFile.addEventListener("change", (event) => {
  const files = event.target.files;

  // Ensure files are selected
  if (files.length === 0) return;

  const file = files[0];
  const reader = new FileReader();

  reader.onload = () => {
    const dataURL = reader.result;

    // Store the data URL in local storage
    localStorage.setItem("uploadedImage", dataURL);

    // Update image elements with the stored data URL

    imageContent.forEach((image, index) => {
      image.src = dataURL;
      image.setAttribute("data-id", index);
    });
  };

  reader.readAsDataURL(file);
});

// Function to load image from local storage on page load
window.addEventListener("load", () => {
  const storedImage = localStorage.getItem("uploadedImage");

  if (storedImage) {
    imageContent.forEach((image, index) => {
      image.src = storedImage;
      image.setAttribute("data-id", index);
    });
  }
});
