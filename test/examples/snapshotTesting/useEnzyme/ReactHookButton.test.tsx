import React from 'react'
import ReactHookButton from './ReactHookButton'
import { shallow } from 'enzyme'

describe('use enzyme to test hook function component', () => {
  test('should call onClick if provided', () => {
    const onClickMockFn = jest.fn()
    const wrapper = shallow(
      <ReactHookButton onClick={onClickMockFn}>ReactHookButton</ReactHookButton>
    )

    expect(onClickMockFn).not.toBeCalled()

    wrapper.simulate('click')
    expect(onClickMockFn).toHaveBeenCalled()
  })

  test('should be throttled to 2s', () => {
    jest.useFakeTimers()

    const wrapper = shallow(<ReactHookButton>ReactHookButton</ReactHookButton>)

    expect(wrapper.find('button').prop('disabled')).toBe(false)

    wrapper.simulate('click')
    expect(wrapper.find('button').prop('disabled')).toBe(true)

    jest.advanceTimersByTime(1999)
    expect(wrapper.find('button').prop('disabled')).toBe(true)

    jest.advanceTimersByTime(1)
    expect(wrapper.find('button').prop('disabled')).toBe(false)
  })
})

export {}
