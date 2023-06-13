/* Existem dois arrays com valores individuais, escreva um programa
JavaScript para calcular a soma de cada valor de índice individual dos
arrays fornecidos. */
const readline = require("readline");
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function arraySum(arr1,arr2) {
    let arr = [];
    let aux = 0;
    if (arr1.length > arr2.length) {
        arr2.forEach(element => {
            arr = arr.concat(parseInt(element) + parseInt(arr1[aux]));
            aux++;
        });
        arr = arr.concat(arr1.slice(arr.length));
    }
    else {
        arr1.forEach(element => {
            arr = arr.concat(parseInt(element) + parseInt(arr2[aux]));
            aux++;
        });
        arr = arr.concat(arr2.slice(arr.length));
    }

    return arr;
}

let a;

input.question("insira uma serie de itens separados por espaço 1\n", function (answer) {
    a = answer.split(" ");
});

input.question("insira uma serie de itens separados por espaço 2\n", function (answer) {
    console.log(arraySum(a,answer.split(" ")))
});