//  If (se condição for verdadeira)
const numerico = 6;

if(numerico > 8){
    console.log("O número maior é mais do que 8")
} else {
    console.log("O número então é menor que oito")
}


// else (se condição for falsa)
// estrutura aninhada e complexa
const nomealuno = "Maria";

if (nomealuno === "Juliano"){
    console.log("Olá, " + nomealuno)
} else if (nomealuno === "Maria"){
    console.log("Olá Maria")
} else {
    console.log("O nome não é Juliano e nem Maria")
}

// Encabeamento de condição
let idade = 16;
let temRG =  false;

if(idade >= 18 && temRG){
    console.log("Você pode votar.")
}
else {
    console.log("Você não pode votar.")
}

// switch
let novaIdade = 18;

switch(novaIdade){
    case 18:
    console.log("O usuário tem 18 anos.");
    break;
    case 17:
    console.log("O usuário 17 anos.");
    break;
    default:
    console.log("Idade inválida");
}