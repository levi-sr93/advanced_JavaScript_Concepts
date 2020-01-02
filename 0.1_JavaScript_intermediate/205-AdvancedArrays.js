//Advanced Arrays

let array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log('Foreach', double);

//MAP

const mapArray = array.map(num => {
    return num * 2;
})

console.log('MAP', mapArray)


//FILTER
const filterArray = array.filter(num => {
    return num > 5
})

console.log('FILTER', filterArray)

//REDUCE
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0)

console.log('REDUCE', reduceArray);