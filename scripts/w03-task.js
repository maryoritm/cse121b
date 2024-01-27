/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Declaration - Addition Feature */

function add(number1, number2) {
    return number1 + number2;
  }
  
  function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
  }
  
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);
  
  /* Function Expression - Subtraction Feature */
  
  const subtract = function (number1, number2) {
    return number1 - number2;
  };
  
  const subtractNumbers = function () {
    let subtractNumber1 = parseFloat(document.getElementById('subtract1').value);
    let subtractNumber2 = parseFloat(document.getElementById('subtract2').value);
    document.getElementById('difference').value = subtract(subtractNumber1, subtractNumber2);
  };
  
  document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);
  
  /* Arrow Function - Multiplication Feature */
  
  const multiply = (number1, number2) => number1 * number2;
  
  const multiplyNumbers = () => {
    let factor1 = parseFloat(document.getElementById('factor1').value);
    let factor2 = parseFloat(document.getElementById('factor2').value);
    document.getElementById('product').value = multiply(factor1, factor2);
  };
  
  document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);
  
  /* Open Function Use - Division Feature */
  
  const divide = (x, y) => x / y;
  
  const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById('dividend').value);
    let divisor = parseFloat(document.getElementById('divisor').value);
    let quotient = divide(dividend, divisor);
    document.getElementById('quotient').value = quotient.toFixed(2);
  };
  
  document.getElementById('divideNumbers').addEventListener('click', divideNumbers);
  
  /* Decision Structure */
  
  function getTotal() {
    // input
    let subtotal = parseFloat(document.getElementById('subtotal').value);
  
    // processing
    if (document.getElementById('member').checked) {
      subtotal = subtotal - subtotal * 0.2; // 20% discount
    }
  
    // output
    document.getElementById('total').textContent = `$${subtotal.toFixed(2)}`;
  }
  document.getElementById('getTotal').addEventListener('click', getTotal);
  
  /* ARRAY METHODS - Functional Programming */
  /* Output Source Array */
  
  let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  
  document.getElementById('array').textContent = numbersArray;
  
  /* Output Odds Only Array */
  
  document.getElementById('odds').textContent = numbersArray.filter(number => number % 2 === 1);
  
  /* Output Evens Only Array */
  
  document.getElementById('evens').textContent = numbersArray.filter(number => number % 2 === 0);
  
  /* Output Sum of Org. Array */
  
  document.getElementById('sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number);
  
  /* Output Multiplied by 2 Array */
  
  document.getElementById('multiplied').textContent = numbersArray.map(number => number * 2);
  
  /* Output Sum of Multiplied by 2 Array */
  
  document.getElementById('sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
  