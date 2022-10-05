import APIkey from './environment/apiKey.js';

// Variaveis globais
// Começa com 2 porque o 1 já é chamado quando carrega a página
let pageId = 2; // QUANDO FOR REDEFINIR, PRECISA SER 2

// Salvar/remover filmes favoritados
let favoriteMoviesList = JSON.parse(localStorage.getItem("favoriteMoviesStorage")) || [];


// Executa assim que inicia
getPopularMovies();

// Pesquisar por filmes
const searchMovieForm = document.querySelector('.searchMovie__wrapper');
const searchInput = document.querySelector('input[name=search]');
searchMovieForm.addEventListener('submit', event => {
  event.preventDefault()

  const searchValue = searchInput.value.trim();
  // Caso não tenha nada, mostra a pagina incial
  if (searchValue == "") {
    return getPopularMovies();
  }

  return getMoviesByName(searchValue);
})

// Mostrar filmes favoritados/todos os filmes
const favoriteMoviesCheckbox = document.getElementById("favoriteMovies");
favoriteMoviesCheckbox.addEventListener("click", () => {
  // Se está marcado, mostra apenas os filmes favoritados
  if (favoriteMoviesCheckbox.checked) {
    showOnlyFavoriteMovies();
  } else {
    const movies = document.querySelectorAll(".movie");
    movies.forEach(movie => { movie.classList.remove("hide"); })
  }
})

// Botão de mostrar mais resultados
const showMoreButton = document.querySelector(".show_more");
showMoreButton.addEventListener("click", () => {
  if (showMoreButton.value == "getPopular") {
    getPopularMovies(pageId);
  } else
    if (showMoreButton.value == "getByName") {
      const searchValue = searchInput.value.trim();
      getMoviesByName(searchValue, pageId);
    }
  pageId++;
})


// Funções
async function getPopularMovies(pageNum) {
  // Caso não seja passado pageId, é definido como 1 por padrão.
  // Atualmente funciona com page=undefined, mas para evitar erros futuros
  if (!pageNum) {
    pageNum = 1;
  }
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=pt-BR&include_adult=false&page=${pageNum}`;
  const moviesResponse = await fetch(url).then(response => response.json());

  if (pageNum < 2) {
    clearMoviesContainer();
    pageId = 2; // PRECISA SER 2, SENÃO ENTRA EM LOOPING
  }

  const movies = moviesResponse.results;
  movies.forEach(movie => renderMovie(movie, "getPopular"));
}

async function getMoviesByName(title, pageNum) {
  // Caso não seja passado pageId, é definido como 1 por padrão.
  // Atualmente funciona com page=undefined, mas para evitar erros futuros
  if (!pageNum) {
    pageNum = 1;
  }
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&language=pt-BR&query=${title}&include_adult=false&page=${pageNum}`;
  const moviesResponse = await fetch(url).then(response => response.json());

  if (pageNum < 2) {
    clearMoviesContainer();
    pageId = 2; // PRECISA SER 2, SENÃO ENTRA EM LOOPING
  }

  const movies = moviesResponse.results;
  movies.forEach(movie => renderMovie(movie, "getByName"));
}

function clearMoviesContainer() {
  const moviesContainer = document.querySelector(".movies__container");
  moviesContainer.innerHTML = "";
}

function renderMovie(movie, method) {
  const { id, title, poster_path } = movie;
  let { vote_average, release_date, overview } = movie;
  const isFavorited = favoriteMoviesList.includes(id);

  const moviesContainer = document.querySelector(".movies__container");

  const movieCard = document.createElement("div");
  movieCard.className = "movie";
  movieCard.id = id;


  const movieLink = document.createElement("a");
  movieLink.href = `https://www.themoviedb.org/movie/${id}`;
  movieLink.target = "_blank";
  movieLink.rel = "noopener noreferrer";
  movieLink.className = "movie_image";

  const movieImage = document.createElement("img");
  movieImage.ariaLabel = "Abrir página do filme";
  movieImage.title = "Abrir página do filme";
  movieImage.src = `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`;
  movieImage.alt = `Capa do filme ${title}`;

  movieLink.appendChild(movieImage);


  const movieInfos = document.createElement("div");
  movieInfos.className = "movie_infos";

  const movieTitle = document.createElement("h2");
  if (release_date == "") { release_date = "Não informado"; }
  else { release_date = release_date.slice(0, 4) }
  movieTitle.innerText = `${movie.title} (${release_date})`;

  const movieRate = document.createElement("p");
  movieRate.className = "movie_rate";
  movieRate.innerHTML = `<img src="./assets/star.svg"> ${vote_average.toFixed(1)}`;

  const movieFavorite = document.createElement("p");
  movieFavorite.className = "movie_favorite";
  if (isFavorited) { movieFavorite.classList.add("favorite") };
  movieFavorite.addEventListener("click", () => { favoriteMovie(event) });
  movieFavorite.innerHTML = `<span class="heart"></span> Favoritar`;

  movieInfos.append(movieTitle, movieRate, movieFavorite);


  const movieDescription = document.createElement("p");
  movieDescription.className = "movie_description";
  if (overview == "") { overview = "Sinopse em português não informada." };
  movieDescription.innerHTML = `${overview} <br><br> <a href="https://www.themoviedb.org/movie/${id}" target="_blank" rel="noopener noreferrer">Abrir página do filme &nbsp;&rightarrow;</a>`;


  movieCard.append(movieLink, movieInfos, movieDescription);
  moviesContainer.appendChild(movieCard);


  // Mudando o mostrar mais
  const showMoreButton = document.querySelector(".show_more");
  showMoreButton.value = method;
}

function favoriteMovie(event) {
  event.target.classList.toggle("favorite");

  const movieId = Number(event.path[2].id);
  const movieIndexInStorage = favoriteMoviesList.indexOf(movieId);

  // Se já está favoritado, remove
  // caso contrário, adiciona na lista
  if (movieIndexInStorage != -1) {
    favoriteMoviesList.splice(movieIndexInStorage, 1);
  } else {
    favoriteMoviesList.push(movieId);
  }

  localStorage.setItem("favoriteMoviesStorage", JSON.stringify(favoriteMoviesList));
}

function showOnlyFavoriteMovies() {
  const movies = document.querySelectorAll(".movie");
  movies.forEach(movie => {
    const movieId = Number(movie.id);

    // Caso o filmes não esteja na lista de favoritados, ele perde o display
    if (!favoriteMoviesList.includes(movieId)) {
      movie.classList.add("hide");
    }
  });
}


// SCROLLTOP
const scrollTopButton = document.querySelector('.scrolltop');
scrollTopButton.onclick = () => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
};

// fazer o botão aparecer quando já tiver scrollado um pouco
window.addEventListener("scroll", () => {
  const positionY = window.scrollY;
  if (positionY < 300) {
    scrollTopButton.classList.add("hide");
  } else {
    scrollTopButton.classList.remove("hide");
  }
})


setPositionScrollTopButton();
window.addEventListener("resize", setPositionScrollTopButton);

function setPositionScrollTopButton() {
  const windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  const containerWidth = parseFloat(getComputedStyle(document.querySelector(".container")).getPropertyValue('width'));

  let marginX;

  if (windowWidth > containerWidth) {
    marginX = (windowWidth - containerWidth) / 2;
    scrollTopButton.style.right = `calc(${marginX}px - 2rem)`;
  } else {
    scrollTopButton.style.right = "";
  }
}