import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import MovieList from "./Components/MovieList";

function App() {
    const [movies, setMovies] = useState([
        {
            Title: "Star Wars: Episode IV - A New Hope",
            Year: "1977",
            imdbID: "tt0076759",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
        },
        {
            Title: "Star Wars: Episode V - The Empire Strikes Back",
            Year: "1980",
            imdbID: "tt0080684",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        },
        {
            Title: "Star Wars: Episode VI - Return of the Jedi",
            Year: "1983",
            imdbID: "tt0086190",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        },
    ]);
    return (
        <div className="container-fluid movie-app">
            <div className="row">
                <MovieList movies={movies} />
            </div>
        </div>
    );
}

export default App;
