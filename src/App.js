import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./Components/Home";
import Favorites from "./Components/Favorites";
import NotFound from "./Components/NotFound";
import SearchPage from "./Components/SearchPage";
import MovieShowPage from "./Components/MovieShowPage";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

document.title = "MovieApp";



function App() {
    return (
            
                <Router>
                    <header>
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

                               
                            </Nav>
                        </Container>
                    </header>

            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/searchpage" element={<SearchPage />} />
                    <Route
                        path="/movieshowpage/:id"
                        element={<MovieShowPage />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router> 
    );
}

export default App;

