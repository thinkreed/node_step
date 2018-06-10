var dns = require('dns')

var options = {all:true}

dns.lookup('www.baidu.com', options, (err, address, family) => {
    if (err) {
        return console.error(err)
    }

    console.log(address)
})

dns.resolve4('www.baidu.com', options, (err, address, family) => {
    if (err) {
        return console.error(err)
    }

    console.log(address)
})