

var cheerio = require('cheerio')
var Request = require('request')
var cache = []
var tasks = []

export async function parse(entryUrl, siteParser) {
    tasks.push(entryUrl)
    let bookUrls = await parseLink(siteParser)
    return bookUrls
}

async function parseLink(siteParser) {
    return new Promise((resolve, reject) => {
        let results = new Set()
        while (tasks) {
            let nextUrl = tasks.pop()
            Request(nextUrl, (err, res, body) => {
                cache[nextUrl] = true
                if (err) {
                    continue
                }
                let parseResults = await siteParser.parsePage(body)
                parseResults.site_list.forEach(element => {
                    if (element in cache) {
                        return
                    } else {
                        tasks.push(element)
                    } 
                })
                parseResults.book_urls.forEach(element => {
                    results.add(element)
                })
            })
        }
        if (results.length > 0) {
            resolve(results)
        } else {
            reject(results)
        }
    })
}