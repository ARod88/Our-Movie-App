import React from "react";

import NavBar from "./Components/NavBar";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import Context from "./Components/Context";

document.title = "MovieApp";

function App() {
    const userData = [];

    return (
        <>
            <Context.Provider value={userData}>
                <Router>
                    <NavBar />
                </Router>
            </Context.Provider>
        </>
    );
}

export default App;
