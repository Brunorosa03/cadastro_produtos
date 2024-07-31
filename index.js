const prompt = require("prompt-sync")();

console.log("Bem vindo ao cadastramento de produtos😃\n")

const {criar, atualizar, remover,  listar} = require("./module.js")

while (true) {
    console.log(
      "O que deseja fazer?\n1 - Criar\n2 - Atualizar\n3 - Remover\n4 - Listar\n5 -  Sair\n",
    );

let opcao = +prompt ("O que deseja fazer?")

switch (opcao) {
    case 1:
      criar();
      break;
    case 2:
      atualizar();
      break;
    case 3:
      remover();
      break;
    case 4:
      listar();
      break;
    case 5:
      process.exit();
      break;
    default:
      console.log("Opção inválida");
      break;
  }
}