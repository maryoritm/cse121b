/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Maryori Torres";
const currentYear = new Date().getFullYear(); // 2024
const profilePicture = "images/photo.png"; 

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name"); 
const foodElement = document.querySelector('#food');
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`; 
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `This is ${fullName}. She is`);

/* Step 5 - Array */
let favFoods = ["Tacos", "Pizza", "Ice cream", "Sushi", "Pasta", "Buergers", "Fruit", "Chicken", "Potato salad", "Steak"]; 

// Mostrar los alimentos favoritos
foodElement.innerHTML = favFoods.join(', '); // Úsalo con join para mostrar la lista de alimentos de manera legible

let newFood = 'Chocolate';
favFoods.push(newFood);
foodElement.innerHTML += `<br>${favFoods.join(', ')}`; // Añade join para mostrar la lista de alimentos actualizada

// Remover el primer elemento
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods.join(', ')}`;

// Remover el último elemento
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods.join(', ')}`;

