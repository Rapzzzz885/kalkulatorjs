let currentInput = '0';
let operator = null;
let previousInput = '';
let history = [];

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}

function appendNumber(number) {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function setOperation(op) {
    if (operator !== null) {
        calculate();
    }
    previousInput = currentInput;
    operator = op;
    currentInput = '0';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    const historyEntry = `${previousInput} ${operator} ${currentInput} = ${result}`;
    addToHistory(historyEntry);

    currentInput = result.toString();
    operator = null;
    updateDisplay();
}

function clearEntry() {
    currentInput = '0';
    updateDisplay();
}

function toggleSign() {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
}

function addToHistory(entry) {
    history.push(entry);
    const historyList = document.getElementById('historyList');
    const newItem = document.createElement('li');
    newItem.innerText = entry;
    historyList.appendChild(newItem);
}

function clearHistory() {
    history = [];
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
}

function toggleHistory() {
    const historyDiv = document.getElementById('history');
    if (historyDiv.style.display === 'none' || historyDiv.style.display === '') {
        historyDiv.style.display = 'block';
    } else {
        historyDiv.style.display = 'none';
    }
}
