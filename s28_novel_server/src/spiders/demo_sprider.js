var koa = require('koa')
var app = new koa()
var cheerio = require('cheerio')
var superagent = require('superagent')
var baseUrl = 'https://www.qu.la/'

app.use(async (ctx) => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        superagent.get(baseUrl)
            .end((err, srcs) => {
                if (err) {
                    return console.error(err)
                }

                var $ = cheerio.load(srcs.text)
                var items = []
                $('a').each((idx, element) => {
                    var $element = $(element)
                    items.push({
                        title: $element.text().trim(),
                        url: 'https://www.qu.la' + $element.attr('href'),
                    })
                })
                console.log(items);
                ctx.response.body = items
            })
    }
})

app.listen(3000)