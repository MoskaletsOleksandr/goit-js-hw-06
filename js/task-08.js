const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert(
      'Ви заповнили не всі поля форми! Будь ласка, заповніть всі поля та повторіть спробу!'
    );
  }

  const data = {
    email: email.value,
    password: password.value,
  };

  console.log(data);

  event.currentTarget.reset();
});
