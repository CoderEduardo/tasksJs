//Verificar se o número é par ou ímpar
//Vou fazer sem usar o dom, apenas usando js para economizar arquivos e não ficar criando .html

let numero = 7;

function verficarParidade(num) {
  if (num % 2 == 0) {
    return "par";
  } else {
    return "ímpar";
  }
}

console.log(verficarParidade(numero))
