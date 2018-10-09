
// Exercices JavaScript - Partie 4 //

/*
Exercice 4
Dans le fichier HTML fourni, mettre les bordures des inputs en rouge si les mots de passe sont différents. Sinon les mettre en vert.
*/

let bord1 = document.querySelector("#motdepasse");
let bord2 = document.querySelector("#confirmation");

let bouton = document.querySelector('button[type="button"]');

if (bouton.addEventListener) {
    bouton.addEventListener("click", function (event) {

        let mot1 = document.querySelector("#motdepasse").value; /*prend le contenu entré dans la case et place dans la var mot1*/
        let mot2 = document.querySelector("#confirmation").value;
        let verif = mot1.localeCompare(mot2); /*renvoie 0 (egal) ou // 1 et -1 (diff) */
        alert(verif); /*message pour verifier verif (optionnel)*/
        if (verif !== 0) {
            bord1.style.borderColor = "red";
            bord2.style.borderColor = "red";
        } else {
            bord1.style.borderColor = "green";
            bord2.style.borderColor = "green";
        }

    });
}

