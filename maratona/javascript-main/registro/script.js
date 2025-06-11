// Definindo registro de cliente / objetos
const cliente = {
    nome: "João Silva",
    idade: 30,
    email: "joao.silva@gmail.com"
};

// Acessando os campos de registro
console.log(cliente);
console.log(cliente.nome);
console.log(cliente.idade);
console.log(cliente.email);

// Modificar os registros dos clientes
cliente.idade = 31;

// Adicionando um novo campo
cliente.telefone = "(18) 2285-7164";

console.log(cliente);