# Button

一个 uni-app x 兼容的按钮组件，支持 4 种 variant × 5 种 theme × 4 种 size × 4 种 shape 的组合矩阵。

## 何时使用

- 用户需要点击操作时
- 表单提交、对话框确认等关键动作

## Props

| 名称 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| variant | `'base' \| 'outline' \| 'dashed' \| 'text'` | `'base'` | 按钮形态 |
| theme | `'default' \| 'primary' \| 'danger' \| 'warning' \| 'success'` | `'default'` | 主题色 |
| size | `'extra-small' \| 'small' \| 'medium' \| 'large'` | `'medium'` | 尺寸 |
| shape | `'rectangle' \| 'square' \| 'round' \| 'circle'` | `'rectangle'` | 形状 |
| type | `'button' \| 'submit' \| 'reset'` | `'button'` | 原生 type（仅 H5） |
| block | `boolean` | `false` | 是否撑满父容器宽度 |
| disabled | `boolean` | `false` | 禁用 |
| loading | `boolean` | `false` | 加载中（禁用点击） |
| ghost | `boolean` | `false` | 透明背景 |
| customClass | `string` | `''` | 透传额外类名 |

## Events

| 名称 | 参数 | 说明 |
|---|---|---|
| click | `(event: MouseEvent)` | 点击触发；`disabled` / `loading` 时不会触发 |

## Slots

| 名称 | 说明 |
|---|---|
| default | 按钮内容 |
| icon | 前置图标（loading 时被遮蔽） |
| loading | 自定义 loading 节点 |

## 用法示例

```vue
<template>
  <TButton theme="primary" @click="onSave">保存</TButton>

  <TButton variant="outline" theme="danger" :loading="submitting">
    删除
  </TButton>

  <TButton block size="large" shape="round">
    <template #icon><MyIcon /></template>
    立即购买
  </TButton>
</template>

<script setup lang="ts">
import { TButton } from '@tdesign/uniapp-x';
</script>
```

## 类名结构（供主题覆盖）

```
.t-button
  .t-button--variant-{base|outline|dashed|text}
  .t-button--theme-{default|primary|danger|warning|success}
  .t-button--{extra-small|small|medium|large}
  .t-button--{rectangle|square|round|circle}
  .t-button--block?
  .t-button--disabled?
  .t-button--loading?
  .t-button--ghost?

  .t-button__icon
  .t-button__loading > .t-button__spinner
  .t-button__content
```

## 跨端说明

- **H5 / 单测**：使用 [`button.vue`](./button.vue)（vue3 SFC）
- **Android / iOS**：使用 [`button.uvue`](./button.uvue)（uts/uvue SFC，行为镜像）
- 两端共享 `button.variants.ts` / `button.types.ts`，确保类名与契约完全一致
