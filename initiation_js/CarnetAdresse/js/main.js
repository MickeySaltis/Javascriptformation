"use strict"
/******
 * variable Globale
 * 
 */

let FORM;

/******
 * 
 * fonction
 */ 
//Faire apparaitre le formulaire pour Ajouter
function ajouter(){
    FORM.removeClass("hide").data("mode","add");
}


//enregistrer dans le localstorage
function saveDatas(datas){

    //tranformer la liste en JSON
    let json = JSON.stringify(datas);

    //ajouter la liste JSONifié dans le localstorage sousle nom de "address-book"
    localStorage.setItem("address-book", json);
}

// charger les éléments qui sont dans le localstorage
function loadDatas(){

    //la variable prend comme valeur ce qu'il y a dans la storage sous le nom de "address-book"
    let datas = JSON.parse(localStorage.getItem("address-book"));

    // si datas est null alors un nouveau tableau est créé
    if (datas === null) datas=[];
    return datas;
}


//function pour conserver la saisie de l'utilisateur
function sauvegarder(){

    // appelle loadDatas qui retourne ce qui se trouve dans le localStorage
    let list = loadDatas();



    // variable (objet = plusieurs données) en local ( dans une fonction) car une variable en globale aurait impacté les anciens contacts en cas de renouvellement
    let contact = { 
        title: $("#title").val(),
        lastName: $("#lastName").val(),
        firstName: $("#firstName").val(),
        phone: $("#phone").val(),
    };
    if (FORM.data("mode") === "add"){
        list.push(contact); // enregistre un nouveau contact
    }else {
        //modifie et enregistre un contact existant
        let index = $("#contact-details a").data("index");
        list[index] = contact;
    }
    
    
    saveDatas(list);

    displaycontacts();
    FORM[0].reset();
    FORM.addClass("hide");
    
}

// affiche la liste de contact
function displaycontacts(){

    // appelle loadDatas() qui retourne ce qui se trouve dans le localStorage
    let list = loadDatas();

    //rajoute du texte avec les balises HTML avec .html/ append rajoute après la balise mère
    $("#address-book").html("<ul></ul>");

    list.forEach((contact, index) => {
        $("#address-book ul").append(
            `<li><a data-index="${index}"> ${contact.lastName} ${contact.firstName} </a>
             <i data-index="${index}" class="fa fa-trash-o"</i></li>`
            );
    });

}

function displayDetails (){

    //récupère le tableau des données dans le localS
    let list= loadDatas();
    //récupère l'index du contact stocké dans son data-index(dans la balise HTML)
    let index = this.dataset.index;
    //dans le tableau récupère l'objet à la ligne correspondant à l'index du contact
    let contact = list[index];

    $("#contact-details").removeClass("hide");

     // injecter du text dans les balises indiqué
    $("#contact-details h3").text(`${displayTitle(contact.title)} ${contact.firstName} ${contact.lastName}`);
    $("#contact-details p").text(`${contact.phone}`);

    //stocker l'index dans la balise "éditer le contact"
    $("#contact-details a").data("index", index);

    console.log(contact);

}
//Transformer le chiffre title stocké en civilité
function displayTitle(title){
    let textTitle = "";
    switch(title){
        case "1": textTitle ="Mme";
        break;
        case "2": textTitle ="Mlle";
        break;
        case "3": textTitle ="M";
        break;
    }
    return textTitle;
}

function modifier(){
    

    //récupère le tableau des données dans le localS
    let list= loadDatas();

    //récupère l'index dans le data
    let index = $("#contact-details a").data("index");

    //dans le tableau récupère l'objet à la ligne correspondant à l'index du contact
    let contact = list[index];
    
    //injecter les valeurs du contact choisi dans le formulaire
    $("#title").val(contact.title);
    $("#lastName").val(contact.lastName);
    $("#firstName").val(contact.firstName);
    $("#phone").val(contact.phone);


    // enlève la class "hide" pour le rendre visible + changer le data-mode de add à edit
    FORM.removeClass("hide").data("mode","edit");
    $("#contact-details").addClass("hide");
}

function supprimer(){

//localStorage.removeItem("address-book"); = façon pour supprimer tout ce qu'il y a de address-book dans le localS

    saveDatas([]);
    displaycontacts();
}

function supprimerContacts(){

    let list = loadDatas();
    let index = this.dataset.index;

    list.splice(index,1); // splice = supprimer ( à partir de quel ligne, combien de ligne)
    saveDatas(list);
    displaycontacts();
}



/******
 * 
 * code
 */
$(document).ready(function(){

    displaycontacts();

    FORM= $("#contact-form");

    $("#add-contact").click(ajouter);

    $("#save-contact").click(sauvegarder);

    $("#address-book ").on("click","li a", displayDetails);
    
    $("#contact-details a").on("click", modifier);

    $("#address-book").on("click", "li i", supprimerContacts);

    $("#clear-address-book").on("click",supprimer);
});





// transformer une donné complex en chaine de caractère( JSON = JavaScript Object Notation)
// let jsonTab = JSON.stringify(nomVariable);

// mettre en mémoire (seulement des données simple)
// localStorage.setItem( "nomDossier" ,jsonTab);

// récupérer ce qui se trouve dans le localStorage (données simple)
// let recupJson = localStorage.getItem("nomDossier");

// remettre ce qu'on a récupéré(donnée simple) en donnée complexe
// let recupComplexe = JSON.parse(recupJson);

// rajouter dans ce qu'on a récupéré
// recupComplexe.push ({});