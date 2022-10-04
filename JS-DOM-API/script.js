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
    movies.forEach(movie => { movie.style.display = "inherit" })
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
  console.log(pageNum);
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
  const { id, title, poster_path, vote_average, release_date, overview } = movie;
  const isFavorited = favoriteMoviesList.includes(id);

  const moviesContainer = document.querySelector(".movies__container");

  const movieCard = document.createElement("div");
  movieCard.className = "movie";
  movieCard.id = id;


  const movieImage = document.createElement("img");
  movieImage.className = "movie_image";
  movieImage.src = `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`;
  movieImage.alt = `Capa do filme ${title}`;


  const movieInfos = document.createElement("div");
  movieInfos.className = "movie_infos";

  const movieTitle = document.createElement("h2");
  const year = release_date.slice(0, 4);
  movieTitle.innerText = `${movie.title} (${year})`;

  const movieRate = document.createElement("p");
  movieRate.className = "movie_rate";
  const rate = vote_average.toFixed(1)
  movieRate.innerHTML = `<img src="./assets/star.svg"> ${rate}`;

  const movieFavorite = document.createElement("p");
  movieFavorite.className = "movie_favorite";
  if (isFavorited) { movieFavorite.classList.add("favorite") };
  movieFavorite.addEventListener("click", () => { favoriteMovie(event) });
  movieFavorite.innerHTML = `<span class="heart"></span> Favoritar`;

  movieInfos.append(movieTitle, movieRate, movieFavorite);


  const movieDescription = document.createElement("p");
  movieDescription.className = "movie_description";
  movieDescription.innerText = overview;


  movieCard.append(movieImage, movieInfos, movieDescription);
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
      movie.style.display = "none";
    }
  });
}