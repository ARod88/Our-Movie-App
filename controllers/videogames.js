const router = require('express').Router()

router.get('/', (req,res) => {
    res.render('pages/videogames')
})

module.exports = router