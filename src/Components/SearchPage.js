import React, { useState, useEffect } from "react";
import "../SearchPage.css";
import MovieList from "./MovieList";
import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";

const movieSlatePic2 = new URL(
    "../images/movie-slate-open.png",
    import.meta.url
);

const SearchPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [searchType, setSearchType] = useState("");

    const getMovieRequest = async (searchValue, searchType) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&type=${searchType}&apikey=9d06303`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON.Search) {
            setMovies(responseJSON.Search);
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue, searchType);
    }, [searchValue, searchType]);

    return (
        <div className="container-fluid movie-app">
          <div className="row d-flex align-items-center mt-2 mb-4 custom-margin">
            <MovieListHeading heading={searchValue} />
            <SearchBox
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              searchType={searchType}
              setSearchType={setSearchType}
            />
          </div>
          <div className="row">
            <div className="col-md-4">
              <img
                className="movie-slate-2"
                src={movieSlatePic2}
                alt="movie-slate-pic-2"
              />
            </div>
            <div className="col-md-8 d-flex flex-wrap">
              <MovieList movies={movies} />
            </div>
          </div>
        </div>
      );
      
};

export default SearchPage;
