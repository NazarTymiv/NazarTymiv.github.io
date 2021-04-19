@@ -0,0 +1,22 @@
const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes/routes')

const PORT = process.env.PORT || 5000

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

app.listen(PORT, () => {
    console.log('Server started succesfully')
}) 
