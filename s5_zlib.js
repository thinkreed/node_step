var fs = require('fs')
var zlib = require('zlib')

var gzip = zlib.createGzip()
var inputStream = fs.createReadStream('./s1_http_file_server.js')
var outputStream = fs.createWriteStream('./raw/s1_http_file_server.js.gz')

inputStream.pipe(gzip).pipe(outputStream)