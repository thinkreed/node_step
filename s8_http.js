var http = require('http')

var server = http.createServer((req, res) => {
    res.end('address is ' + req.url)
})

server.listen(3000)

var client = http.get('http://127.0.0.1:3000', (res) => {
    res.pipe(process.stdout)
})