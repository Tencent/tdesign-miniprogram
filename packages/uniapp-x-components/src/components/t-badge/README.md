# Badge

徽标组件。用于告知用户该区域的状态变化或者待处理任务的数量。

## Props

| 名称 | 类型 | 默认 | 说明 |
|---|---|---|---|
| dot | boolean | `false` | 是否为红点 |
| count | `string \| number` | `''` | 徽标右上角内容（数字 / 文字 / new 等） |
| maxCount | number | `99` | 数字封顶值，超过则展示 `${maxCount}+` |
| showZero | boolean | `false` | 当 `count=0` 时是否仍展示徽标 |
| content | string | `''` | 子内容文本（也可用默认插槽） |
| color | string | `''` | 自定义背景色 |
| shape | `'circle' \| 'square' \| 'bubble' \| 'ribbon' \| 'ribbon-right' \| 'ribbon-left' \| 'triangle-right' \| 'triangle-left'` | `'circle'` | 形状 |
| size | `'medium' \| 'large'` | `'medium'` | 尺寸 |
| offset | `number[]` | `[]` | 浮动模式下的位置偏移 `[x, y]`（单位 px） |
| customClass | string | `''` | 透传额外类名 |

## Slots

| 名称 | 优先级 | 说明 |
|---|---|---|
| default | 高于 `content` | 子内容（带子内容时徽标浮动到右上角） |
| count | 高于 `count` | 自定义徽标内容 |

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
```
