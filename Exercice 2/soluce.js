
// Exercices JavaScript - Partie 4 //

/*
Exercice 2
Dans le fichier HTML fourni, faire afficher ou masquer le texte en fonction de l'ancre.
PS: francais= ancre  anglais= anchor // ça correspond a <a >
*/

let a = document.querySelectorAll("a")[0];
let b = document.querySelectorAll("a")[1];
let c = document.querySelector("#texte");

if (a.addEventListener) {
    a.addEventListener("click", function (event) {
        c.style.opacity = "1";
    });
}
if (b.addEventListener) {
    b.addEventListener("click", function (event) {
        c.style.opacity = "0";
    });
}