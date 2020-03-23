test('the shopping list has beer on it', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ]
  expect(shoppingList).toContain('beer')
})

test('iterable class should have "B" in it', () => {
  class IterableDemo {
    *[Symbol.iterator](): Generator {
      yield 'A'
      yield 'B'
      yield 'C'
    }
  }
  expect(new IterableDemo()).toContain('B')
})

test('object array should contain { one: 1, two: 2}', () => {
  const objArr = [
    {
      one: 1,
      two: 2,
    },
    { three: 3, four: 4 },
  ]
  expect(objArr).toContainEqual({ one: 1, two: 2 })
})

export {}
