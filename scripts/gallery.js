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

let imageContainer = document.querySelector(".gallery-image-container");

let addImage = () => {
  // creating gallery elements
  galleryArray.forEach((item) => {
    let imageBox = document.createElement("span");
    let addImage = document.createElement("img");
    let catchBox = imageContainer.appendChild(imageBox);
    catchBox.appendChild(addImage);
    // each image source comes from galleryArray
    addImage.src = `${item}`;
  });
  // catching all spans and add classes
  const imageBoxes = document.querySelectorAll("span");
  const imageBoxesArr = [...imageBoxes];
  // add class and id for each image box
  for (let i = 0; i < imageBoxesArr.length; i++) {
    imageBoxesArr[i].classList.add("image-box");
    let imageId = imageBoxesArr[i].setAttribute("id", `image${i+1}`);
  }
};
