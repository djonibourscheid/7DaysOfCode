// TAREFA:
// A sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as
// informações de maneira correta, que faça sentido e sem erros:

const numeroUm = 1
const stringUm = '1'
const numeroTrinta = 30
const stringTrinta = '30'
const numeroDez = 10
const stringDez = '10'


const result1El = document.querySelector("#result1");
const result2El = document.querySelector("#result2");
const result3El = document.querySelector("#result3");

// COMPARAR O numeroUm e a stringUm
if (numeroUm == stringUm) {
  result1El.innerHTML = '<p>As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes:</p>';
} else {
  result1El.innerHTML = '<p>As variáveis numeroUm e stringUm não tem o mesmo valor:</p>';
}
result1El.innerHTML += `<p>Tipo de numeroUm: ${typeof numeroUm}.</br> Tipo de stringUm: ${typeof stringUm}.</p>`;

// COMPARAR O numeroTrinta e a stringTrinta
if (numeroTrinta === stringTrinta) {
  result2El.innerHTML = '<p>As variáveis numeroTrinta e stringTrinta tem o mesmo valor, mas tipos diferentes:</p>';
} else {
  result2El.innerHTML = '<p>As variáveis numeroTrinta e stringTrinta não tem o mesmo valor:</p>';
}
result2El.innerHTML += `<p>Tipo de numeroTrinta: ${typeof numeroTrinta}.</br> Tipo de stringTrinta: ${typeof stringTrinta}.</p>`;

// COMPARAR O numeroDez e a stringDez
if (numeroDez == stringDez) {
  result3El.innerHTML = '<p>As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes:</p>';
} else {
  result3El.innerHTML = '<p>As variáveis numeroDez e stringDez não tem o mesmo valor:</p>';
}
result3El.innerHTML += `<p>Tipo de numeroDez: ${typeof numeroDez}.</br> Tipo de stringDez: ${typeof stringDez}.</p>`;