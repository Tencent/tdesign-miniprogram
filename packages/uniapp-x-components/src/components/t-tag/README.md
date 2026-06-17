# Tag

标签组件。用于表明主体的类目、属性或状态。

## Props

| 名称 | 类型 | 默认 | 说明 |
|---|---|---|---|
| theme | `'default' \| 'primary' \| 'warning' \| 'danger' \| 'success'` | `'default'` | 主题（语义颜色） |
| variant | `'dark' \| 'light' \| 'outline' \| 'light-outline'` | `'dark'` | 风格变体 |
| shape | `'square' \| 'round' \| 'mark'` | `'square'` | 形状 |
| size | `'small' \| 'medium' \| 'large' \| 'extra-large'` | `'medium'` | 尺寸 |
| disabled | boolean | `false` | 禁用态（仅 default 主题视觉标准化） |
| closable | boolean | `false` | 是否展示关闭按钮 |
| maxWidth | `string \| number` | `''` | 最大宽度（数字默认 px） |
| content | string | `''` | 标签文本（也可用默认插槽） |
| customClass | string | `''` | 透传额外类名 |

## Events

| 名称 | 参数 | 说明 |
|---|---|---|
| click | `(event: MouseEvent)` | 点击标签触发；`disabled` 时不触发 |
| close | `(event: MouseEvent)` | 点击关闭按钮触发；`disabled` 时不触发 |

## Slots

| 名称 | 优先级 | 说明 |
|---|---|---|
| default | 高于 `content` prop | 标签内容（可放图标 + 文字） |

## 用法

```vue
<!-- 主题色 -->
<t-tag theme="primary">主要</t-tag>
<t-tag theme="success">成功</t-tag>
<t-tag theme="warning">警告</t-tag>
<t-tag theme="danger">危险</t-tag>

<!-- 风格变体 -->
<t-tag theme="primary" variant="light">浅色</t-tag>
<t-tag theme="primary" variant="outline">描边</t-tag>
<t-tag theme="primary" variant="light-outline">浅色描边</t-tag>

<!-- 形状 -->
<t-tag shape="round">圆角</t-tag>
<t-tag shape="mark">书签</t-tag>

<!-- 尺寸 -->
<t-tag size="small">小</t-tag>
<t-tag size="extra-large">超大</t-tag>

<!-- 可关闭 -->
<t-tag closable @close="onClose">可关闭</t-tag>
```
