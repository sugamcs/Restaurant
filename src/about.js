export function createRestaurantAboutpage() {
    const contentDiv = document.getElementById("content");
  
    const btnHome = document.createElement('button');
    btnHome.id = "home-button";
    btnHome.textContent = "home";
  
    const btnMenu = document.createElement('button');
    btnMenu.textContent = "menu";
    btnMenu.id = "menu-button";
  
    const btnAbout = document.createElement('button');
    btnAbout.textContent = "about";
    btnAbout.id = "about-button";
  
    contentDiv.append(btnAbout, btnHome, btnMenu);
  
    const img = document.createElement("img");
    img.src = "about.jpg";
    img.id = "img";
    img.alt = "about image";
    contentDiv.appendChild(img);
  
    const headline = document.createElement("h1");
    headline.textContent = "This is based in Burnaby the best city for good sushi and food in general";
    contentDiv.appendChild(headline);
  
    const description = document.createElement("p");
    description.textContent = "About Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
      "Perferendis atque nesciunt, ullam accusamus repellat qui?";
    contentDiv.appendChild(description);
  }
  
