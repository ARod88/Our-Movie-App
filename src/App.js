import React from "react";
import NavBar from "./Components/NavBar";
import "./App.css";
import MovieList from "./Components/MovieList";
import MovieListHeading from "./Components/MovieListHeading";
import SearchBox from "./Components/SearchBox";
import Home from "./Components/Home";
import Favorites from "./Components/Favorites";
import NotFound from "./Components/NotFound";
import SearchPage from "./Components/SearchPage";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

document.title = "MovieApp";

function App() {
    return (

                <Router>
                    <header>
                        <Container>
                            <Nav defaultActiveKey="/" variant="tabs" fill>
                                <Nav.Item>
                                    <Link to="/">
git                                        <Nav.Link href="/">Home</Nav.Link>
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

                               
                            </Nav>
                        </Container>
                    </header>

                    <div>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/favorites" element={<Favorites />} />
                            <Route
                                path="/searchpage"
                                element={<SearchPage />}
                            />
                            <Route
                                path="/movieshowpage/:id"
                                element={<MovieShowPage />}
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </Router>
            // </div>
        // </div>
    );
}

export default App;
