var dgram = require('dgram');

var PORT = 33333;
var HOST = '127.0.0.1';

var message = Buffer.from('this is dgram client')

var client = dgram.createSocket('udp4')

client.send(message, PORT, HOST, (err, bytes) => {
    if (err) {
        return console.error(err)
    }

    console.log('udp message send to ' + HOST + ':' + PORT)
    client.close()
})