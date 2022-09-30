function favoriteMovie(event) {
  event.target.classList.toggle("favorite");
}


function renderMovie(movie) {
  const moviesContainer = document.querySelector(".movies__container");

  const movieCard = document.createElement("div");
  movieCard.className = "movie";


  const movieImage = document.createElement("img");
  movieImage.className = "movie_image";
  movieImage.src = movie.image;
  movieImage.alt = `Capa do filme ${movie.title}`;


  const movieInfos = document.createElement("div");
  movieInfos.className = "movie_infos";

  const movieTitle = document.createElement("h2");
  movieTitle.innerText = `${movie.title} (${movie.year})`;

  const movieRate = document.createElement("p");
  movieRate.className = "movie_rate";
  movieRate.innerHTML = `<img src="./assets/star.svg"> ${movie.rating}`;

  const movieFavorite = document.createElement("p");
  movieFavorite.className = "movie_favorite";
  console.log(movie.isFavorited);
  if (movie.isFavorited) { movieFavorite.classList.add("favorite") };
  movieFavorite.addEventListener("click", () => { favoriteMovie(event) });
  movieFavorite.innerHTML = `<span class="heart"></span> Favoritar`;

  movieInfos.append(movieTitle, movieRate, movieFavorite);


  const movieDescription = document.createElement("p");
  movieDescription.className = "movie_description";
  movieDescription.innerText = movie.description;


  movieCard.append(movieImage, movieInfos, movieDescription);
  moviesContainer.appendChild(movieCard);
}

const movies = [
  {
    image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
    title: 'Batman',
    year: 2022,
    rating: 9.2,
    isFavorited: true,
    description: "Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população."
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
    title: 'Avengers',
    year: 2019,
    rating: 9.2,
    isFavorited: false,
    description: "Descrição do filme…"
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
    title: 'Doctor Strange',
    year: 2022,
    rating: 9.2,
    isFavorited: false,
    description: "Descrição do filme…"
  },
]

movies.forEach(movie => renderMovie(movie))