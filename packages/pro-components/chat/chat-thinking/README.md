---
title: ChatThinking 思考过程
description: 用于展示 ChatBot 思考过程的组件。
spline: base
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-chat-thinking": "tdesign-miniprogram-chat/chat-thinking/chat-thinking"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/F1cSo7mm75SS" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>


### 基础用法

支持通过`maxHeight`来设置展示内容的最大高度，超出会自动滚动；

支持通过`collapsed`来控制面板是否折叠，示例中展示了当内容输出结束时自动收起的效果

{{ base }}

### 样式设置
支持通过`layout`来设置思考过程的布局方式

支持通过`animation`来设置思考内容加载过程的动画效果

{{ style-set }}

## API
### ChatThinking Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
content | Object | - | 思考内容对象。TS类型：`{ text?: string; title?: string }` | N
layout | String | block | 布局方式。可选项： block/border | N
status | ChatMessageStatus/Function | - | 思考状态。可选项：complete/stop/error/pending | N
maxHeight | Number | - | 内容区域最大高度，超出会自动滚动 | N
animation | String | circle | 加载动画类型。可选项： circle/moving/gradient | N
collapsed | Boolean | false | 是否折叠（受控） | N

### ChatThinking Events

名称 | 参数 | 描述
-- | -- | --
expand-change | `(value: Boolean)` | 展开图标点击事件。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts)。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/pro-components/chat/type.ts)。

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-chat-thinking-bg-color | @bg-color-container | 思考过程背景色
--td-chat-thinking-border-color | @component-border | 思考过程边框颜色
--td-chat-thinking-border-radius | @radius-default | 思考过程边框圆角
--td-chat-thinking-color | @text-color-primary | 思考过程文字颜色
--td-chat-thinking-font-size | @font-size-base | 思考过程文字大小
--td-chat-thinking-line-height | @line-height-base | 思考过程行高
--td-chat-thinking-padding | @spacer-2 | 思考过程内边距
