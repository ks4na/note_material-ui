const presets = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'usage',
      corejs: '3.6',
    },
  ],
  // 添加preset-react
  '@babel/preset-react',
  // 添加preset-typescirpt, 并配置以支持jsx
  [
    '@babel/preset-typescript',
    {
      isTSX: true,
      allExtensions: true,
    },
  ],
]
const plugins = ['@babel/plugin-proposal-class-properties']

module.exports = {
  presets,
  plugins,
}
