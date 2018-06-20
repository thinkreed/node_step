var sharp = require('sharp')

sharp('zm.jpeg')
.rotate(90)
.toFile('output.webp', (err, info) => {

})