import { createRestaurantHomepage } from "./home";
import { createRestaurantMenupage } from "./menu";
import { createRestaurantAboutpage } from "./about";

createRestaurantHomepage();

const buttons = document.querySelectorAll("button");
const buttonAbout = document.querySelector('#about-button')
const buttonHome = document.querySelector('#home-button')
const buttonMenu = document.querySelector('#menu-button')

let aboutPageDisplayed = false;

function clearContent() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
}

function checker(event) {
    if (event.target === buttonAbout && !aboutPageDisplayed) {
        clearContent();
        createRestaurantAboutpage();
        aboutPageDisplayed = true;
    }
}

buttons.forEach(button => {
    button.addEventListener("click", checker);
});
