
export function createRestaurantMenupage() {
    const contentDiv = document.querySelector("#content")
    
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
