// For
for(i = 0 ; i <=5; i++){
    console.log(i,("\n"));
}

let x = 5;
for(x; x > 2; x--){
    console.log(x);
}

// While (Enquanto)
let z = 1;
while(z<=10){
    console.log(z);
    z = z + 1;
}

let y = 10;
while (y >= 5){
    console.log(y);
    y--;
}

// Do...While (Faça Enquanto)
let m = 15;
do{
    console.log(`${m}`);
    m = m + 2;
} while (m <=21);

// Foreach
const frutas =['Maçã','Banana','Mexerica'];

function monstrarFruta(fruta, indice){
    console.log(`Índice ${indice}: ${fruta}`);
}

frutas.forEach(monstrarFruta);

// Título
console.log("Iterando com forEach");

// Arrow function
frutas.forEach((fruta, indice) => {
    console.log(`Índice ${indice}: ${fruta}`);
});

// Loop infinito
// let a = 0;
// while(a < 5){
//     console.log(a);
// }