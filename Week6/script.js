/* LET US IDENTIFY WHERE THE ELEMENTS WE NEED TO PUT CONTENT */
/* JAVASCRIPT USES THE DOM TO FIGURE OUT WHERE TO COMMUNICATE WITH HTML*/
/* HTML COMMUNICATES BACK USING CLASSES/IDS/ATTRIBUTES AS IDENTIFIERS FOR JAVASCRIPT TO MANIPULATE OR CHANGE*/
/* JAVASCRIPT INTERPRETS ELEMENTS AS OBJECTS WITH PROPERTIES AND VALUES*/
/* WE USE JAVASCRIPT OBJECT SYNTAX TO WORK WITH HTML*/

/* step 1 in interactivity in HTML and Javascript is querying the Document Object Manager to see if what we want to change has an element or what element it is that we need to change*/

// document is the MAIN HTML PAGE OBJECT
/* document = { 
    getElementBy(....): function('idname')

}*/

//let body = document.getElementsByTagName("body");
//console.log(body);

//let className = document.getElementsByClassName("trainer");
//console.log(className);

//let idName = document.getElementById("pokemon-side");
//console.log(idName);

//for CSS
//let querySelector = document.querySelector("header>h1");
//console.log(querySelector);

// STORES OUR ELEMENT OBJECT IN A VARIABLE
let spanName = document.getElementById("name");
// INNERTEXT is the property that we are changing that changes the TEXT of the ELEMENT that we are updating
// REFERENCE FOR CHANGING HTML: https://www.w3schools.com/js/js_htmldom_html.asp
spanName.innerText = trainer.name;

//WE ARE CHANGING THE OBJECT'S PROPERTY OF STYLE
// IF NOT JAVASCRIPT KEYWORDS THEN STRING
// REFERENCE FOR CSS: https://www.w3schools.com/js/js_htmldom_css.asp
spanName.style.fontSize = "2rem";

// INPUT OUR TRAINER
let trainerInfo = document.getElementById("trainer");
trainerInfo.innerHTML = `<img src='${trainer.sprite}'/>`;

let pokemonImg = document.getElementById("pokemon-side");
for (let x = 0; x < pokemon.length; x++) {
  pokemonImg.innerHTML += `<div class='card'>${pokemon[x].image}</div>`;
}

let badges = document.getElementById("badges");
for (let y = 0; y < trainer.badges.length; y++) {
  badges.innerHTML += `<img src='${trainer.badges[y]}'/>`;
}
