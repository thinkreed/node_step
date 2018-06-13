var path = require('path')
var filePath = '/tmp/demo/AGS.err'

console.log(path.dirname(filePath));
console.log(path.basename(filePath));
console.log(path.extname(filePath));
console.log(path.resolve('.'));
console.log(path.resolve('/r/a'));
console.log(path.normalize('/tmp/demo/js/upload/..'));