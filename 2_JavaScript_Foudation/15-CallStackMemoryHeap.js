//Call Stack + Memory Hheap

const number = 640; //Allocate memory for the number ( Memory Heap );
const string = 'Some Text ' //Allocate memory fot the string ( Memory Heap );
const human = { //Allocate memory fot the obj and its values ( Memory Heap );
    first: 'Andrei',
    last: 'Neagoie' 
}

function calculate(){
    const sumTotal = 4 + 5;
    return sumTotal;
}

calculate();