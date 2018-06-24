var koa = require('koa')
var app = new koa()

app.use(ctx => {
    ctx.body = 'hello koa'
})

app.listen(3000)