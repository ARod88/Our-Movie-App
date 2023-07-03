const router = require('express').Router()

router.get('/', (req,res) => {
    res.render('pages/favorites')
})

module.exports = router