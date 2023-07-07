import React, { useState, useEffect } from "react";


const movieSlatePicture = new URL("./images/movie-slate.png", import.meta.url);

function App() {

    return (
        <div className="container-fluid movie-app">
            <div className="movie-app">
                <div className="font-animation">
                    <h1>Our movie app</h1>
                </div>
                <div>
                    <img
                        className="movie-slate"
                        src={movieSlatePicture}
                        alt="movie-slate-pic"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
