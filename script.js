const display = document.querySelector('#display');
let displayValue = 0;

function clearAll() {
        displayValue = 0;
        display.textContent = '';
}

let clearBtn = document.querySelector('.clearButton');
clearBtn.addEventListener('click', clearAll)

    let btn0 = document.querySelector('#btn0');
btn0.addEventListener('click', () => {
    if (displayValue == 0){
        displayValue = "0";
    } else {
        displayValue = displayValue + "0";
    }
    display.textContent = displayValue;
});

let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    if (displayValue == 0){
        displayValue = "1";
    } else {
        displayValue = displayValue + "1";
    }
        display.textContent = displayValue;
});

let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    if (displayValue == 0){
        displayValue = "2";
    } else {
        displayValue = displayValue + "2";
    }
    display.textContent = displayValue;
});

let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    if (displayValue == 0){
        displayValue = "3";
    } else {
        displayValue = displayValue + "3";
    }
    display.textContent = displayValue;
});

let btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', () => {
    if (displayValue == 0){
        displayValue = "4";
    } else {
        displayValue = displayValue + "4";
    }
    display.textContent = displayValue;
});

let btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', () => {
    if (displayValue == 0){
        displayValue = "5";
    } else {
        displayValue = displayValue + "5";
    }
    display.textContent = displayValue;
});

let btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', () => {
    if (displayValue == 0){
        displayValue = "6";
    } else {
        displayValue = displayValue + "6";
    }
    display.textContent = displayValue;
});

let btn7= document.querySelector('#btn7');
btn7.addEventListener('click', () => {
    if (displayValue == 0){
        displayValue = "7";
    } else {
        displayValue = displayValue + "7";
    }
    display.textContent = displayValue;
});

let btn8 = document.querySelector('#btn8');
btn8.addEventListener('click', () => {
    if (displayValue == 0){
        displayValue = "8";
    } else {
        displayValue = displayValue + "8";
    }
    display.textContent = displayValue;
});

let btn9 = document.querySelector('#btn9');
btn9.addEventListener('click', () => {
    if (displayValue == 0){
        displayValue = "9";
    } else {
        displayValue = displayValue + "9";
    }
    display.textContent = displayValue;
});
function operate(num1, operation, num2) {
    if (operation = '+') {
        return add(num1, num2);
    } else if (operation = '-') {
        return subtract(num1, num2);
    } else if (operation = '/') {
        return divide(num1, num2);
    } else {
        return multiply(num1, num2);
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}