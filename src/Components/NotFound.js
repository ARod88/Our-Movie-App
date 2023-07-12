import React from "react"

const movieSlatePicture = new URL('../images/movie-slate-open.png', import.meta.url);

export default function NotFound(){
    return(
        <div>
            <h1>404 ERROR : PAGE NOT FOUND</h1>
            <h2 className="notfound">Oops! You seem to be lost! This page does not exist! </h2>
            <img className="movie-slate" src={movieSlatePicture}/>
        </div>
    )
}