import React from "react";
import NavBar from "./Components/NavBar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

document.title = "MovieApp";

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;