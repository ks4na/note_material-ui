import React from 'react'
import App from '../../../src/App'
import renderer from 'react-test-renderer'

describe('test App.tsx', () => {
  test('should render correctly', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchInlineSnapshot(`
      Array [
        <h1
          className="h1"
        >
          App.tsx
        </h1>,
        <p>
          axios.defaults.baseUrl: 
          
        </p>,
        <img
          alt=""
          src="google.png"
        />,
      ]
    `)
  })
})

export {}
