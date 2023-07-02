const router = require('express').Router()

router.get('/', (req,res) => {
    res.send('GET /favorites')
})

module.exports = router