---
title: Result 结果
description: 反馈结果状态。
spline: data
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-93%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-93%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-25%25-red" /></span>

<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  该组件于 0.16.0 版本上线，请留意版本。
</div>

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-result": "tdesign-miniprogram/result/result"
}
```

## 代码演示

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

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
description | String / Slot | - | 描述文字 | N
icon | String / Boolean / Object | true | 图标名称。值为字符串表示图标名称，值为 `false` 表示不显示图标，值为 `Object` 类型，表示透传至 `icon`，不传表示使用主题图标。 | N
image | String / Slot | - | 图片地址 | N
theme | String | default | 内置主题。可选项：default/success/warning/error | N
title | String / Slot | '' | 标题 | N

### Result 外部样式类
类名 | 说明
-- | -- 
t-class | 根节点样式类
t-class-image | 图片样式类
t-class-title | 标题样式类
t-class-description | 描述样式类

### CSS 变量
组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-result-description-color | @font-gray-2 | - 
--td-result-description-font-size | @font-size-base | - 
--td-result-description-line-height | 44rpx | - 
--td-result-description-margin-top | @spacer | - 
--td-result-icon-default-color | @brand-color | - 
--td-result-icon-error-color | @error-color | - 
--td-result-icon-success-color | @success-color | - 
--td-result-icon-warning-color | @warning-color | - 
--td-result-title-color | @font-gray-1 | - 
--td-result-title-font-size | @font-size-l | - 
--td-result-title-line-height | 56rpx | - 
--td-result-title-margin-top | @spacer-1 | - 
