function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxesBtn = document.querySelector('button[data-create]');
const destroyBoxesBtn = document.querySelector('button[data-destroy]');
const numberOfBoxesEl = document.querySelector('#controls input');
const boxesContainer = document.querySelector('#boxes');
let numberOfBoxes = 0;

createBoxesBtn.addEventListener('click', createBoxes);
destroyBoxesBtn.addEventListener('click', destroyBoxes);
numberOfBoxesEl.addEventListener('blur', (event) => {
  numberOfBoxes = event.currentTarget.value;
});

function createBoxes(amount) {
  let pixels = 30;
  const array = [];

  for (let i = 1; i <= numberOfBoxes; i++) {
    array.push(pixels);

    pixels += 10;
  }

  const result = array
    .map(
      (el) =>
        `<div style='width:${el}px; height:${el}px; background:${getRandomHexColor()}; display:block;'></div>`
    )
    .join('');

  boxesContainer.insertAdjacentHTML('beforeend', result);
}

function destroyBoxes() {
  console.log('destroy');

  boxesContainer.innerHTML = '';
}
