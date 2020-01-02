// String Padding -> .padstart(); .padend();

'Turtle'.padstart(10);
'Turtle'.padend(10);

const fun = (
    a,
    b,
    c,
    d,
) => {
    console.log(a);
}

fun(1, 2, 3, 4);

Object.values
Object.entries
Object.keys

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr. Grinch'
}

//Percorre um objeto como se fosse um array;
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
});

//Percorre o objeto como se array fosse obtendo os valores
Object.values(obj).forEach(value => {
    console.log(value);
});

//Percorre um objeto e retorna a chave e o valor como em um array
Object.entries(obj).forEach(value => {
    console.log(value);
});

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})
