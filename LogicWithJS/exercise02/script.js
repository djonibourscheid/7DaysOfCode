// Desafio base:
// Pedir ao usuário qual o seu nome, idade e qual linguagem de programação está estudando
// e, então imprimir a mensagem "Olá [nome], você tem [idade] anos e está aprendendo [linguagem]!"
// Desafio extra:
// Perguntar se o usuário gosta de estudar [linguagem] e dar a resposta

function showResults() {
  const name = document.getElementById("namePerson").value.trim();
  const age = document.getElementById("agePerson").value.trim();
  const language = document.getElementById("language").value.trim();
  const h1Element = document.getElementById("results");

  const challengeLanguage = document.getElementById("challengeLanguageSpan");
  const challengeInputEl = document.getElementById("challengeLanguageInput");
  const challengeDiv = document.querySelector(".challengeExtra");
  const challengeResponse = document.getElementById("challengeResponse")
  // caso tenha algo não preenchido
  if (name === "" || age === "" || language === "") {
    return (
      h1Element.innerText = "Preencha todos os campos para mostrar os resultados completos",
      h1Element.style.color = "#FF3333",
      challengeDiv.style.display = "none",
      challengeInputEl.value = "",
      challengeResponse.innerText = ""
    );
  }

  const challengeInput = challengeInputEl.value.toLowerCase().trim();
  // Se age for maior ou igual a 1, ele verifica se age é menor ou igual a 120, se sim ele bota a idade
  // senão ele bota 120, porque é maior que 120 e este é o máximo.Se age não for maior ou igual a 1,
  // ele bota 1, porque este é o mínimo
  h1Element.innerText = `Olá ${name}, você tem ${age >= 1 ? age <= 120 ? age : 120 : 1} anos e está aprendendo ${language}!`

  h1Element.style.color = "greenyellow"
  challengeLanguage.innerText = language;
  challengeDiv.style.display = "flex";

  if (challengeInput === "") {
    return challengeResponse.innerText = "";
  }

  switch (challengeInput) {
    case "sim":
      challengeResponse.innerText = "Muito bom! Continue estudando e você terá muito sucesso!";
      challengeResponse.style.color = "greenyellow";
      break;
    case "nao":
      challengeResponse.innerText = "Ahh que pena... Já tentou aprender outras linguagens?";
      challengeResponse.style.color = "#ff7f7f";
      break;
    case "não":
      challengeResponse.innerText = "Ahh que pena... Já tentou aprender outras linguagens?";
      challengeResponse.style.color = "#ff7f7f";
      break;
    default:
      challengeResponse.innerText = "Resposta inválida";
      challengeResponse.style.color = "#FF3333";
  }

  /* Poderia fazer um tratamento para transformar o "não" em "nao", mas aí teria que
    ser com uma nova variável ou com let e ficaria basicamente a mesma coisa e talvez
    seria melhor até um if com ifelse e else mas queria usar para mostrar que sei da
    existência do switch

    if (challengeInput === "sim") {
      challengeResponse.innerText = "Muito bom! Continue estudando e você terá muito sucesso!";
      challengeResponse.style.color = "greenyellow";
    } else if (challengeInput === "não" || challengeInput === "nao") {
      challengeResponse.innerText = "Ahh que pena... Já tentou aprender outras linguagens?";
      challengeResponse.style.color = "#ff7f7f";
    } else {
      challengeResponse.innerText = "Resposta inválida";
      challengeResponse.style.color = "#FF3333";
    }
  */
}