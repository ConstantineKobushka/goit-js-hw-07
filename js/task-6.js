const controlsEl = document.querySelector('#controls');
const boxesEl = document.querySelector('#boxes');
const controlsInput = controlsEl.querySelector('input');

controlsEl.addEventListener('click', onControlseElClick);

function onControlseElClick(event) {
  let count = +controlsInput.value;

  if (event.target.hasAttribute('data-create')) {
    if (count >= 1 && count <= 100) {
      destroyBoxes();
      createBoxes(count);
      controlsInput.value = '';
      count = 0;
      controlsInput.focus();
    }
    controlsInput.value = '';
    count = 0;
    controlsInput.focus();
  } else if (event.target.hasAttribute('data-destroy')) {
    destroyBoxes();
    controlsInput.value = '';
    count = 0;
    controlsInput.focus();
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

function createBoxes(amount) {
  let size = 30;
  const html = [];
  for (let i = 0; i < amount; i++) {
    let div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    html.push(div);
    size += 10;
  }
  boxesEl.append(...html);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
