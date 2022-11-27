const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const slash = document.querySelector('.slash')
const star = document.querySelector('.star')
const operatorButtons = document.querySelectorAll('.operator')

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}


// WTF AM I DOING HERE M8 !!!!
// function operate(operator) {
//     if (operator.target.className === 'plus') {
//         console.log('works');
//     } else if (operator === minus) {
//         console.log(substract(5, 3));

//     } else if (operator === slash) {
//         console.log(divide(4, 2));

//     } else if (operator === star) {
//         console.log(multiply(3, 5));
//     }
// }


// operatorButtons.forEach(btn => {
//     btn.addEventListener('click', operate);
// })

operatorButtons.forEach(btn => {
    btn.addEventListener('click', (operator) => {
        if (btn.classList.contains('plus')) {
            console.log(add(3, 2));
        } else if (btn.classList.contains('minus')) {
            console.log(substract(4, 2));
        } else if (btn.classList.contains('slash')) {
            console.log(divide(10, 2));
        } else if (btn.classList.contains('star')) {
            console.log(multiply(7, 5));
        }
    })
})

// document.body.addEventListener('click', operate);


// console.log(add(4, 5));
// console.log(substract(4, 5))
// console.log(multiply(5, 5));
// console.log(divide(5, 15));