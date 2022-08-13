console.log("Use soma(valor1, valor2) para fazer adições, subtracao(..), multiplicacao() e divisao()");

function soma(valor1, valor2) {
  const resultado = Number(valor1) + Number(valor2);

  validar(resultado)
}
function subtracao(valor1, valor2) {
  const resultado = Number(valor1) - Number(valor2);

  validar(resultado)
}
function multiplicacao(valor1, valor2) {
  const resultado = Number(valor1) * Number(valor2);

  validar(resultado)
}
function divisao(valor1, valor2) {
  const resultado = Number(valor1) / Number(valor2);

  validar(resultado)
}

function validar(resultado) {
  if(isNaN(resultado)) {
    return console.log("Valores inválidos");
  } else {
    return console.log(resultado);
  }
}