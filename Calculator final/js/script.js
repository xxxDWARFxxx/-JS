let allButtonCalculator = document.querySelectorAll('.operations-buttons button') // Нашли все кнопки по их селектору .operations-buttons button //не забываем указывать точку .

let inputValue1 = document.getElementById('input-value1')
let inputValue2 = document.getElementById('input-value2')




function operationsClickButton(operationsClick) {
    let sum;
    if (operationsClick === '+') {
        sum = +inputValue1.value + +inputValue2.value
        alert(sum)
    } else if (operationsClick == '-') {
        sum = inputValue1.value - inputValue2.value
        alert(sum)
    } else if (operationsClick == '*') {
        sum = inputValue1.value * inputValue2.value
        alert(sum)
    } else if (operationsClick == '/') {
        sum = inputValue1.value / inputValue2.value
        alert(sum)
    }

}

function operationsCalculator(eventObject) {
    let targetObject = eventObject.currentTarget
    let targetHtml = targetObject.innerHTML
    operationsClickButton(targetHtml)
}

for (let i = 0; i < allButtonCalculator.length; i++) {
    allButtonCalculator[i].addEventListener('click', operationsCalculator)
}



// function OperationsAddition() {
//     sum = +inputValue1.value + +inputValue2.value
//     alert(sum)
// }

// function OperationsMinus() {
//     sum = inputValue1.value - inputValue2.value
//     alert(sum)
// }

// function OperationsMultiply() {
//     sum = inputValue1.value * inputValue2.value
//     alert(sum)
// }

// function OperationsDevide() {
//     sum = inputValue1.value / inputValue2.value
//     alert(sum)
// }


// let buttonPlus = document.getElementById('button-plus');
// let buttonMinus = document.getElementById('button-minus')
// let buttonMultiply = document.getElementById('button-multiply');
// let buttonDevide = document.getElementById('button-devide');


// buttonPlus.addEventListener('click', operationsCalculator)
// buttonMinus.addEventListener('click', operationsCalculator)
// buttonMultiply.addEventListener('click', operationsCalculator)
// buttonDevide.addEventListener('click', operationsCalculator)