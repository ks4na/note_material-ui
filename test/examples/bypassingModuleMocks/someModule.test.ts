import someModule from './someModule'
jest.mock('./someModule')

describe('bypassing module mocks example', () => {
  test('should get a mocked foo', () => {
    someModule.foo()

    expect(someModule.foo).toHaveBeenCalled()
    expect(someModule.foo).not.toHaveReturnedWith('foo')
    expect(someModule.foo).toHaveReturnedWith(undefined)
  })

  test('should get an actual foo', () => {
    const actualSomeModule = jest.requireActual('./someModule')
      .default as typeof someModule
    expect(actualSomeModule.foo()).toMatch('foo')
  })
})

export {}
