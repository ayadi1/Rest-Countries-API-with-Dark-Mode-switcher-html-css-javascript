const currentMode = localStorage.getItem("style");

const siteStyleBtn = document.getElementById("siteStyleBtn");
document.addEventListener("DOMContentLoaded", () => {
  siteStyleBtn.addEventListener("click", () => {
    const currentMode = localStorage.getItem("style");
    if (currentMode == "dark") {
      lightMod();
    } else {
      darkMod();
    }
  });
});

const darkMod = () => {
  localStorage.setItem("style", "dark");
  document.querySelector("body").style.backgroundColor = "#202d36";
  document.querySelector("header").style.backgroundColor = "#2b3743";
  document.querySelector("header h1").style.color = "#FFFFFF";
  document.querySelector("header button").style.color = "#FFFFFF";
  document.querySelector(".back").style.backgroundColor = "#2b3743";
  document.querySelector(".back").style.color = "white";
  document.querySelector(".info h1").style.color = "white";
  const p = document.querySelectorAll("p");
  p.forEach((element) => {
    element.style.color = "white";
  });
};
const lightMod = () => {
  localStorage.setItem("style", "light");
  document.querySelector("body").style.backgroundColor = "#FAFAFA";
  document.querySelector("header").style.backgroundColor = "#FFFFFF";
  document.querySelector("header h1").style.color = "#202d36";
  document.querySelector("header button").style.color = "#202d36";
  document.querySelector(".back").style.backgroundColor = "white";
  document.querySelector(".back").style.color = "#2b3743";
  document.querySelector(".info h1").style.color = "#2b3743";
  const p = document.querySelectorAll("p");
  p.forEach((element) => {
    element.style.color = "#2b3743";
  });
};

if (currentMode == "dark") {
  darkMod();
} else {
  setTimeout(() => {
    lightMod();
  }, 900);
}
