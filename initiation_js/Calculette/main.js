"use strict";

//déclaration de la variable
//le nom de la variable ne commence pas par un chiffre, ne contient pas d'espace ni caractères spéciaux sauf underscore (_)
let maVariable;

//affectation de valeur
maVariable = "33.50";

console.log(maVariable, typeof maVariable);

//conversion en décimal
maVariable = parseFloat(maVariable);

console.log("parseFloat", maVariable, typeof maVariable);

//conversion en nombre entier
maVariable = parseInt(maVariable);

console.log("parseInt", maVariable, typeof maVariable);

//constante
const MA_CONSTANTE = "valeur";

/**
 * SAISIE UTILISATEUR
 */
// let user = window.prompt("message affiche à l'utilisateur");
// user = parseInt(user);
// console.log(user, typeof user);

/**
 * addition : +
 * soustraction : -
 * division : /
 * multiplication : *
 */
let nb = 2;
nb = nb + 2;
console.log(nb);

//CONCATENATION
let mot = "choses";
let chaine = nb + mot;
console.log("Ma chaine de caractère vaut : " + chaine);

//template string (altgr+7)
console.log(
  `Je fais une concaténation entre ${nb} et ${mot}, ce qui donne : ${chaine}`
);

console.clear();

/********************************
 * CALCULATRICE DE TVA
 ********************************/

//déclaration des variables
const TAUX_TVA = 20;

let montantHT;
let montantTVA;
let montantTTC;
let isRemise, tauxRemise, remise;



//affectation de valeur
montantHT = parseInt( prompt ("Quel est le montant HT",100));

// Demande de remise
isRemise =prompt("Avez-vous une remise ? oui ou non.");
switch (isRemise){
  //si la réponse est oui OU yes
  case "oui":
  case "yes":
    tauxRemise=parseInt(prompt("Veuillez saisir le taux de votre remise."));
    break;
    //si la réponse est non
  default:
    console.log("Aucune remise n'a été appliquée")
    tauxRemise=0;
}

//calcul du taux de la remise
remise = (tauxRemise * montantHT) /100
montantHT -= (montantHT*remise/100);

//calcul montant TVA
montantTVA = (montantHT * TAUX_TVA) / 100;

//calcul du montant TTC : HT + TVA
montantTTC = montantHT + montantTVA;

//cibler la balise HTML

//réponse avec ou sans remise
document.querySelector("#content").innerHTML=
`Pour un montant HT de ${montantHT}€.</br>
Vous payez un montant TTC de ${montantTTC}€.</br>
Le montant de la TVA est donc de ${montantTVA}€.`

if (tauxRemise ==0)
document.querySelector("#content").innerHTML+=
`</br>Aucune remise a été appliquée.`
else
document.querySelector("#content").innerHTML+=
`</br>Une remise de ${tauxRemise}%, qui est égale à ${remise}€, a été appliquée.`
console.log(
  `Pour un montant HT de ${montantHT}€ avec la déduction de ${tauxRemise}% qui est de ${remise}€, nous payons un TTC de ${montantTTC}€. Le montant de la TVA est donc de ${montantTVA}€.`
);



///////////////////////////////////////////////////


