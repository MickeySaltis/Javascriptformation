"use strict"

let weekDays = [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
];
console.log(weekDays);

let monthNames = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "aout",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
];
console.log(monthNames);

//crée un objet date à la date du jour
let today = new Date("2021/11/22");

//récupère le jour de la semaine
let dayIndex = today.getDay();
console.log(weekDays[dayIndex]);

//récupère le mois de la semaine
let monthIndex = today.getMonth();
console.log(monthNames[monthIndex]);

//récupération du jour dans le mois (de 1 à 31)
let date = today.getDate();
console.log(date);

//récupérer l'année
let year = today.getFullYear();
console.log(year);

//Injecter les variants dans HTML
document.querySelector("#content").innerHTML= `<p>Nous sommes le ${(weekDays[dayIndex])} ${date} ${(monthNames[monthIndex])} ${year}.</p>`;

