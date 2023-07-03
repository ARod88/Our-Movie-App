const router = require('express').Router()

router.get('/', (req,res) => {
    res.render('pages/series')
})

module.exports = router