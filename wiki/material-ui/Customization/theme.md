# 主题 - Theme

- [概述](#%e6%a6%82%e8%bf%b0)
  - [Theme Provider](#theme-provider)
  - [Theme 配置变量](#theme-%e9%85%8d%e7%bd%ae%e5%8f%98%e9%87%8f)
    - [添加额外的变量](#%e6%b7%bb%e5%8a%a0%e9%a2%9d%e5%a4%96%e7%9a%84%e5%8f%98%e9%87%8f)
  - [嵌套 Theme](#%e5%b5%8c%e5%a5%97-theme)
  - [API](#api)
    - [createMuiTheme(options, ...args?) => theme](#createmuithemeoptions-args--theme)
    - [reponsiveFontSizes(theme, options?) => theme](#reponsivefontsizestheme-options--theme)
- [Palette-调色板](#palette-%e8%b0%83%e8%89%b2%e6%9d%bf)
  - [使用 color 对象](#%e4%bd%bf%e7%94%a8-color-%e5%af%b9%e8%b1%a1)
  - [直接提供 color 值](#%e7%9b%b4%e6%8e%a5%e6%8f%90%e4%be%9b-color-%e5%80%bc)
  - [dark 模式](#dark-%e6%a8%a1%e5%bc%8f)
    - [用户偏好](#%e7%94%a8%e6%88%b7%e5%81%8f%e5%a5%bd)
- [Typography-排版](#typography-%e6%8e%92%e7%89%88)
  - [font family](#font-family)
  - [font size](#font-size)
    - [htmlFontSize](#htmlfontsize)
  - [响应式的字体大小](#%e5%93%8d%e5%ba%94%e5%bc%8f%e7%9a%84%e5%ad%97%e4%bd%93%e5%a4%a7%e5%b0%8f)
  - [变体](#%e5%8f%98%e4%bd%93)
- [Spacing-间隔](#spacing-%e9%97%b4%e9%9a%94)
  - [多个参数](#%e5%a4%9a%e4%b8%aa%e5%8f%82%e6%95%b0)
- [Breakpoints-断点](#breakpoints-%e6%96%ad%e7%82%b9)
  - [CSS 媒体查询](#css-%e5%aa%92%e4%bd%93%e6%9f%a5%e8%af%a2)
  - [JavaScript 媒体查询](#javascript-%e5%aa%92%e4%bd%93%e6%9f%a5%e8%af%a2)
- [z-index-z 轴](#z-index-z-%e8%bd%b4)
- [Globals-全局配置](#globals-%e5%85%a8%e5%b1%80%e9%85%8d%e7%bd%ae)
  - [theme.overrides 属性](#themeoverrides-%e5%b1%9e%e6%80%a7)
  - [theme.props 属性](#themeprops-%e5%b1%9e%e6%80%a7)

## 概述

主题(`Theme`) 用来指定组件颜色、阴影层级、排版等，让 app 程序保持一致的风格。

### Theme Provider

如果想要自定义主题，需要使用 `ThemeProvider` 组件来向 app 注入一个 theme 对象。当然这不是必须的， `Material-UI` 组件提供一个默认的主题。

> `ThemeProvider` 依赖于 React 的 context 特性来传递 theme 对象。

### Theme 配置变量

更改 `Theme 配置变量` 是使 `Material-UI` 匹配自定义需求的最有效方法。 默认的 `Theme` 对象包含如下属性：

- [Palette](#Palette-调色板)
- [Typography](#Typography-排版)
- [Spacing](#Spacing-间隔)
- [Breakpoints](#Breakpoints-断点)
- [z-index](#z-index-z轴)
- [Globals](#Globals-全局配置)

#### 添加额外的变量

可以为 `theme` 对象添加额外的变量以便在 app 中使用这些变量， 例如， 下面代码在 `theme` 对象上添加了 `status: { danger: string }}`：

```tsx
import React from 'react'
import { Checkbox } from '@material-ui/core'
import {
  makeStyles,
  Theme,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status?: {
      danger?: string
    }
  }
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
})

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme?.status?.danger,
    '&$checked': {
      color: theme?.status?.danger,
    },
  },
  // stylelint-disable-next-line block-no-empty
  checked: {},
}))

export default function CustomVariables(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CustomedCheckBox />
    </ThemeProvider>
  )
}

function CustomedCheckBox(): JSX.Element {
  const classes = useStyles()
  return (
    <Checkbox
      classes={{
        root: classes.root,
        checked: classes.checked,
      }}
    />
  )
}
```

### 嵌套 Theme

可以嵌套使用多个 ThemeProvider， 如下所示：

```tsx
<ThemeProvider theme={outerTheme}>
  <Checkbox defaultChecked />
  <ThemeProvider theme={innerTheme}>
    <Checkbox defaultChecked />
  </ThemeProvider>
</ThemeProvider>
```

还可以通过向 `ThemeProvider` 组件的 `theme` 属性提供一个函数来拓展外层 `theme` 对象：

```tsx
<ThemeProvider theme={outerTheme}>
  <Checkbox defaultChecked />
  <ThemeProvider
    theme={outerTheme =>
      createMuiTheme({
        ...outerTheme,
        // other custom configuration
      })
    }
  >
    <Checkbox defaultChecked />
  </ThemeProvider>
</ThemeProvider>
```

### API

#### createMuiTheme(options, ...args?) => theme

参数：

- options: 一个不完整的 theme 对象，包含需要自定义的部分
- args: 一个数组，不常用，功能不太了解

返回值：

- theme： 一个完整的 theme 对象

示例：

```tsx
import { createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/purple'
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
})
```

#### reponsiveFontSizes(theme, options?) => theme

生成响应式的文字排版(Typography)。

参数：

- theme: 需要增强的 theme 对象
- options： 可选配置，参见[链接](https://material-ui.com/customization/theming/#responsivefontsizes-theme-options-theme)

返回值：

- theme: 具有响应式文字排版的 theme 对象。

示例：

```tsx
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)
```

## Palette-调色板

调色板 (`palette` ) 用来修改组件的颜色来匹配自己的品牌。可以更改以下项：

- primary
- secondary
- error
- warning
- info
- success

可以通过 `theme.palette` 属性来设置一个 `palette` 对象， `palette` 中每一项可以指定以下四个属性：

```ts
interface PaletteIntention {
  light?: string
  main: string
  dark?: string
  contrastText?: string
}
```

`palette` 对象的默认值参见[链接](https://material-ui.com/customization/default-theme/)。

### 使用 color 对象

最简单的自定义 `palette` 项的方式是使用提供的 colors 对象：

```tsx
import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
})
```

### 直接提供 color 值

如果想要更加自定义化的颜色，可以直接提供颜色值：

```tsx
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: 将会从 palette.primary.main 根据 tonalOffset（色调偏移）自动计算得到,
      main: '#ff4400',
      // dark: 将会从 palette.primary.main 根据 tonalOffset（色调偏移）自动计算得到,
      // contrastText: 将会从 palette.primary.main 根据 contrastThreshold（对比度）自动计算得到,
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: 将会从 palette.secondary.main 根据 tonalOffset（色调偏移）自动计算得到,
      contrastText: '#ffcc00',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
})
```

### dark 模式

`Material-UI` 提供两种 `palette` 模式： `light`(默认)/`dark`。 通过指定 `palette.type` 为 `dark` 来设置 `dark 模式`：

```ts
const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})
```

虽然只是修改了一个属性，但是内部它修改了一些 `palette`的值，参见[链接](https://material-ui.com/customization/palette/#dark-mode)

#### 用户偏好

用户可能在操作系统层面上已经指定了一个 `light/dark` 模式偏好，可以通过 `useMediaQuery()` 和 `prefers-color-scheme` 媒体查询语句来动态适应系统级别的模式偏好。

例如，根据操作系统上的深色模式的开启和关闭来动态设置 dark 模式：

```tsx
import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}
```

## Typography-排版

### font family

可以通过 `theme.typography.fontFamily` 改变使用的字体， 默认使用的字体为 `'"Roboto", "Helvetica", "Arial", sans-serif'`。

### font size

`Material-UI` 使用 `rem` 作为字体单位，默认使用的字体为 `14px` ，可以通过 `theme.typography.fontSize` 修改：

```ts
const theme = createMuiTheme({
  typography: {
    fontSize: 12,
  },
})
```

#### htmlFontSize

可能想要改变 `<html>` 元素的默认字体大小，例如为了简化计算，将 `<html>` 节点的字体大小改为 `10px`。 `theme.typography.htmlFontSize` 属性就是用来告诉 `Material-UI` 当前 `<html>` 节点使用的字体大小。

```ts
const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 10,
  },
})
```

注意还需要手动将 `<html>` 节点的 `font-size` 改为 `10px` ：

```css
html {
  font-size: 62.5%; /* 62.5% of 16px = 10px */
}
```

### 响应式的字体大小

可以通过媒体查询来手动实现响应式的字体大小：

```ts
const theme = createMuiTheme()

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
}
```

另外，`Material-UI` 提供了帮助函数 [responsiveFontSizes()](https://material-ui.com/customization/theming/#responsivefontsizes-theme-options-theme) 来自动设置：

```ts
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)
```

### 变体

typography 对象共有 13 个变体：

- h1
- h2
- h3
- h4
- h5
- h6
- subtitle1
- subtitle2
- body1
- body2
- button
- caption
- overline

每个变体都可以自定义：

```ts
const theme = createMuiTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
})
```

## Spacing-间隔

使用 `theme.spacing()` 函数可以在 UI 元素间创建一致的间距。

`Material-UI` 默认使用 `8px` 作为间隔的比例因子，可以[自定义](https://material-ui.com/customization/spacing/#custom-spacing)。

```ts
const theme = createMuiTheme()
theme.spacing(2) // = 8 * 2
```

### 多个参数

`theme.spacing()` 帮助函数最多接受 4 个参数，来指定 `margin/padding` 的 4 个方向的值。

```ts
padding: theme.spacing(1, 2, 3, 4) // '8px 16px 24px 32px'
```

## Breakpoints-断点

`Material-UI` 使用的断点及范围：

```sh
value         |0px     600px    960px    1280px   1920px
key           |xs      sm       md       lg       xl
screen width  |--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
```

断点范围可以在 `theme.breakpoints.values` 属性中自定义。

### CSS 媒体查询

`Material-UI` 提供了 4 个帮助函数来自动生成媒体查询的判断条件字符串：

- theme.breakpoints.up(key)
- theme.breakpoints.down(key)
- theme.breakpoints.only(key)
- theme.breakpoints.between(startKey, endKey)

```ts
const styles = theme => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
    },
  },
})
```

### JavaScript 媒体查询

如果想要在 React 组件中获取媒体查询信息，可以通过 `useMediaQuery()` 钩子函数：

```ts
useMediaQuery(query: string | theme => string, options?) => boolean
```

`useMediaQuery()` 函数接收查询语句 query 或者返回查询语句的函数，返回是否符合查询条件。

```tsx
import React from 'react'
import { useMediaQuery, useTheme, Theme } from '@material-ui/core'

export default function JSMediaQuery(): JSX.Element {
  // 直接传入 媒体查询条件
  const result1 = useMediaQuery('(min-width: 600px)')

  // 传入 theme.breakpoints.down() 的返回值
  const theme = useTheme()
  const result2 = useMediaQuery(theme.breakpoints.down('md'))

  // 传入函数
  const result3 = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between('sm', 'md')
  )

  return (
    <div>
      <p>{`useMediaQuery('(min-width: 600px)') - ${result1}`}</p>
      <p>{`useMediaQuery(theme.breakpoints.down('md')) - ${result2}`}</p>
      <p>
        {`useMediaQuery(theme => theme.breakpoints.between('sm', 'md')) - ${result3}`}
      </p>
    </div>
  )
}
```

## z-index-z 轴

用来控制组件在 z 轴上的布局，可以在 `theme.zIndex` 属性中找到各个组件的默认值，不建议修改。

## Globals-全局配置

### theme.overrides 属性

`theme.overrides` 属性可以用来对指定的 `Material-UI` 组件的所有实例的样式进行自定义。这是一个非常强大的特性。

例如，修改所有 `MuiButton` 的字体颜色：

```ts
const theme = createMuiTheme({
  overrides: {
    // Style sheet name - 可以在各个组件的API文档中找到
    MuiButton: {
      // Name of rule - 可以在各个组件的API文档中找到
      text: {
        // CSS rule
        color: 'orange',
      },
    },
  },
})
```

### theme.props 属性

`theme.props` 属性可以用来对指定的 `Material-UI` 组件的 props 属性的默认值进行自定义。

```ts
const theme = createMuiTheme({
  props: {
    // Name of the component
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application
    },
  },
})
```
