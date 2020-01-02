// ternary operator -> condition ? expression1 : expression2;

function isUSerValid(bool) {
    return bool;
}

var answer = isUSerValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer =
    "Your account # is " + (isUSerValid(false) ? "1234" : "not avaliable");


// Switch sintaxe e exemplos

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "foward":
            whatHappens = 'You encouter a monster';
            break;
        case "back":
            whatHappens = 'You arrived home';
            break;
        case "right":
            whatHappens = 'You found a river';
            break;
        case "left":
            whatHappens = 'You run into a troll';
            break;
        default:
            whatHappens = "Please enter a valid direction";
    }

    return whatHappens;

}

