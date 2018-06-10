var fs = require('fs')

function readSync() {
    try {
        let data = fs.readFileSync('./s1_http_file_server.js')
        console.log(data.toString())
    } catch (error) {
        console.error(error)
    }
}

readSync()

function readAsync() {
    fs.readFile('./s1_http_file_server.js', (err, data) => {
        if (err) {
            return console.error(err)
        }

        console.log(data.toString())
    })
}

readAsync()

function writeWithPipe() {
    let inputFile = fs.createReadStream('./s1_http_file_server.js')
    let outputFile = fs.createWriteStream('./raw/s6_output.txt')
    inputFile.pipe(outputFile)
}

writeWithPipe()