import { useState, useEffect } from "react";
import "../SearchPage.css";
import "../images.css";
import { useContext } from "react";
import Context from "./Context";
import { Link } from "react-router-dom";

const movieSlatePic2 = new URL(
    "../images/movie-slate-open.png",
    import.meta.url
);

export default function Favorite(props) {

    return (
        <div>
            <h2>FAVORITE PAGE</h2>

            <div className="">
                <div>
                    <h2 className="">MOVIES</h2>
                    <div className="container">
                        <div className="row">
                            {props.selectData.map((movie, index) => (
                                <div className="col-md-4">
                                    <Link to={`/movieshowpage/${movie.imdbID}`}>
                                        <img
                                            className="img-fluid"
                                            src={movie.Poster}
                                            alt="picture here..."
                                        ></img>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <br />

                <div>
                    <h2 className="font-fav">SERIES</h2>
                </div>
                <br />

                <div>
                    <h2 className="font-fav">VIDEOGAMES</h2>
                </div>
                <br />
            </div>
            <div className="col-md-4">
                <img
                    className="movie-slate-2"
                    src={movieSlatePic2}
                    alt="movie-slate-pic-2"
                />
            </div>
        </div>
    );
}
