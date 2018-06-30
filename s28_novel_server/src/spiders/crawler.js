var fs = require('fs')
var cheerio = require('cheerio')
var Request = require('request')
var path = require('path')
var cache = []
var tasks = []

async function parse() {
    let sites = await getSiteConfig()
    sites.forEach(async function (site) {
        tasks.push(site.site_url)
        let parserPath = path.resolve(__dirname, '../../src/spiders/sites/31xiaoshuo/31xiaoshuo.js')
        let siteParser = require(parserPath)
        let bookUrls = await parseLink(siteParser)
        bookUrls.on('err', () => {
            
        })
        console.log(bookUrls);
    })

}

function getSiteConfig() {
    return new Promise((resolve, reject) => {
        let filePath = path.resolve(__dirname, '../../configs/sites.json')
        let config = fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err)
                return
            }

            let sites = JSON.parse(data)
            resolve(sites)
        })
    })
}

async function parseLink(siteParser) {
    return new Promise((resolve, reject) => {
        let results = new Set()
        while (tasks) {
            let nextUrl = tasks.pop()
            if (!nextUrl) {
                return
            }
            Request(nextUrl, async (err, res, body) => {
                cache[nextUrl] = true
                if (err) {
                    return
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

module.exports = {
    parse
}