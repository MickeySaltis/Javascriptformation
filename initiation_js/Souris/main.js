"use strict";
/** Fonctions */

//Cacher ou afficher le rectangle
    //(TOGGLE) Si un seul argument est présent : change la présence d'une classe dans la liste. 
    //Si la classe existe, alors la supprime et renvoie false, dans le cas inverse, ajoute cette classe et retourne true. 
    // (***.classList) prend en compte les éléments dont leur nom est situé avant le .classList(pour CSS).
function toggleRectangle (){
    rectangle.classList.toggle("hide"); 
}

//Ajouter la classe (CSS) important sur le rectangle
function becoreRed(){
    rectangle.classList.add("important");
}

//Ajouter la classe good sur le rectangle
function becoreBeige(){
    rectangle.classList.add("good");
}
//Supprimer les classes ajouté sur le rectangle
function becoreBlue(){
    rectangle.classList.remove("important", "good");
}


/**Code Principal */

let rectangle = document.querySelector(".rectangle");

//cibler le bouton #toggle-rectangle -> click -> appelle toggleRectangle

document
    .querySelector ("#toggle-rectangle")
    .addEventListener ("click", toggleRectangle);


// passage de la souris sur le Rectangle -> becoreRed
rectangle.addEventListener("mouseover", becoreRed);

// passage de la souris en dehors du Rectangle
rectangle.addEventListener("mouseout", becoreBlue);

//Double clics sur le Rectangle
rectangle.addEventListener("dblclick", becoreBeige);