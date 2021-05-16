const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const description = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, description);
}

function add() {
  const enterdNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enterdNumber; // this line is equal to currentResult = currentResult + enterdNumber;
  createAndWriteOutput('+', initialResult, enterdNumber);
  logEntries.push(enterdNumber);
  console.log(logEntries);
}

function subtract() {
  const enterdNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enterdNumber;
  createAndWriteOutput('-', initialResult, enterdNumber);
}

function multiply() {
  const enterdNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enterdNumber;
  createAndWriteOutput('*', initialResult, enterdNumber);
}

function divide() {
  const enterdNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enterdNumber;
  createAndWriteOutput('/', initialResult, enterdNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
