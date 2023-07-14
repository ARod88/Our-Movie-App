import "../images.css";

import { Link } from "react-router-dom";

const movieSlatePic2 = new URL(
    "../images/movie-slate-open.png",
    import.meta.url
);

export default function Favorite(props) {
    return (
        <>
            <h2>FAVORITE PAGE</h2>

            <div className="">
                <div className="">
                    <h2 className="">MOVIES</h2>
                    <div className="container-fluid movie-app">
                        <div className="row">
                            {props.selectData
                                .filter((stuff) => stuff.Type === "movie")
                                .map((movie) => (
                                    <div className="fit">
                                        <Link
                                            to={`/movieshowpage/${movie.imdbID}`}
                                        >
                                            <img
                                                className="hundred"
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
                    <h2 className="">SERIES</h2>
                    <div className="container-fluid movie-app">
                        <div className="row">
                            {props.selectData
                                .filter((stuff) => stuff.Type === "series")
                                .map((movie) => (
                                    <div className="fit">
                                        <Link
                                            to={`/movieshowpage/${movie.imdbID}`}
                                        >
                                            <img
                                                className="hundred"
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
                    <h2 className="">GAMES</h2>
                    <div className="container-fluid movie-app">
                        <div className="row">
                            {props.selectData
                                .filter((stuff) => stuff.Type === "game")
                                .map((movie) => (
                                    <div className="fit">
                                        <Link
                                            to={`/movieshowpage/${movie.imdbID}`}
                                        >
                                            <img
                                                className="hundred"
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
            </div>
        </>
    );
}

/*

{props.selectData.filter(stuff=>stuff.Type === "series").map((movie, index) => (
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

*/
