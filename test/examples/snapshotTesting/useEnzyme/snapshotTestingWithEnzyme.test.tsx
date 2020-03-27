import React from 'react'
import Link from '../Link'
import { shallow, render } from 'enzyme'

describe('use enzyme/enzyme-to-json to test Link component', () => {
  test('should render Link correctly', () => {
    const wrapper = render(<Link page="https://www.google.com">Google</Link>)
    expect(wrapper).toMatchInlineSnapshot(`
      <a
        class="normal"
        href="https://www.google.com"
      >
        Google
      </a>
    `)
  })

  test('should add className "active" when mouse enter <Link/> and remove className "active" when mouse leave <Link/>', () => {
    const wrapper = shallow(<Link page="https://www.google.com">Google</Link>)

    // 模拟 mouseenter 事件
    wrapper.simulate('mouseenter')
    expect(wrapper.prop('className').split(' ')).toContain('active')

    // 模拟 mouseleave 事件
    wrapper.simulate('mouseleave')
    expect(wrapper.prop('className').split(' ')).not.toContain('active')
  })
})

export {}
