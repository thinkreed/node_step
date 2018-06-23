var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var morgan = require('morgan')

var app = express()

app.use(morgan('combined'))

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.get('/', (req, res, next) => {
    res.end('this is express server')
})

app.listen(3000)