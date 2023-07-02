require('dotenv').config()
const express = require('express')
const app = express()

app.use('/movies', require('./controllers/movies'))
app.use('/series', require('./controllers/series'))
app.use('/videogames', require('./controllers/videogames'))
app.use('/favorites', require('./controllers/favorites'))

app.get('/', (req,res) => {
    res.send('Hello World!')
})

app.get('*', (req,res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)