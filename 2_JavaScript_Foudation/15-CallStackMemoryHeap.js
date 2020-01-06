//Call Stack + Memory Hheap

const number = 640; //Allocate memory for the number ( Memory Heap );
const string = 'Some Text ' //Allocate memory fot the string ( Memory Heap );
const human = { //Allocate memory fot the obj and its values ( Memory Heap );
    first: 'Andrei',
    last: 'Neagoie' 
}

function subtractTwo(num){
    return num - 2;
}

function calculate(){
    const sumTotal = 4 + 5;
    return subtractTwo(sumTotal);
}

calculate();

//STACK OVERFLOW

function inception(){
    inception();
}

inception();

//MEMORY LEAKS (GLOBAL VARIABLEs, Event Listeners, setInterval)
var a = 1;
var b = 1;
var c = 1;

var elemenet = document.getElementById('button');
elemenet.addEventListener('click', onClick);

setInterval(() => {
    //Referencing objects...
}, 1000)





