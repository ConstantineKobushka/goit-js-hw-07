const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

function inputTextHendler(event) {
  span.textContent =
    event.target.value.trim() === '' ? 'Anonymous' : event.target.value.trim();
}

input.addEventListener('input', inputTextHendler);
