//Reference type VS Primitive types
var obj1 = { value: 10 };
var obj2 = obj1
var obj3 = { value: 10 };

obj1.value = 15;
obj2.value;


//Context vs SCOPE
const obj4 = {
    a: function () {
        console.log(this);
    }
}


//Instantiation CLASS e Inheritance
class Player {
    constructor(name, type) {
        console.log('Player', this);
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi i'm ${this.name}, i'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log('Wizard', this);
    }

    play() {
        console.log(`Weee i'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

//Classical Inheritance

var Player = function(name, type){
    this.name = name;
    this.type = type;
}

Player.prototype.introduce = function(){
    console.log(`Hi I am ${this.name}. I'm a ${this.type}`);
}

var classicWizard1 = new Player('Sheely', 'Healer');
var classicWizard2 = new Player('Shawn', 'Dark Magic');

wizard1.play = function() {
    console.log(`Weee I'm a ${this.type}`);
}

wizard2.play = function() {
    console.log(`Weeee I'm a ${this.type}`);
}

