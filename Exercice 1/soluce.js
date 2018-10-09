// Exercices JavaScript - Partie 4 //

/*
Exercice 1
Dans le fichier HTML fourni, au survol de l'image ajouter une bordure de 3px rouge
 et la retirer quand la souris ne la survole plus.
*/

let x = document.querySelector("#image1");

if (x.addEventListener) {

    x.addEventListener("mouseover", function (event) {
        x.style.border = "5px solid red";
    });
    x.addEventListener("mouseout", function (event) {
        x.style.border = "";
    });
}


