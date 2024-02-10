// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url, doThis) {
  const response = await fetch(url);
  // Verificar si la solicitud fetch fue exitosa
  if (response.ok) {
    // El API nos enviará JSON... pero tenemos que convertir la respuesta antes de poder usarla
    // .json() también devuelve una promesa... así que también la esperamos.
    const data = await response.json();
    // Ejecutar el callback
    doThis(data);
  }
}

function doStuff(data) {
  results = data;
  const outputElement = document.querySelector("#output");
  const html = `<h2>${data.name}</h2><img src="${data.sprites.front_default}" alt="${data.name}">`;
  outputElement.innerHTML = html;
  console.log("first: ", results);
}

function doStuffList(data) {
  console.log(data);
  const pokeListElement = document.querySelector("#outputList");
  const pokeList = data.results;
  pokeList.forEach((currentItem) => {
    const html = `<li>${currentItem.name}</li>`;
    // Nota el += aquí...
    pokeListElement.innerHTML += html;
  });
}

function compare(a, b) {
  if (a.name > b.name) {
    // Ordenar b antes que a
    return 1;
  } else if (a.name < b.name) {
    // a y b son diferentes pero sin cambios (ya están en el orden correcto)
    return -1;
  } else return 0; // a y b son iguales
}

function sortPokemon(list) {
  let sortedList = list.sort(compare);
  return sortedList;
}

getPokemon(url, doStuff);
console.log("second: ", results);

getPokemon(urlList, doStuffList);
