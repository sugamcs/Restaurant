export function createRestaurantHomepage() {
    const contentDiv = document.getElementById("content");

    const btnHome = document.createElement('button')
    btnHome.id = "home-button"
    btnHome.textContent = "home"

    const btnMenu = document.createElement('button')
    btnMenu.textContent = "menu"
    btnMenu.id = "menu-button"

    const btnAbout = document.createElement('button')
    btnAbout.textContent = "about"
    btnAbout.id = "about-button"

    contentDiv.append(btnAbout,btnHome,btnMenu)


    const img = document.createElement("img");
    img.src = "./restaurant1.jpg";
    img.id = "img";
    img.alt = "restaurant image";
    contentDiv.appendChild(img);


    const headline = document.createElement("h1");
    headline.textContent = "The Best Sushi Restaurant";
    contentDiv.appendChild(headline);

    const description = document.createElement("p");
    description.textContent = "Welcome to our wonderful sushi restaurant. " +
        "We offer the finest sushi dishes in town. Come and enjoy the taste of Japan!";
    contentDiv.appendChild(description);
}


