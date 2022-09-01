let chances, spokenNumbers, numberSelected;

function setupGame() {
  spokenNumbers = [];

  // Valores mínimo, máximo e chances
  let numberMin = Number(document.getElementById("minNum").value);
  let numberMax = Number(document.getElementById("maxNum").value);
  chances = Number(document.getElementById("chances").value);

  if (numberMin === "" || numberMin <= 0) { numberMin = 1; }
  if (numberMax === "" || numberMax <= 0) { numberMax = 10; }
  if (chances === "" || chances <= 0) { chances = 3; }

  const verification = verificationMinBigMax(numberMin, numberMax);
  // Se passar na verificação retorna true
  if (verification) {
    // Mostrando o lugar onde o usuário irá inserir os números
    const inputNumberSection = document.querySelector(".section.inputNumber");
    inputNumberSection.classList.remove("hide");

    // Botando o placeholder no input do número mínimo máximo e limpando valor do input de números palpitados
    const inputNumberEl = document.getElementById("inputNumberEl");
    inputNumberEl.placeholder = `${numberMin} a ${numberMax}`;
    inputNumberEl.value = "";

    // Configurando o botão de enviar o número do jogador com o numero min e max
    const buttonInputNumber = document.getElementById("buttonInputNumber");
    buttonInputNumber.setAttribute("onclick", `game(${numberMin}, ${numberMax})`);
    buttonInputNumber.disabled = false;

    // Escondendo a área de mensagens
    const messageAlertEl = document.querySelector(".messageAlert");
    const messageAlert = document.querySelector(".messageAlert p");
    messageAlertEl.classList.add("hide");
    messageAlert.innerText = "";

    // Limpa a área de respostas
    const spokenNumbersEl = document.querySelector(".numbers");
    spokenNumbersEl.classList.remove("beforeStart");
    spokenNumbersEl.innerHTML = "";

    // Gera o número que o usuário deverá acertar
    numberSelected = Math.floor(Math.random() * (numberMax - numberMin + 1) + numberMin);
    // Se o número selecionado for menor ou igual a 0 ele coloca 1
    numberSelected <= 0 ? numberSelected = 1 : numberSelected;
  }
}

function verificationMinBigMax(numberMin, numberMax) {
  if (numberMin >= numberMax) {
    messageAlert("Número mínimo é maior ou igual ao número máximo!");
    return false;
  } else return true;
}

function game(numberMin, numberMax) {
  chances--;
  const inputNumberEl = document.getElementById("inputNumberEl");

  const numberInput = Math.floor(inputNumberEl.value);
  inputNumberEl.value = "";

  /*
    Se o usuário digitar um número quebrado (12.34) vai ser 12 por conta do .floor()
    Se o usuário digitar duas vezes o mesmo número, dá uma chance na segunda digitada
  */

  if (numberInput < numberMin || numberInput > numberMax) {
    messageAlert(`Digite um número válido (${numberMin} a ${numberMax})!`);
    return chances++;
  } else if (spokenNumbers.indexOf(numberInput) !== -1) {
    messageAlert("Digite um número que ainda não tenha digitado!");
    return chances++;
  }

  spokenNumbers.push(numberInput); // adiciona o número nos números já ditos

  if (numberInput === numberSelected) {
    addSpokenNumbersScreen(numberInput, true); // adiciona o número na tela

    // desabilita o usuario de continuar jogando sem iniciar um novo setup
    const buttonInputNumber = document.getElementById("buttonInputNumber");
    buttonInputNumber.disabled = true;

    messageAlert(`Você acertou, o número selecionado era ${numberSelected}!`);

  } else if (numberInput !== numberSelected) {
    addSpokenNumbersScreen(numberInput, false); // adiciona o número na tela

    messageAlert(`Você errou. Tente novamente. Restam ${chances} tentativas`);

    if (chances === 0) {
      addSpokenNumbersScreen(numberSelected, true); // mostra o número correto na tela

      // desabilita o usuario de continuar jogando sem iniciar um novo setup
      const buttonInputNumber = document.getElementById("buttonInputNumber");
      buttonInputNumber.disabled = true;

      messageAlert(`Você errou e suas tentativas acabaram. Mais sorte na próxima.\n\n O número selecionado era ${numberSelected}`);
    }
  }
}

function messageAlert(message) {
  const messageAlertEl = document.querySelector(".messageAlert");
  const messageAlert = document.querySelector(".messageAlert p");
  messageAlertEl.classList.remove("hide");
  messageAlert.innerText = message;
}

function addSpokenNumbersScreen(numberInput, hitNumber) {
  // Se o usuário acertou hitNumber == true
  const spokenNumbersEl = document.querySelector(".numbers");

  const numberEl = document.createElement("div");
  numberEl.classList.add("number");
  numberEl.innerText = numberInput;
  if (hitNumber) {
    numberEl.classList.add("right");
  }

  spokenNumbersEl.appendChild(numberEl);
}