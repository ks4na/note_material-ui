// const mockFn = jest.fn()
const mockFn = jest.fn().mockName('testMockName')

test('mockFn should have be called', () => {
  mockFn() // 注释掉该行以查看报错信息
  expect(mockFn).toHaveBeenCalled()
})

// 没有指定 mockName('testMockName') 的输出信息：
// expect(jest.fn()).toHaveBeenCalled()

// 指定了 mockName('testMockName') 后的输出信息：
// expect(testMockName).toHaveBeenCalled()

export {}
