let buttonPlus = document.getElementById('button-plus');
let buttonMinus = document.getElementById('button-minus');
let buttonMultiply = document.getElementById('button-multiply');
let buttonShare = document.getElementById('button-devide');

let inputValue1 = document.getElementById('input-value1');
let inputValue2 = document.getElementById('input-value2');

let sumInputValue;



function additionValue() {
    sumInputValue = +inputValue1.value + +inputValue2.value; // используем унарный + перед вырожением для преобразования строковой переменной в численную переменную 
    alert(sumInputValue)
}
//Для преобразования к числу в явном виде можно вызвать Number(val), либо, что короче, поставить перед выражением унарный плюс "+":
function subtractionValue() {
    sumInputValue = inputValue1.value - inputValue2.value;
    alert(sumInputValue)
}

function multiplicationValue() {
    sumInputValue = inputValue1.value * inputValue2.value;
    alert(sumInputValue)
}

function divisionValue() {
    sumInputValue = inputValue1.value / inputValue2.value;
    alert(sumInputValue)
}

buttonPlus.addEventListener('click', additionValue)
buttonMinus.addEventListener('click', subtractionValue)
buttonMultiply.addEventListener('click', multiplicationValue)
buttonShare.addEventListener('click', divisionValue)
// создаём необходимые функции и вызываем их при помощи метода addEventListener('click') (указывая нужные переменные и функции)