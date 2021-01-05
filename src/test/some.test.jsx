import { should } from 'chai'
import { testRender } from 'test-callbag-jsx'

should()

describe('some test', () => {
  it('should render some stuff', () => {
    testRender((renderer, document) => {
      renderer.render(<h1>Hellow World!</h1>).on(document.body)
      document.body.textContent.should.equal('Hellow World!')
    })
  })
})
