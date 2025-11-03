---
title: ChatList 对话
description: 用于 ChatBot 对话或者普通对话场景的组件。
spline: base
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-chat": "tdesign-miniprogram/chat-list/chat-list"
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
{{ hook-component }}

#### 自定义
{{ custom }}

## 场景化示例

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
actionbar | Slot / Function | - | 自定义操作按钮的插槽。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts) | N
animation | String | skeleton | 动画效果，支持「渐变加载动画」,「闪烁加载动画」, 「骨架屏」三种。可选项：skeleton/moving/gradient | N
data | Array | - | 对话列表的数据。TS 类型：`Array<TdChatItemMeta>` ` interface TdChatItemMeta { avatar?: string; name?:string; role?:string; datetime?: string; content?: string;}`。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/pro-components/chat/type.ts) | N
layout | String | both | 对话布局形式，支持两侧对齐与左对齐。可选项：both/single,使用插槽自定义对话内容时不生效，得用`t-chat-message`的`placement`属性 | N
reverse | Boolean | true | 是否表现为倒序 | N

### Chat Events

名称 | 参数 | 描述
-- | -- | --
scroll | `(context: { e: MouseEvent })` | 滚动事件的回调。TS 类型：`TNode`。[通用类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/components/common.ts)

### ChatInstanceFunctions 组件实例方法

