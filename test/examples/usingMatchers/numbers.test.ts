test('1 + 1', () => {
  expect(1 + 1).toBe(2)
  expect(1 + 1).toBeGreaterThan(1)
  expect(1 + 1).toBeLessThan(3)
  expect(1 + 1).toBeGreaterThanOrEqual(1.5)
  expect(1 + 1).toBeLessThanOrEqual(2.5)
})

test('浮点数测试', () => {
  const value = 0.1 + 0.2
  expect(value).toBeCloseTo(0.3)
})

export {}
