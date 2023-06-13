/*Escreva um programa JavaScript que aceite um número como entrada
e insira traços (-) entre cada dois números pares. Por exemplo, se você
aceitar 025468, a saída deve ser 0-254-6-8*/
const readline = require("readline");
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function evenSplicer(n) {
    let aux = "";
    for(let i = 0;i<n.length;i++){
        if (parseInt(n[i])%2==0 && parseInt(n[i+1])%2==0){
            aux +=n[i] + "-";
        }
        else {
            aux += n[i];
        }
    }

    return aux;
}

input.question("insira uma serie de numeros\n", function (answer) {
    console.log(evenSplicer(answer));
});