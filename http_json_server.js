var http = require('http')
var url = require('url')
var server = http.createServer(function (req, res) {
    urlobj = url.parse(req.url, true)
    let date = new Date(urlobj.query.iso)
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    if (urlobj.path.includes('/api/parsetime')) {
        let timeobj = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds(),
        }
        res.end(JSON.stringify(timeobj))
    } else if (urlobj.path.includes('/api/unixtime')) {
        let timeobj = {
            "unixtime":date.getTime(),
        }
        res.end(JSON.stringify(timeobj))
    }
})
server.listen(Number(process.argv[2]))