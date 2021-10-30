const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const refs = {
  ingredientsRef: document.querySelector('#ingredients'),
};

const elements = ingredients.map(el => {
  const ingredientRef = document.createElement('li');
  ingredientRef.classList.add('item');
  ingredientRef.textContent = el;
  return ingredientRef;
});

refs.ingredientsRef.append(...elements);