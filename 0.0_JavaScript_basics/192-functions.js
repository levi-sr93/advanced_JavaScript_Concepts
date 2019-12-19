//Function Declaration
function sayHello() {
    console.log("Hello!");
}

sayHello();

//Function Expression

var sayBye = function(){
    console.log("Bye")
}

sayBye();

function sing() {
    console.log("AAAHHHH");
    console.log("Teeeeee");
}

function singTwo(){
    console.log("Laaa dee Daaa");
    console.log("laaa");
}

function singDry(song){
    console.log(song)
}


function multiply(a, b){
    if(a > 10 || b > 10){
        return "That is too hard";
    } else {
        return a * b;
    }
}

sing();
singTwo();
singDry("Laaa deee daa");
singDry("Hellloooo");
singDry("Backstreets back alright!");

console.log(multiply(5, 10));