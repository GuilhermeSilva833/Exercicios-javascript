//Superclasse
class Animal {

    //Atributo
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom() {
        console.log("O animal fez um som");
    }
}

 //Subclasse
 class Cachorro extends Animal{
    //herdeiro o metodo da superclasse
    fazerSom() {
        console.log("o cachorro late");
    }
 }

 let rex = new Cachorro("Rex");
 console.log(rex.nome);
 rex.fazerSom();