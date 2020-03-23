# jest 详细配置

- [测试环境的配置](#%e6%b5%8b%e8%af%95%e7%8e%af%e5%a2%83%e7%9a%84%e9%85%8d%e7%bd%ae)
- [处理静态资源文件](#%e5%a4%84%e7%90%86%e9%9d%99%e6%80%81%e8%b5%84%e6%ba%90%e6%96%87%e4%bb%b6)
  - [模拟 CSS Modules](#%e6%a8%a1%e6%8b%9f-css-modules)
  - [模拟真实的静态文件名](#%e6%a8%a1%e6%8b%9f%e7%9c%9f%e5%ae%9e%e7%9a%84%e9%9d%99%e6%80%81%e6%96%87%e4%bb%b6%e5%90%8d)

## 测试环境的配置

`setupFilesAfterEnv` 配置选项允许在测试框架安装完成后进行一些配置工作：

**jest.config.js**

```js
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.js'],
}
```

然后在 `<rootDir>` 目录下添加 `jest/setupTests.js`，可以在其中进行测试环境的配置：

```js
jest.setTimeout(10000)
```

## 处理静态资源文件

通常静态资源文件（如： 样式表、图片等）在测试时没有什么用，所以可以安全地模拟这些文件。

修改 `jest` 的配置文件 `jest.config.js`:

```js
module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/fileMock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/jest/styleMock.js',
  },
}
```

然后在 `<rootDir>` 目录(默认为项目根目录)下创建 `jest/fileMock.js` , `jest/styleMock.js`：

**jest/fileMock.js**

```js
module.exports = 'test-file-stub'
```

**jest/styleMock.js**

```js
module.exports = {}
```

### 模拟 CSS Modules

如果使用 CSS Modules, 可以使用一个 `ES6 Proxy` 来模拟：

```sh
yarn add -D identity-obj-proxy
```

然后修改 `jest.config.js`， 使用 `identity-obj-proxy` 来 mock 样式文件:

```js
module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
}
```

### 模拟真实的静态文件名

如果 `moduleNameMapper` 不能满足需求，可以使用 `transform` 配置项来指定静态资源文件如何转换。  
例如，想要测试时模拟真实的静态文件名：

```js
module.exports = {
  moduleNameMapper:'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  transform: {
     // 如果指定了其他 transformer ,必须显式地指定 babel-jest 转换 js 文件
    '^.+\\.(jsx?|tsx?)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/jest/fileTransformer.js',
  }
}
```

然后在 `<rootDir>` 目录下创建 `jest/fileTransformer.js`：

**fileTransformer.js**

```js
const path = require('path')

module.exports = {
  process(src, filename, config, options) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename))
  },
}
```
