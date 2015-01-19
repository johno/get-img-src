'use strict';

var jsdom = require('jsdom');

module.exports = function getImgSrc(html, callback) {
  if (typeof html != 'string') {
    throw new Error('get-img-src expects an HTML string');
  }

  var imgSrcs = [];
  callback = callback || function() {};

  jsdom.env({
    html: html,
    done: function(errors, window) {
      var imgs = window.document.querySelectorAll('img');

      [].slice.call(imgs).forEach(function(img) {
        imgSrcs.push(img.getAttribute('src'));
      });

      callback(errors, imgSrcs);
    }
  });
}
