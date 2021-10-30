const refs = {
  inputNumberRef: document.querySelector('input'),
  createDivRef: document.querySelector('button[data-create]'),
  destroyDivRef: document.querySelector('button[data-destroy]'),
  boxesRef: document.querySelector('#boxes'),
};

let amount = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    const markup = `<div style="width: ${30 + i * 10}px; height: ${
      30 + i * 10
    }px; background-color:${getRandomHexColor()}"></div>`;
    refs.boxesRef.insertAdjacentHTML('beforeend', markup);
  }
};

const destroyBoxes = () => {
  refs.boxesRef.innerHTML = '';
};

const getNumberOfDivs = event => {
  amount = event.currentTarget.value;
};

refs.inputNumberRef.addEventListener('input', getNumberOfDivs);

refs.createDivRef.addEventListener('click', () => {
  createBoxes(amount);
});

refs.destroyDivRef.addEventListener('click', destroyBoxes);
