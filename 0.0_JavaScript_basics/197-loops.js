var todos = [
    "Clean Room !",
    "Brush teeth",
    "exercise",
    "Study JavaScript",
    "Eat healthy"
];

// for (var i = 0; i < todos.length; i++){
//     todos[i] = todos[i] + " !";
// }

var todosLength = todos.length;
for( var i = 0; i < todosLength; i++){
    console.log(i)
}

todos.forEach(function(i){
    console.log("Foreach", i)
})

var counterOne = 10;
while(counterOne > 0 ){
    console.log(counterOne);
    counterOne--;
}


var counterTwo = 10

do {
    console.log(counterTwo);
    counterTwo--;
} while(counterTwo > 0);