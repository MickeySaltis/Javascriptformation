"use strict";

//Fonctions



//Variants

let difficulte

let lifeDragon
let lifeHero

//Variant Collectif ( game )
let game = new Object();

//lancement du jeu
document.querySelector("#go").addEventListener("click",start);

//Mode de difficulté (facile / normal / difficile)
function start(){
do{
    difficulte =window.prompt("Choisissez votre difficulté","facile, normal ou difficile").toLowerCase();
}
while(
    difficulte != "facile" &&    
    difficulte != "normal" &&
    difficulte != "difficile"
    );
    

// Choix de l'équipement

    game.armor = choix(
        "Choisir l'armure. \n 1- cuivre 2- fer 3- magique", 1, 3
    );

    switch (game.armor){
        case 1: game.armorRatio =1;
        break;
        case 2: game.armorRatio =0.75;
        break;
        case 3: game.armorRatio =0.5;
        break;
    }
    game.sword = choix(
        "Choisir l'arme. \n 1- bois 2- acier 3- Excalibur", 1, 3
    );

    switch (game.sword){
        case 1: game.swordRatio =0.5;
        break;
        case 2: game.swordRatio =1;
        break;
        case 3: game.swordRatio =1.5;
        break;
    }

console.log(`${difficulte} et ${game.armor} et ${game.sword}`);

//Attribution PV du Dragon et du Chevalier
if (difficulte== "facile"){
    lifeDragon= Math.floor(Math.random()*(200 - 150 +1)) +150;
    lifeHero= Math.floor(Math.random()*(250 - 200 +1)) +200 ;
}
else if (difficulte== "normal"){
    lifeDragon= Math.floor(Math.random()*(250 - 200 +1)) +200;
    lifeHero= Math.floor(Math.random()*(250 - 200 +1)) +200 ;
}
else {
    lifeDragon= Math.floor(Math.random()*(250 - 200 +1)) +200;
    lifeHero= Math.floor(Math.random()*(200 - 150 +1)) +150 ;
}
console.log(`${lifeDragon} et ${lifeHero}`);


// tour par tour
game.round=0;
while(
    lifeDragon > 0  && lifeHero > 0
    )
    {
        game.atckDragon= 0;
        game.atckHero= 0;
        game.round ++;
        game.piece = aleatoire(1,2);
        console.log(`${game.piece}`)
        document.querySelector("#game").innerHTML+=`<h3>== TOUR n° ${game.round} ==</h3>`
            if (game.piece ==1){
                //dragon atck
                switch (difficulte){
                    case "facile": lifeHero -=((game.atckDragon= (Math.floor(Math.random()*(20 - 10 +1)) + 10)) * game.armorRatio);
                    break;
                    case "normal": lifeHero -= ((game.atckDragon= (Math.floor(Math.random()*(30 - 20 +1)) + 20)) * game.armorRatio);
                    break;
                    case "difficile": lifeHero -= ((game.atckDragon= (Math.floor(Math.random()*(30 - 20 +1)) + 20)) * game.armorRatio);
                    break;
                }
                document.querySelector("#game").innerHTML+= `<p>Le dragon vous attaque. Il vous inflige ${game.atckDragon} points de dégats.</p>`
            }

            else {
                //hero atck
                switch (difficulte){
                    case "facile": lifeDragon -= ((game.atckHero= (Math.floor(Math.random()*(30 - 25 +1)) + 25)) * game.swordRatio);
                    break;
                    case "normal": lifeDragon -= ((game.atckHero= (Math.floor(Math.random()*(20 - 15 +1)) + 15)) * game.swordRatio);
                    break;
                    case "difficile": lifeDragon -= ((game.atckHero= (Math.floor(Math.random()*(10 - 5 +1)) + 5)) * game.swordRatio);
                    break;
                }
                document.querySelector("#game").innerHTML+= `<p>Vous attaquez le dragon. Vous lui infligez ${game.atckHero} points de dégats.</p>`
            } 
            document.querySelector("#game").innerHTML+= `
        <table>
            <tr>
                <th>Vos PV</th>
                <th>Les PV du Dragon</th>
            </tr>
            <tr>
                <td>${lifeHero}</td>
                <td>${lifeDragon}</td>
            </tr>
        </table>`


            console.log(`Dragon ${game.atckDragon} ; Hero ${game.atckHero}`)
            
            console.log(`HP DRAGON ${lifeDragon} VS HP Hero ${lifeHero}`)
    };

 if (lifeHero<=0) {
    document.querySelector("#game").innerHTML+= `<img src="img/dragon.png">
    <p>Le dragon a gagné, vous lui avait servit de petit déjeuné !</p>
    <p>Il lui restait ${lifeDragon} HP.</p>`
 }
 else {
    document.querySelector("#game").innerHTML+= `<img src="img/knight.png">
    <p>Vous avez gagné, vous pouvez récupérer la princesse !</p>
    <p>Il vous restait ${lifeHero} HP.</p>`
 }
}