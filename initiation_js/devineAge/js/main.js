"use strict";

/******
 * 
 ******/

/******
 * fonction
 ******/

function Valider(){
    
    // variabe = saisie de l'utilisateur
    // trim = supprime les espaces blanc avant et après la chaine de caractère
    let name = document.querySelector("#firstname").value.trim();


    fetch("https://api.agify.io?name=" + name)
    .then((response) => response.json())
    .then((datas) => {  // ou avec une fonction = displayDatas(datas);
        console.log(datas)
        document.querySelector("article h2").innerHTML = 
        `Selon Agify, avec le prénom ${datas.name}, tu as ${datas.age} ans.`;
        document.querySelector("article p strong").innerHTML = datas.count;
        document.querySelector("article").classList.remove("hide");})
    .catch((error) => console.log(error));
}

/**
 * function displayDatas (datas){
 *   document.querySelector("article h2").innerHTML = 
        `Selon Agify, avec le prénom ${datas.name}, tu as ${datas.age} ans.`;
        document.querySelector("article p strong").innerHTML = datas.count;
        document.querySelector("article").classList.remove("hide");
    }
 **/

/******
 * code
 ******/

document.addEventListener("DOMContentLoaded", function() {


    document.querySelector("#submit")
        .addEventListener("click", Valider);
})

