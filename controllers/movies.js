const router = require('express').Router()

router.get('/', (req,res) => {
    res.render('pages/movies')
})

module.exports = router