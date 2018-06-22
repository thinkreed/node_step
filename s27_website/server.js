var express = require('express')

var app = express()

app.get('/', (req, res, next) => {
    res.end('this is express server')
})

app.listen(3000)