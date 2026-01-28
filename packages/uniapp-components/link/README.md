---
title: Link 链接
description: 文字超链接用于跳转一个新页面，如当前项目跳转，友情链接等。
spline: navigation
isComponent: true
---


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TLink from '@tdesign/uniapp/link/link.vue';
```

### 组件类型

基础文字链接

{{ content }}

下划线文字链接

{{ underline }}

前置图标文字链接

{{ prefix }}

后置图标文字链接

{{ suffix }}

### 组件状态

不同主题

{{ theme }}

禁用状态

{{ disabled }}

### 组件样式

链接尺寸

{{ size }}

## API

### Link Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
content | String | - | 链接内容 | N
disabled | Boolean | false | 是否为禁用态 | N
hover | Boolean | - | 是否开启点击反馈 | N
navigator-props | Object | {} | 与 navigator 原生组件属性保持一致，具体使用参考：[微信开放文档](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html)。使用时请将形如 `open-type` 风格的属性名改为 `openType` 风格 | N
prefix-icon | String / Object | - | 前置图标 | N
size | String | medium | 尺寸。可选项：small/medium/large。TS 类型：`SizeEnum`。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/common/common.ts) | N
status | String | normal | 已废弃。组件状态。可选项：normal/active/disabled | N
suffix-icon | String / Object | - | 后置图标 | N
theme | String | default | 组件风格，依次为默认色、品牌色、危险色、警告色、成功色。可选项：default/primary/danger/warning/success | N
underline | Boolean | - | 是否显示链接下划线 | N

### Link Events

名称 | 参数 | 描述
-- | -- | --
complete | \- | 页面链接执行完成后触发（失败或成功均会触发）
fail | \- | 页面链接跳转失败后触发
success | \- | 页面链接跳转成功后触发

### Link Slots

名称 | 描述
-- | --
\- | 默认插槽，作用同 `content` 插槽
content | 自定义 `content` 显示内容
prefix-icon | 自定义 `prefix-icon` 显示内容
suffix-icon | 自定义 `suffix-icon` 显示内容

### Link External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类
t-class-hover | 悬停样式类
t-class-prefix-icon | 前置图标样式类
t-class-suffix-icon | 后置图标样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-link-danger-active-color | @error-color-active | -
--td-link-danger-color | @error-color | -
--td-link-danger-disabled-color | @error-color-disabled | -
--td-link-default-active-color | @brand-color-active | -
--td-link-default-color | @text-color-primary | -
--td-link-default-disabled-color | @text-color-disabled | -
--td-link-primary-active-color | @brand-color-active | -
--td-link-primary-color | @brand-color | -
--td-link-primary-disabled-color | @brand-color-disabled | -
--td-link-success-active-color | @success-color-active | -
--td-link-success-color | @success-color | -
--td-link-success-disabled-color | @success-color-disabled | -
--td-link-warning-active-color | @warning-color-active | -
--td-link-warning-color | @warning-color | -
--td-link-warning-disabled-color | @warning-color-disabled | -
