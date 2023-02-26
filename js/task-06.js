const inputEl = document.querySelector('#validation-input');

console.log(inputEl);

inputEl.addEventListener('blur', (event) => {
  const inputValueLength = event.target.value.trim().length;
  const inputRequiredLength = inputEl.dataset.length;

  if (inputValueLength == inputRequiredLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
    return;
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');

    return;
  }
});
