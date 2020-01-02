//ARROW FUNCTIONS and CLOSURES
const first = () => {
    const greet = 'Hi';
    const second = () => {
        const name = "Bobby";
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//CLOSURES - A function ran, the function executed. It's never going to execute again
//But it's going to remember that there are references to those variables
//So the child scope always has access to the parent scope.


//CURRYING - Takes a function that receives multiple arguments and transform to a function
//Tha accepts only one parameter at time.

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);//isso retorna uma função q é a b para fazer funcionar deve-se fazer:
curriedMultiply(3)(4);

//COMPOSE -> AÇÃO DE JUNTAR DUAS FUNÇÕES PARA GERAR UMA TERCEIRA E O INPUT DE UMA VAI SER O OUTPUT DA OUTRA.
const compose = (f, g) => (a) => f(g(a));

//exemplo de utilização do Compose:
const sum = (num) => num + 1;
compose(sum, sum)(5);



//AVOIDING SIDE EFFECTS, FUNCTION PURITY
//SIDE EFFECTS é qdo uma função realiza mudanças dentro de seu escopo e altera/influencia no mundo externo;
//FUNCTION PURITY -> É qdo uma função evita side Effects e SEMPRE retorna valor.
// o Resultado disso chama-se DETERMINISTIC

