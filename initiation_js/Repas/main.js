"use strict";
//SOULIE Matthieu

/**********
 * VARIABLE
 **********/

//variable = Tableau de menu
let menu = [];

//variable qui représente un plat
let plat;

/**********
 * FONCTION
 **********/

//afficher le menu
function afficher (){
    
    //variable qui représente un plat dans le tableau
    let i=0
    //création du tableau HTML avec les balises <ul></ul>
    document.querySelector("#meals").innerHTML = "<ul></ul>";

    // boucle = i va prendre de la valeur jusqu'à la valeur max du tableau Menu
    while (i<menu.length) {
        //à chaque valeur du i, une cellule <li></li> est créé dans le tableau pour representer un plat du menu
        document.querySelector("#meals ul").innerHTML += `<li>${menu[i]}</li>`;           
            i++;
    }
    //indique le nombre de plat dans le menu (HTML)
    document.querySelector("#meals").innerHTML  += `<p>Le menu contient  ${menu.length}  plats(s)</p>`;
    

}

//Ajouter dans le menu
function ajouter(item){
    menu.push(item);
}

//Saisie du client
function saisie() {
    //Variable =saisi de l'utilisateur
    let plat = document.querySelector("#prompt").value.toLowerCase().trim();

    //si l'utilisateur ne rentre rien, message d'erreur et retour à la case départ
     if (plat ==""){
        window.alert("Vous n'avez rien indiqué.")

     }// si l'utilisateur indique un plat qui est déjà présent, message d'erreur et retour à la case départ
     else if (menu.indexOf(plat) >= 0){
        window.alert("Le plat " + plat +" est déjà dans le menu.");
     }
     else {
    //sinon appel de la fonction pour ajouter la variable dans le menu avec un message de réussite
    ajouter(plat);
    window.alert("Le plat " + plat +" a été ajouté au menu.")
    //appel de la fonction pour actualiser l'affichage du menu
    afficher();}
    
}


/**********
 * CODE
 **********/

document.addEventListener("DOMContentLoaded", function() {

//Ajoute 10 repas dans le menu
ajouter("pizza");
ajouter("tacos");
ajouter("steak");
ajouter("frite");
ajouter("couscous");
ajouter("kebab");
ajouter("pâte");
ajouter("yaourt");
ajouter("flan");
ajouter("glace");

//appel la fonction afficher pour afficher le menu
afficher();

//appel un événement/fonction "saisie" au click du bouton "Ajouter"
document.querySelector("#submit")
        .addEventListener("click", saisie);
        console.log(menu);
})