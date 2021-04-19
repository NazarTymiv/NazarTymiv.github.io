const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes/routes')

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.use(express.static('public'))
app.use(routes)

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
