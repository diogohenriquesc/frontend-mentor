const inputs = document.querySelectorAll('.form .input-field input');
const form = document.querySelector('.form');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  inputs.forEach(input => {
    if (input.value.length == 0) {
      const inputField = input.parentNode;
      const errorImg = inputField.querySelector('img');
      const errorMessage = inputField.querySelector('label');

      input.classList.add('error');
      errorImg.classList.remove('hide');
      errorMessage.classList.remove('hide');
    }
  });
});

inputs.forEach(input => {
  input.addEventListener('focus', () => {
    if (input.classList.contains('error')) {
      const inputField = input.parentNode;
			const errorImg = inputField.querySelector('img');
			const errorMessage = inputField.querySelector('label');

			input.classList.remove('error');
			errorImg.classList.add('hide');
			errorMessage.classList.add('hide');
    }
  })
})