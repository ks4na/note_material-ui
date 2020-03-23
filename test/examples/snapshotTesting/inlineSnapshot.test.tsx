import React from 'react'
import Link from './Link'
import renderer from 'react-test-renderer'

describe('snapshot testing example', () => {
  test('should render Link correctly', () => {
    const tree = renderer
      .create(<Link page="https://www.facebook.com">Facebook</Link>)
      .toJSON()
    expect(tree).toMatchInlineSnapshot(`
      <a
        className="normal"
        href="https://www.facebook.com"
        onMouseEnter={[Function]}
        onMouseLeave={[Function]}
      >
        Facebook
      </a>
    `)
  })
})

export {}
