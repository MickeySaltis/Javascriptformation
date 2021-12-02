"use strict";

/**********
 * Fonction
 **********/

//Affiche du HTML dans #target
//@param {String}htmlDatas
function displayHTML(htmlDatas){
    $("#target").html(htmlDatas);
}

//
function displayContacts(contacts){

    //fonction pour éviter la répétition
    let html = "<ul>";

    contacts.forEach((contact) => {
        console.log(contact);

        html += 
        `<li>
            <strong>Prénom :</strong> ${contact.firstName}<br>
            <i>Téléphone :</i> ${contact.phone}
        </li>`;
    });
    html+="</ul>";

    //fait appel à la fonction ci-dessus
    displayHTML(html);
}

//
function displayMovie(movies){
    /**
     * génère le HTML de la liste de films
     * @param {Array} movies
     */
    
    let html = "<ul class='movie-list'>";

    movies.forEach((movie) => {      

        html += 
        ` <li>
                <img src="images/${movie.cover}">
                <p>
                <strong>${movie.title} -
                <em>${movie.duration}</em>
                </p>
            </li> `;
    });
    html+="</ul>";

    //fait appel à la fonction ci-dessus
    displayHTML(html);

}
/**********
 * Gestion choix Utilisateur
 **********/
function onClickExecute() {

    let choice =$("input[name='what']:checked").val();
    console.log (choice, typeof choice);

    //en fonction de cette valeur, gérer les différents appels AJAX
    switch (choice){
        case "1":
                $.get("data/1-get-html-article.html", displayHTML);
        break;
        case "2":
                $.getJSON("data/2-get-contacts-list.json", displayContacts) ;
        break;
        case "3":
            $.get("data/3-get-html-movies.html", displayHTML);
        break;
        case "4":
            $.get("data/4-get-json-movies.json", displayMovie);
        break;
    }
}


/**********
 * Code
 **********/

$(document).ready(function() {
    $("#run").on("click", onClickExecute);
    
});