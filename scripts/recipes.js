const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const item4 = document.querySelector(".item4");
const item5 = document.querySelector(".item5");
const item6 = document.querySelector(".item6");
const clickInfo = document.querySelector(".click-info");

const allWrapper = document.querySelector(".grid-wrapper");

class Recipe {
  constructor(title, content, image) {
    this._title = title;
    this._content = content;
    this._image = image;
  }

  get title() {
    return this._title;
  }

  get content() {
    return this._content;
  }

  get image() {
    return this._image;
  }
}

const croque = new Recipe(
  `<h1>Croque<br /> Madame</h1>`,
  `<ul class="ingredients">
<li>one bun</li>
<li>3 table spoons of bechamel sauce</li>
<li>1 slice of ham</li>
<li>2 slices of cheese</li>
<li>2 table spoons of clarified butter for frying</li>
<li>one poached egg</li>
<li>some chives for decoration</li>
</ul>
<ol>
<li>
Cut the bun in half and brush with béchamel sauce the inner sides.
</li>
<li>
  Put the slices in order cheese, ham, cheese on the bun and fold it.
</li>
<li>
  It takes about 4 to 5 minutes to boil poached egg. You put poached egg on fried bun for the grand finale.
</li>
<li>
  Melt butter on frying pan and fry the bun for about 3 minutes on each side on medium heat.
  Try to press down the bun with something heavy while frying – i.e. pot on the plate.
</li>
<li>
  Put the poached egg on the fried bun and sprinkle with some chopped chives.
</li>
</ol>`,
  `<div class="img-box"><img src="../img/croque.png"></div>`
);

const teriyakiSoba = new Recipe(
  `<h1>
    Teriyaki<br /> Soba
  </h1>`,
  `<ul class="ingredients">
  <li>
    150g of dried Soda Noodles
  </li>
  <li>
    1/4 cabbage head
  </li>
  <li>
    1 carrot
  </li>
  <li>
    1 green bell pepper
  </li>
  <li>
    150 ml of teriyaki sauce
  </li>
  <li>
    150 ml of water
  </li>
  <li>
    3 shallots
  </li>
  <li>
    75 ml of light soy sauce
  </li>
  <li>
    300g of chicken breast (we need 2 pieces for 2 plates)
  </li>
  <li>
    Olive oil for frying, pepper to taste.
  </li>

  </ul>`,
  `<div class="img-box"><img src="../img/teriyakiSoba.png"></div>`
);



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

// move to recipe function 
const moveToRecipe = () => {
  document.addEventListener("click", () => {
    window.location.href = "#show";
  })
  
}

const backButton = `<div class="button-box"><a href="./home.html"><div class="back-button"></div></a></div>`;

const removePad = () => {
  allWrapper.removeChild(allWrapper.lastChild);
};

const addPad1 = () => {
  let showRecipeAdd = document.createElement("div");
  showRecipeAdd.classList.add("showRecipe");
  showRecipeAdd.setAttribute("id", "show");
  moveToRecipe();
  allWrapper.appendChild(showRecipeAdd);
  showRecipeAdd.innerHTML = `${teriyakiSoba.title} ${teriyakiSoba.image} ${teriyakiSoba.content}`;
};

const addPad2 = () => {
  let showRecipeAdd = document.createElement("div");
  showRecipeAdd.classList.add("showRecipe");
  showRecipeAdd.setAttribute("id", "show");
  moveToRecipe();
  allWrapper.appendChild(showRecipeAdd);
  showRecipeAdd.innerHTML = ` ${croque.title} ${croque.image} ${croque.content}`;
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
