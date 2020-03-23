# Mock 函数

- [使用 Mock 函数](#%e4%bd%bf%e7%94%a8-mock-%e5%87%bd%e6%95%b0)
- [.mock 属性](#mock-%e5%b1%9e%e6%80%a7)
- [模拟返回值](#%e6%a8%a1%e6%8b%9f%e8%bf%94%e5%9b%9e%e5%80%bc)
- [模拟模块](#%e6%a8%a1%e6%8b%9f%e6%a8%a1%e5%9d%97)
- [模拟函数实现](#%e6%a8%a1%e6%8b%9f%e5%87%bd%e6%95%b0%e5%ae%9e%e7%8e%b0)
  - [mockReturnThis](#mockreturnthis)
- [mock 函数的名字](#mock-%e5%87%bd%e6%95%b0%e7%9a%84%e5%90%8d%e5%ad%97)

Mock 函数可以在测试引用的函数时屏蔽引用的函数的真实实现，捕捉函数的调用（和传入的参数）信息，捕捉构造函数的实例信息，返回指定的值。

## 使用 Mock 函数

假设需要测试 `forEach` 函数，该函数为每个 item 项执行 callback 操作：

```js
function forEach(items, callback) {
  for (const item of items) {
    callback(item)
  }
}
```

可以使用 Mock 函数来模拟 callback， 检查 Mock 函数的状态来确保 callback 如预期一样被调用：

```js
const mockCallback = jest.fn(x => x + 42)

forEach([0, 1], mockCallback)

// 预期 Mock 函数被调用了两次
expect(mockCallback.mock.calls.length).toBe(2)

// 预期 Mock 函数第一次调用传入的第一个参数是 0
expect(mockCallback.mock.calls[0][0]).toBe(0)

// 预期 Mock 函数第二次被调用时的返回值为 43
expect(mockCallback.mock.results[1].value).toBe(43)
```

## .mock 属性

每个 Mock 函数都有 `.mock` 属性，用于保存该函数如何被调用以及调用的返回值等信息：

- mockFn.mock.calls.length: mockFn 函数被调用的次数
- mockFn.mock.calls[m][n]: mockFn 函数第 m 次被调用时传入的第 n 个参数
- mockFn.mock.results[m].value: mockFn 函数第 m 次被调用时的返回值
- mockFn.mock.instances.length: mockFn 函数的被实例化的次数
- mockFn.mock.instances[m]: mockFn 函数第 m 次被实例化时的 this 的值

`.mock.instances` 属性用于记录每次调用时 `this` 的指向：

```js
const MyMock = jest.fn()

test('.mock.instances', () => {
  const a = new MyMock()
  const b = new MyMock()
  expect(MyMock.mock.instances[0]).toBe(a) // true
  expect(MyMock.mock.instances[1]).toBe(b) // true
})
```

更加细粒度地测试某次被实例化时的 this 值：

```js
const MyMockFn = jest.fn()
MyMockFn.mockImplementation(function(name) {
  this.name = name
})

// 函数第一次被实例化时返回的实例对象的 name 属性值为 "test"
test('The object returned by the first instantiation of this function had a `name` property whose value was set to "test"', () => {
  const a = new MyMockFn('test')
  expect(MyMockFn.mock.instances[0].name).toBe('test') // true
})
```

## 模拟返回值

Mock 函数可以模拟真实函数的返回值：

- mockFn.mockReturnValue(value): 模拟返回值
- mockFn.mockReturnValueOnce(value)： 只模拟一次该返回值

对于 promise 函数还有以下模拟返回值的方法:

- mockFn.mockResolvedValue(value): 模拟 resolved 后的返回值
- mockFn.mockResolvedValueOnce(value): 只模拟一次 resolved 后的返回值
- mockFn.mockRejectedValue(value): 模拟 rejected 后的返回值
- mockFn.mockRejectedValueOnce(value): 只模拟一次 rejected 后的返回值

```js
const myMock = jest.fn()
myMock() // 默认的 jest.fn() 返回 undefined

myMock
  .mockReturnValueOnce(1)
  .mockReturnValueOnce('x')
  .mockReturnValue(true)

test('mockReturnValue / mockReturnValueOnce', () => {
  expect(myMock()).toBe(1)
  expect(myMock()).toBe('x')
  expect(myMock()).toBe(true)
  expect(myMock()).toBe(true)
})
```

## 模拟模块

假设某个模块中引用了 `axios` 模块进行 API 请求，现在为了测试该方法而不进行真正的 API 请求，可以使用

```js
jest.mock('moduleName')
```

函数来自动模拟整个 `axios` 模块。

```js
import axios from 'axios'

jest.mock('axios') // 自动模拟整个 axios 模块

async function fetchUsers() {
  const resp = await axios.get('/api/users')
  return resp.data
}

test('should fetch users', async () => {
  const users = [{ name: 'bob' }]
  const resp = {
    data: users,
  }
  axios.get.mockResolvedValue(resp)

  const fetchedUsers = await fetchUsers()

  expect.assertions(1)
  expect(fetchedUsers).toEqual(users)
})
```

## 模拟函数实现

部分情况下，仍然需要完全模拟真实函数的内部实现，可以直接在定义 mockFn 函数时传入内部实现函数：

```js
const mockFn = jest.fn(function mockImplementation() {
  // ...
})
```

还可以使用以下方法：

- mockFn.mockImplementation(fn): 指定 mockFn 的内部实现
- mockFn.mockImplementationOnce(fn): 只运行一次的 mockFn 的内部实现

```js
const mockFn = jest.fn()
mockFn.mockImplementationOnce(cb => cb(null, true))
mockFn.mockImplementationOnce(cb => cb(null, false))

test('mock implementation', () => {
  mockFn((err, val) => console.log(val)) // true
  mockFn((err, val) => console.log(val)) // false
})
```

### mockReturnThis

对于一些支持链式调用的函数 (return this)， jest 提供了一个语法糖 `mockReturnThis`:

```js
const obj = {
  foo: jest.fn().mockReturnThis(),
}

// 该方法与下面的写法相同

const obj = {
  foo: jest.fn(function() {
    return this
  }),
}
```

## mock 函数的名字

可以通过

```js
mockFn.mockName('name')
```

为 mockFn 函数提供一个可选的名字，这个名字将会在测试错误输出中展示而不是显示 `jest.fn()`，便于快速定位错误所在的 mock 函数：

```js
const mockFn = jest.fn().mockName('testMockName')

test('mockFn should have be called', () => {
  // mockFn() // 注释掉该行以查看报错信息
  expect(mockFn).toHaveBeenCalled()
})

// 没有指定 mockName('testMockName') 的输出信息：
// expect(jest.fn()).toHaveBeenCalled()

// 指定了 mockName('testMockName') 后的输出信息：
// expect(testMockName).toHaveBeenCalled()
```
