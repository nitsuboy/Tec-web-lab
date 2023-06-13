/* Escreva um programa JavaScript simples para unir todos os elementos
de um array em uma string.*/
const readline = require("readline");
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

function arrayUnion(arr) {
    let aux = "";
    arr.forEach(e => {
        aux += e.toString() + ",";
    });

    return aux.slice(0,-1);
}

input.question("insira uma serie de itens separados por espaço\n", function (answer) {
    console.log(arrayUnion(answer.split(" ")));
});
