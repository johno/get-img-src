# get-img-src

[![Build Status](https://secure.travis-ci.org/johnotander/get-img-src.png?branch=master)](https://travis-ci.org/johnotander/get-img-src)

Get image src urls from HTML.

## Installation

```bash
npm install --save get-img-src
```

## Usage

```javascript
var getImgSrc = require('get-img-src');

getImgSrc('<img src="some-image.jpg"></img>', function(err, imgSrcs) {
  console.log(imgSrcs);
});   // => [some-image.jpg]

getImgSrc('<span>HTML without an image</span>', function(err, imgSrcs) {
  console.log(imgSrcs);
}); // => []
```

## License

MIT

## Thanks to the following

* <https://github.com/tmpvar/jsdom>

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
