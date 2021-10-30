const refs = {
  bodyRef: document.querySelector('body'),
  colorRef: document.querySelector('.color'),
  colorChangerRef: document.querySelector('.change-color'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorChangeHandler = () => {
  refs.bodyRef.style.backgroundColor = getRandomHexColor();
  refs.colorRef.textContent = getRandomHexColor();
};

refs.colorChangerRef.addEventListener('click', colorChangeHandler);
