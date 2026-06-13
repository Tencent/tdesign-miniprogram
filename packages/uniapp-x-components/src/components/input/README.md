# Input

文本输入框，支持 v-model、清除、前后插槽与多种校验状态。

## Props

| 名称 | 类型 | 默认 | 说明 |
|---|---|---|---|
| modelValue / v-model | string | `''` | 受控值 |
| placeholder | string | `''` | 占位文本 |
| type | `'text' \| 'number' \| 'password' \| 'tel' \| 'email' \| 'search'` | `'text'` | 输入类型 |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | 尺寸 |
| status | `'default' \| 'success' \| 'warning' \| 'error'` | `'default'` | 校验状态（影响边框色） |
| disabled | boolean | `false` | 禁用 |
| readonly | boolean | `false` | 只读 |
| clearable | boolean | `false` | 显示清除按钮（值非空时才显示） |
| maxlength | number | `0` | 最大长度，`<=0` 不限制 |
| customClass | string | `''` | 透传额外类名 |

## Events

| 名称 | 参数 | 说明 |
|---|---|---|
| update:modelValue | `(value: string)` | v-model 同步 |
| change | `(value: string)` | 值变更 |
| focus | `(event: FocusEvent)` | 聚焦 |
| blur | `(event: FocusEvent)` | 失焦 |
| clear | `()` | 用户点击清除按钮 |
| enter | `(value: string)` | 用户按下回车 |

## Slots

| 名称 | 说明 |
|---|---|
| prefix | 输入框左侧（图标位） |
| suffix | 输入框右侧（图标位） |

## 用法

```vue
<TInput v-model="name" placeholder="请输入昵称" clearable />

<TInput v-model="phone" type="tel" :maxlength="11" status="error" />

<TInput v-model="search" placeholder="搜索…">
  <template #prefix><SearchIcon /></template>
</TInput>
```
