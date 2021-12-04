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

const lightMod = () => {
  localStorage.setItem("style", "light");
  document.querySelector("body").style.backgroundColor = "#FAFAFA";
  document.querySelector("header").style.backgroundColor = "#FFFFFF";
  document.querySelector("header h1").style.color = "#202d36";
  document.querySelector("header button").style.color = "#202d36";
  document.querySelector("main .search .searchInput").style.backgroundColor =
    "#FFFFFF";
  document.querySelector("main .search .searchInput input").style.color =
    "hsl(200, 15%, 8%)";

  document.querySelector("main .search select").style.backgroundColor =
    "#FFFFFF";
  document.querySelector("main .search select").style.color =
    "hsl(200, 15%, 8%)";
  const cards = document.querySelectorAll(".card");
  cards.forEach((element) => {
    element.style.backgroundColor = "#FFFFFF";
    element.style.color = "hsl(200, 15%, 8%)";
    element.style.boxShadow = "#202d36 0px 0px 6px";
  });
};
const darkMod = () => {
  localStorage.setItem("style", "dark");
  document.querySelector("body").style.backgroundColor = "#202d36";
  document.querySelector("header").style.backgroundColor = "#2b3743";
  document.querySelector("header h1").style.color = "#FFFFFF";
  document.querySelector("header button").style.color = "#FFFFFF";
  document.querySelector("main .search .searchInput").style.backgroundColor =
    "#2b3743";
  document.querySelector("main .search .searchInput input").style.color =
    "white";

  document.querySelector("main .search select").style.backgroundColor =
    "#2b3743";
  document.querySelector("main .search select").style.color = "white";
  const cards = document.querySelectorAll(".card");
  cards.forEach((element) => {
    element.style.backgroundColor = "#2b3743";
    element.style.color = "#FFFFFF";
    element.style.boxShadow = "#202d36 0px 0px 6px";
  });
};

const checkMode = ()=>{
  console.log('ok');
  if (currentMode == "dark") {
    darkMod()
  } else {
    lightMod()
  }
  
}
checkMode()
