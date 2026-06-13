# Cell

通用列表项组件，常用于表单条目、设置页、信息展示。

## Props

| 名称 | 类型 | 默认 | 说明 |
|---|---|---|---|
| title | string | `''` | 左侧标题 |
| description | string | `''` | 标题下方描述 |
| note | string | `''` | 右侧文案 |
| arrow | boolean | `false` | 是否显示右箭头 |
| bordered | boolean | `false` | 是否显示底部分隔线 |
| hover | boolean | `false` | 是否启用按下高亮 |
| disabled | boolean | `false` | 禁用 |
| required | boolean | `false` | 标题前显示红色星号 |
| align | `'top' \| 'middle' \| 'bottom'` | `'middle'` | 主轴对齐 |
| customClass | string | `''` | 透传额外类名 |

## Slots

| 名称 | 优先级 | 说明 |
|---|---|---|
| title | 高于 `title` prop | 自定义标题 |
| description | 高于 `description` prop | 自定义描述 |
| note | 高于 `note` prop | 自定义右侧值 |
| left-icon | — | 左侧图标 |
| right-icon | 高于 `arrow` prop | 自定义右侧元素，存在时不再渲染默认箭头 |

## Events

| 名称 | 参数 | 说明 |
|---|---|---|
| click | `(event: MouseEvent)` | `disabled` 时不触发 |

## 用法

```vue
<TCell title="昵称" note="小王" arrow bordered />

<TCell title="必填项" required>
  <template #right-icon><MyIcon /></template>
</TCell>

<TCell description="多行说明文字" align="top">
  <template #left-icon><Avatar /></template>
</TCell>
```
