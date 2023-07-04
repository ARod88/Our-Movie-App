import React from "react";

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index)=>(
                <div className="d-flex justify-content-start m-3">
                    <a href="/">
                        <img src={movie.Poster} alt={movie.Title}></img>
                    </a>
                </div>
            ))}
        </>
    )
};

export default MovieList