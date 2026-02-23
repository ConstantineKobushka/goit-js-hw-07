const colorBtn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

colorBtn.addEventListener('click', onColorBtnClick);

function onColorBtnClick() {
  const randomHexColor = getRandomHexColor();
  document.body.style.backgroundColor = randomHexColor;
  colorText.textContent = randomHexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
