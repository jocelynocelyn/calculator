const display = document.querySelector('#display');


let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    let displayValue = 1;
        display.textContent = displayValue;
});

let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    let displayValue = 2;
display.textContent = displayValue;
});

let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    let displayValue = 3;
display.textContent = displayValue;
});

let btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', () => {
    let displayValue = 4;
    display.textContent = displayValue;
});

let btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', () => {
    let displayValue = 5;
    display.textContent = displayValue;
});

let btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', () => {
    let displayValue = 6;
    display.textContent = displayValue;
});

let btn7 = document.querySelector('#btn7');
btn7.addEventListener('click', () => {
    let displayValue = 7;
    display.textContent = displayValue;
});

let btn8 = document.querySelector('#btn8');
btn8.addEventListener('click', () => {
    let displayValue = 8;
    display.textContent = displayValue;
});

let btn9 = document.querySelector('#btn9');
btn9.addEventListener('click', () => {
    let displayValue = 9;
    display.textContent = displayValue;
});

let btn0 = document.querySelector('#btn0');
btn0.addEventListener('click', () => {
    let displayValue = 0;
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
