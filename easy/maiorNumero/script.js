//retornar o maior número de um array

//Forma de retornar o maior número dentro de um array na mão
let numeros = [1, 50, 70, 1500, 9, 27, 101];
let temp = 0

function maiorNumero(array) {

    for(let i in array){

        if(temp <= array[i]){
            temp = array[i]
        }

    }

    return temp

}

console.log(maiorNumero(numeros))

//Usando funções do proprio js

const maiornumero = Math.max(...numeros)    //... operador spread separa os elementos de um array como argumentos individuais
console.log(maiornumero)
