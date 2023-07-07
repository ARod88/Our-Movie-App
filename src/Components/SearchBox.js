import React from "react";

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
                value={props.setSearchType}
                onChange={(event) => props.setSearchType(event.target.value)}
            >
                <option value=""></option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="game">Game</option>
            </select>
        </form>
    );
};

export default SearchBox;




/*  EXTRA CODE...

            <input
                className="form-control"
                // value={props.value}
                onChange={(event) => props.setSearchType(event.target.value)}
                placeholder="Movie, Series, or Game?"
            ></input> 

*/
