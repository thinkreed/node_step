var express = require('express')
var cookieParser = require('cookie-parser')
var app = express()

app.use(cookieParser())

app.use((req, res, next) => {
    console.log(req.cookies.nick);
    next()
})

app.use((req, res, next) => {
    res.cookie('nick', 'thinkreed')
    res.end('ok')
})

app.listen(3000)