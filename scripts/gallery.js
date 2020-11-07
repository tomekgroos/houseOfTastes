
const galleryArray = ['../img/gallery/food (1).jpeg', '../img/gallery/food (2).jpeg', 
'../img/gallery/food (3).jpeg', '../img/gallery/food (4).jpeg'];

let imageBox = document.querySelector(".gallery-image-box");

let addImageJs = () => {
  let addImage = document.createElement('img');
  imageBox.appendChild(addImage);
  addImage.src =`${galleryArray[0]}`;
}


