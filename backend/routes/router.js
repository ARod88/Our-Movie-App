const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')


router.post('/users', async(req,res)=>{
    const {imdbID, Poster} = req.body

    const favData = {imdbID: imdbID, Poster: Poster}
    const newFavorite = new schemas.Users({favData})
    const saveFavorite = await newFavorite.save()
    if(saveFavorite){
        res.send('Gotcha!')
    }
    res.end()  
})



router.get('/users', async(req,res)=>{
    const users = schemas.Users
    const userData = await users.find({}).exec()
    if(userData){
        res.send(JSON.stringify(userData))
    }
    // const userData = [
    //     {
    //         "Title": "Avatar",
    //         "Year": "2009",
    //         "imdbID": "tt0499549",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "Avatar: The Way of Water",
    //         "Year": "2022",
    //         "imdbID": "tt1630029",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "Avatar: The Last Airbender",
    //         "Year": "2005-2008",
    //         "imdbID": "tt0417299",
    //         "Type": "series",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg"
    //     }]
    // res.send(userData)
})

module.exports = router