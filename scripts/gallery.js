const galleryArray = [
  "../img/gallery/food (1).jpg",
  "../img/gallery/food (2).jpg",
  "../img/gallery/food (3).jpg",
  "../img/gallery/food (4).jpg",
  "../img/gallery/food (5).jpg",
  "../img/gallery/food (6).jpg",
  "../img/gallery/food (7).jpg",
  "../img/gallery/food (8).jpg",
  "../img/gallery/food (9).jpg",
  "../img/gallery/food (10).jpg",
  "../img/gallery/food (11).jpg",
  "../img/gallery/food (12).jpg",
  "../img/gallery/food (13).jpg",
  "../img/gallery/food (14).jpg",
  "../img/gallery/food (15).jpg",
  "../img/gallery/food (16).jpg",
  "../img/gallery/food (17).jpg",
  "../img/gallery/food (18).jpg",
];

let container = document.querySelector(".container");

let addImage = () => {
  
  galleryArray.forEach((item) => {
    // creating gallery elements
    let imageContainer = document.createElement("div");
    let imageItem = document.createElement("div");
    let imageBox = document.createElement("div");
    let addImage = document.createElement("img");
    let addText = document.createElement("span");
    // insert gallery elements
    container.appendChild(imageContainer);
    imageContainer.appendChild(imageItem);
    imageItem.appendChild(imageBox);
    imageItem.appendChild(addText);
    imageBox.appendChild(addImage);
    // add specific classes
    imageContainer.classList.add("gallery-image-container");
    imageItem.classList.add("image-item");
    imageBox.classList.add("image-box");
    addText.classList.add("zoom-info");
    addText.innerHTML = "click to zoom";
    // each image source comes from galleryArray
    addImage.src = `${item}`;
  });
  // catching all divs with image-box class and all img elements
  const imageBoxes = document.querySelectorAll(".image-box");
  const images = document.querySelectorAll("img");
  // create an array from them
  const imageBoxesArr = [...imageBoxes];
  const imagesArr = [...images];
  // add id attribute for each image box and alt for each image
  for (let i = 0; i < imageBoxesArr.length; i++) {
   imageBoxesArr[i].setAttribute("id", `image${i+1}`);
   imagesArr[i].setAttribute("alt", `food${i+1}`);
  }

};

/* zadanie na dzis, jest po polnocy :D 
nadaj losowy grid-column span dla kazdego ze zdjec,
galeria za kazdym zaladowaniem bedzie inna :)*/