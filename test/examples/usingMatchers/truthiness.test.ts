test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).not.toBeUndefined()
  expect(n).toBeDefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

export {}
