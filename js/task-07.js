const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

console.log(fontSizeControlEl);
console.log(textEl);

fontSizeControlEl.addEventListener('input', (event) => {
  const newFontSize = event.target.value;

  textEl.style.fontSize = `${newFontSize}px`;
});
