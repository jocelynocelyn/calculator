const display = document.querySelector('#display');
let displayValue = 0;
let num1 = 0
let num2 = 0
let operation = '';
let didOperate = false;

let clearBtn = document.querySelector('.clearButton');
clearBtn.addEventListener('click', clearAll);

let operator = document.getElementsByClassName('operator');
for (let i = 0; i < operator.length; i++) {
    let operationButton = operator[i];
    operationButton.addEventListener('click', assignOperator);
}

let number = document.getElementsByClassName('number');
for (let j = 0; j < number.length; j++) {
    let numberBtn = number[j];
    numberBtn.addEventListener('click', displayNumber)
}

let equals = document.getElementById('equals');
equals.addEventListener('click', operate);

function assignOperator() {
    if(didOperate === false) {
        num1 = parseInt(displayValue);
        if (this.innerHTML == '+') {
            operation = '+';
        } else if (this.innerHTML == '-') {
            operation = '-';
        } else if (this.innerHTML == 'x') {
            operation = '*';
        } else {
            operation = '/';
        }
        didOperate = true;
        displayValue = '';
    } else {
        num2 = parseFloat(displayValue);

    }
    console.log({ num1, num2, operation, displayValue });
}

function displayNumber() {
    if (displayValue == 0){
        displayValue = this.innerHTML;
    } else {
        displayValue = displayValue + this.innerHTML;
    }

    if (didOperate == true) {
        num2 = parseFloat(displayValue);
    }
    display.textContent = displayValue;
    console.log(displayValue);
}

function operate() {
    if (operation === '+') {
       displayValue = num1 + num2;
    } else if (operation === '-') {
        displayValue = num1 - num2;
    } else if (operation === '*') {
        displayValue = num1 * num2;
    } else {
        displayValue = num1 / num2;
    }
    display.textContent = displayValue;
    num1 = displayValue;
    num2 = 0;
    didOperate = false;
}

function clearAll() {
    displayValue = 0;
    display.textContent = '';
    didOperate = false;
    operation = '';
    num1 = 0;
    num2 = 0;
}