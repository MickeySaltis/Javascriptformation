"strict use"
/********
 * VARIABLE
 ********/
let liste = [];


/********
 * FONCTION
 ********/
 function ajouter(item){
     liste.push(item);
 }
function afficherListe(){
    console.log("La liste contient "+ liste.length +" produit(s)");
    console.log(liste);
}

function supprimer(item){

    //recherche l'emplacement (l'indice) du produit spécifié dans la liste / vérifie l'existence d'une valeur dans un tableau avec indexOf()
    let index = liste.indexOf(item);

    //Produit spécifié a été trouvé ?
    if (index== -1){
        //non / Si la valeur n'existe pas dans le tableau,alors elle retourne -1
        console.log("Erreur : le produit "+item+" n'existe pas dans la liste");

        // fin de la fonction supprimer()
        return;
    }

    //suppression du produit spécifié dans la liste
    liste.splice(index, 1);
}

function vider() {
    //remplacer la liste actuelle par une liste vide
    liste = new Array();
}
/********
 * CODE
 ********/

ajouter("fraise");
ajouter("poulet");
ajouter("ketchup");
ajouter("pâte");


ajouter(window.prompt("Souhaitez-vous ajouter quelque chose dans cette putin de liste?"));

afficherListe();

supprimer(window.prompt("Quel produit souhaitez vous zapper ?"));

afficherListe();