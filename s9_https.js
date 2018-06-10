var https = require('https')

https.get('https://www.baidu.com', (res) => {
    console.log('status code ' + res.statusCode)
    console.log('headers ' + res.headers)

    res.on('data', (data) => {
        process.stdout.write(data)
    })
}).on('error', (err) => {
    console.error(err)
})