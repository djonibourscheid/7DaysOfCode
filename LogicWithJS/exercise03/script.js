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
  <div class="options">
    <p><input type="radio" name="language" id="react" value="React">React</p>
    <p><input type="radio" name="language" id="vue" value="Vue">Vue</p>
  </div>
  <button onclick="specOrFullstack()">Enviar</button>
  `;
  wrapper.classList.remove("hide");
  return wrapper.innerHTML = newElement;
}
function backResult() {
  const wrapper = document.querySelector(".languageSelection");
  const newElement = `<label for="language">Você quer aprender C# ou Java?</label>
  <div class="options">
    <p><input type="radio" name="language" id="c#" value="C#">C#</p>
    <p><input type="radio" name="language" id="java" value="Java">Java</p>
  </div>
  <button onclick="specOrFullstack()">Enviar</button>
  `;
  wrapper.classList.remove("hide");
  return wrapper.innerHTML = newElement;
}

function specOrFullstack() {
  const wrapper = document.querySelector(".specOrFullSelection");
  const newElement = `<label for="specOrFullInput">Você quer se especializar na área ou iniciar uma carreira Fullstack?</label>
  <div class="options">
    <p><input type="radio" name="specOrFullInput" id="spec">Especializar</p>
    <p><input type="radio" name="specOrFullInput" id="fullstack">Fullstack</p>
  </div>
  <button onclick="specOrFullstackValidate()">Enviar</button>
  `;
  wrapper.classList.remove("hide");
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
    learnTecs.classList.remove("hide");
    return learnTecs.appendChild(mesage);

  } else if (fullstack.checked) {
    const newElement = `<label for="newTecs">Para dominar o Fullstack de vez por todas, você quer aprender quais outras linguagens e ferramentas além de ${languageSelected}?</label>
      <input type="text" name="newTecs" id="newTec" required>
      <button onclick="addNewTec()">Adicionar</button>
      <ul></ul>`;

    learnTecs.innerHTML = newElement;
    // Mostra todas as linguagens do storage
    tecsStorage.forEach(element => showTecs(element));
    learnTecs.classList.remove("hide");
  }
}


/* Desafio extra:
  - Criar um input para o usuário digitar as linguagens e ferramentas que ainda queira
  aprender para se tornar FullStack e exibir na tela
  - Salvar os dados no localStorage */
let tecsStorage = JSON.parse(localStorage.getItem("learnLanguages")) || []

function addNewTec() {
  const newTecEl = document.getElementById("newTec"); // input
  const newTec = newTecEl.value.trim(); // valor do input
  
  // não adicionar input vazio no LS e na lista
  if (newTec === "") return;

  newTecEl.value = ""; // limpando o valor elemento do input
  tecsStorage.push(newTec); // add valor do input no localstorage

  localStorage.setItem("learnLanguages", JSON.stringify(tecsStorage));

  showTecs(newTec);
}

function showTecs(element) {
  const ulEl = document.querySelector(".learnTecs ul");
  const liEl = document.createElement("li");
  liEl.innerText = element;
  ulEl.appendChild(liEl);
}