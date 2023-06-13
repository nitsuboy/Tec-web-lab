/* Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente,
o vetorPilha conterá cinco elementos inteiros: [1, 2, 3, 4, 5]. Você
deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao
vetor pilha e mostrá-los no console. */

let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];

vetorPilha = vetorPilha.concat(vetorAdiciona);

console.log(vetorPilha);