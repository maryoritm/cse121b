/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullname = "Maryori Torres";
const currentYear = new Date().getFullYear(); //2024
const Profilepicture = "images/photo.png";


/* Step 3 - Element Variables */

const foodElement = document.querySelector('#food');
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */


yearElement.textContent = currentYear;
imageElement.setAttribute('src', Profilepicture);
imageElement.setAttribute('alt', `This is ${fullname}. She is....`);



/* Step 5 - Array */
let favfoods = ["Tacos", "Pizza", "Ice cream", "Sushi", "Pasta", "Buergers", "Fruit", "Chicken", "Potato salad", "Steak"];

foodElement.innerHTML = favfoods;
let newfood = 'Chocolate';
favfoods.push(newfood);
foodElement.innerHTML += `<br>${favfoods}`;




