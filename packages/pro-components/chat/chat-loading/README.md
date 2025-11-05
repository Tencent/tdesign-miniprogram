---
title: ChatLoading 对话加载
description: 用于对话场景中的加载状态组件。
spline: base
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-chat-loading": "tdesign-miniprogram/chat-loading/chat-loading"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/F1cSo7mm75SS" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>


### 01 组件类型

支持多种加载中动效类型，包括 gradient、moving、dots

{{ base }}

带文案描述的加载组件

{{ text }}

## API

### ChatLoading Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
animation | String | moving | 加载的状态形式。可选项：moving/gradient/circle | N
text | String | - | 加载过程展示的文字内容 | N

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述
-- | -- | --
--td-chat-loading-color | @brand-color | 加载图标颜色
--td-chat-loading-text-color | @text-color-secondary | 加载文本颜色
--td-chat-loading-text-font-size | @font-size-base | 加载文本字体大小
--td-chat-loading-text-line-height | @line-height-base | 加载文本行高
--td-chat-loading-text-margin-left | @spacer | 加载文本左边距
--td-chat-loading-size-small | 24rpx | 小尺寸加载图标大小
--td-chat-loading-size-medium | 32rpx | 中尺寸加载图标大小
--td-chat-loading-size-large | 40rpx | 大尺寸加载图标大小
