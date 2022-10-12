<h1 align="center">
  <a href="https://djonibourscheid.github.io/7DaysOfCode/">7 Days of Code</a>
  /
  <a href="https://djonibourscheid.github.io/7DaysOfCode/#LogicWithJS">Lógica com JavaScript</a>
</h1>
<p align="center">7 projetos para desenvolver e melhorar a lógica de programação com JavaScript</p>

<p align="center">
  <a href="#-projetos">Projetos</a> •
  <a href="#-desafios-extras">Desafios Extras</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-autor">Autor</a> •
  <a href="#-licença">Licença</a>
</p>

<h4 align="center">
	✅ Projetos concluídos ✅
</h4>


## ✨ Projetos
<!-- Projeto 1 -->
<details>
  <summary><b>Projeto 1: Operações Booleanas</b></summary>

  Dado as seguintes variáveis:
  <pre lang="javascript">
const numeroUm = 1
const stringUm = '1'
const numeroTrinta = 30
const stringTrinta = '30'
const numeroDez = 10
const stringDez = '10'
</pre>

  Compare cada *numero* com sua devida *string* e retorne:
  - if (*numero* {== ou ===} *string*):
    - As variáveis *numero* e *string* tem o mesmo valor, mas tipos diferentes
    - As variáveis *numero* e *string* tem o mesmo valor e mesmo tipo
  - else:
    - As variáveis *numero* e *string* não tem o mesmo valor

  <h4>
    <a href="https://djonibourscheid.github.io/7DaysOfCode/LogicWithJS/exercise01/">
      <b>🥇 Resultado 🥇</b>
    </a>
  </h4>

  <hr></hr>
</details>

<!-- Projeto 2 -->
<details>
  <summary><b>Projeto 2: Variáveis</b></summary>

  Dado as seguintes perguntas:
  - Qual o seu nome?
  - Quantos anos você tem?
  - Qual linguagem de programação você está estudando?

  No final, o sistema vai exibir a mensagem:

  <b>"Olá <i>[nome]</i>, você tem <i>[idade]</i> anos e já está aprendendo <i>[linguagem]</i>!"</b>

  ### Desafio extra:
  Complemente o código para que, depois de exibir a mensagem anterior, o programa pergunte:
  <p>&nbsp;&nbsp;<b>"Você gosta de estudar <i>[linguagem]</i>?"</b></p>

  Dependendo da resposta, ele deve mostrar uma das seguintes mensagens:
  - Muito bom! Continue estudando e você terá muito sucesso.
  - Ahh que pena... Já tentou aprender outras linguagens?

  <h4>
    <a href="https://djonibourscheid.github.io/7DaysOfCode/LogicWithJS/exercise02/">
      <b>🥇 Resultado 🥇</b>
    </a>
  </h4>

  <hr></hr>
</details>

<!-- Projeto 3 -->
<details>
  <summary><b>Projeto 3: Fluxo de decisão</b></summary>

  Perguntar ao usuário:
  1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.
  2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
  3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para   cada escolha.
  4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez.

  ### Extra:
  - Complementei o código para que, depois que o usuário adicionar uma nova linguagem na área Fullstack, ela seja salva no LocalStorage.

  <h4>
    <a href="https://djonibourscheid.github.io/7DaysOfCode/LogicWithJS/exercise03/">
      <b>🥇 Resultado 🥇</b>
    </a>
  </h4>

  <hr>
  </hr>
</details>

<!-- Projeto 4 -->
<details>
  <summary><b>Projeto 4: Loops e randomização</b></summary>

  Você deve criar um programa que comece com um valor randômico entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).
  Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.
  No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

  ### Extra:
  Complementei o código com:
  - Usuário pode selecionar o número mínimo, máximo e o tanto de chances que ele quer. Caso nada informado, é definido 0, 10 e 3 por padrão.
  - Validação para não ditar o mesmo número, número fora do intervalo definido...
  - Representação visual dos números já falados.
  - Responsividade

  <h4>
    <a href="https://djonibourscheid.github.io/7DaysOfCode/LogicWithJS/exercise04/">
      <b>🥇 Resultado 🥇</b>
    </a>
  </h4>

  <hr>
  </hr>
</details>

<!-- Projeto 5 e 6 -->
<details>
  <summary><b>Projeto 5 e 6: Fluxo de decisão e Remoção de elementos de array</b></summary>

  **Dia 5:**
	Faça uma lista de compras, para isto:
  1. O programa deve perguntar qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.
  2. Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces... Assim, você poderá separar tudo no seu devido grupo.

  **Dia 6:**
  Opção de deletar a comida na lista
  
  ### Extra:
  - Complementei o código para que, depois que o usuário adicionar, ela seja salva no LocalStorage
  - Deletar comida do LocalStorage também
  - Responsividade

  <h4>
    <a href="https://djonibourscheid.github.io/7DaysOfCode/LogicWithJS/exercise05/">
      <b>🥇 Resultado 🥇</b>
    </a>
  </h4>

  <hr>
  </hr>
</details>

<!-- Projeto 7 -->
<details>
  <summary><b>Projeto 7: Funções em Javascript</b></summary>

  Você deverá criar uma calculadora sendo que, cada operação *(+ - x /)* terá sua própria função, e dentro dela seja calculado e retorne o valor final.
  
  ### Extra:
  - Interface amigável para o usuário
  - Responsividade

  <h4>
    <a href="https://djonibourscheid.github.io/7DaysOfCode/LogicWithJS/exercise07/">
      <b>🥇 Resultado 🥇</b>
    </a>
  </h4>

  <hr>
  </hr>
</details>

## ⚔ Desafios Extras
- [x] Completar todos os projetos
- [x] Integrar cada projeto com HTML e CSS
- [ ] Documentar todos os projetos

## 🛠 Tecnologias
Foram usadas na construção do projeto:
- HTML
- CSS
- JavaScript

## 👋 Autor
<a href="https://github.com/djonibourscheid">
  <img style="border-radius: 50%" src="https://avatars.githubusercontent.com/u/62856037?v=4" width="100px">

  <sub><b>Djoni Bourscheid</b></sub>
</a>

[![Twitter](https://img.shields.io/badge/Twitter-informational?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/djonibourscheid)
[![LinkedIn](https://img.shields.io/badge/Linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/djonibourscheid/)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/djonibourscheid/)
[![Email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:djonibourscheid@gmail.com)


## 📝 Licença
Este projeto esta sobe a licença [MIT](../LICENSE).

Feito com ❤️ por Djoni Bourscheid 👋 [Entre em contato!](https://www.linkedin.com/in/djonibourscheid/)
