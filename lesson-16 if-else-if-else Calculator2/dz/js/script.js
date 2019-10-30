let buttonPlus = document.getElementById('button-plus');
let buttonMinus = document.getElementById('button-minus');
let buttonMultiply = document.getElementById('button-multiply');
let buttonShare = document.getElementById('button-devide');

let inputValue1 = document.getElementById('input-value1');
let inputValue2 = document.getElementById('input-value2');
// Повторение материала!
function makeOperation(operationCode) {
    let result
    if (operationCode === '+') {
        result = +inputValue1.value + +inputValue2.value
        alert(result)
        console.log('Сумма = ', result)
    } else if (operationCode === '-') {
        result = +inputValue1.value - +inputValue2.value
        alert(result)
        console.log('Сумма = ', result)
    } else if (operationCode === '*') {
        result = inputValue1.value * inputValue2.value
        alert(result)
        console.log('Сумма = ', result)
    } else if (operationCode === '/') {
        result = inputValue1.value / inputValue2.value
        alert(result)
        console.log('Сумма = ', result)
    }
}

function additionValue() {
    makeOperation('+')
}

function subtractionValue() {
    makeOperation('-')
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