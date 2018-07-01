var fs = require('fs')
var http = require('http')
var cheerio = require('cheerio')
var path = require('path')
var iconv = require('iconv-lite')
var BufferHelper = require('bufferhelper')
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
        let nextUrl = tasks.pop()

        http.get(nextUrl, (res) => {
            let buf = new BufferHelper()
            res.on('data', (data) => {
                buf.concat(data)
            })
            res.on('end', async () => {
                let body = buf.toBuffer()
                let html = iconv.decode(body, 'gbk').toString()
                cache[nextUrl] = true
                let parseResults = await siteParser.parsePage(html)
                parseResults.site_list.forEach(element => {
                    if (element in cache) {
                        return
                    } else {
                        tasks.push(element.url)
                    }
                })
                parseResults.book_urls.forEach(element => {
                    results.add(element.url)
                })
            })
        }).on('error', (err) => {
            console.log(err);
        })
    })
}

module.exports = {
    parse
}