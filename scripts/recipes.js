const allItems = ["recipe1", "recipe2"];

const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const item4 = document.querySelector(".item4");
const item5 = document.querySelector(".item5");
const item6 = document.querySelector(".item6");

const recipe1 = document.querySelector(".recipe1");
const recipe2 = document.querySelector(".recipe2");
const allWrapper = document.querySelector(".grid-wrapper");

/* const removePad = () =>{
  let showRecipe = document.querySelector('.showRecipe');
  allWrapper.removeChild(showRecipe);
} */

const removePad = () => {
  allWrapper.removeChild(allWrapper.lastChild);
};

const addPad1 = () => {
  let showRecipeAdd = document.createElement("div");
  showRecipeAdd.classList.add("showRecipe");
  allWrapper.appendChild(showRecipeAdd);
  showRecipeAdd.innerHTML = `<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>`;
};

const addPad2 = () => {
  let showRecipeAdd = document.createElement("div");
  showRecipeAdd.classList.add("showRecipe", "blackBack");
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


