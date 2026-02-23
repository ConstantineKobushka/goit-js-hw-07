const inputNameEl = document.querySelector('#name-input');
const inputOutputEl = document.querySelector('#name-output');

inputNameEl.addEventListener('input', onInputNameInput);

function onInputNameInput(event) {
  inputOutputEl.textContent =
    event.target.value.trim() === '' ? 'Anonymous' : event.target.value.trim();
}
