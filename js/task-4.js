const refs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  counterText: document.querySelector('#value'),
};

let counterValue = 0;

refs.incrementBtn.addEventListener('click', onIncrementBtnClick);
refs.decrementBtn.addEventListener('click', onDecrementBtnClick);

function onIncrementBtnClick () {
  counterValue += 1;
  refs.counterText.textContent = counterValue;
  
}
function onDecrementBtnClick() {
  counterValue -= 1;
  refs.counterText.textContent = counterValue;
}
