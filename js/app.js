const buttons = document.querySelectorAll('[data-value]');
const equal = document.querySelector('[data-key=equal]');
const displayResult = document.getElementById('displayResult');

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
    result = a / b;
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
    index = string.indexOf('-');
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

    // test a number sign a change it
    if (event.target.dataset.value === '+/-') {
      // Need to check if string contain dot to parseFloat ?
      let stringToNumber = Number.parseInt(displayResult.innerText, 10);
      console.log(stringToNumber);
      if (Math.sign(stringToNumber) === 1) {
        displayResult.innerText = `-${stringToNumber}`;
      }
      if (Math.sign(stringToNumber) === -1) {
        displayResult.innerText = Math.abs(stringToNumber);
      }
    }
  });
});

equal.addEventListener('click', function (event) {
  let string = returnNumbers(displayResult.innerText);
  let a = Number.parseFloat(string[0], 10);
  let b = Number.parseFloat(string[1], 10);
  let operator = string[2];
  let result = operate(a, b, operator);
  displayResult.innerText = result;
});
