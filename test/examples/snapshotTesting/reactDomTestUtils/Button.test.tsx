import React from 'react'
import Button, { PropTypes as ButtonPropTypes } from './Button'
import reactTestUtils from 'react-dom/test-utils'

describe('react-dom/test-utils examples', () => {
  test('should call onClick callback if provided', () => {
    const onClickMockFn = jest.fn()
    const testInstance = reactTestUtils.renderIntoDocument<
      ButtonPropTypes,
      Button
    >(<Button onClick={onClickMockFn}>button</Button>)

    const button = reactTestUtils.findRenderedDOMComponentWithTag(
      testInstance,
      'button'
    )
    expect(onClickMockFn).not.toBeCalled()
    reactTestUtils.Simulate.click(button)
    expect(onClickMockFn).toHaveBeenCalled()
  })

  test('should be throttled to 2s', () => {
    jest.useFakeTimers()

    const testInstance = reactTestUtils.renderIntoDocument<
      ButtonPropTypes,
      Button
    >(<Button>button</Button>)

    const button = reactTestUtils.findRenderedDOMComponentWithTag(
      testInstance,
      'button'
    )
    reactTestUtils.Simulate.click(button)

    expect(testInstance.state.isDisabled).toBe(true)
    jest.advanceTimersByTime(1999)
    expect(testInstance.state.isDisabled).toBe(true)
    jest.advanceTimersByTime(1)
    expect(testInstance.state.isDisabled).toBe(false)
  })
})

export {}
