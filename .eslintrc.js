// 定义 compat 插件的 polyfills 声明
const compatPolyfills = ['Symbol.iterator']

module.exports = {
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  plugins: ['jest'],
  parser: '@typescript-eslint/parser', // 指定eslint的解析器
  extends: [
    'plugin:compat/recommended', // eslint-plugin-compat 检查 js API 兼容性
    'plugin:react/recommended', // 使用 eslint-plugin-react 推荐的规则
    'plugin:@typescript-eslint/recommended', // 使用 @typescript-eslint/eslint-plugin 推荐的规则
    // 使用 eslint-config-prettier 来禁用 @typescript-eslint/eslint-plugin 中可能与prettier冲突的规则
    'prettier/@typescript-eslint',
    // 【确保这一项是extends数组的最后一项】启用 eslint-plugin-prettier 和 eslint-config-prettier。这会将prettier错误作为eslint错误来显示
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018, // 指定需要支持的es版本
    sourceType: 'module', // 指定类型为模块
    ecmaFeatures: {
      jsx: true, // 允许编译 jsx 代码
    },
  },
  settings: {
    react: {
      version: 'detect', // 告诉 eslint-plugin-react 自动检测使用的react版本
    },
    polyfills: compatPolyfills,
  },
  rules: {
    // 指定规则，可以覆盖推荐的规则
    '@typescript-eslint/no-var-requires': 'off',
  },
}
