// API key 
const API_KEY = 'a566fb0fc4bcb2f908b405cf49a573b7';

async function fetchMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      return data.results;
    } else {
      throw new Error(data.status_message || 'Failed to fetch movies');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function handleHomeButtonClick() {
  window.location.href = 'index.html';
}

const homeButton = document.getElementById('home-tab');
homeButton.addEventListener('click', handleHomeButtonClick);


async function displayMovies(movies) {
  const moviesContainer = document.getElementById('movies-container');
  moviesContainer.innerHTML = ''; 

  
  for (const movie of movies) {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-card');

    movieElement.innerHTML = `
      <h2>${movie.title}</h2>
      <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
      <p>${movie.overview}</p>
      <p>Release Date: ${movie.release_date}</p>
      <p>Rating: ${movie.vote_average}</p>
    `;


    movieElement.addEventListener('click', () => {
      window.location.href = `movie.html?movieId=${movie.id}`; 
    });

    moviesContainer.appendChild(movieElement);
  }
}

function toggleNightMode() {
  const body = document.body;
  body.classList.toggle('dark-theme');
}

function handleWatchButtonClick() {
  const watchButton = document.getElementById('watch-button');

  if (watchButton.classList.contains('watched')) {
    return;
  }

  watchButton.classList.toggle('watched');

  if (watchButton.classList.contains('watched')) {
    watchButton.textContent = 'Watched';
    localStorage.setItem('watched', 'true');
  } else {
    watchButton.textContent = 'Watch';
    localStorage.removeItem('watched');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const watchButton = document.getElementById('watch-button');

  watchButton.addEventListener('click', handleWatchButtonClick);

  const watchedState = localStorage.getItem('watched');
  if (watchedState === 'true') {
    watchButton.classList.add('watched');
    watchButton.textContent = 'Watched';
  }
});


async function searchMovies(query) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      return data.results;
    } else {
      throw new Error(data.status_message || 'Failed to search movies');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function init() {
  try {
    const movies = await fetchMovies();
    displayMovies(movies);
  } catch (error) {
    console.error(error);
    // Display an error message on the webpage
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

window.addEventListener('load', init);

const nightModeButton = document.getElementById('night-mode-button');
nightModeButton.addEventListener('click', toggleNightMode);

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', async () => {
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value;

  try {
    const movies = await searchMovies(query);
    displayMovies(movies);
  } catch (error) {
    console.error(error);
    // Display an error message on the webpage
    const moviesContainer = document.getElementById('movies-container');
    moviesContainer.innerHTML = `<p>Error: ${error.message}</p>`;
  }
});

function displayCast(cast, listId) {
  const castList = document.getElementById(listId);

  cast.forEach(member => {
    const listItem = document.createElement('li');
    listItem.textContent = member.name;
    castList.appendChild(listItem);
  });
}

