$(document).ready(init);
let win;
let mysteryNumber;
let attemptsNumber;
let validationBtn;
let message;


function init() {
    win = false;
    mysteryNumber = Math.floor(Math.random() * 100) + 1;
    attemptsNumber = 1;
    validationBtn = $("#valider");
    message = $("#message");
    validationBtn.bind('click', play)
}

function play() {
    let input = $("#input").val();


    if(input === " " || !Number.isInteger(parseInt(input, 10))) {
        message.text("["+attemptsNumber+"]" + " Valeur non valide");
        return;
    }

    if(input === mysteryNumber) {
        win = true;
        message.text("["+attemptsNumber+"]" + " Tu as gagné");
        message.css('color', 'green');
        editEvent();
        return;

    }

    if(input < mysteryNumber) {
        message.text("["+attemptsNumber+"]" + " Plus grand");
        message.css('color', 'blue');
    }
    else {
        message.text("["+attemptsNumber+"]" + " Plus petit");
        message.css('color', 'red');
    }

    if(win === false && attemptsNumber === 6) {
        message.text("["+attemptsNumber+"]" + " Partie perdue, rejouer ?");
        message.css('color', 'orange');
        editEvent();
        return;
    }
    attemptsNumber++;

}

function editEvent() {
        validationBtn.unbind('click', play);
        validationBtn.bind('click', replay);
        validationBtn.text("Rejouer ?");
}

function replay() {
        $("#input").value = " ";
        validationBtn.unbind('click', replay);
        message.text(" ");
        validationBtn.text("Essayer");
        init();
}

