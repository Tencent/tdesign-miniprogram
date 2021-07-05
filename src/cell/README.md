# cell

## 介绍

单元格

### 特性及兼容性

无

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-cell": "@tencent/tdesign-miniprogram/cell/cell"
}
```

## 用法

### 组件方式

```html
<!-- page.wxml -->
<t-cell title="单行标题" value="辅助信息" rightIcon="arrow-right" />
```

## API

### `<t-cell>` 组件

组件路径：`@tencent/tdesign-miniprogram/cell/cell`

### cell 外部样式类

| 类名             | 说明         |
| ---------------- | ------------ |
| t-class          | 根节点样式类 |
| title-class      | title 样式   |
| label-class      | label 样式   |
| value-class      | value 样式   |
| right-icon-class | 右侧图标样式 |
| hover-class      | hover 样式   |

#### Props

| 属性         | 值类型    | 默认值       | 必传 | 说明                                                                                          |
| ------------ | --------- | ------------ | ---- | --------------------------------------------------------------------------------------------- | ------- |
| title        | `String`  | -            | N    | 左侧标题                                                                                      |
| left-icon    | `String`  | -            | N    | 左侧图标名称,可选值见 Icon 组件                                                               |
| value        | `String`  | -            | N    | 右侧内容                                                                                      |
| label        | `String`  | -            | N    | 标题下方的描述信息                                                                            |
| right-icon   | `String`  | -            | N    | 有侧图标名称,可选值见 Icon 组件                                                               |
| bordered     | `Boolean` | `true`       | N    | 是否显示下边框                                                                                |
| useLabelSlot | `Boolean` | `false`      | N    | 是否使用 label slot                                                                           |
| title-width  | `string`  | -            | N    | 标题宽度，须包含单位                                                                          |
| size         | `string`  | `small`      | N    | 单元格 padding 大小，可选值为 `large`                                                         | `small` |
| center       | `boolean` | `false`      | N    | 是否使内容垂直居中                                                                            |
| url          | `string`  | -            | N    | 点击后跳转的链接地址                                                                          |
| link-type    | `string`  | `navigateTo` | N    | 链接跳转类型，可选值为 `redirectTo` `switchTab` `reLaunch`                                    |
| clickable    | `boolean` | `false`      | N    | 是否开启点击反馈                                                                              |
| is-link      | `boolean` | `false`      | N    | 是否展示右侧箭头并开启点击反馈,is-link 属性默认带右箭头图标，可用 right-icon 属性选用其他图标 |
| required     | `boolean` | `false`      | N    | 是否显示表单必填星号                                                                          |
| icon-color   | `string`  | `''`         | N    | 透传给[icon#color]                                                                            |
| icon-size    | `String`  | `inherit`    | N    | 透传给[icon#ize]m 图标大小, 可以'middle' 'small'等关键字， 也可以是字体大小如'20px'           |

### Slots

| 名称       | 说明                                                        |
| ---------- | ----------------------------------------------------------- |
| 默认       | 自定义 value 显示内容，如果设置了 value 属性则不生效        |
| title      | 自定义 title 显示内容，如果设置了 title 属性则不生效        |
| label      | 自定义 label 显示内容，需要设置 use-label-slot 属性         |
| left-icon  | 自定义左侧 icon 显示内容，如果设置了 leftIcon 属性则不生效  |
| right-icon | 自定义右侧 icon 显示内容，如果设置了 rightIcon 属性则不生效 |

#### Events

| 事件       | event.detail | 说明             |
| ---------- | ------------ | ---------------- |
| bind:click | -            | 点击单元格时触发 |
