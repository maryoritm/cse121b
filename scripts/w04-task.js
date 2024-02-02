/* LESSON 4 - Programming Tasks */
let photoElement = document.querySelector('#photo');

/* Profile Object  */
/* Populate Profile Object with placesLived objects */
let myProfile = {
    name: "Maryori Torres",
    photo: {
        src: "images/photo.png",
        alt: "My Profile Picture"
    },
    favoriteFoods: ["Chocolate Chip Cookies", "Steak", "Rice", "Tacos", "Burgers"],
    hobbies: ["Ai Development", "Camping", "Cook"],
    placesLived: [],
};
myProfile.placesLived.push(
    { place: 'Xalapa, Ver. Mexico', length: '23 years' },
    { place: 'Ciudad de Mexico, Mexico', length: '3 years' },
    { place: 'Chiapas, Mexico', length: '2 years' }
);
/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
photoElement.src = myProfile.photo.src;
photoElement.alt = myProfile.photo.alt;

/* Favorite Foods List */
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    
    let dd = document.createElement("dd");
    dd.textContent = place.length;

    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});
