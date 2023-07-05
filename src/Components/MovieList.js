import React from "react";

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div>
                    <div className="d-flex justify-content-start m-3">
                        <a href="/">
                            <img
                                className="poster"
                                src={movie.Poster}
                                alt={movie.Title}
                            ></img>
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;
