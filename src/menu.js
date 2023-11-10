
export function createRestaurantMenupage() {
    const contentDiv = document.querySelector("#content")

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
    img.src = "menu.png";
    img.id = "img";
    img.alt = "menu image";
    contentDiv.appendChild(img);

    const headline = document.createElement("h1");
    headline.textContent = "The Best Sushi Restaurant";
    contentDiv.appendChild(headline);

    const description = document.createElement("p");
    description.textContent = "Explore our menu and enjoy a variety of delicious sushi dishes.";
    contentDiv.appendChild(description);
}
