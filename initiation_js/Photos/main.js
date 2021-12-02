"use strict";

//fonction

let count = 0;

//fonction sélectionner
function selectOne(){
this.classList.toggle("selected");

if ( this.classList.contains("selected")) {
    count ++;
}
else {
    count --;
}
document.querySelector("#total em").textContent = count;
}

//fonction sélectionner plusieurs élément
function selectAll(){
    photos.forEach((li) => li.classList.add("selected"));
    count = photos.length;
    document.querySelector("#total em").textContent = count;
}

//fonction déselectionner tout les éléments
function deselectAll(){
    photos.forEach((li) => li.classList.remove("selected"));
    count = 0;
    document.querySelector("#total em").textContent = count;
}

//Code /////////////

//Sélection individuelle
const photos = document.querySelectorAll(".photo-list li");

photos.forEach((li) => li.addEventListener
("click", selectOne));

//Sélection multiples
document.querySelector("#selectAll").addEventListener
("click", selectAll);

//Déselectionner
document.querySelector("#deselectAll").addEventListener
("click", deselectAll);