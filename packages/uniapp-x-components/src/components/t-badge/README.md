# Badge

徽标组件。用于告知用户该区域的状态变化或者待处理任务的数量。

## Props

| 名称 | 类型 | 默认 | 说明 |
|---|---|---|---|
| dot | boolean | `false` | 是否为红点 |
| count | `string \| number \| null` | `0` | 徽标右上角内容（数字 / 文字 / new 等）；`null` 表示使用 `count` 插槽渲染 |
| maxCount | number | `99` | 数字封顶值，超过则展示 `${maxCount}+` |
| showZero | boolean | `false` | 当 `count=0` 时是否仍展示徽标 |
| content | string | `''` | 子内容文本（也可用默认插槽） |
| color | string | `''` | 自定义背景色 |
| shape | `'circle' \| 'square' \| 'bubble' \| 'ribbon' \| 'ribbon-right' \| 'ribbon-left' \| 'triangle-right' \| 'triangle-left'` | `'circle'` | 形状（`ribbon` 与 `ribbon-right` 等效） |
| size | `'medium' \| 'large'` | `'medium'` | 尺寸 |
| offset | `Array<string \| number>` | `[]` | 浮动模式下的位置偏移 `[x, y]`；元素为数字按 px 处理，字符串可带单位（如 `'10em'`、`'-2rpx'`） |
| customClass | string | `''` | 透传根节点额外类名 |
| customClassContent | string | `''` | 透传 content（子内容）节点额外类名 |
| customClassCount | string | `''` | 透传 count（徽标本体）节点额外类名 |

## Slots

| 名称 | 优先级 | 说明 |
|---|---|---|
| default | 高于 `content` | 子内容（带子内容时徽标浮动到右上角） |
| count | 高于 `count` 文本 | 自定义徽标内容 |

## 用法

```vue
<!-- 红点 -->
<t-badge dot>
  <text>消息</text>
</t-badge>

<!-- 数字徽标 -->
<t-badge :count="5">
  <text>购物车</text>
</t-badge>

<!-- 数字封顶 -->
<t-badge :count="120" :max-count="99">
  <text>通知</text>
</t-badge>

<!-- 文字徽标 -->
<t-badge count="new">
  <text>动态</text>
</t-badge>

<!-- 独立使用（不带子内容） -->
<t-badge :count="3" />

<!-- 形状 / 颜色 -->
<t-badge :count="8" shape="bubble" color="#0052d9">
  <text>消息</text>
</t-badge>

<!-- 角标（适合贴在 cell / card 右上） -->
<t-badge count="NEW" shape="ribbon" />
<t-badge count="NEW" shape="triangle-right" />
```

## CSS Variables

组件提供下列 CSS 变量，可用于自定义样式：

| 名称 | 默认值 |
|---|---|
| `--td-badge-bg-color` | `#d54941` |
| `--td-badge-text-color` | `#ffffff` |
| `--td-badge-content-text-color` | `rgba(0, 0, 0, 0.9)` |
| `--td-badge-basic-height` | `16px` |
| `--td-badge-basic-padding` | `4px` |
| `--td-badge-basic-min-width` | `16px` |
| `--td-badge-font-size` | `10px` |
| `--td-badge-line-height` | `16px` |
| `--td-badge-large-height` | `20px` |
| `--td-badge-large-padding` | `5px` |
| `--td-badge-large-font-size` | `12px` |
| `--td-badge-large-line-height` | `20px` |
| `--td-badge-dot-size` | `8px` |
| `--td-badge-dot-large-size` | `10px` |
| `--td-badge-square-radius` | `2px` |
| `--td-badge-bubble-radius` | `10px 10px 10px 1px` |
