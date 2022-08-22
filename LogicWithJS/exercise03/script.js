// Desafio base:
/* 1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.
 
2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso
esteja na área de Back-End, poderá aprender C# ou aprender Java.
 
3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre
seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar
Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.
 
4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se
especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada
vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma
tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt,
para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma
mensagem comentando algo sobre a linguagem inserida.
*/

function areaValidate() {
  const front = document.getElementById("front");
  const back = document.getElementById("back");

  if (front.checked) {
    frontResult();
  } else if (back.checked) {
    backResult();
  }
}

function frontResult() {
  const wrapper = document.querySelector(".languageSelection");
  const newElement = `<label for="language">Você quer aprender React ou Vue?</label>
      <input type="radio" name="language" id="react" value="React">React
      <input type="radio" name="language" id="vue" value="Vue">Vue
      <button onclick="specOrFullstack()">Enviar</button>
      `;
  return wrapper.innerHTML = newElement;
}
function backResult() {
  const wrapper = document.querySelector(".languageSelection");
  const newElement = `<label for="language">Você quer aprender C# ou Java?</label>
      <input type="radio" name="language" id="c#" value="C#">C#
      <input type="radio" name="language" id="java" value="Java">Java
      <button onclick="specOrFullstack()">Enviar</button>
      `;
  return wrapper.innerHTML = newElement;
}

function specOrFullstack() {
  const wrapper = document.querySelector(".specOrFullSelection");
  const newElement = `<label for="specOrFullInput">Você quer se especializar na área ou iniciar uma carreira Fullstack?</label>
      <input type="radio" name="specOrFullInput" id="spec">Especializar
      <input type="radio" name="specOrFullInput" id="fullstack">Fullstack
      <button onclick="specOrFullstackValidate()">Enviar</button>`;
  return wrapper.innerHTML = newElement;
}

function specOrFullstackValidate() {
  const specialize = document.getElementById("spec");
  const fullstack = document.getElementById("fullstack");

  const learnTecs = document.querySelector(".learnTecs");
  const languageSelected = document.querySelector(".languageSelection input:checked").value;

  if (specialize.checked) {
    const areaSelected = document.querySelector(".areaSelection input:checked").value;

    const mesage = document.createElement("p");
    mesage.innerText = `Continue estudando ainda mais ${languageSelected} para se especializar em ${areaSelected}!`;
    learnTecs.innerHTML = "";
    return learnTecs.appendChild(mesage);

  } else if (fullstack.checked) {
    const newElement = `<label for="newTecs">Para dominar o Fullstack de vez por todas, você quer aprender quais outras linguagens e ferramentas além de ${languageSelected}?</label>
      <input type="text" name="newTecs" id="newTec" required>
      <button onclick="addNewTec()">Adicionar</button>
      <ul></ul>`;

    return learnTecs.innerHTML = newElement;
  }
}


// Desafio extra:
/* Criar um input para o usuário digitar as linguagens e ferramentas que ainda queira
aprender para se tornar FullStack e exibir na tela*/

let tecArray = [];

function addNewTec() {
  const newTecEl = document.getElementById("newTec");
  const newTec = newTecEl.value.trim();

  newTecEl.value = "";
  tecArray.push(newTec);

  const ulEl = document.querySelector(".learnTecs ul");
  const liEl = document.createElement("li");
  liEl.innerText = newTec;

  return ulEl.appendChild(liEl);
}