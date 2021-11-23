"use strict";

let age = 21;
console.log(age >= 18);
if (age >= 18) {
  console.log("La personne est majeure");
} else {
  console.log("La personne est mineure");
}

//comparaison de valeur
console.log("égalité ? : 21 est égal à 21 ? ", "21" == 21);
console.log("différence ? : 21 est différent de 21 ? ", "21" != 21);

//comparaison de valeur & type
console.log("égalité ? : 21 est égal à 21 ? ", "21" === 21);
console.log("différence ? : 21 est différent de 21 ? ", "21" !== 21);

//comparaison sup/inf
console.log(12 > 12);
console.log(12 >= 12);
console.log(10 < 12);
console.log(15 <= 12);

let meteo = "soleil"; //nuage, pluie, brouillard
let temperature = 15; // chaud : à partir de 20
if (meteo === "soleil" && temperature >= 20) {
  console.log("on va à la plage");
} else if (
  meteo === "nuage" ||
  meteo === "brouillard" ||
  (meteo === "soleil" && temperature < 20)
) {
  console.log("on va en ville");
} else {
  console.log("on reste à la maison");
}

// OU = ||
// ET = &&

/**********
 * SWITCH CASE
 * comparaison === -> en valeur et en type
 */

switch (meteo) {
  case "soleil":
    if (temperature >= 20) {
      console.log("on va à la plage");
    } else {
      console.log("on va en ville");
    }
    break;
  case "nuage":
  case "brouillard":
    console.log("on va en ville");
    break;
  default:
    console.log("on reste à la maison");
}

/*********
 * WHILE
 */

//demande à l'utilisateur de saisir un nombre TANT QUE ce nombre n'est pas supérieur à 100

// condition (nombre <= 100)
// prompt -> enregistré dans une variable

let nombre = prompt("Veuillez saisir un nombre > 100");
while (nombre <= 100) {
  nombre = prompt("Veuillez saisir un nombre > 100");
}

//DO ... WHILE -> faire au moins au moins une fois l'exécution du code dans la boucle
let nb;
do {
  nb = prompt("Veuillez saisir un nombre < 100");
} while (nb > 100);
