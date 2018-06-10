var http = require('http')
var map = require('through2-map')
let body = []
var server = http.createServer(function (req, res) {
    if (req.method !== 'POST') {
        return res.end('send me a post\n')
    }
    req.pipe(map((chunk) => {
        return chunk.toString().toUpperCase()
    })).pipe(res)
})
server.listen(Number(process.argv[2]))