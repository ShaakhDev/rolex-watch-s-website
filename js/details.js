let counterDisplayElem = document.querySelector('.display');
let counterMinusElem = document.querySelector('.btn-minus');
let counterPlusElem = document.querySelector('.btn-plus');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click", () => {
    count++;
    updateDisplay();
});

counterMinusElem.addEventListener("click", () => {
    count--;
    updateDisplay();
});

function updateDisplay() {
    counterDisplayElem.innerHTML = count;
};