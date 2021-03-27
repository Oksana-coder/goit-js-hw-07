const fontSizeControlRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text');

fontSizeControlRef.value = 16;

fontSizeControlRef.addEventListener('input', onInputChange);

function onInputChange() {
    const currentFontSize = fontSizeControlRef.value;
    textRef.style.fontSize = currentFontSize + "px";
};


// function onInputChange() {
//     textRef.setAttribute('style', `font-size: ${fontSizeControlRef.value}px`);
// }