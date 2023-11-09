export function createRestaurantMenupage() {
    const contentDiv = document.getElementById("content");

    const img = document.createElement("img");
    img.src = "./menu.png";
    img.id = "img";
    img.alt = "menu image";
    contentDiv.appendChild(img);


    const headline = document.createElement("h1");
    headline.textContent = "The Best Sushi Restaurant";
    contentDiv.appendChild(headline);

    const description = document.createElement("p");
    description.textContent = "Welcome to our wonderful sushi restaurant. " +
        "We offer the finest sushi dishes in town. Come and enjoy the taste of Japan!";
    contentDiv.appendChild(description);
}


