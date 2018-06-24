var static = require('koa-static')
var koa = require('koa')
var path = require('path')
var app = new koa()

var staticPath = '../static'

app.use(static(
    path.join(__dirname, staticPath)
))

app.listen(3000)