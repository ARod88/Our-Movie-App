import React from 'react';import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import MovieList from "./Components/MovieList";
import MovieListHeading from "./Components/MovieListHeading";
import SearchBox from "./Components/SearchBox";
import { fadeInTopRight } from 'react-animations';
import 'animate.css';


const movieSlatePicture = new URL("./images/movie-slate.png", import.meta.url);

function App() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [searchType, setSearchType] = useState("");

    const getMovieRequest = async (searchValue,searchType) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&type=${searchType}&apikey=9d06303`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON.Search) {
            setMovies(responseJSON.Search);
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue,searchType);
    }, [searchValue,searchType]);

    return (

        <div className="container-fluid movie-app">
            <div className="movie-app">
      <div className='font-animation'>
        <h1>Our movie app</h1>
      </div>
      <div>
        <img className='movie-slate' src={movieSlatePicture} alt='movie-slate-pic' />
      </div>
    </div>
            <div className="row d-flex align-items-center mt-4 mb-4">
                {/* <MovieListHeading heading="Movies" /> */}{/*DONT REALLY NEED THIS... LOL*/}
                <SearchBox
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    searchType={searchType}
                    setSearchType={setSearchType}
                />
            </div>
            <div className="row">
                <MovieList movies={movies} />
            </div>
        </div>
    );

}

export default App;
