// declarando classes
class Pessoa{

    //atributos da classe
    constructor(nome, idade){
 this.nome = nome;
 this.idade = idade;
    }
    //declarando um metodo
    saudar() {
        return`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`;
    }
}

//Instânciando
const pessoal = new Pessoa("Ana", 35);
const pessoa2 = new Pessoa("João", 28);
console.log(pessoal.saudar());
console.log(pessoa2.saudar());

//Nova classe
class Carro {

    //atributos
    constructor(marca, modelo) {
this.marca = marca;
this.modelo = modelo;
    }
  
  //método
  exibirinfo() {
    return`Carro ${this.marca} ${this.modelo}`;

  }

}

 //instância 
 const meuCarro = new Carro("Fusca", "1974");
 console.log(meuCarro.exibirinfo());