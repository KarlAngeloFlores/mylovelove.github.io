let button_yes = document.querySelector(".button-yes");
let button_no = document.querySelector(".button-no");
let head = document.querySelector(".text-h1");

let paddingValue = 1;
let fontSizeValue = 1;

let minusPadding = -1;
let minusFont = 1;

button_no.addEventListener('click', function() {
    paddingValue += 2;
    fontSizeValue += 1;
    button_yes.style.padding = paddingValue + 'vw ' + (paddingValue + 1) + 'vw';
    button_yes.style.fontSize = fontSizeValue + 'vw';

    minusPadding -= 3;

    button_no.style.padding = minusPadding + 'vw' + (minusPadding - 2) + 'vw';
    
});

button_yes.addEventListener('click', function() {
    head.innerHTML = "Yeyyy! I love you so much!!!"
});