function forEach(items: number[], callback: (item: number) => void): void {
  for (const item of items) {
    callback(item)
  }
}

test('use mock function', () => {
  const mockCallback = jest.fn(x => x + 42)

  forEach([0, 1], mockCallback)

  // expect the mock function to be called twice
  expect(mockCallback.mock.calls.length).toBe(2)

  // expect the first argument of the first call of the mock function was 0
  expect(mockCallback.mock.calls[0][0]).toBe(0)

  // expect the result of the second call of the mock function was 43
  expect(mockCallback.mock.results[1].value).toBe(43)
})

export {}
