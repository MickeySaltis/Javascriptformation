"strict user"

/**
 * Function
 * 
 */


//Fonction pour écrire celon le format qu'on à choisi via le bouton sélectionné
function generateHTML() {
    //this contient la balise HTML qui a déclenché l'événement = le bouton sur lequel on a cliqué. Grâce à ça on peut récupérer la valeur de ses attributs, dont l'ID
    const ID = this.id;
    //le HTML à générer est différent pour le HR, on fait donc une condition
    if (ID == "hr") {
      CONTENT.insertAdjacentHTML("beforeend", `<hr>`); // séparateur
    } else {
      CONTENT.insertAdjacentHTML(
        "beforeend", //'beforeend' : Juste à l'intérieur de l'element , après son dernier enfant
        `<${ID} contenteditable='true'> Saisir le texte  <${ID}>` // contenteditable="true" qui permet de le rendre éditable avec le clavier
      );
    }
  }

//Fonction pour exporté sous format HTML
  function exportHTML() {
      //L'expression régulière / contenteditable="true"/g permet de supprimer (grâce au replace) l'attribut contenteditable. 
    const HTML = CONTENT.innerHTML.replace(/ contenteditable="true"/g, ""); //Nouveau variant avec la même valeur que const CONTENT sans "contenteditable"
    const DIV = document.createElement("div"); // createElement= crée un élément HTML du type spécifié
    DIV.textContent = HTML;
    POPUP.innerHTML = "";
    POPUP.appendChild(DIV);
    POPUP.classList.remove("hide");
  }

  //Fonction pour cacher la popup
    function hidePopup() {
        POPUP.classList.add("hide");
    }

/**
 * Code
 * 
 */

// variables pour Cibler l'article HTML "contenu"
const CONTENT = document.querySelector("#content");

// variable pour cibler la section HTML "popup"
const POPUP = document.querySelector("#popup");

//Cibler tous les boutons sauf celui de "id=export"
const BUTTONS = document.querySelectorAll("button:not(#export)"); // :not() = exclu les class comprise entre les parenthèses / selection des class button sur HTML
BUTTONS.forEach((button) => button.addEventListener("click", generateHTML)); // forEach = permet d'exécuter une fonction donnée sur chaque élément du tableau

//Cible le bouton qui l'id export et installe un gestionnaire d'événement
document.querySelector("#export").addEventListener("click", exportHTML);

//Cacher la popup au double clic
POPUP.addEventListener("dblclick", hidePopup);




/**La propriété contentEditable est utilisée pour indiquer si un élément HTML est ou non éditable. Cet attribut peut avoir 3 valeurs :

"true" (vrai) indique que l'élément est éditable.
"false" (faux) indique que l'élément ne sera pas éditable.
"inherit"  (hérité) indique que l'élément héritera de l'état editable de son parent
*/

/**
**insertAdjacentHTML() analyse le texte spécifié en tant que HTML ou XML et insère les noeuds résultants dans le DOM à la position spécifiée.
**element.insertAdjacentHTML(position, text);
** 
    'beforebegin' : Avant l'element  lui-même.
    'afterbegin' : Juste à l'intérieur de l'element , avant son premier enfant.
    'beforeend' : Juste à l'intérieur de l'element , après son dernier enfant.
    'afterend' : Après element lui-même.

*/
/**
 * Syntaxe
 * var element = document.createElement(tagName[, options]);
 */