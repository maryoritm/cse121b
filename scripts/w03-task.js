/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
  //function body
}

/* Function Expression - Subtract Numbers */


/* Arrow Function - Multiply Numbers */


/* Open Function Use - Divide Numbers */
const divide = (x, y) => x/y;

const divideNumbers = () => {
  let dividend = parseFloat(document.getElementById("dividend").value);
  let divisor = parseFloat(document.getElementById("divisor").value);
  let quotient = divide(dividend, divisor);
  document.getElementById("quotient"),innerHTML = quotion.tofixed(2);
};

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */

function getTotal () {
//input
let subtotal = parseFloat(document.getElementById("subtotal").value);
//processsing
if(document.getElementById("member").checked) {
total = subtotal - subtotal * 0.2; // 20% discount
} 
//output
document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`; 
}

document.getElementById("getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */

