export function createRestaurantAboutpage() {
    const contentDiv = document.getElementById("content");

    const img = document.createElement("img");
    img.src = "./about.jpg";
    img.id = "img";
    img.alt = "about image";
    contentDiv.appendChild(img);


    const headline = document.createElement("h1");
    headline.textContent = "This is based in Burnaby the best city for good sushi and food in general"
    contentDiv.appendChild(headline);

    const description = document.createElement("p");
    description.textContent = `About Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Perferendis atque nesciunt, ullam accusamus repellat qui?`
    contentDiv.appendChild(description);
}


