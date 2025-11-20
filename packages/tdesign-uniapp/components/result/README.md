---
title: Result 结果
description: 反馈结果状态。
spline: data
isComponent: true
---



## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TResult from 'tdesign-uniapp/result/result.vue';
```

### 组件类型

基础结果

{{ theme }}

带描述的结果

{{ description }}

自定义结果

{{ custom }}

## 常见问题

<details>
  <summary>
    本地图片无法正确引用?
    <span class="icon">👇</span>
  </summary>
  <p style="margin-top: 10px; color: rgba(0, 0, 0, .6)">
    建议使用绝对路径，而不是相对路径。绝对路径以 app.json 所在位置为基准。
  </p>
</details>

## API

### Result Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
description | String | - | 描述文字 | N
icon | String / Boolean / Object | true | 图标名称。值为字符串表示图标名称，值为 `false` 表示不显示图标，值为 `Object` 类型，表示透传至 `icon`，不传表示使用主题图标 | N
image | String | - | 图片地址 | N
theme | String | default | 内置主题。可选项：default/success/warning/error | N
title | String | '' | 标题 | N

### Result Slots

名称 | 描述
-- | --
description | 自定义 `description` 显示内容
image | 自定义 `image` 显示内容
title | 自定义 `title` 显示内容

### Result External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-description | 描述样式类
t-class-image | 图片样式类
t-class-title | 标题样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
| 名称 | 默认值 | 描述 |
| -- | -- | -- | 
| --td-result-description-color | @text-color-secondary | - |
| --td-result-description-font-size | @font-size-base | - |
| --td-result-description-line-height | 44rpx | - |
| --td-result-description-margin-top | @spacer | - |
| --td-result-icon-default-color | @brand-color | - |
| --td-result-icon-error-color | @error-color | - |
| --td-result-icon-success-color | @success-color | - |
| --td-result-icon-warning-color | @warning-color | - |
| --td-result-title-color | @text-color-primary | - |
| --td-result-title-font-size | @font-size-xl | - |
| --td-result-title-line-height | 56rpx | - |
| --td-result-title-margin-top | @spacer-1 | - |