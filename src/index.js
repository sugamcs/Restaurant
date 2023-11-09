import { createRestaurantHomepage } from "./home";
import { createRestaurantMenupage } from "./menu";
import { createRestaurantAboutpage } from "./about";


document.addEventListener('DOMContentLoaded', function tabDisplayer() {
  const btnHome = document.getElementById("home-button");
  const btnAbout = document.getElementById("about-button");
  const btnMenu = document.getElementById("menu-button");
  const contentDiv = document.getElementById("content");

  // Set up the initial page
  createRestaurantHomepage();

  btnHome.addEventListener("click", function () {
    clearContent();
    createRestaurantHomepage();
  });

  btnAbout.addEventListener("click", function () {
    clearContent();
    createRestaurantAboutpage();
  });

  btnMenu.addEventListener("click", function () {
    clearContent();
    createRestaurantMenupage();
  });

  function clearContent() {
    // Clear the contentDiv before displaying a new page
    while (contentDiv.firstChild) {
      contentDiv.removeChild(contentDiv.firstChild);
    }
  }
}

// Call the function to set up the event listeners
tabDisplayer();

});
