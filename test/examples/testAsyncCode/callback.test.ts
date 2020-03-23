test('the data is peanut butter', done => {
  function fetchData(callback: (data: string) => void): void {
    setTimeout(() => {
      const data = 'peanut butter'
      callback(data)
    }, 2000)
  }

  function callback(data: string): void {
    expect(data).toBe('peanut butter')
    done()
  }

  fetchData(callback)
})

export {}
