import React from 'react'
import Button from '../reactDomTestUtils/Button'
import { shallow } from 'enzyme'

describe('test Button', () => {
  test('should call onClick if provided', () => {
    const onClickMockFn = jest.fn()
    const wrapper = shallow(<Button onClick={onClickMockFn}>button</Button>)

    expect(onClickMockFn).not.toBeCalled()

    wrapper.simulate('click')
    expect(onClickMockFn).toHaveBeenCalled()
  })

  test('should be throttled to 2s', () => {
    jest.useFakeTimers()

    const wrapper = shallow(<Button>button</Button>)

    expect(wrapper.state('isDisabled')).toBe(false)

    wrapper.simulate('click')
    expect(wrapper.state('isDisabled')).toBe(true)

    jest.advanceTimersByTime(1999)
    expect(wrapper.state('isDisabled')).toBe(true)

    jest.advanceTimersByTime(1)
    expect(wrapper.state('isDisabled')).toBe(false)
  })
})

export {}
