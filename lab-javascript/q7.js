/* Escreva um programa JavaScript para localizar o item mais frequente
de um array.*/
const readline = require("readline");
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function arrayMostFrequent(arr) {
    let c = 0;
    let i = arr[0];

    arr.forEach(e => {
        let c2 = 0;
        arr.forEach(e2 => {
            if(e == e2) {
                c2++;
            }
        });
        if(c2 > c){
            i = e;
            c = c2
        }
    });

    return i;
}

input.question("insira uma serie de itens separados por espaço\n", function (answer) {
    console.log(arrayMostFrequent(answer.split(" ")));
});
