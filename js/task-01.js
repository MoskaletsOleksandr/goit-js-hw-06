const categoryEls = document.querySelectorAll('.item');

const numberOfCategories = categoryEls.length;

console.log(`Number of categories: ${numberOfCategories}`);

categoryEls.forEach((el) => {
  const nameOfCategory = el.querySelector('h2').textContent;
  const numberOfItemsInCategory = el.children[1].children.length;

  console.log(
    `Category: ${nameOfCategory}\n\Elements: ${numberOfItemsInCategory}`
  );
});
