// TAREFA:
// A sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as
// informações de maneira correta, que faça sentido e sem erros:

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

// COMPARAR O numeroUm e a stringUm
if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}
console.log(`Tipo de numeroUm: ${typeof numeroUm}`);
console.log(`Tipo de stringUm: ${typeof stringUm}`);

console.log("===================");

// COMPARAR O numeroTrinta e a stringTrinta
if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}
console.log(`Tipo de numeroTrinta: ${typeof numeroTrinta}`);
console.log(`Tipo de stringTrinta: ${typeof stringTrinta}`);

console.log("===================");

// COMPARAR O numeroDez e a stringDez
if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
console.log(`Tipo de numeroDez: ${typeof numeroDez}`);
console.log(`Tipo de stringDez: ${typeof stringDez}`);
}