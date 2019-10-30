let buttonPlus = document.getElementById('button-plus');
let buttonMinus = document.getElementById('button-minus');
let buttonMultiply = document.getElementById('button-multiply');
let buttonShare = document.getElementById('button-devide');

let inputValue1 = document.getElementById('input-value1');
let inputValue2 = document.getElementById('input-value2');

function makeOperation(operationCode) {
    let sumInputValue; // объявляем переменную прямо в функции(бедаем локальную переменную) что бы избежать объявления глобально переменной
    if (operationCode === '+') {
        sumInputValue = +inputValue1.value + +inputValue2.value;
        alert(sumInputValue)
    } else if (operationCode === '-') {
        sumInputValue = inputValue1.value - inputValue2.value;
        alert(sumInputValue)
    } else if (operationCode === '*') {
        sumInputValue = inputValue1.value * inputValue2.value;
        alert(sumInputValue)
    } else if (operationCode === '/') {
        sumInputValue = inputValue1.value / inputValue2.value;
        alert(sumInputValue)
    }
}

function additionValue() {
    makeOperation("+")
}

function subtractionValue() {
    makeOperation("-")
}

function multiplicationValue() {
    makeOperation('*')
}

function divisionValue() {
    makeOperation('/')
}


buttonPlus.addEventListener('click', additionValue)
buttonMinus.addEventListener('click', subtractionValue)
buttonMultiply.addEventListener('click', multiplicationValue)
buttonShare.addEventListener('click', divisionValue)
// создаём необходимые функции и вызываем их при помощи метода addEventListener('click') (указывая нужные переменные и функции)