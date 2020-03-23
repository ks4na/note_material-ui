jest.useFakeTimers()

describe('jest.runOnlyPendingTimers()', () => {
  test('schedules a 10-second timer after 1 second', async () => {
    const infiniteTimerGame = (await import('./infiniteTimerGame')).default
    const callback = jest.fn()

    infiniteTimerGame(callback)

    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
    expect(callback).not.toBeCalled()

    // 只快进并执行完当前处于 pending 状态的 timers
    // （而不包括在处理过程中新创建的 timers）
    jest.runOnlyPendingTimers()

    expect(callback).toHaveBeenCalledTimes(1)

    expect(setTimeout).toHaveBeenCalledTimes(2)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000)
  })
})

export {}
