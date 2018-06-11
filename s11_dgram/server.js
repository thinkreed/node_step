var dgram = require('dgram');

var PORT = 33333;
var HOST = '127.0.0.1';

var server = dgram.createSocket('udp4')

server.on('listening', () => {
    let address = server.address()
    console.log('udp server listening on ' + address.address + ':' + address.port)
})

server.on('message', (message, remote) => {
    console.log(remote.address + ':' + remote.port + '-' + message);
})

server.bind(PORT, HOST)