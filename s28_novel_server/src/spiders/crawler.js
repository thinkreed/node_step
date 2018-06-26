var cheerio = require('cheerio')
var Request = require('request')
var cache = []
var tasks = []

export async function parse(entryUrl, siteParser) {
    tasks.push(entryUrl)
    let bookUrls = await parseLink(entryUrl, siteParser)
}

async function parseLink(entryUrl, siteParser) {
    while (tasks) {
        Request(entryUrl, (err, res, body) => {

        })
    }
    
}