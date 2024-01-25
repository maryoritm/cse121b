/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Declaration - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
  }
  
  /* Function Expression - Subtract Numbers */
  const subtract = function (number1, number2) {
    return number1 - number2;
  };
  
  /* Arrow Function - Multiply Numbers */
  const multiply = (number1, number2) => number1 * number2;
  
  /* Function Declaration - Divide Numbers */
  function divide(x, y) {
    return x / y;
  }
  
  const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").innerHTML = quotient.toFixed(2);
  };
  
  document.getElementById("divideNumbers").addEventListener("click", divideNumbers);
  
  /* Selection Structure - Get Total Due */
  function getTotal() {
    // Input
    let subtotal = parseFloat(document.getElementById("subtotal").value);
  
    // Processing
    if (document.getElementById("member").checked) {
      subtotal -= subtotal * 0.2; // 20% discount
    }
  
    // Output
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
  }
  
  document.getElementById("getTotal").addEventListener("click", getTotal);
  
  /* ARRAY METHODS - Functional Programming */
  /* Output Source Array */
  let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  document.getElementById("array").textContent = numbersArray.join(", ");
  
  /* Output Odds Only Array */
  let oddsArray = numbersArray.filter((number) => number % 2 === 1);
  document.getElementById("odds").textContent = oddsArray.join(", ");
  
  /* Output Evens Only Array */
  let evensArray = numbersArray.filter((number) => number % 2 === 0);
  document.getElementById("evens").textContent = evensArray.join(", ");
  
  /* Output Sum of Org. Array */
  let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
  document.getElementById("sumOfArray").textContent = sumOfArray;
  
  /* Output Multiplied by 2 Array */
  let multipliedArray = numbersArray.map((number) => number * 2);
  document.getElementById("multiplied").textContent = multipliedArray.join(", ");
  
  /* Output Sum of Multiplied by 2 Array */
  let sumOfMultipliedArray = multipliedArray.reduce((sum, number) => sum + number, 0);
  document.getElementById("sumOfMultiplied").textContent = sumOfMultipliedArray;
  