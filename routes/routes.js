const { Router } = require('express')
const { marks, books} = require('../data/parser')
const router = Router()

const 
    map_one = ['0', '1'],
    map_two = ['2'],
    map_three = ['3', '4']

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
    	map_1: marks.filter(mark => map_one.includes(mark.index)),
        map_2: marks.filter(mark => map_two.includes(mark.index)),
        map_3: marks.filter(mark => map_three.includes(mark.index))
    })
})

module.exports = router