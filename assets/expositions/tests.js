import thumbmoad from '~/assets/art/moad/thumb-html.png'
import thumb3d from '~/assets/art/moad/thumb-3d.png'

const tests = [
  {
    id: 'test',
    title: 'Test 3D',
    src: {
      type: '3d',
      url: '../../../../models/test.obj',
      thumbnail: thumb3d
    },
    author: 'Test 3D',
    tags: ''
  },
  {
    id: 'html',
    title: 'HTML',
    src: {
      type: 'html',
      url: 'https://wwwwwwwww.jodi.org/100cc/index.html',
      thumbnail: thumbmoad
    },
    author: 'Test',
    tags: ''
  }
]

export default tests
