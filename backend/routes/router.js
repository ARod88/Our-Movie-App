const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");


router.post("/favorites", async (req, res) => {
    const imdbID = req.body.imdbID;
    const Poster = req.body.Poster;
    const Type = req.body.Type;

    console.log(req.body);
    console.log(imdbID);
    console.log(Poster);

    const favData = { imdbID: imdbID, Poster: Poster, Type: Type };
    const newFavorite = new schemas.Users( favData );
    const saveFavorite = await newFavorite.save();
    if (saveFavorite) {
        res.send("Gotcha!");
    }
    
    res.end();
});


router.get("/users", async (req, res) => {
    const users = schemas.Users;
    const userData = await users.find({}).exec();
    if (userData) {
        res.send(JSON.stringify(userData));
    }
});



module.exports = router;
