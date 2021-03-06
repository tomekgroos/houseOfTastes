// Array of images sources
const galleryArray = [
  "img/gallery/food (1).jpg",
  "img/gallery/food (2).JPG",
  "img/gallery/food (3).jpg",
  "img/gallery/food (4).jpg",
  "img/gallery/food (5).jpg",
  "img/gallery/food (6).jpg",
  "img/gallery/food (7).jpg",
  "img/gallery/food (8).jpg",
  "img/gallery/food (9).jpg",
  "img/gallery/food (10).jpg",
  "img/gallery/food (11).jpg",
  "img/gallery/food (12).jpg",
  "img/gallery/food (13).jpg",
  "img/gallery/food (14).jpg",
  "img/gallery/food (15).jpg",
  "img/gallery/food (16).jpg",
  "img/gallery/food (17).jpg",
  "img/gallery/food (18).jpg",
  "img/gallery/food (19).jpg",
  "img/gallery/food (20).jpg",
  "img/gallery/food (21).jpg",
  "img/gallery/food (22).jpg",
  "img/gallery/food (23).jpg",
  "img/gallery/food (24).jpg",
  "img/gallery/food (25).jpg",
  "img/gallery/food (26).jpg",
  "img/gallery/food (27).jpg",
  "img/gallery/food (28).jpg",
  "img/gallery/food (29).jpg",
  "img/gallery/food (30).jpg",
  "img/gallery/food (31).jpg",
  "img/gallery/food (32).jpg",
  "img/gallery/food (33).jpg",
  "img/gallery/food (34).jpg",
  "img/gallery/food (35).jpg",
  "img/gallery/food (36).jpg",
  "img/gallery/food (37).jpg",
  "img/gallery/food (38).jpg",
  "img/gallery/food (39).jpg",
  "img/gallery/food (40).jpg",
];

//catching main container hard coded into html
const container = document.querySelector(".container");
// catching zoom overlay
const fOver = document.querySelector(".fullOverlay");

const addImage = () => {
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
  const imageContainers = document.querySelectorAll(".gallery-image-container");
  const images = document.querySelectorAll("img");
  for (let i = 0; i < imageContainers.length; i++) {
    // add alt attribute for each image
    images[i].setAttribute("alt", `food${i + 1}`);
    // add a random size of each gallery-image-container
    let randomSpan = Math.ceil(Math.random() * 2);
    imageContainers[i].classList.add(`width-col-${randomSpan}`);
    imageContainers[i].classList.add(`height-row-${randomSpan}`);
  }
};

// back to top button function
const upButton = document.querySelector(".up-button");


const resetScreen = () => {
  window.addEventListener("scroll", () => {
    upButton.classList.toggle("active", window.scrollY > 500);
  });

  upButton.onclick = () => {
    window.scrollTo(0, 0);
  };
};

// add zoom functionality
const zoomImage = () => {
  window.onresize = checkResize;

  // function zooming the image

  function checkResize() {
    if (window.innerWidth < 680) {
      const images = document.querySelectorAll("img");
      for (let z = 0; z < images.length; z++) {
        images[z].removeEventListener(
          "click",
          () => {
            let cloneImg = images[z].cloneNode(false);
          },
          false
        );
      }
    }
  }
    if (window.innerWidth > 680) {
      const images = document.querySelectorAll("img");
      const zoomImg = document.getElementById("zoom-box");
      const overlay = document.querySelector(".fullOverlay");
      for (let z = 0; z < images.length; z++) {
        images[z].addEventListener("click", () => {
          let cloneImg = images[z].cloneNode(true);
          fOver.classList.add("active");
          zoomImg.appendChild(cloneImg);
        });
      }
      fOver.addEventListener("click", () => {
        fOver.classList.remove("active");
        zoomImg.removeChild(zoomImg.lastChild);
      });
    } 
  
};

