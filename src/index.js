import { createRestaurantHomepage } from "./home";
import { createRestaurantMenupage } from "./menu";
import { createRestaurantAboutpage } from "./about";

document.addEventListener('DOMContentLoaded', function () {
    createRestaurantHomepage(); // Initial tab

    const tabs = document.querySelectorAll('button');
    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            handleTabClick(event);
        });
    });
});

function handleTabClick(event) {
    const tabName = event.target.dataset.tab;
    switch (tabName) {
        case 'home-button':
            createRestaurantHomepage();
            break;
        case 'menu-button':
            createRestaurantMenupage();
            break;
        case 'about-button':
            createRestaurantAboutpage();
            break;
        default:
            console.error('Invalid tab name');
    }
}
