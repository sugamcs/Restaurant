import { createRestaurantHomepage } from "./home";
import { createRestaurantMenupage } from "./menu";
import { createRestaurantAboutpage } from "./about";

createRestaurantHomepage();

const buttons = document.querySelectorAll("button");
const buttonAbout = document.querySelector('#about-button')
const buttonHome = document.querySelector('#home-button')
const buttonMenu = document.querySelector('#menu-button')

// function clearContent

function checker(event) {
    if (event.target === buttonAbout){
        // clearContent()
        createRestaurantAboutpage()
    }
}

buttons.forEach(button => {
    button.addEventListener("click", checker);
});


