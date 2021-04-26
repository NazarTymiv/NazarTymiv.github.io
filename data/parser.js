const fs = require('fs')
const csv = require('csv-parser')
const path = require('path')
const marks = require('./marks.json')

books = []

fs.createReadStream(path.resolve(__dirname, 'books.csv'))
    .pipe(csv())
    .on('data', data => (books.push(data)))

exports.books = books
exports.marks = marks
