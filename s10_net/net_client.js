var net = require('net')

var PORT = 3000
var HOST = '127.0.0.1'

var client = net.createConnection(PORT, HOST)

client.on('connect', () => {
    console.log('net client:connected')
})

client.on('data', (data) => {
    console.log('net client:the content is {'+ data +'}');
})

client.on('close', (data) => {
    console.log('net client: close connection')
})

client.end('this is net client')