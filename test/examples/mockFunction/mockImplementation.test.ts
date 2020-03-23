import Calc from './calc'

const mockFn = jest.fn()
mockFn.mockImplementationOnce(cb => cb(null, true))
mockFn.mockImplementationOnce(cb => cb(null, false))

test('mock implementation', () => {
  /* eslint-disable handle-callback-err */
  mockFn((err: Error, val: boolean) => console.log(val)) // true
  mockFn((err: Error, val: boolean) => console.log(val)) // false
  /* eslint-enable handle-callback-err */
})

test('mockReturnThis', () => {
  const calcInstance = new Calc()

  const mockFn = jest.fn().mockReturnThis()
  calcInstance.add = mockFn

  calcInstance.add(1).add(2)

  expect(calcInstance.value).toBe(0)
  expect(mockFn.mock.calls.length).toBe(2)
  expect(mockFn.mock.calls[0][0]).toBe(1)
  expect(mockFn.mock.calls[1][0]).toBe(2)
})

export {}
