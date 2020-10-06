const buttons = document.querySelectorAll('[data-value]');
const displayResult = document.getElementById('displayResult');

/**
 * Returns the summ of a and b
 * @param {Number} a integer or float, positive or negative
 * @param {Number} b integer or float, positive or negative
 */

const add = (a, b) => {
  return a + b;
};

/**
 * Returns the subtraction of b from a
 * @param {Number} a integer or float, positive or negative
 * @param {Number} b integer or float, positive or negative
 */
const subtract = (a, b) => {
  return a - b;
};

/**
 * Returns the multiplication of a by b
 * @param {Number} a integer or float, positive or negative
 * @param {Number} b integer or float, positive or negative
 */
const multiply = (a, b) => {
  return a * b;
};

/**
 * Returns the division of a by b
 * @param {Number} a integer or float, positive or negative
 * @param {Number} b integer or float, positive or negative
 */
const divide = (a, b) => {
  return a / b;
};

/**
 * Returns the operation to a and b
 * @param {Number} a integer or float, positive or negative
 * @param {Number} b integer or float, positive or negative
 * @param {function} operator function that take 2 numbers as arguments
 */
const operate = (a, b, operator) => {
  return operator(a, b);
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
