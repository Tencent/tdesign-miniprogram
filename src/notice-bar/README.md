---
title: NoticeBar 公告栏
description: 在导航栏下方，用于给用户显示提示消息。
spline: message
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-94%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-94%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-88%25-blue" /></span>

<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  该组件于 0.9.0 版本上线，请留意版本。
</div>

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-notice-bar": "tdesign-miniprogram/notice-bar/notice-bar"
}
```

## 代码演示

### 01 组件类型

纯文字的公告栏

{{ base }}

带图标的公告栏

{{ iconDemo }}

带关闭的公告栏

{{ suffixIcon }}

带入口的公告栏

{{ event }}

自定义样式的公告栏

{{ custom }}

自定义内容的公告栏

{{ customization }}

### 02 组件状态

公告栏类型有普通（info）、警示（warning）、成功（success）、错误（error）

{{ theme }}

### 03 可滚动公告栏

可滚动公告栏有水平（horizontal）和垂直（vertical）

{{ scrolling }}


## API
### NoticeBar Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
content | String / Array / Slot | - | 文本内容 | N
direction | String | horizontal | 滚动方向。可选项：horizontal/vertical | N
operation | String / Slot | - | 右侧额外信息 | N
marquee | Boolean / Object | false | 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放【仅在 direction='horizontal' 有效】。TS 类型：`boolean \| DrawMarquee` `interface DrawMarquee { speed?: number; loop?: number; delay?: number }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/notice-bar/type.ts) | N
interval | Number | 2000 | 间隔时间【仅在 direction='vertical' 有效】。 | N
prefix-icon | String / Boolean / Object / Slot | - | 前缀图标。值为字符串表示图标名称，值为 `false` 表示不显示前缀图标，值为 `Object` 类型，表示透传至 `icon`，不传表示使用主题图标。| N
suffix-icon | String / Object / Slot | - | 后缀图标。值为字符串表示图标名称。值为 `Object` 类型，表示透传至 `icon`，不传表示不显示后缀图标。 | N
theme | String | info | 内置主题。可选项：info/success/warning/error | N
visible | Boolean | false | 显示/隐藏 | N
default-visible | Boolean | false | 显示/隐藏。非受控属性 | N

### NoticeBar Events

名称 | 参数 | 描述
-- | -- | --
click | `(trigger: NoticeBarTrigger)` | 点击事件。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/notice-bar/type.ts)。<br/>`type NoticeBarTrigger = 'prefix-icon' \| 'content' \| 'operation' \| 'suffix-icon';`<br/>
change | `(current: number, source: '' \| 'autoplay' \| 'touch')` | 当 `direction="vertical"` 时轮播切换时触发

### NoticeBar 外部样式类
类名 | 说明
-- | -- 
t-class | 根节点样式类
t-class-content | 内容样式类
t-class-prefix-icon | 前置图标样式类
t-class-operation | 右侧额外信息样式类
t-class-suffix-icon | 后置图标样式类

### CSS 变量
组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-notice-bar-error-bg-color | @error-color-1 | - 
--td-notice-bar-error-color | @error-color-6 | - 
--td-notice-bar-font-color | @font-gray-1 | - 
--td-notice-bar-info-bg-color | @brand-color-light | - 
--td-notice-bar-info-color | @brand-color | - 
--td-notice-bar-operation-font-color | @brand-color | - 
--td-notice-bar-success-bg-color | @success-color-1 | - 
--td-notice-bar-success-color | @success-color | - 
--td-notice-bar-suffix-icon-color | @font-gray-3 | - 
--td-notice-bar-warning-bg-color | @warning-color-1 | - 
--td-notice-bar-warning-color | @warning-color | - 
