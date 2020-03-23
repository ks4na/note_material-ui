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

export {}
