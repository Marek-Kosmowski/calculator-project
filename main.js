const numberButtons = document.querySelectorAll('.num');
const operationButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const inputField = document.querySelector('.input');
const resultField = document.querySelector('.result');

const calculator = {
    displayValue: '0',
    firstValue: null,
    waitingForSecondValue: false,
    operator: null,
};

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b === 0) {
        alert(`can't divide by 0`);
    } else {
        a / b;
    }
}

function inputNumber(number) {
    const {
        displayValue,
        waitingForSecondValue
    } = calculator;
    console.log(calculator);
    if (waitingForSecondValue === true) {
        calculator.displayValue = number;
        calculator.waitingForSecondValue = false;
    } else {
        calculator.displayValue = displayValue === '0' ? number : displayValue + number;
    }
}

function updateDisplay() {
    inputField.value = calculator.displayValue;
}
updateDisplay();



function handleOperator(nextOperator) {
    const {
        firstValue,
        displayValue,
        operator
    } = calculator
    const inputValue = parseFloat(displayValue);
    if (firstValue === null && !isNaN(inputValue)) {
        calculator.firstValue = inputValue;
    } else if (operator) {
        const result = operate(firstValue, inputValue, operator);

        calculator.displayValue = String(result);
        calculator.firstValue = result;
    }


    calculator.waitingForSecondValue = true;
    calculator.operator = nextOperator;
}



function operate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
        // return firstOperand + secondOperand;
        return add(firstOperand, secondOperand);
    } else if (operator === '-') {
        return substract(firstOperand, secondOperand)
    } else if (operator === '*') {
        return multiply(firstOperand, secondOperand);
    } else if (operator === '/') {
        return divide(firstOperand, secondOperand);
    }

    return secondOperand;
}

function clear() {
    calculator.displayValue = '0';
    calculator.firstValue = null;
    calculator.waitingForSecondValue = false;
    resultField.innerHTM = '0';
    updateDisplay();
}

numberButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        inputNumber(btn.innerHTML);
        updateDisplay();
    })
})

operationButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        handleOperator(btn.innerHTML)
        updateDisplay();
    })
})

clearButton.addEventListener('click', clear);


// const plus = document.querySelector('.plus')
// const minus = document.querySelector('.minus')
// const slash = document.querySelector('.slash')
// const star = document.querySelector('.star')
// const operatorButtons = document.querySelectorAll('.operator')
// const numberButtons = document.querySelectorAll('.num');
// const resultField = document.querySelector('.result')
// const inputField = document.querySelector('.input');
// const clearButton = document.querySelector('.clear')

// let input = '';
// let result = '';
// let firstValue = '';
// let secondValue = '';

// function add(a, b) {
//     return firstValue + secondValue;
// }

// function substract(firstValue, secondValue) {
//     return firstValue - secondValue;
// }

// function multiply(firstValue, secondValue) {
//     return firstValue * secondValue;
// }

// function divide(firstValue, secondValue) {
//     return firstValue / secondValue;
// }


// // WTF AM I DOING HERE M8 !!!!
// // function operate(operator) {
// //     if (operator.target.className === 'plus') {
// //         console.log('works');
// //     } else if (operator === minus) {
// //         console.log(substract(5, 3));

// //     } else if (operator === slash) {
// //         console.log(divide(4, 2));

// //     } else if (operator === star) {
// //         console.log(multiply(3, 5));
// //     }
// // }


// // operatorButtons.forEach(btn => {
// //     btn.addEventListener('click', operate);
// // })


// function clear() {
//     result.innerHTML = '';
//     input = '';
//     firstValue = '';
//     secondValue = '';
// }



// //TO CHANGE
// operatorButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         if (btn.classList.contains('plus')) {
//            inputField.innerHTML= '+';
//         } else if (btn.classList.contains('minus')) {
//             console.log(substract(4, 2));
//         } else if (btn.classList.contains('slash')) {
//             console.log(divide(10, 2));
//         } else if (btn.classList.contains('star')) {
//             console.log(multiply(7, 5));
//         }
//     })
// })

// numberButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         firstValue = btn.innerHTML;
//         secondValue = btn.innerHTML;
//         inputField.innerHTML = firstValue
//     })
// })

// clearButton.addEventListener('click', clear);










// const numButtons = document.querySelectorAll('.num');
// const operatorButtons = document.querySelectorAll('.operator');
// const equalsButton = document.querySelector('.equals');
// const inputField = document.querySelector('.input');
// const resultField = document.querySelector('.result');


// let firstVal = '';
// let secondVal = '';
// let input = '';
// let result = '';



// function add(a, b) {
//     return a + b;
// }

// function substract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }

// function operate(operator, firstVal, secondVal) {
//     if (operator === '+') {
//         add(firstVal, secondVal);
//     } else if (operator === '-') {
//         substract(firstVal, secondVal);
//     } else if (operator === '*') {
//         multiply(firstVal, secondVal);
//     }
// }

// numButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         firstVal = btn.innerHTML;
//         if (!firstVal === ' ') {
//             secondVal = btn.innerHTML;
//         }
//         console.log(`first: ${firstVal}, second: ${secondVal}`)
//     })
// })