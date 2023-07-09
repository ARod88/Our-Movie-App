import React from "react";
import '../images.css'

const SearchBox = (props) => {
    return (
        <form className="col col-sm-4">
            <input
                className="form-control"
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder="Type to search..."
            ></input>
            <select
                className="drop"
                value={props.setSearchType}
                onChange={(event) => props.setSearchType(event.target.value)}
            >
                <option value="">media</option>
                <option className="drop" value="movie">Movie</option>
                <option className="drop" value="series">Series</option>
                <option className="drop" value="game">Game</option>

            </select>
        </form>
    );
};

export default SearchBox;


