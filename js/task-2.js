const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientContainerRef = document.querySelector('#ingredients');

const createIngredientsList = (ingredients) => {
  return ingredients.map(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    return listItem;
  });
};

const ingredientListItems = createIngredientsList(ingredients);

ingredientContainerRef.append(...ingredientListItems);

console.log(ingredientContainerRef);