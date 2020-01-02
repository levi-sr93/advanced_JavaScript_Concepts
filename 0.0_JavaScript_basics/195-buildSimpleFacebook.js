var database = [
    {
        username: "Andrei",
        password: "supersecret"

    },
    {
        username: "sally",
        password: "123"

    },
    {
        username: "ingrid",
        password: "777"

    }
];

var newsFeed = [
    {
        username: 'Bobby',
        timeline: "So tired of all that learning "
    },
    {
        username: 'Sally',
        timeline: 'JavaScript is soooo cooooool'
    },
    {
        username: 'Mitch',
        timeline: 'JavaScript is pretty coool'
    }
];


var userNamePrompt = prompt('What is your username?');
var passwordPrompt = prompt('What is your password?');

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === userNamePrompt &&
            database[i].password === password) {
            return true;
        }
    }

    return false;
}

function signIn(username, password) {
    if(isUserValid(username, password)){
        console.log(newsFeed)
    } else {
        alert('Wrong username or password')
    }
}

signIn(userNamePrompt, passwordPrompt);