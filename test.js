import test from 'ava'
import getImgSrc from './'

test('returns img src attributes wtesthin double quotes when they exist', t => {
  t.plan(1)

  t.same(getImgSrc('<img class="foo" src="some-image.jpg"></img>'), ['some-image.jpg'])
})

test('returns multiple img src attributes wtesthin single quotes when they exist', t => {
  t.plan(1)

  t.same(
    getImgSrc('<img class="foo" src=\'some-image.jpg\'></img>' +
              '<img class="foo" src="some-other-image.jpg"></img>'),
    ['some-image.jpg', 'some-other-image.jpg']
  )
})

test('returns an empty array when there are no images', t => {
  t.plan(1)

  t.same(getImgSrc('<span>HTML wtesthout an image</span> <img class="foo"></img>'), [])
})
