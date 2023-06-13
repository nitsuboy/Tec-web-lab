/* Escreva uma função JavaScript para verificar se uma `entrada` é 
um array ou não.*/
function arrayCheck(arr) {    
    return arr instanceof Array;
}

/* Escreva uma função JavaScript para clonar um array. */
function arrayCopy(arr) {    
    return arr.slice();
}

/* Escreva uma função JavaScript para obter o primeiro elemento de um
array. Passar um parâmetro 'n' retornará os primeiros 'n' elementos do
array.*/
function arrayFirstOf(arr, n = 1){
    return arr.slice(0,n);
}

/* Escreva uma função JavaScript para obter o último elemento de um
array. Passar um parâmetro 'n' retornará os últimos 'n' elementos do
array.*/
function arrayLastOf(arr, n = 1) {
    return arr.slice(n*-1);
}


