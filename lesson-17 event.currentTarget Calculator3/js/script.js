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

// function additionValue() {
//     makeOperation("+")
// }

// function subtractionValue() {
//     makeOperation("-")
// }

// function multiplicationValue() {
//     makeOperation('*')
// }

// function divisionValue() {
//     makeOperation('/')
// }

function onOperationButtonClick(eventObject) {
    let clicedElement = eventObject.currentTarget; // при помощи currentTarget мы передаём нужную кнопку (текущую цель)  (у eventObject взяли его currentTarget(текущую цель) привязали к переменной) clicedElement стал button#button-plus(например)
    let operation = clicedElement.innerHTML; // взяли у переменной clicedElement его innerHTML привязали к переменной operation
    makeOperation(operation); // передали переменную в параметр функции makeOperation... передали InnerHTML в параметр функции!
}


buttonPlus.addEventListener('click', onOperationButtonClick)
buttonMinus.addEventListener('click', onOperationButtonClick)
buttonMultiply.addEventListener('click', onOperationButtonClick)
buttonShare.addEventListener('click', onOperationButtonClick)
// создаём необходимые функции и вызываем их при помощи метода addEventListener('click') (указывая нужные переменные и функции)