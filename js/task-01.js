const refs = {
  categoriesRef: document.querySelector('#categories'),
};

const categoriesItems = [...refs.categoriesRef.children];
console.log('Number of categories:', categoriesItems.length);

categoriesItems.forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});