---
title: Typography 排版
description: 排版用于文本基础编排和样式，使用排版组件，可以快速完成页面中的文本内容制作，同时配合其他组件完成暗黑明亮模式切换等风格统一的需求
isComponent: true
spline: base
---


<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  该组件于 1.15.0 版本上线，请留意版本。
</div>

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-94%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-83%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-94%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-88%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-paragraph": "tdesign-miniprogram/paragraph/paragraph",
  "t-text": "tdesign-miniprogram/text/text",
  "t-title": "tdesign-miniprogram/title/title"
}
```

## 代码演示

<a href="xxx" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

### 基础使用

{{ base }}

## API


### Paragraph Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
content | String | - | 段落内容 | N
ellipsis | Boolean / Object | false | 是否省略展示，可通过配置参数自定义省略操作的具体功能和样式。TS 类型：`boolean \| TypographyEllipsis `，[Text API Documents](./text?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/paragraph/type.ts) | N

### Paragraph Slots

名称 | 描述
-- | --
content | 自定义 `content` 显示内容


### Text Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
code | Boolean | false | 是否添加代码样式 | N
content | String | - | 文本内容 | N
copyable | Boolean | false | 是否可复制。TS 类型：`boolean \| TypographyCopyable ` `interface TypographyCopyable { text?: string }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/text/type.ts) | N
delete | Boolean | false | 是否添加删除线样式 | N
disabled | Boolean | false | 是否添加不可用样式 | N
ellipsis | Boolean / Object | false | 是否省略展示，可通过配置参数自定义省略操作的具体功能和样式。TS 类型：`boolean \| TypographyEllipsis ` `interface TypographyEllipsis { collapsible?: boolean; expandable?: boolean; row?: number;}`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/text/type.ts) | N
italic | Boolean | false | 文本是否为斜体 | N
keyboard | Boolean | false | 是否添加键盘样式 | N
mark | String / Boolean | false | 是否添加标记样式，默认为黄色，可通过配置颜色修改标记样式，如#0052D9 | N
strong | Boolean | false | 文本是否加粗 | N
theme | String | - | 主题。可选项：primary/secondary/success/warning/error | N
underline | Boolean | false | 是否添加下划线样式 | N

### Text Slots

名称 | 描述
-- | --
content | 自定义 `content` 显示内容


### Title Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
content | String | - | 段落内容 | N
ellipsis | Boolean / Object | false | 是否省略展示，可通过配置参数自定义省略操作的具体功能和样式。TS 类型：`boolean \| TypographyEllipsis `，[Text API Documents](./text?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/components/title/type.ts) | N
level | String | h1 | 标题等级。可选项：h1/h2/h3/h4/h5/h6 | N

### Title Slots

名称 | 描述
-- | --
content | 自定义 `content` 显示内容
