const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

let currentInput = '';
let operator = '';
let firstOperand = '';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value;

        if (value) {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

equalsButton.addEventListener('click', () => {
    if (currentInput) {
        if (operator && firstOperand !== '') {
            const result = calculate(firstOperand, currentInput, operator);
            display.value = result;
            currentInput = result;
            firstOperand = '';
            operator = '';
        } else {
            firstOperand = currentInput;
        }
    }
});

buttons.forEach(button => {
    if (button.classList.contains('operator')) {
        button.addEventListener('click', (e) => {
            if (currentInput) {
                if (firstOperand) {
                    const result = calculate(firstOperand, currentInput, operator);
                    display.value = result;
                    currentInput = result;
                } else {
                    firstOperand = currentInput;
                }
                operator = e.target.dataset.value;
                currentInput = '';
            }
        });
    }
});

clearButton.addEventListener('click', () => {
    currentInput = '';
    firstOperand = '';
    operator = '';
    display.value = '';
});

function calculate(a, b, op) {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    switch (op) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        default: return b;
    }
}
