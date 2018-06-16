var fs = require('fs')
var file_path = './zm.jpeg'

var base64_data = fs.readFileSync(file_path)

var base64_str = base64_data.toString('base64')

var dataUri = 'data:image/jpeg;base64,' + base64_str
console.log(dataUri);