import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from './Components/Home'
import Favorites from './Components/Favorites'
import MovieList from "./Components/MovieList";
import MovieListHeading from "./Components/MovieListHeading";
import SearchBox from "./Components/SearchBox";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import Favorites from "./Components/Favorites";
import VideoGames from "./Components/VideoGames";
import Series from "./Components/Series";
import NotFound from "./Components/NotFound";
import SearchPage from "./Components/SearchPage";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import SearchPage from "./Components/SearchPage";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";


document.title = 'MovieApp'

function App() {
    return (
        <div className="container-fluid movie-app">
            {/* <div className="container-fluid movie-app">
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
            </div> */}
            <div>
                <Router>
                    <header>
                        <h1>MOVIES R US</h1>
                        <Container>
                            <Nav defaultActiveKey="/" variant="tabs" fill>
                                <Nav.Item>
                                    <Link to="/">
                                        <Nav.Link href="/">Home</Nav.Link>
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link to="/searchpage">
                                        <Nav.Link
                                            href="/SearchPage"
                                            eventKey={"searchpage"}
                                        >
                                            SearchPage
                                        </Nav.Link>
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link to="/favorites">
                                        <Nav.Link
                                            href="/favorites"
                                            eventKey={"favoritespage"}
                                        >
                                            Favorites
                                        </Nav.Link>
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link to='/searchpage'>
                                        <Nav.Link href='/searchpage'>
                                            Search Page
                                        </Nav.Link>
                                    </Link>
                                </Nav.Item>

                            </Nav>
                        </Container>
                    </header>

                    <div>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/favorites" element={<Favorites />} />
                            <Route path="/searchpage" element={<SearchPage />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </Router>
            </div>


        
    );
}

export default App;
