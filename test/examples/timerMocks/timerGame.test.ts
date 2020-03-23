jest.useFakeTimers()

describe('jest.useFakeTimers()', () => {
  test('waits 1 second before ending the game', async () => {
    const timerGame = (await import('./timerGame')).default
    timerGame()
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
  })
})

describe('jest.runAllTimers()', () => {
  test('call the callback after 1 second', async () => {
    const timerGame = (await import('./timerGame')).default
    const callback = jest.fn()

    timerGame(callback)

    expect(callback).not.toBeCalled()

    // 快进到所有 timers 都执行完
    jest.runAllTimers()

    expect(callback).toHaveBeenCalledTimes(1)
  })
})

describe('jest.advanceTimersByTime(msToRun)', () => {
  test('calls the callback right after 1 seconds', async () => {
    const testGame = (await import('./timerGame')).default
    const callback = jest.fn()

    testGame(callback)

    // 将所有 timers 状态提前 999ms
    jest.advanceTimersByTime(999)

    expect(callback).not.toBeCalled()

    // 将所有 timers 状态提前 1ms
    jest.advanceTimersByTime(1)
    expect(callback).toHaveBeenCalledTimes(1)
  })
})

export {}
