const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainer = document.querySelector('#ingredients');

const makeIngredientsList = (obj) => {
  return obj.map((el) => {
    const itemEl = document.createElement('li');

    itemEl.textContent = el;
    itemEl.classList.add('item');

    return itemEl;
  });
};

const ingredientsList = makeIngredientsList(ingredients);

ingredientsContainer.append(...ingredientsList);
