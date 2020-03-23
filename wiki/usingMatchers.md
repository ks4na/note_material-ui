# 使用 Matchers

- [常用匹配器](#%e5%b8%b8%e7%94%a8%e5%8c%b9%e9%85%8d%e5%99%a8)
- [Truthiness](#truthiness)
- [Numbers](#numbers)
- [Strings](#strings)
- [Arrays and iterables](#arrays-and-iterables)
- [Exceptions](#exceptions)

jest 使用匹配器（"Matchers"） 来让你使用不同的方法测试值，这里只介绍一些常见的匹配器， 全部匹配器列表查看 [这里](https://jestjs.io/docs/en/expect)。

## 常用匹配器

最简单的测试值精确相等的方法是使用 `toBe`, `toBe` 使用 `Object.is` 来测试相等性：

```js
test('2 + 2 = 4', () => {
  expect(2 + 2).toBe(4)
})
```

如果需要检查 `object` 或 `array` 中每一项都相同，则需要使用 `toEqual` 而不是 `toBe`：

```js
test('object assignment', () => {
  const data = { one: 1 }
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2 })
})
```

使用 `.not` 反转匹配器的测试：

```js
test('1 + 1 not toBe 3', () => {
  expect(1 + 1).not.toBe(3)
})
```

## Truthiness

jest 提供了匹配器来区分 `undefined` , `null`, `false` ：

- toBeNull
- toBeUndefined/toBeDefined
- toBeTruthy/toBeFalsy

> 注意: 应该尽量精确地使用匹配器来测试值。

```js
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).not.toBeUndefined()
  expect(n).toBeDefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})
```

## Numbers

number 类型值常用的匹配器：

- toBe/toEqual
- toBeGreaterThan/toBeLessThan
- toBeGreaterThanOrEqual/toBeLessThanOrEqual
- toBeCloseTo（浮点数测试相等时使用）

```js
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
```

## Strings

string 类型值可以使用 `toMatch` 来进行测试，支持正则表达式：

```js
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

test('there is a "stop" in christoph', () => {
  expect('christoph').toMatch(/stop/)
})
```

## Arrays and iterables

对于数组和可迭代类型的对象，测试其中是否包含某一特定项：

- 如果其中值均为基本数据类型，可以使用 `toContain` ；
- 如果其中值包含对象等复杂数据类型，使用 `toContainEqual` 。

```js
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
```

## Exceptions

如果想测试一个函数抛出指定的错误，使用 `toThrow` 匹配器：

```js
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK')
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow()
  expect(compileAndroidCode).toThrow(Error)

  // 还可以使用更加精确的错误信息字符串或正则表达式
  expect(compileAndroidCode).toThrow('you are using the wrong JDK')
  expect(compileAndroidCode).toThrow(/JDK/)
})
```
