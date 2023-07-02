const router = require('express').Router()

router.get('/', (req,res) => {
    res.send('GET /movies')
})

module.exports = router