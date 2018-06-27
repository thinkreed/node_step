var redis = require('redis')
var client = redis.createClient()
var cache = {}

cache.get = function (key) {
}

export function parsePage(body) {
    return new Promise((resolve, reject) => {
        const $ = cheerio.load(body)        
        let lists = []
        let items = []
        $('a').each((idx, element) => {
            var $element = $(element)
            let link = $element.attr('href')
            if (link.startwith('/')) {
                lists.push({
                    title: $element.text().trim(),
                    url: 'https://www.31xs.com' + link,
                })
            } else if (link.startwith('https://www.31xs.com')) {
                items.push({
                    title: $element.text().trim(),
                    url: link,
                })
            }
        })
        if (items.length > 0) {
            resolve({
                site_list:lists,
                book_urls:items,
            })
        } else {
            reject('no more books')
        }
    })
}

export function parseBook() {
    return new Promise((resolve, reject) => {

    })
}

export function parseCharpter() {
    return new Promise((resolve, reject) => {

    })
}