//faça uma função que inverta um string

let texto = "bom dia"

function inverterString(string){
    return string.split("").reverse().join("")      //split transforma a string em um array, reverse inverte os indíces do array e o join transforma um array em uma string
}

console.log(inverterString(texto))