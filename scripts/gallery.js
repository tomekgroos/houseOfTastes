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
  "../img/gallery/food (10).jpg"
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

  for (let i = 0; i < imageBoxesArr.length; i++) {
    imageBoxesArr[i].classList.add("image-box");
  }
};
