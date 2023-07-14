import React from "react";
import {Link} from 'react-router-dom'
import "../images.css"

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie) => (
                <div>
                    <div className="d-flex justify-content-start m-3">
                        <Link to={`/movieshowpage/${movie.imdbID}`} >
                            <img
                                className="hundred"
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
