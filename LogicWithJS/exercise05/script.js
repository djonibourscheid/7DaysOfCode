// Lista pré-definida até eu acabar de vez com o projeto :)
let shoppingList = {
  frutas: [],
  laticinios: [],
  congelados: [],
  doces: []
}

function addNewItem() {
  const item = document.getElementById("newItem").value.trim();
  const categoryEl = document.getElementById("categoriesSelect");
  const categoryIndex = categoryEl.selectedIndex;
  const categoryValue = categoryEl.value;

  // Evitar erros
  if (item == "") return messageAlert("Preencha o nome do item!");

  // Caso se o usuário adicionar mais options pelo navegador
  if (categoryIndex >= 1 && categoryIndex <= 4) {
    // Caso ele altere o value de algum option
    try {
      shoppingList[`${categoryValue}`].push(firstLetterUppercase(item));
      showShoppingList();
      return messageAlert("Item adicionado à lista com sucesso!");
    } catch (error) {
      return messageAlert("Reinicie a página e não mexa no código da página.");
    }
  } else return messageAlert("Selecione uma categoria válida!");
}

function removeItem(category, item) {
  const categorySelected = shoppingList[category]; // frutas
  const indexItem = categorySelected.indexOf(item); // caso tenha vai dar o index, partindo de 0, senão -1
  categorySelected.splice(indexItem, 1); // remove apenas o item selecionado

  showShoppingList();
}

function showShoppingList() {
  const shoppingListResultEl = document.querySelector(".shoppingListResult");
  shoppingListResultEl.innerHTML = "";
  shoppingListResultEl.classList.remove("hide");

  // Para cada categoria
  for (const category in shoppingList) {
    // Cria uma lista com o nome da categoria
    const groupItemsOl = document.createElement("ol");
    groupItemsOl.innerText = firstLetterUppercase(category);

    // Para cada item dentro da categoria
    for (const item of shoppingList[category]) {
      // Cria uma li com o nome do item
      const liEl = document.createElement("li");
      liEl.innerText = firstLetterUppercase(item);

      // Botão para remover
      const buttonEl = document.createElement("button");
      buttonEl.setAttribute("onclick", `removeItem('${category}', '${item}')`);
      buttonEl.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

      liEl.appendChild(buttonEl);
      // Adiciona cada um na lista da categoria
      groupItemsOl.appendChild(liEl);
    }
    // Quando acaba os itens, adiona a categoria na tela
    shoppingListResultEl.appendChild(groupItemsOl);
  }
}

// Deixar o nome de cada palavra com a Primeira letra Maiúscula
function firstLetterUppercase(word) {
  return word = word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function messageAlert(message) {
  const messageAlertEl = document.querySelector(".messageAlert");
  const messageAlert = document.querySelector(".messageAlert p");
  messageAlertEl.classList.remove("hide");
  messageAlert.innerText = message;
}