var crypto = require('crypto')
var md5 = crypto.createHash('md5')

console.log(md5.update('a').digest('hex'));

function cryptoPassword(password, salt) {
    let saltWord = password + ':' + salt
    console.log('origin password %s', password);
    console.log('salted password %s', saltWord);

    let md5 = crypto.createHash('md5')
    let res = md5.update(saltWord).digest('hex')
    console.log('md5 result %s', res);
}

function getRandomSalt() {
    return Math.random().toString().slice(2, 5)
}

cryptoPassword('123456', getRandomSalt())