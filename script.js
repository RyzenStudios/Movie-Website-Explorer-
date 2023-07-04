// API key for The Movie Database (TMDb)
const API_KEY = 'a566fb0fc4bcb2f908b405cf49a573b7';

// Function to fetch popular movies from TMDb API
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
  window.location.href = 'web.html';
}

const homeButton = document.getElementById('home-tab');
homeButton.addEventListener('click', handleHomeButtonClick);


// Function to display movies on the webpage
async function displayMovies(movies) {
  const moviesContainer = document.getElementById('movies-container');
  moviesContainer.innerHTML = ''; 

  
  for (const movie of movies) {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-card'); // Add the 'movie-card' class

    movieElement.innerHTML = `
      <h2>${movie.title}</h2>
      <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
      <p>${movie.overview}</p>
      <p>Release Date: ${movie.release_date}</p>
      <p>Rating: ${movie.vote_average}</p>
    `;


    movieElement.addEventListener('click', () => {
      window.location.href = `movie.html?movieId=${movie.id}`; // Navigate to movie.html with movie ID as a query parameter
    });

    moviesContainer.appendChild(movieElement);
  }
}

// Function to toggle night mode (dark theme)
function toggleNightMode() {
  const body = document.body;
  body.classList.toggle('dark-theme');
}

// Function to search movies
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

// Function to initialize the movie app
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

// Call the init function when the page loads
window.addEventListener('load', init);

// Event listener for night mode button
const nightModeButton = document.getElementById('night-mode-button');
nightModeButton.addEventListener('click', toggleNightMode);

// Event listener for search button
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
