const { Router } = require('express')
const { marks, books} = require('../data/parser')
const router = Router()

const map_one = ['home', 'school']
	map_two = []
	map_thee = []

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
    res.render('map', {
    	map_1: marks.filter(mark => map_one.includes(mark.name))
    })
})

module.exports = router