let operacao, valor1, valor2;

function adicao(valor1, valor2) {
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
  if (isNaN(resultado)) {
    return alert("Valores inválidos");
  } else {
    return alert(`O resultado é ${resultado}`);
  }
}

do {
  let continuar = true;
  operacao = prompt("Qual operação você deseja realizar? 'Adicão' 'Subtração' 'multiplicação' ou 'divisão'").toLowerCase().trim();
  console.log(operacao);
  if (operacao === "adição" || operacao === "subtração" || operacao === "multiplicação" || operacao === "divisão") {
    valor1 = Number(prompt("Qual primeiro valor?").trim());
    valor2 = Number(prompt("Qual segundo valor?").trim());
  }

  switch (operacao) {
    case 'adição':
      adicao(valor1, valor2);
      break;
    case 'subtração':
      subtracao(valor1, valor2);
      break;
    case 'multiplicação':
      multiplicacao(valor1, valor2);
      break;
    case 'divisão':
      divisao(valor1, valor2);
      break;
    case 'sair':
      alert("Volte sempre!");
      continuar = false;
      break;
    default:
      if (operacao != null) {
        alert("Operação inválida.")
      } else {
        continuar = false;
      };
      break;
  }
} while (continuar);