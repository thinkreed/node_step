var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use((req, res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.write('the content post is :\n')
    res.end(JSON.stringify(req.body, null, 2))
})