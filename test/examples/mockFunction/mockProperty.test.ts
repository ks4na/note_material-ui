const MyMock = jest.fn()

test('.mock.instances', () => {
  const a = new MyMock()
  const b = new MyMock()
  expect(MyMock.mock.instances[0]).toBe(a) // true
  expect(MyMock.mock.instances[1]).toBe(b) // true
})

const MyMockFn = jest.fn()
interface MyMockFnThis {
  name: string
}
MyMockFn.mockImplementation(function(this: MyMockFnThis, name: string) {
  this.name = name
})

// 函数第一次被实例化时返回的实例对象的 name 属性值为 "test"
test('The object returned by the first instantiation of this function had a `name` property whose value was set to "test"', () => {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const a = new MyMockFn('test')
  expect(MyMockFn.mock.instances[0].name).toBe('test')
})
export {}
