
// Exercices JavaScript - Partie 4 //

/*
Exercice 3
Dans le fichier HTML fourni, changer la couleur du texte en fonction du bouton choisi.
indice : Pour selectionner <class="color green"> il faut faire un querySelector(".color.green") pour prendre les deux valeurs.
*/


let a = document.querySelector(".color.green");
let b = document.querySelector(`.color.red`);
let c = document.querySelector(`.color.blue`);
let d = document.querySelector("#texte");

if (a.addEventListener) {
    a.addEventListener("click", function (event) {
        d.style.color = "green";
    });
}
if (b.addEventListener) {
    b.addEventListener("click", function (event) {
        d.style.color = "red";
    });
}
if (c.addEventListener) {
    c.addEventListener("click", function (event) {
        d.style.color = "blue";
    });
}
