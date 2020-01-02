//let const (ES6)

const player = 'Bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
}

const obj = {
    player: 'Bob',
    experience: 100,
    wizardLevel: false
}

//Destructuring
const obj = {
    player: 'Bob',
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj;
let { wizardLevel } = obj;


// Dynamic Objects properties
const name = 'John snow';
const newObj = {
    [name]: 'hello',
    ['ray' + 'Smith']: 'hihi'
}

//Properties and values with the same value;
const a = 'simon';
const b = true;
const c = {};

const thirdObj = {
    // a: a,
    // b: b,
    // c: c
    a,
    b,
    c
}

//Template strings
{
    const name = "Sally";
    const age = 34;
    const pet = "horse";


    const greeting = "Hello " + name + " you seem to be doing " + greeting + " !"

    const greeting = `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have`
}

//Default arguments
function greet(name = '', age = 30, pet = 'cat') {
    return `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have`
}


//Symbols
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');


//ARROW FUNCTIONS

function add(a, b){
    return a + b;
}

const add = (a, b) => {
    return a + b;
}

