# 开始使用

- [安装](#%e5%ae%89%e8%a3%85)
- [使用](#%e4%bd%bf%e7%94%a8)
- [从命令行运行](#%e4%bb%8e%e5%91%bd%e4%bb%a4%e8%a1%8c%e8%bf%90%e8%a1%8c)
  - [生成配置文件](#%e7%94%9f%e6%88%90%e9%85%8d%e7%bd%ae%e6%96%87%e4%bb%b6)

## 安装

```sh
yarn add jest -D
```

> 1. 使用 `typescript` 的话，还需要安装:
>
>    ```sh
>    yarn add -D @types/jest
>    ```
>
> 2. 使用 `eslint` 的话，还需要以下配置来避免 `eslint` 对 `test`, `expect` 等全局变量报错:
>
>    - 安装 `eslint-plugin-jest`:
>
>      ```sh
>      yarn add -D eslint-plugin-jest
>      ```
>
>    - 修改 `eslint` 配置文件：
>
>      ```js
>      module.exports = {
>        env: {
>          'jest/globals': true,
>        },
>        plugins: ['jest'],
>      }
>      ```

## 使用

先创建一个简单示例 `sum.js` ：

```js
function sum(a, b) {
  return a + b
}

module.exports = sum
```

然后创建 `sum.test.js` ，使用 `jest` 来测试它：

```js
const sum = require('./sum')

test('1 + 1 = 2', () => {
  expect(sum(1, 1).toBe(2))
})
```

最后，可以在 `package.json` 中添加 `test` 命令：

```json
{
  "scripts": "jest"
}
```

运行该命令， `jest` 会打印如下信息：

```sh
PASS  test/examples/sum.test.js
 √ 1 + 1 = 2 (2ms)
```

## 从命令行运行

可以直接从命令行运行 `jest` ：

```sh
npx jest ./sum.test.js --config jest.config.js
```

### 生成配置文件

```sh
npx jest --init
```

运行上面的命令，jest 询问一些问题，然后会在根目录生成 `jest.config.js`。
