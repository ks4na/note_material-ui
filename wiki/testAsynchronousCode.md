# 测试异步代码

- [回调函数](#%e5%9b%9e%e8%b0%83%e5%87%bd%e6%95%b0)
- [Promise 函数](#promise-%e5%87%bd%e6%95%b0)
  - [.resolves/.rejects](#resolvesrejects)
- [Async/Await](#asyncawait)

## 回调函数

最常见的异步形式就是回调(callback)。  
默认情况下，jest 的测试一旦执行到末尾就完成，而不会等待 `callback` 函数被调用，此时可以给 `test()` 函数的第二个参数传入 `done` 回调函数作为参数，然后在 `callback` 函数末尾显式调用 `done()` 回调函数， jest 会等待 `done` 回调函数被调用之后才会结束本次测试：

```js
function fetchData(callback) {
  setTimeout(() => {
    callback('peanut butter')
  }, 2000)
}
test('the data is peanut butter', done => {
  function callback(data) {
    expect(data).toBe('peanut butter')
    done()
  }
  fetchData(callback)
})
```

如果 `done()` 回调函数没有被调用， 该测试将会因为超时 (timeout) 而失败。

> jest 的默认超时时间为 `5000ms` ， 如果异步函数在超时时间内没有调用 `callback` 也会被视为超时而导致该测试失败。  
> 调整默认超时时间，需要在 `jest.config.js` 中指定 `testTimeout` 的值，见[这里](https://jestjs.io/docs/en/configuration#testtimeout-number)。

## Promise 函数

如果使用 Promise 形式的异步代码，可以这样来进行测试：

```js
test('the data is peanut butter', () => {
  expect.assertions(1) // 确保 expect 函数被调用了 1 次
  return fetchData().then(data => {
    expect(data).toBe('peanut butter')
  })
})

test('the fetch fails with  an error', () => {
  expect.assertions(1) // 确保 expect 函数被调用了 1 次
  return fetchDataFail().catch(err => expect(err.message).toMatch(/error/))
})

function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve('peanut butter')
    }, 1000)
  })
}

function fetchDataFail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject(new Error('error'))
    }, 1000)
  })
}
```

> 注意：  
> 确保 `return` 这个 promise，如果忘记 return 这个 promise，测试将永远不会失败。  
> 为了避免忘记 `return` 这个 promise， 可以使用 `expect.assertions(number)` 来确保 `expect()` 被调用的次数。

### .resolves/.rejects

可以使用 `.resolves/.rejects` 匹配器实现测试 promises 的简写方式：

```js
test('the data is peanut butter', () => {
  expect.assertions(1) // 确保 expect 函数被调用了 1 次
  return expect(fetchData()).resolves.toBe('peanut butter')
})

test('the fetch fails with  an error', () => {
  expect.assertions(1) // 确保 expect 函数被调用了 1 次
  return expect(fetchDataFail()).rejects.toThrow(/error/)
})
```

## Async/Await

对于使用 `async/await` 的异步函数，可以在 `test()` 函数的第二个参数前加上 `async` 函数：

```js
test('the data is peanut butter', async () => {
  expect.assertions(1)
  const data = await fetchData()
  expect(data).toBe('peanut butter')
})

test('the fetch fails with an error', async () => {
  expect.assertions(1)
  try {
    await fetchDataFail()
  } catch (err) {
    expect(err.message).toMatch(/error/)
  }
})
```
