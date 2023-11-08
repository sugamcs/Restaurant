export function createRestaurantHomepage() {
    const contentDiv = document.getElementById("content");

    const restaurantImage = document.createElement("img");
    restaurantImage.src = "restaurant1.jpg";
    restaurantImage.alt = "Restaurant Image";
    contentDiv.appendChild(restaurantImage);

    const headline = document.createElement("h1");
    headline.textContent = "The Best Sushi Restaurant";
    contentDiv.appendChild(headline);

    const description = document.createElement("p");
    description.textContent = "Welcome to our wonderful sushi restaurant. " +
        "We offer the finest sushi dishes in town. Come and enjoy the taste of Japan!";
    contentDiv.appendChild(description);
}


createRestaurantHomepage()