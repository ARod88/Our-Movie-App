const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");


router.post("/favorites", async (req, res) => {
    const imdbID = req.body.imdbID;
    const Poster = req.body.Poster;
    const Type = req.body.Type;
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

router.delete("/delete/:id", async (req,res) => {
    const resourceId = req.params.id
    const use = schemas.Users
    await use.findByIdAndRemove(resourceId).exec()
})



module.exports = router;
