---
title: CountDown 倒计时
description: 用于实时展示倒计时数值。
spline: data
isComponent: true
---


> CountDown 组件用于实时展示倒计时数值。
如果需要与站点演示一致的数字字体效果，推荐您到 <a href="https://tdesign.tencent.com/design/fonts">数字字体章节</a>，将 TCloudNumber 字体下载并将包含的 TCloudNumberVF.ttf 做为 TCloudNumber 字体资源引入到具体项目中使用。


## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TCountDown from 'tdesign-uniapp/count-down/count-down.vue';
```

### 基础倒计时

{{ base }}

### 调整尺寸

{{ size }}

## API

### CountDown Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
auto-start | Boolean | true | 是否自动开始倒计时 | N
content | String | 'default' | 最终倒计时的展示内容，值为'default'时使用默认的格式，否则使用自定义样式插槽 | N
format | String | HH:mm:ss | 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒 | N
millisecond | Boolean | false | 是否开启毫秒级渲染 | N
size | String | 'medium' | 倒计时尺寸。可选项：small/medium/large | N
split-with-unit | Boolean | false | 使用时间单位分割 | N
theme | String | 'default' | 倒计时风格。可选项：default/round/square | N
time | Number | 0 | 必需。倒计时时长，单位毫秒 | Y

### CountDown Events

名称 | 参数 | 描述
-- | -- | --
change | `(time: TimeData)` | 时间变化时触发。[详细类型定义](https://github.com/novlan1/tdesign-uniapp/blob/develop/packages/tdesign/count-down/type.ts)。<br/>`interface TimeData {  days: number; hours: number; minutes: number; seconds: number; milliseconds: number }`<br/>
finish | \- | 倒计时结束时触发

### CountDown Slots

名称 | 描述
-- | --
\- | 默认插槽，作用同 `content` 插槽
content | 自定义 `content` 显示内容

### CountDown External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-count | 计数样式类
t-class-split | 分隔线样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
| 名称 | 默认值 | 描述 |
| -- | -- | -- | 
| --td-countdown-bg-color | @error-color | - |
| --td-countdown-default-color | @text-color-primary | - |
| --td-countdown-round-border-radius | @radius-circle | - |
| --td-countdown-round-color | @text-color-anti | - |
| --td-countdown-square-border-radius | @radius-small | - |