"use strict"

//insertion du tableau
let voiture = {
    marque: "Renault Twingo 3",
    Fabrication: 2014,
    Date: new Date ('2015-07-31'),
    passagers :['Audrey', 'Gribouille'],
};
console.log(voiture);

document.querySelector("#content").innerHTML=
 `<strong>Information sur la voiture:</strong>
    <ul>
        <li>Marque : ${voiture.marque}</li>
        <li>Année de fabrication: ${voiture.Fabrication}</li>
        <li>Date de l'achat: ${voiture.Date.toDateString()}</li>
        <li>Passagers : 
            <ol>
                <li>${voiture.passagers[0]}</li>
                <li>${voiture.passagers[1]}</li>
            </ol>
        </li>
    </ul>`;