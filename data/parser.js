const fs = require('fs')
const csv = require('csv-parser')

books = []

fs.createReadStream('data/books.csv')
    .pipe(csv())
    .on('data', data => (books.push(data)))

module.exports = books