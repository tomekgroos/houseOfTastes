
const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const item4 = document.querySelector(".item4");
const item5 = document.querySelector(".item5");
const item6 = document.querySelector(".item6");
const clickInfo = document.querySelector(".click-info");

const allWrapper = document.querySelector(".grid-wrapper");

class Article {
  constructor(title, content, image){
    this._title = title;
    this._content = content;
    this._image = image;
  }

  get title() {
    return this._title;
  }

  set title(newTitle){
     this._title = newTitle;
   }
  }


const teriyaki = new Article("Teriyaki Soba", "some content", "../img/blackpot.jpg");

console.log(teriyaki.title)


teriyaki.title = "Chicken";

console.log(teriyaki.title)

/*   const article = {
  title: "pierwszy artykuł",
  content: "some info about something",
  image: "../img/blackpot.jpg"
}

console.log(article);
 */



/* const removePad = () =>{
  let showRecipe = document.querySelector('.showRecipe');
  allWrapper.removeChild(showRecipe);
} */

const backButton = `<div class="button-box"><a href="./home.html"><div class="back-button"></div></a></div>`;


const removePad = () => {
  allWrapper.removeChild(allWrapper.lastChild);
};

const addPad1 = () => {
  let showRecipeAdd = document.createElement("div");
  showRecipeAdd.classList.add("showRecipe");
  allWrapper.appendChild(showRecipeAdd);
  showRecipeAdd.innerHTML = 
  `<p>Teriyaki Soba</p><div class="img-box"><img src="./img/teriyakiSoba.png" alt="TeriyakiSoba"></div>
  ${backButton}`;
};

const addPad2 = () => {
  let showRecipeAdd = document.createElement("div");
  showRecipeAdd.classList.add("showRecipe");
  allWrapper.appendChild(showRecipeAdd);
};

const switchItem = () => {
  item1.addEventListener("click", () => {
    removePad();
    addPad1();
  });

  item2.addEventListener("click", () => {
      removePad();
      addPad2();
  });
};


