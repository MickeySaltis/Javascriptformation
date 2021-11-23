"use strict";

// tableau chifoumi
const chifoumi = new Array(
    "pierre",
    "feuille",
    "ciseau"
);

//carnet des variants
let utilisateur
let IA
let conclusion

//Choix utilisateur
///Boucle avec do/while
do {
 utilisateur = window.prompt("Choisissez entre pierre, feuille ou ciseau.").toLowerCase();
} while(
    //si la saisie de l'utilisateur est différent de pierre et de feuille et de ciseau alors on recommence le manège.
    utilisateur != "pierre" &&
    utilisateur != "feuille" &&
    utilisateur != "ciseau" 
    ) ;

 console.log(`Vus avez choisi ${utilisateur}.`)


//Choix IA
/// Choix aléatoire vis à vis au tableau chifoumi
IA=chifoumi[Math.floor(Math.random()*chifoumi.length)];
console.log(`Monsieur à choisi ${IA}.`)


if (utilisateur==IA){
    conclusion = "Egalité";
}
else if ((utilisateur=="pierre" && IA=="ciseau") || (utilisateur=="feuille" && IA=="pierre") || (utilisateur=="ciseau" && IA=="feuille")){
    conclusion="Gagné";
}
else{
    conclusion="Fatality";
}


document.querySelector("#content").innerHTML= 
`   Joueur : ${utilisateur} </br>
    Skynet : ${IA} <br/>
    Résultat : ${conclusion} `  ;

/*****************************************
 * Insertion de texte HTML && Image
 * 
 *  document.querySelector("#content").innerHTML= 
 *  `<ul>
 *      <li>
 *          <img src="img/${utilisateur}.png alt=" ${utilisateur}
 *      </li>
 *      <li>
 *          <img src="img/${IA}.png alt=" ${IA}
 *      </li>
 *    </ul>
 * `
 * 
 * 
 */
