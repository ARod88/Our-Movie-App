const router = require('express').Router()

router.get('/', (req,res) => {
    res.send('GET /videogames')
})

module.exports = router