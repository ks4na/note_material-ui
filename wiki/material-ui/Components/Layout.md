# Layout - 布局组件

- [Box](#box)
  - [常用属性](#%e5%b8%b8%e7%94%a8%e5%b1%9e%e6%80%a7)
- [Container](#container)
  - [常用属性](#%e5%b8%b8%e7%94%a8%e5%b1%9e%e6%80%a7-1)
- [Grid](#grid)
  - [常用属性](#%e5%b8%b8%e7%94%a8%e5%b1%9e%e6%80%a7-2)
    - [spacing](#spacing)
    - [流体 Grid](#%e6%b5%81%e4%bd%93-grid)
      - [基础用法](#%e5%9f%ba%e7%a1%80%e7%94%a8%e6%b3%95)
      - [结合 breakpoints](#%e7%bb%93%e5%90%88-breakpoints)
    - [嵌套网格](#%e5%b5%8c%e5%a5%97%e7%bd%91%e6%a0%bc)
    - [其它属性](#%e5%85%b6%e5%ae%83%e5%b1%9e%e6%80%a7)
  - [自动布局](#%e8%87%aa%e5%8a%a8%e5%b8%83%e5%b1%80)
  - [局限性](#%e5%b1%80%e9%99%90%e6%80%a7)
    - [container Grid 组件的负 margin](#container-grid-%e7%bb%84%e4%bb%b6%e7%9a%84%e8%b4%9f-margin)
    - [container Grid 设置 wrap="nowrap" 与 item Grid 中存在内容需要截断时的 bug](#container-grid-%e8%ae%be%e7%bd%ae-wrap%22nowrap%22-%e4%b8%8e-item-grid-%e4%b8%ad%e5%ad%98%e5%9c%a8%e5%86%85%e5%ae%b9%e9%9c%80%e8%a6%81%e6%88%aa%e6%96%ad%e6%97%b6%e7%9a%84-bug)
    - [direction: column | column-reverse 存在的缺陷](#direction-column--column-reverse-%e5%ad%98%e5%9c%a8%e7%9a%84%e7%bc%ba%e9%99%b7)
- [GridList - 网格列表](#gridlist---%e7%bd%91%e6%a0%bc%e5%88%97%e8%a1%a8)
- [Hidden](#hidden)
  - [实现方式](#%e5%ae%9e%e7%8e%b0%e6%96%b9%e5%bc%8f)
  - [常用属性](#%e5%b8%b8%e7%94%a8%e5%b1%9e%e6%80%a7-3)

## Box

Box 组件是一个包装（wrapper）组件，为内部的组件添加使用 `@material-ui/system` 系统中的 CSS 样式属性的能力。

### 常用属性

- clone
  - 默认值： false
  - 描述：如果为 true， 将不生成 Box 对应的节点到 html 中，Box 的所有属性都转移到内部的组件上（此时内部组件只能有一个）
- component
  - 默认值： "div"
  - 描述：Box 组件生成的 html 节点类型， 可以传入 DOM 元素名 或 React 组件(如： `component={Button}`)

## Container

这是最基本的布局元素，Container 水平居中，并可以响应式地控制其中内容的宽度。

### 常用属性

- disableGutters
  - 默认值： false
  - 描述：如果为 true 则去除默认的 Container 左右 padding
- fixed
  - 默认值： false
  - 描述： 如果为 true， 则 Container 的最大宽度会设置为当前断点的最小宽度（如： 当前断点为 "md"(960-1280px)，则宽度固定为 960px）
- maxWidth
  - 默认值： 'lg' (可选范围： 'xs'| 'sm'| 'md'| 'lg'| 'xl'| false)
  - 描述： 设置 Container 最大宽度为指定断点的最小值，如果为 'xs', 则宽度为 '444px'

## Grid

响应式布局网格，可适应屏幕尺寸和方向，从而确保跨布局的一致性。

> Grid 默认是基于 12 列的网格布局。

### 常用属性

#### spacing

```tsx
<Grid container spacing={2}>
  <Grid item></Grid>
</Grid>
```

- 默认值： 0 (可选范围： 0-10)
- 描述：spacing 只适用于 `container` 类型的 `Grid` ，用于指定其中的 `item` 类型的 `Grid` 组件的间距。

> 注意：  
> `spacing` 只注重 item 之间的间距，container 左右两边没有间距（Material-UI 通过设置负 margin 来去除 container 左右两边多出来的 padding）

#### 流体 Grid

##### 基础用法

涉及属性：

- container
- item
- xs/sm/md/lg/xl

示例：

```tsx
<Grid container>
  <Grid item xs={6}></Grid>
  <Grid item></Grid>
  <Grid item xs></Grid>
</Grid>
```

> 指定 `xs` 为数值将会有固定的宽度占比；  
> 指定 `xs`，自动计算宽度，会与其它 `xs` 均分宽度；  
> 只指定了 `item`， 则其宽度会被其它 `xs` 挤压至最小宽度。

##### 结合 breakpoints

涉及属性：

- xs
- sm
- md
- lg
- xl

示例：

```tsx
<Grid container>
  <Grid item xs={12} md={6}></Grid>
</Grid>
```

#### 嵌套网格

`container` 属性和 `item` 属性可以使用在同一个 `Grid` 组件上， 形成嵌套网格。

示例：

```tsx
<Grid container>
  <Grid item container>
    <Grid item xs></Grid>
    <Grid item xs></Grid>
  </Gird>
</Grid>
```

#### 其它属性

- direction
  - 默认值： 'row' （可选: 'row', 'column', 'row-reverse', 'column-reverse'）
  - 描述： 指定 `flex-direaction` CSS 属性
- justify
  - 默认值： 'flex-start' （可选：'flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'）
  - 描述： 指定 `justify-content` CSS 属性
- alignItems
  - 默认值： 'stretch' （可选：'flex-start', 'center', 'flex-end', 'stretch', 'baseline'）
  - 描述： 指定 `align-items` CSS 属性
- alignContent
  - 默认值： 'stretch' （可选：'flex-start', 'center', 'flex-end', 'stretch', 'space-between', 'space-around'）
  - 描述： 指定 `align-content` CSS 属性
- wrap
  - 默认值： 'wrap' （可选：'wrap', 'nowrap', 'wrap-reverse'）
  - 描述： 指定 `flex-wrap` CSS 属性

### 自动布局

可以只为一个 `item` 类型的 `Grid` 指定宽度，其它的 `item` 类型 `Grid` 将会自动调整。

示例：

```tsx
<Grid container>
  <Grid item xs></Grid>
  <Grid item xs={6} sm={9}></Grid>
  <Grid item xs></Grid>
</Grid>
```

> 注意：  
> 可能还需要配合 `wrap="nowrap"` ，CSS 样式的 `wordBreak: "break-all"` 等一起使用。

### 局限性

#### container Grid 组件的负 margin

由于 `Material-UI` 使用的 `负数margin` 来实现 `container Grid` 的子 `Grid` 之间的间距问题，导致了一些问题，例如： 负数 margin 超出 `<body>`
元素导致出现水平滚动条、不能给 `container Grid` 添加背景色等。

解决方法示例

方法一:  
给 `container Grid` 包裹一个父盒子， 并设置父盒子水平 padding >= `container Grid` 的 spacing 的一半

```tsx
<Box px={1}>
  <Grid container spacing={2} style={{ backgroundColor: '#f5f5f5' }}>
    // ...
  </Grid>
</Box>
```

> 其实，此时可以直接为 Box 设置背景色，而不需要给 `container Grid` 设置。

方法二：  
给 `container Grid` 包裹一个父盒子， 并让父盒子形成 BFC（如： 设置 overflow: hidden 等）

#### container Grid 设置 wrap="nowrap" 与 item Grid 中存在内容需要截断时的 bug

当 `container Grid` 设置了 `wrap="nowrap"` ,并且 `item Grid` 不止一个，且其中存在需要截断的内容时，会导致 `item Grid` 溢出到 `container Grid` 外面。

例如如下结构，就会导致第二个 `item Grid` 溢出到 `container Grid` 之外：

```tsx
<Grid container wrap="nowrap">
  <Grid item>
    <Typography>first item</Typography>
  </Grid>
  <Grid item xs>
    <Typography noWrap>
      Truncation should be conditionally applicable on this long line of text as
      this is a much longer line than what the container can support.
    </Typography>
  </Grid>
</Grid>
```

此时需要给第二个 `item Grid` 添加 `zeroMinWidth` 属性来解决该问题：

```tsx
<Grid container wrap="nowrap">
  <Grid item>
    <Typography>first item</Typography>
  </Grid>
  <Grid item xs zeroMinWidth>
    <Typography noWrap>
      Truncation should be conditionally applicable on this long line of text as
      this is a much longer line than what the container can support.
    </Typography>
  </Grid>
</Grid>
```

#### direction: column | column-reverse 存在的缺陷

尽管 `container Grid` 支持设置 `direction` 为 `column | column-reverse` ，但是很多其它属性是对于宽度的控制，不会对高度有相同的作用。

## GridList - 网格列表

`GridList` 以有组织的网格来展示 `item`集合，通常用来展示图片集合。

涉及组件：

- `<GridList />`
- `<GridListTile />`
- `<GridListTileBar />`

详细参见[官网示例](https://material-ui.com/components/grid-list/)

## Hidden

快速并且响应式地切换组件的显示和隐藏。

```tsx
import Hidden from '@material-ui/core/Hidden'
```

### 实现方式

默认使用 `js` 实现方式，好处是除非满足断点要求否则不会渲染任何隐藏的元素内容。  
可以通过指定 `implementation="css"`选择 `css` 实现方式, 例如在 `SSR` 时（当然，也可以使用 `js` 实现方式配合 `initialWidth="xs"` 的方式实现）

### 常用属性

- xxUp
  - 在大于等于该断点范围时隐藏
- xxDown
  - 在小于等于该断点范围时隐藏
- only
  - 在该断点范围内隐藏，支持传入数组
