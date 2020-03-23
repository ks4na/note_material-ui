# 设置和拆卸

- [重复为每个测试做设置/清理工作](#%e9%87%8d%e5%a4%8d%e4%b8%ba%e6%af%8f%e4%b8%aa%e6%b5%8b%e8%af%95%e5%81%9a%e8%ae%be%e7%bd%ae%e6%b8%85%e7%90%86%e5%b7%a5%e4%bd%9c)
- [只执行一次的设置/清理工作](#%e5%8f%aa%e6%89%a7%e8%a1%8c%e4%b8%80%e6%ac%a1%e7%9a%84%e8%ae%be%e7%bd%ae%e6%b8%85%e7%90%86%e5%b7%a5%e4%bd%9c)
- [before*/after* 的作用域](#beforeafter-%e7%9a%84%e4%bd%9c%e7%94%a8%e5%9f%9f)
- [describe 块和 test 块的执行顺序](#describe-%e5%9d%97%e5%92%8c-test-%e5%9d%97%e7%9a%84%e6%89%a7%e8%a1%8c%e9%a1%ba%e5%ba%8f)
- [通用建议](#%e9%80%9a%e7%94%a8%e5%bb%ba%e8%ae%ae)

通常在运行测试之前有一些设置工作，或者在测试完成后有一些清理工作需要做，jest 提供了帮助函数来做这些。

## 重复为每个测试做设置/清理工作

使用 `beforeEach`, `afterEach` 方法来重复地为每个测试都做设置/清理工作：

```js
beforeEach(() => {
  setup()
})

afterEach(() => {
  teardown()
})

test('some test', () => {
  // ...
})
```

`beforeEach`, `afterEach` 函数同样可以处理异步代码，写法参考 `测试异步代码` 一节。  
例如 `initialCityDatabase()` 函数时是 promise 函数， 可以在 `beforeEach` 函数中这样写：

```js
before(async () => {
  await initialCityDatabase()
})
```

## 只执行一次的设置/清理工作

使用 `beforeAll` , `afterAll` 函数来配置那些只需要在所有测试运行之前/之后执行一次的工作:

```js
beforeAll(() => {
  setupOnce()
})

afterAll(() => {
  teardownOnce()
})

test('some test', () => {
  // ...
})
```

> 注意： 如果在多个测试间共用一些变量，而这些变量的值在 `beforeAll`, `afterAll` 时进行设置，那么在某个测试中对于这些公用变量的修改可能会导致其他测试失败， 因为它们共用这些变量，而这些变量不会在每个测试执行前后进行重置。

## before*/after* 的作用域

默认情况下， `before*/after*` 函数的作用域为当前文件，但是可以通过添加 `describe` 块来进行分组，每个 `describe` 块中的 `before*/after*` 只作用于当前 `describe` 块中。

```js
beforeAll(() => console.log('1 - beforeAll'))
afterAll(() => console.log('1 - afterAll'))
beforeEach(() => console.log('1 - beforeEach'))
afterEach(() => console.log('1 - afterEach'))
test('', () => console.log('1 - test'))
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'))
  afterAll(() => console.log('2 - afterAll'))
  beforeEach(() => console.log('2 - beforeEach'))
  afterEach(() => console.log('2 - afterEach'))
  test('', () => console.log('2 - test'))
})

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll
```

## describe 块和 test 块的执行顺序

jest 会在执行一个测试文件中真正的 test 块之前执行当前文件中的所有 describe 块。这也是必须将设置/清理工作放在 `before*/after*` 函数中进行而不是直接写在 `describe` 块中的一个原因。当所有的 describe 块都执行完成，jest 才会按顺序执行 test 块。

```js
describe('outer', () => {
  console.log('describe outer-a')

  describe('describe inner 1', () => {
    console.log('describe inner 1')
    test('test 1', () => {
      console.log('test for describe inner 1')
      expect(true).toEqual(true)
    })
  })

  console.log('describe outer-b')

  test('test 1', () => {
    console.log('test for describe outer')
    expect(true).toEqual(true)
  })

  describe('describe inner 2', () => {
    console.log('describe inner 2')
    test('test for describe inner 2', () => {
      console.log('test for describe inner 2')
      expect(false).toEqual(false)
    })
  })

  console.log('describe outer-c')
})

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2
```

## 通用建议

如果一个测试失败了，最先需要做的是测试当它单独运行时是否会失败，想要单独运行某个测试，只需要暂时将该测试的 `test` 改为 `test.only` 即可：

```js
test.only('this will be the only test that runs', () => {
  expect(true).toBe(false)
})

test('this test will not run', () => {
  expect('A').toBe('A')
})
```

如果该测试在测试组中失败了，但是单独运行时不会失败，那么可能需要在 `beforeEach/afterEach` 中重置某些共享的变量。如果不确定哪些共享变量需要修改，可以在 `beforeEach` 中进行 `log`。
