![logo](https://github.com/RyzenStudios/Movie-Website-Explorer-/assets/40443378/3cbb0555-ec63-4c62-9d9d-6faf80798641)

# Movie Haven

MovieHub is a web application that provides users a platform to discover, watch,
and engage with a vast collection of movies and TV shows. Whether you're a cinephile or a TV series enthusiast, 
MovieHub offers a user-friendly interface to explore diverse content.

## Features

- **Extensive Library:** Access a comprehensive library of movies and TV shows spanning various genres.
- **Trending Picks:** Stay updated with the latest trends in the entertainment world.
- **Favorites and Recommendations:** Create a personalized watchlist and receive recommendations based on your preferences.
- **User-Friendly Search:** Effortlessly find content with an intuitive search feature.
- **Night Mode:** Customize your viewing experience with a night mode for comfortable viewing day or night.


# 🛠 Built With
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" style="max-width: 100%;">
  <img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" style="max-width: 100%;">
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" style="max-width: 100%;">

This project was created using HTML/CSS and JavaScript.

# Where to find it

To use the website you can find it below!

[MovieHaven](https://ryzenmoviehaven.com)

# TMDb API Reference

## Overview

The TMDb API provides a high amount of information about movies and TV shows, allowing developers to access details suchas titles, genres, ratings, and more. 
To use the API, you need to obtain an API key from [TMDb](https://www.themoviedb.org/documentation/api).


## Authentication

All requests to the TMDb API must include your API key. Include the API key in the request URL as follows:

api_key=your-api-key


## Endpoints

### Get Popular Movies


GET /movie/popular?api_key=your-api-key&page=1

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `page` | `integer` | Page number (optional) |


### Get Movie Details

GET /movie/{movie_id}?api_key=your-api-key
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `movie_id` | `integer` | ID of the movie |

### Search Movies

GET /search/movie?api_key=your-api-key&query=your-query&page=1
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `query` | `string` | Search Query |
| `page` | `integer` | Page Number (optional) |

### Retrieve Popular Movies

GET https://api.themoviedb.org/3/movie/popular?api_key=your-api-key&page=1

### Get Details of a Movie

GET https://api.themoviedb.org/3/movie/123?api_key=your-api-key

### Search for Movies

GET https://api.themoviedb.org/3/search/movie?api_key=your-api-key&query=inception&page=1

# Additional Resources

[TMDb API Documentation](https://www.themoviedb.org/documentation/api)



## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohamed-eltaib-50736b25b/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Ryzen_Studios)

