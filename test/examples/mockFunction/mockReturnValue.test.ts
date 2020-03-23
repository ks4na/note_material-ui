const myMock = jest.fn()

myMock
  .mockReturnValueOnce(1)
  .mockReturnValueOnce('x')
  .mockReturnValue(true)

test('mockReturnValue / mockReturnValueOnce', () => {
  expect(myMock()).toBe(1)
  expect(myMock()).toBe('x')
  expect(myMock()).toBe(true)
  expect(myMock()).toBe(true)
})

export {}
