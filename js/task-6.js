const controls = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i++) {
    let div = document.createElement('div');
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.append(div);
    width += 10;
    height += 10;
  }
  return boxes.innerHTML;
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

controls.addEventListener('change', function (e) {
  const input = e.target;
  let count = +e.target.value;

  controls.addEventListener('click', function (e) {
    if (e.target.hasAttribute('data-create')) {
      if (count >= 1 && count <= 100) {
        destroyBoxes();
        console.log(count);
        createBoxes(count);
        input.value = '';
        count = 0;
        input.focus();
      }
      input.value = '';
      count = 0;
      input.focus();
    } else if (e.target.hasAttribute('data-destroy')) {
      destroyBoxes();
      input.value = '';
      count = 0;
      input.focus();
    }
    console.log(count);
  });
});
