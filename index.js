require('dotenv').config()
const express = require('express')
const app = express()

//  DEFINES THE VIEW ENGINE
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//  ROUTES
app.use('/movies', require('./controllers/movies'))
app.use('/series', require('./controllers/series'))
app.use('/videogames', require('./controllers/videogames'))
app.use('/favorites', require('./controllers/favorites'))

//  HOME PAGE
app.get('/', (req,res) => {
    res.render('home')
})

//  404 PAGE
app.get('*', (req,res) => {
    res.render('error404')
})

app.listen(process.env.PORT)