//Scroll up arrow

const arrow = document.querySelector(".arrow-up");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 220) {
    arrow.style.display = "block";
  } else {
    arrow.style.display = "none";
  }
});

//Dark - light mode

const lightButt = document.querySelector(".fa-circle-half-stroke");
const body = document.querySelector("body");
const logo = document.querySelector(".logo-wrapper img");
const pics = document.querySelector(".pic-section");

lightButt.addEventListener("click", () => {
  if (body.className == "light-mode") {
    body.className = "dark-mode";
    logo.src = "./img/logo2_dark.png";
    pics.style.backgroundColor = "var(--strong-color)";
  } else {
    body.className = "light-mode";
    logo.src = "./img/logo2.png";
    pics.style.backgroundColor = "var(--yellow-chilli)";
  }
});

// Responsive menu

const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  if (menuIcon.classList[2] === "fa-bars") {
    menuIcon.classList.replace("fa-bars", "fa-xmark");
    menu.style.display = "block";
  } else {
    menuIcon.classList.replace("fa-xmark", "fa-bars");
    menu.style.display = "none";
  }
});

//Password and email validation

const psw1 = document.querySelector(".input-psw1");
const psw2 = document.querySelector(".input-psw2");
const pswButton = document.querySelector(".psw-butt");
const warningText = document.querySelector(".warning");
const email = document.querySelector(".input-email");
const warningEmail = document.querySelector(".warning-email");
const emailRegex =
  /^([a-z\A-Z\d\.\-\~\_\+]+)@([a-z\A-Z\d\.\-\~\_\+]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

pswButton.addEventListener("click", (event) => {
  event.preventDefault();
  //Password validation
  if (psw1.value === null && psw2.value === null) {
    warningText.style.visibility = "hidden";
  } else if (psw1.value === psw2.value) {
    warningText.style.visibility = "hidden";
  } else {
    warningText.style.visibility = "visible";
  }
  //Email format validation
  if (email.value.match(emailRegex)) {
    warningEmail.style.visibility = "hidden";
  } else {
    warningEmail.style.visibility = "visible";
  }
});
