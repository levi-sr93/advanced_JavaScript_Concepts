//inline caching
function findUser(user) {
    return `found ${user.firstName} ${user.lastName}`
}

const userData = {
    firstName: 'Johnson',
    lastName: 'Junior'
}

findUser(userData); //findUser se torna -> foud Johnson Junior qdo chamamos várias vezes!

// hidden Classes
//Essa forma de código vai fazer o compilador rodar de forma menos otimizada
function Animal(x, y) {
    this.x = x;
    this.y = y;
}

const obj1 = new animal(1, 2);
const obj2 = new animal(3, 4);

obj1.a = 30;
obj1.b = 100;
obj2.b = 30;
obj1.a = 100;

delete obj1.x;


// Optimization takeaways
// Always instantiate your object properties in the same order so that hidden classes, and subsequently optimized code, can be shared.
// Adding properties to an object after instantiation will force a hidden class change and slow down any methods that were optimized for the previous hidden class. Instead, assign all of an object’s properties in its constructor.
// Code that executes the same method repeatedly will run faster than code that executes many different methods only once (due to inline caching).

