---
title: Result 结果
description: 反馈结果状态。
spline: data
isComponent: true
---


<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  该组件于 0.16.0 版本上线，请留意版本。
</div>

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-95%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-80%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-95%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-80%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-result": "tdesign-miniprogram/result/result"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/gJzz5Mmu8m5g" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

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
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
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
名称 | 默认值 | 描述 
-- | -- | --
--td-result-description-color | @text-color-secondary | -
--td-result-description-font | @font-body-medium | -
--td-result-description-margin-top | @spacer | -
--td-result-icon-default-color | @brand-color | -
--td-result-icon-error-color | @error-color | -
--td-result-icon-success-color | @success-color | -
--td-result-icon-warning-color | @warning-color | -
--td-result-title-color | @text-color-primary | -
--td-result-title-font | @font-title-extraLarge | -
--td-result-title-margin-top | @spacer-1 | -
