var assert = require('assert');
var getImgSrc = require('./');

describe('get-img-src', function() {

  it('should return img src attributes within double quotes when they exist', function () {
    assert.deepEqual(getImgSrc('<img class="foo" src="some-image.jpg"></img>'), ['some-image.jpg'])
  });

  it('should return multiple img src attributes within single quotes when they exist', function () {
    assert.deepEqual(
      getImgSrc('<img class="foo" src=\'some-image.jpg\'></img>' +
                '<img class="foo" src="some-other-image.jpg"></img>'),
      ['some-image.jpg', 'some-other-image.jpg']
    )
  });

  it('should return an empty array when there are no images', function () {
    assert.deepEqual(getImgSrc('<span>HTML without an image</span> <img class="foo"></img>'), [])
  });
});
