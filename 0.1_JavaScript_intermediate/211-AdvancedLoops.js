const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}
//1
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

//2
basket.forEach(item => {
    console.log(item)
});

//FOR OF
//ITERATING - ARRAYS - STRINGS
for (item of basket) {
    console.log(item);
}

//FOR IN - Object Properties
//ENUMERATING - OBJECTS - Properties in objects are enumerable
for (item in detailedBasket) {
    console.log(item);
}