名称 | 参数 | 返回值 | 描述
-- | -- | -- | --
scrollToBottom | `(params: ScrollToBottomParams)` | \- | 对话列表过长时，支持对话列表重新滚动回底部的方法。[详细类型定义](https://github.com/Tencent/tdesign-vue-next/blob/develop/packages/pro-components/chat/type.ts)。<br/>` type ScrollToBottomParams = { behavior: 'auto' \| 'smooth'} `<br/>## API


### Button External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-icon | 图标样式类
t-class-loading | 加载样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-button-border-radius | @radius-default | - 
--td-button-border-width | 4rpx | - 
--td-button-danger-active-bg-color | @error-color-active | - 
--td-button-danger-active-border-color | @error-color-active | - 
--td-button-danger-bg-color | @error-color | - 
--td-button-danger-border-color | @error-color | - 
--td-button-danger-color | @text-color-anti | - 
--td-button-danger-dashed-border-color | @button-danger-dashed-color | - 
--td-button-danger-dashed-color | @error-color | - 
--td-button-danger-dashed-disabled-color | @button-danger-disabled-color | - 
--td-button-danger-disabled-bg | @error-color-3 | - 
--td-button-danger-disabled-border-color | @error-color-3 | - 
--td-button-danger-disabled-color | @font-white-1 | - 
--td-button-danger-outline-active-bg-color | @bg-color-container-active | - 
--td-button-danger-outline-active-border-color | @error-color-active | - 
--td-button-danger-outline-border-color | @button-danger-outline-color | - 
--td-button-danger-outline-color | @error-color | - 
--td-button-danger-outline-disabled-color | @error-color-3 | - 
--td-button-danger-text-active-bg-color | @bg-color-container-active | - 
--td-button-danger-text-color | @error-color | - 
--td-button-danger-text-disabled-color | @button-danger-disabled-color | - 
--td-button-default-active-bg-color | @bg-color-component-active | - 
--td-button-default-active-border-color | @bg-color-component-active | - 
--td-button-default-bg-color | @bg-color-component | - 
--td-button-default-border-color | @bg-color-component | - 
--td-button-default-color | @text-color-primary | - 
--td-button-default-disabled-bg | @bg-color-component-disabled | - 
--td-button-default-disabled-border-color | @bg-color-component-disabled | - 
--td-button-default-disabled-color | @text-color-disabled | - 
--td-button-default-outline-active-bg-color | @bg-color-container-active | - 
--td-button-default-outline-active-border-color | @component-border | - 
--td-button-default-outline-border-color | @component-border | - 
--td-button-default-outline-color | @text-color-primary | - 
--td-button-default-outline-disabled-color | @component-border | - 
--td-button-default-text-active-bg-color | @bg-color-container-active | - 
--td-button-extra-small-font-size | @font-size-base | - 
--td-button-extra-small-height | 56rpx | - 
--td-button-extra-small-icon-font-size | 36rpx | - 
--td-button-extra-small-padding-horizontal | 16rpx | - 
--td-button-font-weight | 600 | - 
--td-button-ghost-border-color | @button-ghost-color | - 
--td-button-ghost-color | @text-color-anti | - 
--td-button-ghost-danger-border-color | @error-color | - 
--td-button-ghost-danger-color | @error-color | - 
--td-button-ghost-danger-hover-color | @error-color-active | - 
--td-button-ghost-disabled-color | @font-white-4 | - 
--td-button-ghost-hover-color | @font-white-2 | - 
--td-button-ghost-primary-border-color | @brand-color | - 
--td-button-ghost-primary-color | @brand-color | - 
--td-button-ghost-primary-hover-color | @brand-color-active | - 
--td-button-icon-border-radius | 8rpx | - 
--td-button-icon-spacer | @spacer | - 
--td-button-large-font-size | @font-size-m | - 
--td-button-large-height | 96rpx | - 
--td-button-large-icon-font-size | 48rpx | - 
--td-button-large-padding-horizontal | 40rpx | - 
--td-button-light-active-bg-color | @brand-color-light-active | - 
--td-button-light-active-border-color | @brand-color-light-active | - 
--td-button-light-bg-color | @brand-color-light | - 
--td-button-light-border-color | @brand-color-light | - 
--td-button-light-color | @brand-color | - 
--td-button-light-disabled-bg | @brand-color-light | - 
--td-button-light-disabled-border-color | @brand-color-light | - 
--td-button-light-disabled-color | @brand-color-disabled | - 
--td-button-light-outline-active-bg-color | @brand-color-light-active | - 
--td-button-light-outline-active-border-color | @brand-color-active | - 
--td-button-light-outline-bg-color | @brand-color-light | - 
--td-button-light-outline-border-color | @button-light-outline-color | - 
--td-button-light-outline-color | @brand-color | - 
--td-button-light-outline-disabled-color | @brand-color-disabled | - 
--td-button-light-text-active-bg-color | @bg-color-container-active | - 
--td-button-light-text-color | @brand-color | - 
--td-button-medium-font-size | @font-size-m | - 
--td-button-medium-height | 80rpx | - 
--td-button-medium-icon-font-size | 40rpx | - 
--td-button-medium-padding-horizontal | 32rpx | - 
--td-button-primary-active-bg-color | @brand-color-active | - 
--td-button-primary-active-border-color | @brand-color-active | - 
--td-button-primary-bg-color | @brand-color | - 
--td-button-primary-border-color | @brand-color | - 
--td-button-primary-color | @text-color-anti | - 
--td-button-primary-dashed-border-color | @button-primary-dashed-color | - 
--td-button-primary-dashed-color | @brand-color | - 
--td-button-primary-dashed-disabled-color | @brand-color-disabled | - 
--td-button-primary-disabled-bg | @brand-color-disabled | - 
--td-button-primary-disabled-border-color | @brand-color-disabled | - 
--td-button-primary-disabled-color | @text-color-anti | - 
--td-button-primary-outline-active-bg-color | @bg-color-container-active | - 
--td-button-primary-outline-active-border-color | @brand-color-active | - 
--td-button-primary-outline-border-color | @button-primary-outline-color | - 
--td-button-primary-outline-color | @brand-color | - 
--td-button-primary-outline-disabled-color | @brand-color-disabled | - 
--td-button-primary-text-active-bg-color | @bg-color-container-active | - 
--td-button-primary-text-color | @brand-color | - 
--td-button-primary-text-disabled-color | @brand-color-disabled | - 
--td-button-small-font-size | @font-size-base | - 
--td-button-small-height | 64rpx | - 
--td-button-small-icon-font-size | 36rpx | - 
--td-button-small-padding-horizontal | 24rpx | - 
