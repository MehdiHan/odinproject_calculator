const buttons = document.querySelectorAll('[data-value]');
const equal = document.querySelector('[data-key=equal]');
const displayResult = document.getElementById('displayResult');
let memoryPoint = '';
let countDot = 0;

/**
 * Returns the operation to a and b
 * @param {Number} a integer or float, positive or negative
 * @param {Number} b integer or float, positive or negative
 * @param {string} operator string can be 'add','subtract','multiply' or 'divide'
 */
const operate = (a, b, operator) => {
  if (operator === 'add') {
    result = a + b;
  }
  if (operator === 'subtract') {
    result = a - b;
  }
  if (operator === 'multiply') {
    result = a * b;
  }
  if (operator === 'divide') {
    if (b === 0) {
      result = `Error ! Do not try to divide by 0`;
    } else {
      result = a / b;
    }
  }
  return result;
};

/**
 *
 * @param {string} string literal expression of a calculation
 * return value of the string before math sign , value of the string after math sign , math sign himself
 */
const returnNumbers = (string) => {
  let index = '';
  let operator = '';
  if (string.includes('+')) {
    index = string.indexOf('+');
    operator = 'add';
  }
  if (string.includes('-')) {
    if (string.indexOf('-') !== 0) {
      index = string.indexOf('-');
    }
    index = string.lastIndexOf('-');
    operator = 'subtract';
  }
  if (string.includes('*')) {
    index = string.indexOf('*');
    operator = 'multiply';
  }
  if (string.includes('/')) {
    index = string.indexOf('/');
    operator = 'divide';
  }

  let string1 = string.substr(0, index);
  let string2 = string.substr(index + 1, string.length);

  return [string1, string2, operator];
};

buttons.forEach((button) => {
  button.addEventListener('click', function (event) {
    displayResult.innerText += event.target.dataset.value;

    // Clear the displayed value
    if (event.target.dataset.value === 'clear') {
      displayResult.innerText = '';
    }

    // Count when . key is pressed, if already pressed clear the screen
    if (event.target.dataset.value === '.') {
      countDot++;
      if (countDot > 1) {
        displayResult.innerText = '';
        countDot = 0;
      }
    }

    // When you press +/- key, change the number's sign
    if (event.target.dataset.key === '+/-') {
      let number = displayResult.innerText;
      if (number.includes('-')) {
        displayResult.innerText = number.replace('-', '');
      } else {
        displayResult.innerText = '-' + number;
      }
    }

    if (event.target.dataset.type === 'operator') {
      memoryPoint += displayResult.innerText;
      displayResult.innerText = '';
    }
  });
});

equal.addEventListener('click', function (event) {
  let calc = memoryPoint + displayResult.innerText;
  let string = returnNumbers(calc);
  let a = Number.parseFloat(string[0], 10);
  let b = Number.parseFloat(string[1], 10);
  console.log(a, b);
  let operator = string[2];
  let result = operate(a, b, operator);
  displayResult.innerText = result;
  memoryPoint = '';
});
