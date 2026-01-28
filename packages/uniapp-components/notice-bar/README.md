---
title: NoticeBar 公告栏
description: 在导航栏下方，用于给用户显示提示消息。
spline: message
isComponent: true
---



## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TNoticeBar from '@tdesign/uniapp/notice-bar/notice-bar.vue';
```

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

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
content | String / Array | - | 文本内容 | N
direction | String | horizontal | 滚动方向。可选项：horizontal/vertical | N
interval | Number | 2000 | 间隔时间【仅在 direction='vertical' 有效】 | N
marquee | Boolean / Object | false | 跑马灯效果。speed 指速度控制；loop 指循环播放次数，值为 -1 表示循环播放，值为 0 表示不循环播放；delay 表示延迟多久开始播放【仅在 direction='horizontal' 有效】。TS 类型：`boolean \| NoticeBarMarquee` `interface NoticeBarMarquee { speed?: number; loop?: number; delay?: number }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/notice-bar/type.ts) | N
operation | String | - | 右侧额外信息 | N
prefix-icon | String / Boolean / Object | true | 前缀图标。值为字符串表示图标名称，值为 `false` 表示不显示前缀图标，值为 `Object` 类型，表示透传至 `icon`，不传表示使用主题图标 | N
suffix-icon | String / Object | - | 后缀图标。值为字符串表示图标名称。值为 `Object` 类型，表示透传至 `icon`，不传表示不显示后缀图标 | N
theme | String | info | 内置主题。可选项：info/success/warning/error | N
visible | Boolean | false | 显示/隐藏。支持语法糖 `v-model:visible` | N
default-visible | Boolean | false | 显示/隐藏。非受控属性 | N

### NoticeBar Events

名称 | 参数 | 描述
-- | -- | --
change | `(context: { current: number, source: '' \| 'autoplay' \| 'touch' })` | 当 `direction="vertical"` 时轮播切换时触发
click | `(context: { trigger: NoticeBarTrigger })` | 点击事件。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/notice-bar/type.ts)。<br/>`type NoticeBarTrigger = 'prefix-icon' \| 'content' \| 'operation' \| 'suffix-icon';`<br/>

### NoticeBar Slots

名称 | 描述
-- | --
content | 文本内容
operation | 自定义 `operation` 显示内容
prefix-icon | 前缀图标
suffix-icon | 后缀图标

### NoticeBar External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类
t-class-operation | 右侧额外信息样式类
t-class-prefix-icon | 前置图标样式类
t-class-suffix-icon | 后置图标样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-notice-bar-error-bg-color | @error-color-1 | -
--td-notice-bar-error-color | @error-color | -
--td-notice-bar-font-color | @text-color-primary | -
--td-notice-bar-info-bg-color | @brand-color-light | -
--td-notice-bar-info-color | @brand-color | -
--td-notice-bar-operation-font-color | @brand-color | -
--td-notice-bar-success-bg-color | @success-color-1 | -
--td-notice-bar-success-color | @success-color | -
--td-notice-bar-suffix-icon-color | @text-color-placeholder | -
--td-notice-bar-warning-bg-color | @warning-color-1 | -
--td-notice-bar-warning-color | @warning-color | -
