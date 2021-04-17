const { Router } = require('express')
const books = require('../data/parser')
const router = Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/dates', (req, res) => {
    res.render('dates')
})

router.get('/art', (req, res) => {
    res.render('art', {
        books
    })
})

router.get('/map', (req, res) => {
    res.render('map')
})

module.exports = router