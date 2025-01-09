---
title: Guide 按钮
description: 逐步骤进行指引或解释说明的组件，常用于用户不熟悉的或需进行特别强调的页面。
spline: base
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-0%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-0%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-0%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-0%25-blue" /></span>

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-guide": "tdesign-miniprogram/guide/guide"
}
```

<!-- ## 代码演示

<a href="https://developers.weixin.qq.com/s/F1cSo7mm75SS" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote> -->


### 01 组件类型

#### 基础按钮

{{ base }}

#### 不带遮罩的引导

{{ no-mask }}

#### 弹窗形式的引导

{{ dialog }}

#### 气泡与弹窗混合的引导

{{ multiple }}

#### 自定义气泡

{{ content }}

## API

### Guide Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
back-button-props | Object | - | 透传 返回按钮 的全部属性，示例：`{ content: '返回', theme: 'default' }`。TS 类型：`ButtonProps` | N
counter | String / Function | - | 用于自定义渲染计数部分。TS 类型：`string \| ((params: { total: number; current: number }) => string)` | N
current | Number | - | 当前步骤，即整个引导的进度。-1 则不展示，用于需要中断展示的场景 | N
default-current | Number | undefined | 当前步骤，即整个引导的进度。-1 则不展示，用于需要中断展示的场景。非受控属性 | N
finish-button-props | Object | - | 透传 完成按钮 的全部属性，示例：`{ content: '完成', theme: 'primary' }`。TS 类型：`ButtonProps` | N
hide-back | Boolean | false | 是否隐藏返回按钮 | N
hide-counter | Boolean | false | 是否隐藏计数 | N
hide-skip | Boolean | false | 是否隐藏跳过按钮 | N
highlight-padding | Number | 16 | 高亮框的内边距，单位rpx | N
mode | String | popover | 引导框的类型。可选项：popover/dialog | N
next-button-props | Object | - | 透传 下一步按钮 的全部属性，示例：{ content: '下一步', theme: 'primary' }。TS 类型：`ButtonProps`，[Button API Documents](./button?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/guide/type.ts) | N
show-overlay | Boolean | true | 是否出现遮罩层 | N
skip-button-props | Object | - | 透传 跳过按钮 的全部属性，{ content: '跳过', theme: 'default' }。TS 类型：`ButtonProps` | N
steps | Array | - | 用于定义每个步骤的内容，包括高亮的节点、相对位置和具体的文案内容等。TS 类型：`Array<GuideStep>` | N
using-custom-navbar | Boolean | false | 是否使用了自定义导航栏 | N
z-index | Number | 999999 | 提示框的层级 | N

### Guide Events

名称 | 参数 | 描述
-- | -- | --
back | `(detail: { current: number, total: number  })` | 点击返回按钮时触发
change | `(current: number, context?: {  total: number })` | 当前步骤发生变化时触发
finish | `(detail: { current: number, total: number  })` | 点击完成按钮时触发
next-step-click | `(detail: { next: number, current: number, total: number  })` | 点击下一步时触发
skip | `(detail: { current: number, total: number  })` | 点击跳过按钮时触发

### Guide External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-back | 返回按钮样式类
t-class-body | 高亮框提示内容主体样式类
t-class-finish | 结束按钮样式类
t-class-footer | 高亮框底部操作区域样式类
t-class-next | 下一步按钮样式类
t-class-popover | 引导框样式类
t-class-reference | 高亮框样式类
t-class-skip | 跳过按钮样式类
t-class-title | 高亮框提示内容标题样式类
t-class-tooltip | 高亮框提示内容区域样式类

### GuideStep

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
back-button-props | Object | - | 用于自定义当前引导框的返回按钮的内容。TS 类型：`ButtonProps` | N
body | String | - | 当前步骤提示框的内容，支持插槽：slot="body-{{index}}" (1、当要显示body-{{index}}插槽时，请将body设置为空；2、当要显示content-{{index}}插槽完全自定义内容时，请将body和title都设置为空) | N
element | Function | - | 必需。高亮的节点。示例： `() => new Promise((resolve) => this.createSelectorQuery().select('#tdesign').boundingClientRect((rect) => resolve(rect)).exec())`。TS 类型：`StepElement` `type StepElement = () => Promise<WechatMiniprogram.BoundingClientRectCallbackResult>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/guide/type.ts) | Y
finish-button-props | Object | - | 透传 完成 的全部属性，示例：`{ content: '完成', theme: 'primary' }`。TS 类型：`ButtonProps` | N
highlight-padding | Number | - | 高亮框的内边距，单位rpx | N
mode | String | - | 引导框的类型。可选项：popover/dialog | N
next-button-props | Object | - | 用于自定义当前引导框的下一步按钮的内容。TS 类型：`ButtonProps` | N
offset | Array | - | 相对于 placement 的偏移量[left, top]，默认单位rpx，示例：[-10, 20] 或 ['10px', '8px'] 或 ['20rpx', '16rpx'] (仅当 `mode` 为 `popover` 时生效)。TS 类型：`Array<string \| number>` | N
placement | String | 'top' | 引导框相对于高亮元素出现的位置，(仅当 `mode` 为 `popover` 时生效)。TS 类型：`StepPopoverPlacement ` `type StepPopoverPlacement = 'top'\|'left'\|'right'\|'bottom'\|'top-left'\|'top-right'\|'bottom-left'\|'bottom-right'\|'left-top'\|'left-bottom'\|'right-top'\|'right-bottom'\|'center'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/guide/type.ts) | N
show-overlay | Boolean | true | 是否出现遮罩层 | N
skip-button-props | Object | - | 用于自定义当前步骤引导框的跳过按钮的内容。TS 类型：`ButtonProps` | N
title | String | - | 当前步骤的标题内容，支持插槽：slot="title-{{index}}" (1、当要显示body-{{index}}插槽时，请将title设置为空；2、当要显示content-{{index}}插槽完全自定义内容时，请将body和title都设置为空) | N

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-guide-body-color | @font-gray-2 | - 
--td-guide-body-font-weight | 400 | - 
--td-guide-dialog-body-font-size | @font-size-m | - 
--td-guide-dialog-body-line-height | 48rpx | - 
--td-guide-dialog-body-margin-top | 16rpx | - 
--td-guide-dialog-body-text-align | center | - 
--td-guide-dialog-border-radius | @radius-extra-large | - 
--td-guide-dialog-footer-button-padding | 0 @spacer-3 | - 
--td-guide-dialog-padding | @spacer-3 0 | - 
--td-guide-dialog-title-font-size | 36rpx | - 
--td-guide-dialog-title-line-height | 52rpx | - 
--td-guide-dialog-title-text-align | center | - 
--td-guide-dialog-width | 622rpx | - 
--td-guide-footer-button-space | @spacer-1 | - 
--td-guide-footer-margin-top | @spacer-3 | - 
--td-guide-footer-text-align | right | - 
--td-guide-popover-bg-color | @font-white-1 | - 
--td-guide-popover-body-font-size | @font-size-base | - 
--td-guide-popover-body-line-height | 44rpx | - 
--td-guide-popover-body-margin-top | 8rpx | - 
--td-guide-popover-body-text-align | left | - 
--td-guide-popover-border | 2rpx solid @gray-color-4 | - 
--td-guide-popover-border-radius | @radius-large | - 
--td-guide-popover-max-width | 540rpx | - 
--td-guide-popover-min-width | 480rpx | - 
--td-guide-popover-padding | @spacer-2 | - 
--td-guide-popover-shadow | @shadow-3 | - 
--td-guide-popover-title-font-size | @font-size-m | - 
--td-guide-popover-title-line-height | 48rpx | - 
--td-guide-popover-title-text-align | left | - 
--td-guide-reference-border | 4rpx solid @brand-color | - 
--td-guide-reference-border-radius | @radius-default | - 
--td-guide-reference-mask-color | @font-gray-2 | - 
--td-guide-title-color | @font-gray-1 | - 
--td-guide-title-font-weight | 600 | -