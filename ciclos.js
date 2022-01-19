/**
 * 
 * for = for(iterador; condicion; incremento){ }
 * for in = for(let indice in array){}
 * for of = for(let valor of array){}
 * while = while(condicion){}
 * do while = do { } while (condicion);
 * 
 */

let numeros = [1, 2, 3, 4, 5, 6];

for(let num = 1; num <= 10; num++){
    console.log(num);
} // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

for(let a = 1; a <= 5; a++){
    for(let b = 1; b <= 5; b++){
        console.log("Menu: " + a + "." + b);
    }
} 
// Menu: 1.1
// Menu: 1.2
// Menu: ....
// Menu: 5.5

for(let i=0; i < numeros.length; i++){
    console.log(numeros[i]);
} // 1, 2, 3, 4, 5, 6


for(let i in numeros){ // 0, 1, 2, 3, 4, 5
    console.log(numeros[i]);
}

for(let valor of numeros){ // 1, 2, 3, 4, 5, 6
    console.log(valor);
}

let i = 1;
while(i <= 10){
    console.log(i);
    i++; // i = i + 1 // i += 1
}

let j = 10;
while(j >= 1){
    console.log(j);
    j--;
}

let x = 1;
while(x <= 5){
    let z = 1;
    while(z <= 5){
        console.log("Menu: " + x + "." + z);
        z++;
    }
    x++;
}


let y = 0;
while(y < numeros.length){
    console.log(numeros[y]);
    y++;
}


let k = 0;

do {
    console.log(k);
    k++;
} while( k <= 10);