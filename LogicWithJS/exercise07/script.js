function start(operation) {
  let value1 = Number(document.getElementById("firstNumber").value);
  let value2 = Number(document.getElementById("secondNumber").value);

  if (value1 === "") { value1 = 0; }
  if (value2 === "") { value2 = 0; }

  switch (operation) {
    case 1:
      additionFunction(value1, value2);
      break;

    case 2:
      subtractionFunction(value1, value2);
      break;

    case 3:
      multiplicationFunction(value1, value2);
      break;

    case 4:
      divisionFunction(value1, value2);
      break;

    default:
      return messageResult("Reinicie a página e não mexa no código!");
      break;
  }
}

function additionFunction(value1, value2) {
  const account = value1 + value2;
  const result = parseFloat(account.toFixed(2));

  validate("Adição", value1, value2, result);
}
function subtractionFunction(value1, value2) {
  const account = value1 - value2;
  const result = parseFloat(account.toFixed(2));

  validate("Subtração", value1, value2, result);
}
function multiplicationFunction(value1, value2) {
  const account = value1 * value2;
  const result = parseFloat(account.toFixed(2));

  validate("Multiplicação", value1, value2, result);
}
function divisionFunction(value1, value2) {
  let account = value1 / value2;

  if (isNaN(account)) { account = 0; }
  if (account === Infinity) { account = 0; }

  const result = parseFloat(account.toFixed(2));

  validate("Divisão", value1, value2, result);
}

function validate(operation, value1, value2, result) {
  if (isNaN(result)) {
    messageResult("Valores inválidos");
  } else {
    const message = `O resultado da operação de <span>${operation}</span> de
    <span>${value1}</span> e <span>${value2}</span> é <span>${result}</span>`;
    messageResult(message);
  }
}

function messageResult(message) {
  const messageResultEl = document.querySelector(".result");
  const messageEl = document.querySelector(".result p");
  messageResultEl.classList.remove("hide");
  messageEl.innerHTML = message;
}