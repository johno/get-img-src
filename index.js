'use strict'

var cheerio = require('cheerio')
var isPresent = require('is-present')

module.exports = function getImgSrc (html) {
  if (typeof html != 'string') {
    throw new Error('get-img-src expects an HTML string')
  }

  var $ = cheerio.load(html)

  var imgSrcs = []

  $('img').each(function () {
    var imgSrc = $(this).attr('src')

    if (isPresent(imgSrc)) {
      imgSrcs.push(imgSrc)
    }
  })

  return imgSrcs
}
