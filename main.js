/**
 * 
 * Boolean = true o false
 * String = "" - '' - ``
 * Number = 34, -34 0.3 
 * Undefined = undefined
 * 
 * Object
 *  Null = null
 *  Array = [ ] o array()
 *  Object Literal = { clave: valor }
 * 
 */

/**
 *  Bloque de codigo
 *  es todo aquel que esta limitado por unas llaves {}
 */

// var
var nombre = "Luis";
var edad = 34;

// let 
//let nombre = "Ricardo";

// const 
const PI = 3.1416;
const notas = [];
const persona = {};


notas.push(2);
console.log(notas);

persona.name = "Christian";
console.log(persona);

// scope (local, global)
console.log(edad);

// Operaciones (Matematicas, Logicas, Comparacion)
// + - * / // %  ++ -- 

/* 
=== (igual que: "evalua tanto el valor como el tipo de dato de la variable") 5 === '5' => false
== (igual que: "evalue solo el valor de la variable") 5 == '5' => true
!== (diferente de: "evalua tanto el valor como el tipo de dato de la variable") 5 !== '5' => true
!= (diferente de: "evalue solo el valor de la variable") 5 != '5' => false
>=
<=
>
<
*/

// && || ! (and or not)
/*

true && true => true 
true && false => false
false && false => false

true || true => true
true || false => true
false || false => false


!true && !true => false 
!true && !false => false
!false && !false => true

!true || !true => false
!true || !false => true
!false || !false => true


*/

// declaracion de variables

let var1 = "Luis"
let var2 = "Rodriguez"
let var3 = var1 + " " + var2; // Luis Rodriguez
let var4 = `${var1} ${var2}`; // Luis Rodriguez

let salario = 1450.50;
let iva = 12.5;

let soltero = true;
let activo = false;

let notas;

let curso = null;

let estudiantes = [
    { id: 1, name: 'Luis'}, 
    { id: 2, name: 'Macarena'}
]

let valores = [
    12, false, [1, 2], {name: 'Pedro'}, null, 12.5, true
]

let person = {
    name: 'Alejandra',
    lastname: '',
    age: 0,
    single: false
}

let person2 = {
    name: 'Anyelina',
    lastname: '',
    age: 0,
    single: false
}