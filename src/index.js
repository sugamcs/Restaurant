import { createRestaurantHomepage } from "./home";
import { createRestaurantMenupage } from "./menu";
import { createRestaurantAboutpage } from "./about";

createRestaurantHomepage();

const buttons = document.querySelectorAll("button");
const contentDiv = document.getElementById("content");

let currentTab = 'home';

function clearContent() {
    contentDiv.innerHTML = ""; 
}

function handleTabClick(event) {
    const clickedTab = event.target.dataset.tab;

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
