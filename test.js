import test from 'ava'
import getImgSrc from './'

test('should return img src attributes wtesthin double quotes when they exist', t => {
  t.same(getImgSrc('<img class="foo" src="some-image.jpg"></img>'), ['some-image.jpg'])
})

test('should return multiple img src attributes wtesthin single quotes when they exist', t => {
  t.same(
    getImgSrc('<img class="foo" src=\'some-image.jpg\'></img>' +
              '<img class="foo" src="some-other-image.jpg"></img>'),
    ['some-image.jpg', 'some-other-image.jpg']
  )
})

test('should return an empty array when there are no images', t => {
  t.same(getImgSrc('<span>HTML wtesthout an image</span> <img class="foo"></img>'), [])
})
