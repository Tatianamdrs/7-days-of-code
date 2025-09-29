let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

// funcao compara valor
function comparacao(a, b){
    return a == b 
    ? 'As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes'
    : 'As variáveis numeroUm e stringUm não tem o mesmo valor' 
};

// funcao compara tipo
function comparatipo(a, b){
    return a === b
    ? 'As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo'
    : 'As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo'
};

console.log(comparacao(stringUm, numeroUm));
console.log(comparatipo(stringTrinta, numeroTrinta));
console.log(comparacao(stringDez, numeroDez));
