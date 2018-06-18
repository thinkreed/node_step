var log4js = require('log4js')
var express = require('express')
var app = express()

log4js.configure({
    appenders: {
        cheese: {
            type: 'file',
            filename: 'cheese.log'
        }
    },
    categories: {
        default: {
            appenders: ['cheese'],
            level: 'error'
        }
    }
})

var logger = log4js.getLogger('app')
app.use(log4js.connectLogger(logger))
app.use((req, res, next) => {
    res.send('ok')
})

app.listen(3000)