const galleryArray = [
  "../img/gallery/food (1).jpeg",
  "../img/gallery/food (2).jpeg",
  "../img/gallery/food (3).jpeg",
  "../img/gallery/food (4).jpeg",
];

let imageBox = document.querySelector(".gallery-image-box");

let addImage = () => {
  // creating gallery elements
  galleryArray.forEach((item) => {
    let spanItem = document.createElement("span");
    let addImage = document.createElement("img");
    let catchBox = imageBox.appendChild(spanItem);
    catchBox.appendChild(addImage);
    // each image source comes from galleryArray
    addImage.src = `${item}`;
  });
  // catching all spans and add classes
  const spans = document.querySelectorAll("span");
  const spansArr = [...spans];

  for (let i = 0; i < spansArr.length; i++) {
    spansArr[i].classList.add(`--image:${i + 1}`);
  }
};
