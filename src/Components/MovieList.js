import React from "react";
import {Link} from 'react-router-dom'

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div>
                    <div className="d-flex justify-content-start m-3">
                        <Link to={`/movieshowpage/${movie.imdbID}`} >
                            <img
                                className="poster"
                                src={movie.Poster}
                                alt={movie.Title}
                            ></img>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;
