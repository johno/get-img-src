var assert = require('assert');
var getImgSrc = require('..');

describe('get-img-src', function() {

  it('should return img src attributes within double quotes when they exist', function(done) {
    getImgSrc('<img class="foo" src="some-image.jpg"></img>', function(err, srcs) {
      assert.deepEqual(srcs, ['some-image.jpg']);
      done();
    });
  });

  it('should return img src attributes within single quotes when they exist', function(done) {
    getImgSrc('<img class="foo" src=\'some-image.jpg\'></img>', function(err, srcs) {
      assert.deepEqual(srcs, ['some-image.jpg']);
      done();
    });
  });

  it('should return multiple img src attributes within single quotes when they exist', function(done) {
    getImgSrc('<img class="foo" src=\'some-image.jpg\'></img>' +
              '<img class="foo" src="some-other-image.jpg"></img>', function(err, srcs) {
      assert.deepEqual(srcs, ['some-image.jpg', 'some-other-image.jpg']);
      done();
    });
  });

  it('should return an empty array when there are no images', function(done) {
    getImgSrc('<span>HTML without an image</span>', function(err, srcs) {
      assert.deepEqual(srcs, []);
      done();
    });
  });
});
