import React from 'react'
import Link from '../Link'
import Icon from '../Icon'
import { shallow, render } from 'enzyme'

describe('show difference between shallow() and render()', () => {
  test('shallow', () => {
    const wrapper = shallow(
      <Link page="https://www.google.com">
        <Icon className="icon-google" />
        Google
      </Link>
    )
    expect(wrapper).toMatchInlineSnapshot(`
      <a
        className="normal"
        href="https://www.google.com"
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

  test('render', () => {
    const wrapper = render(
      <Link page="https://www.google.com">
        <Icon className="icon-google" />
        Google
      </Link>
    )
    expect(wrapper).toMatchInlineSnapshot(`
      <a
        class="normal"
        href="https://www.google.com"
      >
        <i
          class="icon-google"
        />
        Google
      </a>
    `)
  })
})

export {}
