"use strict";

//fonction option
/*******Demande à l'utilisateur de saisir un nombre
 * @param {string} message
 * @param {number} min
 * @param {number} max
 * @returns {number} nombre saisi
 */
function choix(message, min, max){
    let nb;
    do {
        nb = parseInt (prompt(message, 1));
    } while (isNaN (nb) || nb < min || nb > max);
    return nb;
}



//fonction nombre aléatoire
/**** Retourne un nombre entier aléatoire compris entre n minimum et un maximum
 * @param {number} min
 * @param {number} max
 * @returns nombre aléatoire
 */
function aleatoire (min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}



// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (incluse).
// Attention : si on utilisait Math.round(), on aurait une distribution
// non uniforme !
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
  