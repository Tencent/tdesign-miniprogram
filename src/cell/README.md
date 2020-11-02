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

#### Props

| 属性         | 值类型    | 默认值  | 必传 | 说明                            |
| ------------ | --------- | ------- | ---- | ------------------------------- |
| title        | `String`  | -       | N    | 左侧标题                        |
| leftIcon     | `String`  | -       | N    | 左侧图标名称,可选值见 Icon 组件 |
| value        | `String`  | -       | N    | 右侧内容                        |
| label        | `String`  | -       | N    | 标题下方的描述信息              |
| rightIcon    | `String`  | -       | N    | 有侧图标名称,可选值见 Icon 组件 |
| bordered     | `Boolean` | `true`  | N    | 是否显示下边框                  |
| useLabelSlot | `Boolean` | `false` | N    | 是否使用 label slot             |

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

### `<t-cell-group>` 组件

组件路径：`@tencent/tdesign-miniprogram/cell-group/cell-group`

#### Props

| 属性     | 值类型    | 默认值 | 必传 | 说明           |
| -------- | --------- | ------ | ---- | -------------- |
| title    | `String`  | -      | N    | 分组标题       |
| bordered | `Boolean` | `true` | N    | 是否显示外边框 |

### Slots

| 名称 | 说明      |
| ---- | --------- |
| 默认 | cell 组件 |
