const allItems = ['recipe1', 'recipe2', 'showRecipe'];

const items = document.querySelectorAll(allItems);

const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');
const item4 = document.querySelector('.item4');
const item5 = document.querySelector('.item5');
const item6 = document.querySelector('.item6');
const showRecipe = document.querySelector('.showRecipe');

const recipe1 = document.querySelector('.recipe1');
const recipe2 = document.querySelector('.recipe2');

console.log(items);

const switchItem = () => {
    item1.addEventListener('click', () =>{
      allItems.forEach(recipe =>{
        if (showRecipe.classList.contains(recipe)){
          showRecipe.classList.remove(recipe);
        }
      })
      showRecipe.classList.add('recipe1');
      recipe1.style.display = 'block';
    });

    item2.addEventListener('click', () =>{
      allItems.forEach(recipe =>{
        if (showRecipe.classList.contains(recipe)){
          showRecipe.classList.remove(recipe);
        }
      })
      showRecipe.classList.add('recipe2');
      recipe2.style.display = 'block';
    });
}