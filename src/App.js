import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import MovieList from "./Components/MovieList";
import MovieListHeading from "./Components/MovieListHeading";
import SearchBox from "./Components/SearchBox";
import Home from './Components/Home'
import Movies from './Components/Movies'
import Favorites from './Components/Favorites'
import VideoGames from './Components/VideoGames'
import Series from './Components/Series'
import NotFound from "./Components/NotFound";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'


document.title = 'MovieApp'

const movieSlatePicture = new URL("./images/movie-slate.png", import.meta.url);

function App() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [searchType, setSearchType] = useState("");

    const getMovieRequest = async (searchValue,searchType) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&type=${searchType}&apikey=9d06303`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON.Search) {
            setMovies(responseJSON.Search);
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue,searchType);
    }, [searchValue,searchType]);

    return (
        <div>

            <div>
                <Router>
                    <header>
                        <h1>WELCOME TO OUR MOVIE APP</h1>
                        <Container>
                            <Nav defaultActiveKey='/' variant='tabs' fill>
                                <Nav.Item>
                                    <Link to='/'>
                                        <Nav.Link href='/'>
                                            Home
                                        </Nav.Link>
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link to='/movies'>
                                        <Nav.Link href='/movies' eventKey={'moviespage'}>
                                            Movies
                                        </Nav.Link>
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link to='/series'>
                                        <Nav.Link href='/series' eventKey={'seriespage'}>
                                            Series
                                        </Nav.Link>
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link to='/videogames'>
                                        <Nav.Link href='/videogames' eventKey={'videogamespage'}>
                                            Video Games
                                        </Nav.Link>
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link to='/favorites'>
                                        <Nav.Link href='/favorites' eventKey={'favoritespage'}>
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
                            <Route path="/movies" element={<Movies />} />
                            <Route path="/series" element={<Series />} />
                            <Route path="/videogames" element={<VideoGames />} />
                            <Route path="/favorites" element={<Favorites />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </Router>
            </div>

        </div>

        
    );

}

export default App;
