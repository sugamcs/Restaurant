import { createRestaurantHomepage } from "./home";
import { createRestaurantMenupage } from "./menu";
import { createRestaurantAboutpage } from "./about";

createRestaurantHomepage();

const buttons = document.querySelectorAll("button");
const btnAbout = document.querySelector('#about-button');
const btnHome = document.querySelector('#home-button');
const btnMenu = document.querySelector('#menu-button');
const contentDiv = document.getElementById("content");


document.getElementById("home-button").setAttribute("data-tab", "home");
document.getElementById("menu-button").setAttribute("data-tab", "menu");
document.getElementById("about-button").setAttribute("data-tab", "about");
let currentTab = 'home';

function clearContent() {
    contentDiv.innerHTML = ""; // Only clear the content inside the container
}

function handleTabClick(event) {
    const clickedTab = event.target.dataset.tab;
    
    if (clickedTab === currentTab) {
        return; // If clicking the same tab, do nothing
    }

    clearContent();

    switch (clickedTab) {
        case 'home':
            createRestaurantHomepage();
            break;
        case 'menu':
            createRestaurantMenupage();
            break;
        case 'about':
            createRestaurantAboutpage();
            break;
        default:
            console.error('Invalid tab name');
    }

    currentTab = clickedTab;
}

buttons.forEach(button => {
    button.addEventListener("click", handleTabClick);
});
