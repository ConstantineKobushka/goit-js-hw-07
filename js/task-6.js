const controls = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');
const controlsInput = controls.querySelector('input');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
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
  boxes.append(...html);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

controls.addEventListener('click', function (e) {
  let count = +controlsInput.value;

  if (e.target.hasAttribute('data-create')) {
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
  } else if (e.target.hasAttribute('data-destroy')) {
    destroyBoxes();
    controlsInput.value = '';
    count = 0;
    controlsInput.focus();
  }
});
