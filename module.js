const prompt = require("prompt-sync")();

const nomevalor = []

const modelo = () => {
    const nomeProduto = prompt("Favor digitar o produto que deseja inserir  ")
    const valorProduto = parseInt(prompt("Digitar o valor desse produto  "), 10)
  
    if (nomeProduto !== "" && !isNaN(valorProduto)) {
        return {
          nomeProduto,
          valorProduto,
        };
    } else {
        console.log("Dados inválidos");
        return undefined;
    }
};

const criar = () => {
    const opcao = modelo();

    if (opcao !== undefined) {
      nomevalor.push(opcao);
      console.log("Produto cadastrado com sucesso!")
    }
    
}


const listar = () => {
    if (nomevalor.length === 0) {
        console.log("Nenhum aluno encontrado");
        return false;
      } else {
        nomevalor.forEach((opcao, indice) => {
          console.log(`
                ${indice + 1}. 
                Nome do Produto: ${opcao.nomeProduto}
                Valor do Produto: ${opcao.valorProduto}
            `);
        });
}
}

const atualizar = () => {
    listar();
    let indice = parseInt(prompt("Qual produto deseja atualizar?"), 10)
    
    if (indice > 0 && indice <= nomevalor.length) {
        let opcao = modelo();
        nomevalor[indice - 1] = opcao;
        console.log("Atualizado");
    } else {
        console.log("Índice inválido");
    }
 
}

const remover = () => {
    listar()
    let indice = parseInt(prompt("Qual produto deseja remover? "), 10);

    if (indice > 0 && indice <= nomevalor.length) {
        nomevalor.splice(indice - 1, 1);
        console.log("Removido");
      } else {
        console.log("Índice inválido");
    }
}

module.exports = {
    criar,
    atualizar,
    remover,
    listar,
}