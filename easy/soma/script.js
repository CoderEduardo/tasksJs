//Crie uma função que some dois números

function soma() {
  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;

  let resultado = parseInt(numero1) + parseInt(numero2);
  document.getElementById("resultado").innerHTML = resultado;
}
