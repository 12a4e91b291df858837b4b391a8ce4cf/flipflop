let gagne; // booleen
let nbrCoups; // entier
let nombreMystere; // entier

let validationBtn;
let message;

window.addEventListener("load", init);

function init() {
    gagne = false;
    nbrCoups = 1;
    nombreMystere = Math.floor(Math.random() * 100) + 1;
    validationBtn = document.getElementById("valider");
    message = document.getElementById("message");
    validationBtn.addEventListener("click", jouer);
}

function jouer() {
    let input = document.getElementById("input").value;

    if (input === "" || !Number.isInteger(parseInt(input, 10))) {
        message.textContent = `[${nbrCoups}] Il faut choisir un nombre entier !`;
        return;
    }

    if (input === nombreMystere) {
        message.textContent = `[${nbrCoups}] C'est gagné beau gosse, veux-tu rejouer ?`;
        editEvent();
        gagne = true;
        return;
    }

    if (nbrCoups === 6) {
        message.textContent = `[${nbrCoups}] + Perdu, rejouer ?`;
        editEvent();
        return;
    }

    message.textContent = `[${nbrCoups}] ${(nombreMystere < input) ? "C'est moins" : "C'est plus"}`

    nbrCoups++;
}

function editEvent() {
    validationBtn.removeEventListener("click", jouer);
    validationBtn.addEventListener("click", rejouer);
    validationBtn.textContent = "Rejouer";
}

function rejouer() {
    message.textContent = "";
    document.getElementById("input").value = " ";
    validationBtn.removeEventListener("click", rejouer);
    validationBtn.textContent = "Jouer";
    init();
}