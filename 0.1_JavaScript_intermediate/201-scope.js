//scope
// function bb() {
//     var a = "hello";
// }

//root scope (window)
var fun = 5;

function funFunction() {
    //child scope here
    var fun = "helloo";
    console.log(1, fun);
}

function funerFunction() {
    //child scope here
    var fun = "Bye";
    console.log(2, fun);
}
console.log("window", fun);

function theFunestFunction() {
    //child scope here
    fun = "Ahhhh";
    console.log(3, fun);
}


console.log("window", fun);
funFunction();
funerFunction();
theFunestFunction();

console.log("window", fun);