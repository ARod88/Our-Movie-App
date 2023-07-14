const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
    imdbID: {type: String},
    Poster: {type: String},
    Type: {type: String}
})

const Users = mongoose.model('Users', userSchema,'favorites')

const mySchemas = {'Users':Users}

module.exports = mySchemas
