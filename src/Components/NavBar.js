import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import SearchPage from "./SearchPage";
import MovieShowPage from "./MovieShowPage";
import NotFound from "./NotFound";
import { useState, useEffect } from "react";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    const [selectData, setSelectData] = useState([]);
    const [text, setText] = useState("");
    // const userData = useContext(Context);

    useEffect(() => {
        getInfo();
    }, []);

    const getInfo = async () => {
        const url = `http://localhost:4000/users`;
        const response = await fetch(url);
        const responseJSON = await response.json();
        if (responseJSON) {
            setSelectData(responseJSON);
        }
    };


    const axiosPostData = async () => {
        const postData = {
            imdbID: "tt3794354",
            Poster: "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_SX300.jpg",
        };
        await axios.post("http://localhost:4000/favorites", postData);
    };

    const handleClickAdd = (e) => {
        e.preventDefault();
        setText("Added to Favorites!!");
        axiosPostData();
        // postDataToMongoDB()
    };

    const handleClickRemove = (e) => {
        e.preventDefault();
        setText("Removed from Favorites..");
    };

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav
                        className="justify-content-between"
                        style={{ width: "100%" }}
                    >
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" className="nav-link">
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/favorites"
                                className="nav-link"
                            >
                                Favorites
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/searchpage"
                                className="nav-link"
                            >
                                SearchPage
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/favorites"
                    element={<Favorites selectData={selectData} />}
                />
                <Route path="/searchpage" element={<SearchPage />} />
                <Route
                    path="/movieshowpage/:id"
                    element={
                        <MovieShowPage
                            text={text}
                            handleClickAdd={handleClickAdd}
                            handleClickRemove={handleClickRemove}
                        />
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default NavBar;
