---
title: Chat 对话
description: 用于 ChatBot 对话或者普通对话场景的组件。
spline: base
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-chat": "tdesign-miniprogram-chat/chat/chat"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/F1cSo7mm75SS" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>


### 01 组件类型

#### 基础问答
{{ base }}

#### 组合式用法
{{ hookComponent }}

#### 自定义
{{ custom }}

## 场景化示例

### 代码助手
{{ code }}

### 文案助手
{{ docs }}

### 图像生成
{{ image }}

### 任务规划
{{ agent }}

## API


### Chat Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
actions | Slot / Function | - | 自定义操作按钮的插槽。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
animation | String | skeleton | 动画效果，支持「渐变加载动画」,「闪烁加载动画」, 「骨架屏」三种。可选项：skeleton/moving/gradient | N
data | Array | - | 对话列表的数据。TS 类型：`Array<TdChatItemMeta>` ` interface TdChatItemMeta { avatar?: string; name?:string; role?:string; datetime?: string; content?: string; reasoning?: string }`。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/pro-components/chat/type.ts) | N
layout | String | both | 对话布局形式，支持两侧对齐与左对齐。可选项：both/single | N
reverse | Boolean | true | 是否表现为倒序 | N
onScroll | Function |  | TS 类型：`(context: { e: MouseEvent }) => void`<br/>滚动事件的回调。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N

### Chat Events

名称 | 参数 | 描述
-- | -- | --
scroll | `(context: { e: MouseEvent })` | 滚动事件的回调。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts)

### ChatInstanceFunctions 组件实例方法

名称 | 参数 | 返回值 | 描述
-- | -- | -- | --
scrollToBottom | `(params: ScrollToBottomParams)` | \- | 对话列表过长时，支持对话列表重新滚动回底部的方法。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/pro-components/chat/type.ts)。<br/>` type ScrollToBottomParams = { behavior: 'auto' \| 'smooth'} `<br/>