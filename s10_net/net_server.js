var net = require('net')

var PORT = 3000
var HOST = '127.0.0.1'

var server = net.createServer((socket) => {
    console.log('receive connection')

    socket.on('data', (data) => {
        console.log('net server:the content is {'+ data +'}');
        socket.write('this is net server')
    })

    socket.on('close', function() {
        console.log('net server:socket close')
    })
})

server.listen(PORT, HOST, function() {
    console.log('net server:start to listen')
})