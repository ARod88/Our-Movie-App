import React, { useState, useEffect } from "react";
// import "../SearchPage.css";
import MovieList from "./MovieList";
import MovieListHeading from "./MovieListHeading";
import SearchBox from "./SearchBox";

const movieSlatePic2 = new URL(
    "../images/movie-slate-open.png",
    import.meta.url
);

const SearchPage = () => {
    const [movies, setMovies] = useState([
        {
            Title: "The Lego Movie",
            Year: "2014",
            imdbID: "tt1490017",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg",
        },
        {
            Title: "The Simpsons Movie",
            Year: "2007",
            imdbID: "tt0462538",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BNjc4NmQyNGUtMDg4NS00ZTZkLWI3ODQtMGJmYThiYjQxNGRiXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
        },
        {
            Title: "Scary Movie",
            Year: "2000",
            imdbID: "tt0175142",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        },
        {
            Title: "El Camino: A Breaking Bad Movie",
            Year: "2019",
            imdbID: "tt9243946",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg",
        },
        {
            Title: "Bee Movie",
            Year: "2007",
            imdbID: "tt0389790",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMjE1MDYxOTA4MF5BMl5BanBnXkFtZTcwMDE0MDUzMw@@._V1_SX300.jpg",
        },
        {
            Title: "Scary Movie 2",
            Year: "2001",
            imdbID: "tt0257106",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMzQxYjU1OTUtYjRiOC00NDg2LWI4MWUtZGU5YzdkYTcwNTBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        },
        {
            Title: "The Lego Batman Movie",
            Year: "2017",
            imdbID: "tt4116284",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
        },
        {
            Title: "The Super Mario Bros. Movie",
            Year: "2023",
            imdbID: "tt6718170",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_SX300.jpg",
        },
    ]);
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
            <MovieListHeading heading={searchValue} />
            <div className="row d-flex align-items-center mt-2 mb-4 custom-margin">
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
                <div className="col-md-8 d-flex flex-wrap" movieListed>
                    <MovieList movies={movies} />
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
