const numberMax = 10;
const numberMin = 0;

function comecar() {
  const numberSelected = Math.floor(Math.random() * (numberMax - numberMin + 1) + numberMin);
  let chances = 3;

  do {
    chances--;
    const numberInput = Math.floor(prompt(`Digite o número de ${numberMin} a ${numberMax}, que você acha que é: `));
    // Se o usuário digitar um número quebrado (12.34) vai ser 12 por conta do .floor()
    // Se o usuário digitar uma letra vai dar NaN e o if com isNaN vai dar true e vai dar mais uma chance

    if (numberInput < numberMin || numberInput > numberMax || isNaN(numberInput)) {
      alert(`Digite um número válido (${numberMin} a ${numberMax})!`);
      chances++;

    } else if (numberInput === numberSelected) {
      return alert(`Você acertou, o número selecionado era ${numberSelected}!`);

    } else if (numberInput !== numberSelected) {
      if (chances === 0) {
        alert(`Você errou e suas tentativas acabaram. Mais sorte na próxima.`);
        return alert(`O número selecionado era ${numberSelected}`);
      }
      alert(`Você errou. Tente novamente. Restam ${chances} tentativas`);
    }
  } while (chances > 0);
}