const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
};

refs.nameInput.addEventListener('input', onInputChange);
refs.nameInput.addEventListener('blur', onInputBlur);

function onInputChange(event) {
    refs.nameOutput.textContent = event.currentTarget.value;
};

function onInputBlur() {
    if (refs.nameOutput.textContent === '') {
        refs.nameOutput.textContent = 'незнакомец';
    }
};