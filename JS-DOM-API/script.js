import APIkey from './environment/apiKey.js';

getPopularMovies();

async function getPopularMovies() {
  const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${APIkey}&language=pt-BR`;
  const moviesResponse = await fetch(url).then(response => response.json());

  const movies = moviesResponse.results;
  movies.forEach(movie => renderMovie(movie));
}

function renderMovie(movie) {
  const moviesContainer = document.querySelector(".movies__container");

  const movieCard = document.createElement("div");
  movieCard.className = "movie";


  const movieImage = document.createElement("img");
  movieImage.className = "movie_image";
  movieImage.src = `https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`;
  movieImage.alt = `Capa do filme ${movie.title}`;


  const movieInfos = document.createElement("div");
  movieInfos.className = "movie_infos";

  const movieTitle = document.createElement("h2");
  const year = movie.release_date.slice(0, 4);
  movieTitle.innerText = `${movie.title} (${year})`;

  const movieRate = document.createElement("p");
  movieRate.className = "movie_rate";
  const rate = movie.vote_average.toFixed(1);
  movieRate.innerHTML = `<img src="./assets/star.svg"> ${rate}`;

  const movieFavorite = document.createElement("p");
  movieFavorite.className = "movie_favorite";
  if (movie.isFavorited) { movieFavorite.classList.add("favorite") };
  movieFavorite.addEventListener("click", () => { favoriteMovie(event) });
  movieFavorite.innerHTML = `<span class="heart"></span> Favoritar`;

  movieInfos.append(movieTitle, movieRate, movieFavorite);


  const movieDescription = document.createElement("p");
  movieDescription.className = "movie_description";
  movieDescription.innerText = movie.overview;


  movieCard.append(movieImage, movieInfos, movieDescription);
  moviesContainer.appendChild(movieCard);
}

function favoriteMovie(event) {
  event.target.classList.toggle("favorite");
}