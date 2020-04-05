# System

- [基础](#%e5%9f%ba%e7%a1%80)
  - [开始使用](#%e5%bc%80%e5%a7%8b%e4%bd%bf%e7%94%a8)
    - [安装](#%e5%ae%89%e8%a3%85)
    - [创建一个组件](#%e5%88%9b%e5%bb%ba%e4%b8%80%e4%b8%aa%e7%bb%84%e4%bb%b6)
    - [依赖一个主题](#%e4%be%9d%e8%b5%96%e4%b8%80%e4%b8%aa%e4%b8%bb%e9%a2%98)
    - [默认提供的 style functions](#%e9%bb%98%e8%ae%a4%e6%8f%90%e4%be%9b%e7%9a%84-style-functions)
    - [互通性](#%e4%ba%92%e9%80%9a%e6%80%a7)
    - [响应式](#%e5%93%8d%e5%ba%94%e5%bc%8f)
      - [数组写法](#%e6%95%b0%e7%bb%84%e5%86%99%e6%b3%95)
      - [对象写法](#%e5%af%b9%e8%b1%a1%e5%86%99%e6%b3%95)
      - [根据断点分组写法](#%e6%a0%b9%e6%8d%ae%e6%96%ad%e7%82%b9%e5%88%86%e7%bb%84%e5%86%99%e6%b3%95)
    - [自定义 style function](#%e8%87%aa%e5%ae%9a%e4%b9%89-style-function)
      - [style(options) => style function](#styleoptions--style-function)
      - [compose(...style functions) => style function](#composestyle-functions--style-function)
      - [变体属性](#%e5%8f%98%e4%bd%93%e5%b1%9e%e6%80%a7)
  - [工作原理](#%e5%b7%a5%e4%bd%9c%e5%8e%9f%e7%90%86)
  - [实战示例](#%e5%ae%9e%e6%88%98%e7%a4%ba%e4%be%8b)
- [Borders](#borders)
  - [API](#api)
- [Display](#display)
  - [API](#api-1)
- [Flexbox](#flexbox)
  - [API](#api-2)
- [Palette](#palette)
  - [API](#api-3)
- [Positions](#positions)
  - [API](#api-4)
- [Shadows](#shadows)
  - [API](#api-5)
- [Sizing](#sizing)
  - [API](#api-6)
- [Spacing](#spacing)
  - [API](#api-7)
- [Typography](#typography)
  - [API](#api-8)

用于构建功能强大的 design system 的 styled system 和 style function。

## 基础

### 开始使用

`@material-ui/system` 提供了底层的工具函数叫做 `style functions` 来构建 `design system`。这些函数的关键特性有：

- 直接在组件的 props 属性就可以访问 theme 的值
- 保证 UI 一致性
- 轻松书写响应式样式
- 可以和最流行的 `CSS-in-JS` 一起使用

这个工具包暴露了有如下签名的纯的(没有副作用) `style function`：

```ts
;({ theme, ...style }) => style
```

#### 安装

> 如果使用了 `@material-ui/core` ，则无需单独安装。

```sh
yarn add @material-ui/system
```

#### 创建一个组件

为了能够使用一个 `Box` 组件，首先创建它。向一个 `div` 传入 compose 之后的 `spacing` 和 `palette` 函数。

```tsx
import React from 'react'
import { styled } from '@material-ui/core/styles'
import { palette, spacing, compose } from '@material-ui/system'

const Box = styled('div')(compose(palette, spacing))
```

现在，这个 `Box` 组件就支持 `spacing` 属性和 `color` 属性了。例如可以向它传入 padding 属性 : `p` 和 color 属性: `color`：

```tsx
<Box p="1rem" color="gray">
```

组件可以被 `styled` 以支持任意合法的 CSS 值。

#### 依赖一个主题

大多数时候，为了保持一致的 UI 外观，需要依赖一个 theme 对象的值。该 theme 对象最好有一组预设的 spacing 和 color 值。

```tsx
import React from 'react'
import { styled, ThemeProvider } from '@material-ui/core/styles'
import { spacing, palette, compose } from '@material-ui/system'

const Box = styled('div')(compose(spacing, palette))

const theme = {
  spacing: 4,
  palette: {
    primary: 'pink',
  },
}

export default function StyledCompWithTheme(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Box p={2} color="primary">
        {'p = 8px and color = "pink"'}
      </Box>
    </ThemeProvider>
  )
}
```

#### 默认提供的 style functions

为了让 `Box` 组件更加有用，`Material-UI` 提供了一组 style function:

- [borders](#Borders)
- [display](#Display)
- [flexbox](#Flexbox)
- [palette](#Palette)
- [positions](#Positions)
- [shadows](#Shadows)
- [sizing](#Sizing)
- [spacing](#Spacing)
- [typography](#Typography)

如果使用 `@material-core` ，那么可以直接使用 `Box` 组件：

```tsx
import Box from '@material-ui/core/Box'
```

#### 互通性

`@material-ui/system` 可以与大部分 CSS-in-JS 库一起使用，详见[链接](https://material-ui.com/system/basics/#interoperability)。

#### 响应式

所有添加的属性都支持响应式， 支持 3 种不同的响应式写法：

```tsx
import React from 'react'
import { styled, ThemeProvider } from '@material-ui/core/styles'
import { spacing, palette, compose } from '@material-ui/system'

const Box = styled('div')(compose(spacing, palette))

type KeyType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type ValueType = Record<KeyType, number>

const keys: KeyType[] = ['xs', 'sm', 'md', 'lg', 'xl']
const values: ValueType = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
}
const theme = {
  breakpoints: {
    keys,
    up: (key: KeyType): string => `@media (min-width:${values[key]}px)`,
  },
  spacing: 4,
  palette: {
    primary: 'pink',
  },
}
```

##### 数组写法

```tsx
<Box p={[1, 2, 3]}></Box>

/**
 * Outputs:
 *
 * padding: 4px;
 * @media (min-width: 600px) {
 *   padding: 8px;
 * }
 * @media (min-width: 960px) {
 *   padding: 12px;
 * }
 */
```

##### 对象写法

```tsx
<Box p={{ xs: 1, sm: 2, md: 3 }}></Box>

/**
 * Outputs:
 *
 * padding: 4px;
 * @media (min-width: 600px) {
 *   padding: 8px;
 * }
 * @media (min-width: 960px) {
 *   padding: 12px;
 * }
 */
```

##### 根据断点分组写法

如果想要根据 `breakpoints` 键名分组，可以使用 `breakpoints()` 帮助函数。

```tsx
import { spacing, palette, compose, breakpoints } from '@material-ui/system'

const Box = styled('div')(breakpoints(compose(spacing, palette)))

<Box xs={{ p: 1 }} sm={{ p: 2 }} md={{p: 3}}></Box>

/**
 * Outputs:
 *
 * padding: 4px;
 * @media (min-width: 600px) {
 *   padding: 8px;
 * }
 * @media (min-width: 960px) {
 *   padding: 12px;
 * }
 */
```

#### 自定义 style function

##### style(options) => style function

如果想要支持一个新的 CSS 属性，或者想要改变属性值对应的 theme 路径前缀，此时可以使用 `style` 帮助函数来创建自己的 style function ：

> 不是所有 CSS 属性都支持。

```tsx
import { style } from '@material-ui/system'

// style(options) => style function
```

**参数 options**:

- `prop`(`string`): 要添加给组件的 prop 名称
- `cssProperty`(`string | boolean | undefined`): 默认值为 `options.prop`。指定要使用的 CSS 属性。可以通过指定为 `false` 来禁用这一项，这通常用于[渲染变体(variants)](https://material-ui.com/system/basics/#variants)
- `themeKey`(`string | undefined`): 对应的 theme 路径前缀
- `transform`(`Function | undefined`): 定义转换为 CSS 属性值的逻辑

**返回值** :

- `style function`: 创建好的 `style function`。

**示例**

1. 创建一个组件支持 `verticalAlign` 属性， 对应于设置 CSS 的 `vertical-align` 属性：

   ```tsx
   import React from 'react'
   import { style } from '@material-ui/system'
   import { styled } from '@material-ui/core/styles'

   const verticalAlign = style({
     prop: 'verticalAlign',
   })

   const VerticalAlignedImg = styled('img')(verticalAlign)

   // 使用 `verticalAlign` 属性
   <VerticalAlignedImg verticalAlign="top" src="1.jpg" alt="" />

   ```

2. 创建一个 `bc` 属性的 `style function`, 对应 CSS 的 `borderColor` 值，可以使用 `theme.palette` 属性中的值，并且将权重提到最高：

   ```tsx
   const borderColor = style({
     prop: 'bc',
     cssProperty: 'borderColor',
     themeKey: 'palette',
     transform: value => `${value} !important`,
   })

   const ColoredBox = styled('div')(borderColor)

   // 使用 bc 属性
   <ColoredBox bc="primary.main">ColoredBox</ColoredBox>
   ```

##### compose(...style functions) => style function

将多个 `style function` 组合成一个。

**返回值**

`style function`: 组合后的 `style function`。

**示例**

组合使用 `textColor` 和 `bgColor`：

```tsx
import { style, compose } from '@material-ui/system'

const textColor = style({
  prop: 'textColor'
  themeKey: 'palette'
})

const bgColor = style({
  prop: 'bgColor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
})

const composed = compose(textColor, bgColor)
```

##### 变体属性

`style()` 帮助函数支持将组件的 prop 属性与 `theme` 中的属性对象建立映射关系。如下例所示， `variant` 属性支持 `theme.typography` 中的所有键。

```tsx
import React from 'react'
import { style, compose, typography } from '@material-ui/system'
import { Box } from '@material-ui/core'
import { styled, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const variant = style({
  prop: 'variant',
  cssProperty: false,
  themeKey: 'typography',
})

const Text = styled(Box)(compose(variant, typography))

const theme = createMuiTheme()
theme.typography.h1 = {
  fontSize: 20,
  fontWeight: 'bold',
  backgroundColor: 'orange',
}

export default function VariantDemo(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Text variant="h1">variant = h1</Text>
    </ThemeProvider>
  )
}
```

### 工作原理

参见[链接](https://github.com/styled-system/styled-system/blob/master/docs/how-it-works.md#how-it-works)。

### 实战示例

实际使用中， `Box` 组件可以节省很多时间，在这个例子中将展示如何通过 `Box` 组件和 `styled-system` 创建一个 `Banner` 组件。

```tsx
import React from 'react'
import { Box, Paper, Button, Typography, Grid, Avatar } from '@material-ui/core'
import SignalWifiOffIcon from '@material-ui/icons/SignalWifiOff'

export default function Banner(): JSX.Element {
  return (
    <Box clone p={2} maxWidth={500} marginX="auto">
      <Paper elevation={0}>
        <Grid container spacing={2} alignItems="center" wrap="nowrap">
          <Grid item>
            <Box bgcolor="primary.main" clone>
              <Avatar>
                <SignalWifiOffIcon />
              </Avatar>
            </Box>
          </Grid>
          <Grid item>
            <Typography>
              You have lost connection to the internet. This app is offline.
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="flex-end" spacing={2}>
          <Button color="primary">Turn on wifi</Button>
        </Grid>
      </Paper>
    </Box>
  )
}
```

## Borders

### API

```tsx
import { borders } from '@material-ui/system'
```

| Import name  | Prop         | CSS property  | Theme key    |
| ------------ | ------------ | ------------- | ------------ |
| border       | border       | border        | borders      |
| borderTop    | borderTop    | border-top    | borders      |
| borderLeft   | borderLeft   | border-left   | borders      |
| borderRight  | borderRight  | border-right  | borders      |
| borderBottom | borderBottom | border-bottom | borders      |
| borderColor  | borderColor  | border-color  | [palette][1] |
| borderRadius | borderRadius | border-radius | [shape][2]   |

[1]: https://material-ui.com/customization/default-theme/?expand-path=$.palette
[2]: https://material-ui.com/customization/default-theme/?expand-path=$.shape

[官网示例](https://material-ui.com/system/borders/)

## Display

### API

```tsx
import { display } from '@material-ui/system'
```

| Import name  | Prop         | CSS property  | Theme key |
| ------------ | ------------ | ------------- | --------- |
| displayPrint | displayPrint | display       | none      |
| displayRaw   | display      | display       | none      |
| overflow     | overflow     | overflow      | none      |
| textOverflow | textOverflow | text-overflow | none      |
| visibility   | visibility   | visibility    | none      |
| whiteSpace   | whiteSpace   | white-space   | none      |

[官网示例](https://material-ui.com/system/display/)

## Flexbox

### API

```tsx
import { flexbox } from '@material-ui/system'
```

| Import name    | Prop           | CSS property    | Theme key |
| -------------- | -------------- | --------------- | --------- |
| flexDirection  | flexDirection  | flex-direction  | none      |
| flexWrap       | flexWrap       | flex-wrap       | none      |
| justifyContent | justifyContent | justify-content | none      |
| alignItems     | alignItems     | align-items     | none      |
| alignContent   | alignContent   | align-content   | none      |
| order          | order          | order           | none      |
| flex           | flex           | flex            | none      |
| flexGrow       | flexGrow       | flex-grow       | none      |
| flexShrink     | flexShrink     | flex-shrink     | none      |
| alignSelf      | alignSelf      | align-self      | none      |

[官网示例](https://material-ui.com/system/flexbox/)

## Palette

### API

```tsx
import { palette } from '@material-ui/system'
```

| Import name | Prop    | CSS property     | Theme key    |
| ----------- | ------- | ---------------- | ------------ |
| color       | color   | color            | [palette][1] |
| bgcolor     | bgcolor | background-color | [palette][1] |

[官网示例](https://material-ui.com/system/palette/)

## Positions

### API

```tsx
import { positions } from '@material-ui/system'
```

| Import name | Prop     | CSS property | Theme key   |
| ----------- | -------- | ------------ | ----------- |
| position    | position | position     | none        |
| zIndex      | zIndex   | z-index      | [zIndex][3] |
| top         | top      | top          | none        |
| right       | right    | right        | none        |
| bottom      | bottom   | bottom       | none        |
| left        | left     | left         | none        |

[3]: https://material-ui.com/customization/default-theme/?expand-path=$.zIndex

[官网示例](https://material-ui.com/system/positions/)

## Shadows

### API

```tsx
import { shadows } from '@material-ui/system'
```

| Import name | Prop      | CSS property | Theme key    |
| ----------- | --------- | ------------ | ------------ |
| boxShadow   | boxShadow | box-shadow   | [shadows][4] |

[4]: https://material-ui.com/customization/default-theme/?expand-path=$.shadows

[官网示例](https://material-ui.com/system/shadows/)

## Sizing

### API

```tsx
import { sizing } from '@material-ui/system'
```

| Import name | Prop      | CSS property | Theme key |
| ----------- | --------- | ------------ | --------- |
| width       | width     | width        | none      |
| maxWidth    | maxWidth  | max-width    | none      |
| minWidth    | minWidth  | min-width    | none      |
| height      | height    | height       | none      |
| maxHeight   | maxHeight | max-height   | none      |
| minHeight   | minHeight | min-height   | none      |
| boxSizing   | boxSizing | box-sizing   | none      |

[官网示例](https://material-ui.com/system/sizing/)

## Spacing

### API

```tsx
import { spacing } from '@material-ui/system'
```

| Import name | Prop | CSS property                | Theme key    |
| ----------- | ---- | --------------------------- | ------------ |
| spacing     | m    | margin                      | [spacing][5] |
| spacing     | mt   | margin-top                  | [spacing][5] |
| spacing     | mr   | margin-right                | [spacing][5] |
| spacing     | mb   | margin-bottom               | [spacing][5] |
| spacing     | ml   | margin-left                 | [spacing][5] |
| spacing     | mx   | margin-left, margin-right   | [spacing][5] |
| spacing     | my   | margin-top, margin-bottom   | [spacing][5] |
| spacing     | p    | padding                     | [spacing][5] |
| spacing     | pt   | padding-top                 | [spacing][5] |
| spacing     | pr   | padding-right               | [spacing][5] |
| spacing     | pb   | padding-bottom              | [spacing][5] |
| spacing     | pl   | padding-left                | [spacing][5] |
| spacing     | px   | padding-left, padding-right | [spacing][5] |
| spacing     | py   | padding-top, padding-bottom | [spacing][5] |

[5]: https://material-ui.com/customization/default-theme/?expand-path=$.spacing

[官网示例](https://material-ui.com/system/spacing/)

## Typography

### API

```tsx
import { typography } from '@material-ui/system'
```

| Import name   | Prop          | CSS property   | Theme key       |
| ------------- | ------------- | -------------- | --------------- |
| fontFamily    | fontFamily    | font-family    | [typography][6] |
| fontSize      | fontSize      | font-size      | [typography][6] |
| fontStyle     | fontStyle     | font-style     | [typography][6] |
| fontWeight    | fontWeight    | font-weight    | [typography][6] |
| letterSpacing | letterSpacing | letter-spacing | none            |
| lineHeight    | lineHeight    | line-height    | none            |
| textAlign     | textAlign     | text-align     | none            |

[6]: https://material-ui.com/customization/default-theme/?expand-path=$.typography

[官网示例](https://material-ui.com/system/typography/)
