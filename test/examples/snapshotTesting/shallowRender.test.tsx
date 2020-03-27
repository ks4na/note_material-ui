import React from 'react'
import Link from './Link'
import renderer from 'react-test-renderer'
import { createRenderer } from 'react-test-renderer/shallow'
import Icon from './Icon'

const shallowRenderer = createRenderer()

describe('react-test-renderder shallow render mode examples', () => {
  test('should render Link with rendered Icon', () => {
    const tree = renderer.create(
      <Link page="https://google.com">
        <Icon className="icon-google" />
        Google
      </Link>
    )

    expect(tree.toJSON()).toMatchInlineSnapshot(`
      <a
        className="normal"
        href="https://google.com"
        onMouseEnter={[Function]}
        onMouseLeave={[Function]}
      >
        <i
          className="icon-google"
        />
        Google
      </a>
    `)

    expect(tree.root.findByType(Icon).props).toMatchObject({
      className: 'icon-google',
    })
  })

  test('should render Link without rendering Icon', () => {
    shallowRenderer.render(
      <Link page="https://google.com">
        <Icon className="icon-google" />
        Google
      </Link>
    )
    const result = shallowRenderer.getRenderOutput()
    expect(result).toMatchInlineSnapshot(`
      <a
        className="normal"
        href="https://google.com"
        onMouseEnter={[Function]}
        onMouseLeave={[Function]}
      >
        <Icon
          className="icon-google"
        />
        Google
      </a>
    `)
  })
})

export {}
