import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../SearchPage.css";
import "../images.css";

const MovieShowPage = () => {
    const { id } = useParams();
    const [movieData, setMovieData] = useState([]);
    const [text, setText] = useState("");
    const imdbID = id;

    const getMovieInfo = async (imdbID) => {
        const url = `http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=9d06303`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON) {
            setMovieData(responseJSON);
        }
    };

    useEffect(() => {
        getMovieInfo(imdbID);
    }, [imdbID]);

    const handleClickAdd = () => {
        setText("Added to Favorites!!");
    };

    const handleClickRemove = () => {
        setText("Removed from Favorites..");
    };

    return (
        <div className="row">
            <div className="width-40 divs-left">
                <img className="full-img" src={movieData.Poster}></img>
            </div>
            <div className="width-60 divs-left">
                <ul>
                    <li>Title: {movieData.Title}</li>
                    <li>Media Type: {movieData.Type}</li>
                    <li>Rating: {movieData.Rated}</li>
                    <li>Debut: {movieData.Released}</li>
                    <li>Runtime: {movieData.Runtime}</li>
                    <li>Genre: {movieData.Genre}</li>
                    <li>Director(s): {movieData.Director}</li>
                    <li>Writer(s): {movieData.Writer}</li>
                    <li>Cast: {movieData.Actors}</li>
                    <li>Box Office: {movieData.BoxOffice}</li>
                    <li>Awards: {movieData.Awards}</li>

                    <button className="drop" onClick={handleClickAdd}>
                        Add to Favorites
                    </button>
                    <button className="drop" onClick={handleClickRemove}>
                        Remove from Favorites
                    </button>
                    <p>{text}</p>
                </ul>
            </div>
            <div className="divs-left divs-right divs-bottom divs-top">
                <h3>Plot: </h3>
                <p>{movieData.Plot}</p>
            </div>
        </div>
    );
};

export default MovieShowPage;
