function fetchData(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve('peanut butter')
    }, 1000)
  })
}

function fetchDataFail(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject(new Error('error'))
    }, 1000)
  })
}

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

test('the data is peanut butter', () => {
  expect.assertions(1) // 确保 expect 函数被调用了 1 次
  return expect(fetchData()).resolves.toBe('peanut butter')
})

test('the fetch fails with  an error', () => {
  expect.assertions(1) // 确保 expect 函数被调用了 1 次
  return expect(fetchDataFail()).rejects.toThrow(/error/)
})

export {}
