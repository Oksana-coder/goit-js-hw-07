const inputRef = document.querySelector('#validation-input');

const numberCharactersRequired = Number(inputRef.getAttribute('data-length'));

inputRef.addEventListener('blur', onInputChange);

function onInputChange(event) {
  const numberCharactersCurrent = event.currentTarget.value.length;
  
  if(numberCharactersCurrent === numberCharactersRequired) {
    inputRef.classList.add('valid')
    inputRef.classList.remove('invalid')
  } else {
    inputRef.classList.add('invalid')
    inputRef.classList.remove('valid')
  }
 };