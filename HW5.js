const btnRemoveAll = document.getElementById('btn-remove-all');
const btnDeleteLast = document.getElementById('btn-delete-last');
const btnPercent = document.getElementById('btn-percent');
const btnDivide = document.getElementById('btn-divide');
const btnSeven = document.getElementById('btn-seven');
const btnEight = document.getElementById('btn-eight');
const btnNine = document.getElementById('btn-nine');
const btnMultiply = document.getElementById('btn-multiply');
const btnFour = document.getElementById('btn-four');
const btnFive = document.getElementById('btn-five');
const btnSix = document.getElementById('btn-six');
const btnSubtract = document.getElementById('btn-subtract');
const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');
const btnThree = document.getElementById('btn-three');
const btnAdd = document.getElementById('btn-add');
const btnFactorial = document.getElementById('btn-factorial');
const btnZero = document.getElementById('btn-zero');
const btnComma = document.getElementById('btn-comma');
const btnEqual = document.getElementById('btn-equal');
const Input = document.getElementById('input-number');

let a = 0;
let b = 0;

let typeMethod = 'default';

function one() { Input.value = Input.value + '1'; }
function two() { Input.value = Input.value + '2'; }
function three() { Input.value = Input.value + '3'; }
function four() { Input.value = Input.value + '4'; }
function five() { Input.value = Input.value + '5'; }
function six() { Input.value = Input.value + '6'; }
function seven() { Input.value = Input.value + '7'; }
function eight() { Input.value = Input.value + '8'; }
function nine() { Input.value = Input.value + '9'; }
function zero() { Input.value = Input.value + '0'; }
function comma() { Input.value = Input.value + '.'; }
function removeAll() { Input.value = ''; a = 0; b = 0; typeMethod = 'default'}
function deleteLast() { Input.value = Input.value.substring(0, Input.value.length - 1); }

function addButton() {
    typeMethod = 'add';
    a = Number(Input.value);
    Input.value = '';
}
function subtractButton() {
    typeMethod = 'subtract';
    a = Number(Input.value);
    Input.value = '';
}
function divideButton() {
    typeMethod = 'divide';
    a = Number(Input.value);
    Input.value = '';
}
function multiplyButton() {
    typeMethod = 'multiply';
    a = Number(Input.value);
    Input.value = '';
}
function percentButton() {
    typeMethod = 'percent';
    a = Number(Input.value);
}
function factorialButton() {
    typeMethod = 'factorial';
    a = Number(Input.value);
}

function add(a, b) { return a+b; }
function subtract(a, b) { return a-b; }
function divide(a, b) { return a/b; }
function multiply(a, b) { return a*b; }
function percent(a) { return a/100; }
function factorial(a) {
    let c = 1;
    for(let i=1; i<=a; i++){
        c = c * i;
    }
    return c;
}

function equal() {
    b = Number(Input.value);
    let tempResult = 0;
    if(typeMethod == 'add'){
        tempResult = add(a,b);
    }
    else if(typeMethod == 'subtract'){
        tempResult = subtract(a,b);
    }
    else if(typeMethod == 'divide'){
        if(b == 0){
            tempResult = "Error!"
        }
        else tempResult = divide(a,b);
    }
    else if(typeMethod == 'multiply'){
        tempResult = multiply(a,b);
    }
    else if(typeMethod == 'percent'){
        tempResult = percent(a);
    }
    else if(typeMethod == 'factorial'){
        tempResult = factorial(a);
    }
    else tempResult = 0;
    Input.value = tempResult;
    a = tempResult;
}

btnOne.addEventListener('click', one);
btnTwo.addEventListener('click', two);
btnThree.addEventListener('click', three);
btnFour.addEventListener('click', four);
btnFive.addEventListener('click', five);
btnSix.addEventListener('click', six);
btnSeven.addEventListener('click', seven);
btnEight.addEventListener('click', eight);
btnNine.addEventListener('click', nine);
btnZero.addEventListener('click', zero);
btnComma.addEventListener('click', comma);
btnRemoveAll.addEventListener('click', removeAll);
btnDeleteLast.addEventListener('click', deleteLast);
btnAdd.addEventListener('click', addButton);
btnSubtract.addEventListener('click', subtractButton);
btnDivide.addEventListener('click', divideButton);
btnMultiply.addEventListener('click', multiplyButton);
btnPercent.addEventListener('click', percentButton);
btnEqual.addEventListener('click', equal)
btnFactorial.addEventListener('click', factorialButton);