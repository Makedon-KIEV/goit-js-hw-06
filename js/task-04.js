let counterValue = 0;

const refs = {
  counterRef: document.querySelector('#value'),
  decrementRef: document.querySelector('button[data-action="decrement"]'),
  incrementRef: document.querySelector('button[data-action="increment"]'),
};

const onClickIncrementButton = () => {
  counterValue += 1;
  refs.counterRef.textContent = counterValue;
};

const onClickDecrementButton = () => {
  counterValue -= 1;
  refs.counterRef.textContent = counterValue;
};

refs.incrementRef.addEventListener('click', onClickIncrementButton);
refs.decrementRef.addEventListener('click', onClickDecrementButton);
