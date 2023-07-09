import React from "react";
import "../SearchPage.css"

const MovieListHeading = (props) => {
    return (
        <div className="heading">
            <h1>Search Results for {props.heading}</h1>
        </div>
    )
}

export default MovieListHeading