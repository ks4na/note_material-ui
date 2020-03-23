test('1 + 1 = 2', () => {
  expect(1 + 1).toBe(2)
})

test('object assignment', () => {
  const data: Record<string, number> = { one: 1 }
  data.two = 2
  expect(data).toEqual({ one: 1, two: 2 })
})

test('1 + 1 not toBe 3', () => {
  expect(1 + 1).not.toBe(3)
})

export {}
