"use strict";

/***
 * Variables
 */

//Tableau d'objet ( tableau contenant les images de la slide)
const slides = [ //tableau [] / objet{} / tableau d'objets [{}]
    {
        src:"1.jpg", //nom de l'image comme logo.png
        legend :"frères pandas",
    },
    {
        src:"2.jpg",
        legend :"yoga",
    },
    {
        src:"3.jpg",
        legend :"coucher de soleil",
    },
    {
        src:"4.jpg",
        legend :"nuit étoilée",
    },
    {
        src:"5.jpg",
        legend :"tea time",
    },
    {
        src:"6.jpg",
        legend :"gros dessert",
    },
];

//constante qui exploite le tableau d'objets + propriété booleen appliqué sur la constante
const state = { index : 0, interval:false };


/**** Fonctions */

//fonction pour l'aléatoire
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Pour faire apparaitre ou disparaitre le navigateur de photo
function toolbarToggle(){
    document.querySelector(".toolbar ul").classList.toggle("hide");//on cible le toolbar et plus précisement le <ul> avec la classe ="hide" 

    // impacter la ligne qui déclenche l'apparition ou disparition du navigateur
const icon = document.querySelector("#toolbar-toggle i"); // cible la balise qui contient la flèche
icon.classList.toggle("fa-arrow-right");  //apparaitre ou disparaitre la flèche direction droite
icon.classList.toggle("fa-arrow-down");  //apparaitre ou disparaitre la flèche direction bas
}

/// Affiche la photo en cours de visionnage
function refreshSlider(){
    document.querySelector("#slider img").src = "images/" + slides[state.index].src; // va chercher la photo grâce à la constante
    document.querySelector("#slider figcaption").textContent = slides [state.index].legend; // va chercher la légende de la photo

}
        //ou
                /**    document
                     .querySelector("#slider img")
                    .setAttribute("src", "cheminfichier.jpg"); */

//Passe à la photo suivante
function next() {
    // incrémente la propriété index dans l'objet state
    state.index ++ ;

    if (state.index == slides.length) state.index = 0 ; //quand le state.index arrive à la dernière photo; revient à la première photo pour éviter une erreur.
    //fait appel à la fonction refreshSlider
    refreshSlider();
}
//Passe à la photo précédente
function before() {
    // décrémente la propriété index dans l'objet state
    state.index -- ;

    //mettre -1 après le length car tableau commence à 0 et non 1 ; et sans cette donné js va direction ligne 6 si le tableau à 6 objets
    if (state.index < 0 ) state.index = slides.length-1 ;  
    //fait appel à la fonction refreshSlider
    refreshSlider();
}

//Passe à une photo aléatoire
function random(){
    let nb;
    do { 
        nb = getRandomInteger(0, slides.length-1);
    } while (nb == state.index);
        console.log (nb, state.index)
        state.index = nb;
    //fait appel à la fonction refreshSlider
    refreshSlider();
}

//lancer la lecture
function playPause(){
    //condition pour pouvoir lancer ET arrêter la lecture
      // status booleen; false = pause / true = lecture
    if (state.interval == false) {
    // lancer la fonction next en lecture avec un intervalle de 2sec
        state.interval = setInterval(next, 2000);
        this.title = "Arrêter le carrousel";
    } else {
        clearInterval(state.interval);
        // on demande à le remettre en false quand on appuie sur le bouton pour mettre en pause, pour pouvoir le remettre en lecture si on appuie de nouveau dessus
        state.interval = false; 
        this.title = "Démarrer le carrousel" ;
    }
    //changement d'apparence du bouton (play/pause) en cliquant dessus
    const icon = document.querySelector("#slider-toggle i");
    icon.classList.toggle("fa-play");
    icon.classList.toggle("fa-pause");
}


/****Codes */

refreshSlider(); // appelle la fonction

//bouton affichage de la barre de navigation
document
    .querySelector ("#toolbar-toggle") //cible
    .addEventListener ("click", toolbarToggle);  // élément déclencheur, function appelé

//bouton suivant
document
    .querySelector ("#slider-next") //cible
    .addEventListener ("click", next); // élément déclencheur, function appelé

//bouton précedent    
document
    .querySelector ("#slider-previous") //cible
    .addEventListener ("click", before); // élément déclencheur, function appelé

//bouton aléatoire
document
    .querySelector ("#slider-random") //cible
    .addEventListener ("click", random);  // élément déclencheur, function appelé


//bouton play/pause
document
    .querySelector ("#slider-toggle") //cible
    .addEventListener ("click", playPause); // élément déclencheur, function appelé


    /**
     *  
    
    //variant qui représente les secondes
     let seconds = 0;

     //fonction pour faire défiller les secondes
     function nextSecond() {
       seconds++;
       console.log(seconds);
     }
     
     // variant qui indique le départ pour le défilement des seconds = timer (apelle de la fonction ,vitesse du défilement = 1000 = 1seconde)
     let idInterval = setInterval(nextSecond, 1000); 
     console.log("id de l'interval", idInterval);
     
     // stop le timer => stop le variant qui indique le départ, au bout de combien de temps
     setTimeout(() => clearInterval(idInterval), 11000);  */