/* Escreva um programa JavaScript para remover itens duplicados de um
array (ignore a diferenciação entre maiúsculas e minúsculas). */
const readline = require("readline");
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

function arrayDuplicateRemover(arr) {
    return arr.filter((e, i) => {
        return arr.indexOf(e) === i;
    });
}

input.question("insira uma serie de itens separados por espaço\n", function (answer) {
    console.log(arrayDuplicateRemover(answer.split(" ").remo));
});
