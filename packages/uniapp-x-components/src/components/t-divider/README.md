# Divider

分割线组件。用于分割、组织、细化有一定逻辑的组织元素内容和页面结构。

## Props

| 名称 | 类型 | 默认 | 说明 |
|---|---|---|---|
| layout | `'horizontal' \| 'vertical'` | `'horizontal'` | 分隔线类型：水平 / 垂直 |
| align | `'left' \| 'center' \| 'right'` | `'center'` | 文本位置（仅水平有效） |
| dashed | boolean | `false` | 是否虚线（仅水平有效） |
| content | string | `''` | 文本内容，等价于默认插槽 |
| lineColor | string | `''` | 分割线颜色（同时作用于线条与文字） |
| customClass | string | `''` | 透传额外类名 |

## Slots

| 名称 | 优先级 | 说明 |
|---|---|---|
| default | 高于 `content` prop | 自定义内容（仅水平场景渲染） |

## 用法

```vue
<!-- 基础水平分割 -->
<t-divider />

<!-- 带文字 -->
<t-divider content="TDesign" />

<!-- 虚线 + 居左 -->
<t-divider dashed align="left" content="OR" />

<!-- 垂直分割（内联） -->
<text>左</text>
<t-divider layout="vertical" />
<text>中</text>
<t-divider layout="vertical" />
<text>右</text>

<!-- 自定义颜色 -->
<t-divider line-color="#0052d9" content="醒目分隔" />
```
