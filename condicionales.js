/**
 * 
 *  Condicionales
 * 
 * 
 * if(condicion){
 *      // sentencias a ejecutar
 * }
 * 
 * if (condicion) {
 *      // sentencias a ejecutar
 * } else {
 *      // sentencias a ejecutar
 * }
 * 
 * 
 * if (condicion) {
 *      // sentencias a ejecutar
 * } else if (condicion) {
 *      // sentencias a ejecutar
 * } else if (condicion) {
 *      // sentencias a ejecutar
 * } else {
 *      // sentencias a ejecutar
 * }
 * 
 * 
 */

let a = 5;
let b = 3;
let c = 6;

if (a > b && a > c) {
    console.log("El mayor es A");
} else if (b > c) {
    console.log("El mayor es B");
} else {
    console.log("El mayor es C");
}

let edad = 17;

if (edad >= 18) {
    ""
    console.log("Nos vamos de farra!!");
} else {
    console.log("no te puedes ir de farra!");
}
let activo = false;
if (!activo) {
    console.log("Por favor iniciar session");
}

//.  0. 1. 2
let notas = [1, 4, 3]; // tamaño del array - 1 (3 - 1) => 2
console.log(notas[2]);
notas[1] = 4;


Math.sqrt(9); // 3
Math.floor(1.5); // 1
Math.ceil(1.1); // 2
Math.round(1.5); // 2
Math.round(1.4); // 1
Math.random() // 0, 1 != 1 0.4232834782974
Math.floor(Math.random() * 5) + 1 // 0.99999999999 * 5 => 4.5;


let a = 5;

switch (a) {
    case 1: console.log(1);
        break;
    case 2: console.log(2);
        break;
    case 3: console.log(3);
        break;
    case 4: console.log(4);
        break;
    case 5: console.log(5);
        break;

    default: console.log('No aplica');
        break;
}