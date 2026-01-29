---
title: Popover 弹出气泡
description: 用于文字提示的气泡框。
spline: data
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TPopover from '@tdesign/uniapp/popover/popover.vue';
```

### 组件类型

#### 带箭头的弹出气泡

{{ base }}

### 组件样式

#### 气泡主题

{{ theme }}

#### 气泡位置

{{ placement }}

## API

### Popover Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
close-on-click-outside | Boolean | true | 是否在点击外部元素后关闭菜单  | N
content | String | - | 确认框内容 | N
fixed | Boolean | false | 如果触发元素为 `fixed` 场景，需要显示指定 `fixed` 属性为 `true`，同时需在触发元素层添加 `t-popover-wrapper--fixed` 类，用于定位触发元素  | N
placement | String | top | 浮层出现位置。可选项：top/left/right/bottom/top-left/top-right/bottom-left/bottom-right/left-top/left-bottom/right-top/right-bottom | N
show-arrow | Boolean | true | 是否显示浮层箭头 | N
theme | String | dark | 弹出气泡主题。可选项：dark/light/brand/success/warning/error | N
visible | Boolean | undefined | 是否显示气泡确认框。支持语法糖 `v-model:visible` | N

### Popover Events

名称 | 参数 | 描述
-- | -- | --
visible-change | `(visible: boolean)` | 确认框显示或隐藏时触发

### Popover Slots

名称 | 描述
-- | --
\- | 默认插槽，用于自定义触发元素
content | 自定义 `content` 显示内容

### Popover External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-popover-brand-bg-color | @primary-color-1 | -
--td-popover-brand-color | @primary-color-7 | -
--td-popover-dark-bg-color | @font-gray-1 | -
--td-popover-dark-color | @text-color-anti | -
--td-popover-error-bg-color | @error-color-1 | -
--td-popover-error-color | @error-color-6 | -
--td-popover-light-bg-color | @bg-color-container | -
--td-popover-light-color | @text-color-primary | -
--td-popover-padding | 24rpx | -
--td-popover-success-bg-color | @success-color-1 | -
--td-popover-success-color | @success-color-5 | -
--td-popover-warning-bg-color | @warning-color-1 | -
--td-popover-warning-color | @warning-color-5 | -
