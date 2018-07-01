var cheerio = require('cheerio')
var iconv = require('iconv-lite')

function parsePage(body) {
    return new Promise((resolve, reject) => {
        const $ = cheerio.load(body)
        let lists = []
        let items = []
        $('a').each((idx, element) => {
            var $element = $(element)
            let link = $element.attr('href')
            if (link.startsWith('/list')) {
                lists.push({
                    title: $element.text().trim(),
                    url: 'http://www.31xs.net' + link,
                })
            } else if (link.startsWith('http://www.31xs.com')) {
                items.push({
                    title: $element.text().trim(),
                    url: link,
                })
            }
        })
        if (items.length > 0 || lists.length > 0) {
            resolve({
                site_list: lists,
                book_urls: items,
            })
        } else {
            reject('no more books')
        }
    })
}

function parseBook() {
    return new Promise((resolve, reject) => {

    })
}

function parseCharpter() {
    return new Promise((resolve, reject) => {

    })
}

function parseContent(bookUrls) {

}

module.exports = {
    parsePage,
}