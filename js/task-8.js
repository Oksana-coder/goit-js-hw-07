const refs = {
numberInput: document.querySelector('#controls input'),
createBtn: document.querySelector('[data-action="render"]'),
clearBtn: document.querySelector('[data-action="destroy"]'),
collection: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.clearBtn.addEventListener('click', onClearBtnClick);

function onCreateBtnClick() {
  createBoxes(refs.numberInput.value);
}
function onClearBtnClick() {
  destroyBoxes();
  refs.numberInput.value = '';
}

function createBoxes(amount) {
  let widthValue = 20;
  let heightValue = 20;
  
  for (let i = 0; i < amount; i ++) {
    const newElement = document.createElement('div');
    widthValue += 10;
    heightValue += 10;
    newElement.style.backgroundColor = randomColor();
    newElement.style.width = `${widthValue}px`;
    newElement.style.height = `${heightValue}px`;
    newElement.classList.add('item');
    refs.collection.appendChild(newElement);
  }
}

function destroyBoxes() {
  refs.collection.innerHTML = '';
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = `rgb(${r}, ${g}, ${b})`;
  
     return rgb;
}
