/*

function nameFunction(){
    // acciones a ejecutar 
}

const nameVariable = function(){ // anonimous function 
    // acciones a ejecutar 
}

const nameFunction = () => {
    // acciones a ejecutar
    return; 
}

(function(){

})()

*/

const { a: var1, b: var2 } = { a: 10, b: 20 };
console.log(var1);
console.log(var2);

const suma = ({ a, b }) => {
    return a + b;
}

const resta = (a, b) => a - b;

const operacion = function (func, params) {
    return func(params);
}

/* let resultado = suma();

console.log(resultado); */

let resultado2 = operacion(suma, { a: 1, b: 2 });


console.log(resultado2);


const multiplicar = (...valores) => valores.reduce((a, b) => a * b);

console.log(multiplicar(1, 2, 3))




function miFunction(){
    return function(a, b){
        return a + b;
    }   
}


console.log(miFunction()(1, 4));


let a = miFunction();

console.log(a(1, 4));

/* function suma(a = 2, b = 5){
    return a + b;
} */


let valores = [20, 14, 13, 9, 33, 45, 18, 4, 21, 2, 10, 44];

function sumarImpares(arrValores){
    let indice = 0;
    let total = 0;

    while(indice < arrValores.length){
        if(arrValores[indice] % 2 !== 0){
            total = total + arrValores[indice];
            //total += arrValores[indice];
        }
        indice++;
    }

    return total;
}

console.log(sumarImpares(valores));


function sumarPares(arrValores){ //[20, 14, 18, 4, 2, 10, 44].reduce()
    return arrValores.filter((numero) => numero % 2 === 0).reduce((total, valor) => {
        return total + valor;
    }, 0)
}

console.log(sumarPares(valores));