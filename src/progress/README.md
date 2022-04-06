---
title: Progress
description: 进度条。
spline: message
isComponent: true
---

### 特性和兼容性

无

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-progress": "tdesign-miniprogram/progress/progress"
}
```

## 代码演示

### 类型
<!-- 基础进度条 -->
```html
  <t-progress></t-progress>
  <t-progress percentage="88" ></t-progress>
  <t-progress percentage="100" color="#0052D9"></t-progress>
```

### 状态
```html
<!-- 默认状态 -->
<t-progress percentage="88"></t-progress>

<!-- 进度状态发生重大错误 -->
<t-progress percentage="88" status="error"></t-progress>

<!-- 进度中止 -->
<t-progress percentage="88" status="warning"></t-progress>

<!-- 进度完成 -->
<t-progress percentage="100"></t-progress>

<!-- 过度样式 -->
<view class="box">
  <t-progress percentage="{{percentage}}"></t-progress>
  <view class="button-group">
    <t-button bindtap="clickReduce" theme="primary" variant="plain" size="small">减少</t-button>
    <view class="space"></view>
    <t-button bindtap="clickAdd" theme="primary" size="small">增加</t-button>
  </view>
</view>
```

### 自定义颜色
```html
<t-progress percentage="88" trackColor="#EAC9FF" color="#CD04FF" ></t-progress>
```

### 规格
```html
<!-- 带数值进度条 -->
<t-progress percentage="88"></t-progress>

<!-- 无数值进度条 -->
 <t-progress percentage="72" label="{{false}}"></t-progress>
```


## API
### Progress Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
color | String / Object / Array | '' | 进度条颜色。示例：'#ED7B2F' 或 'orange' 或 `['#f00', '#0ff', '#f0f']` 或 `{ '0%': '#f00', '100%': '#0ff' }` 或  `{ from: '#000', to: '#000' }` 等。TS 类型：`string | Array<string> | Record<string, string>` | N
label | Boolean  | true | 是否显示进度文字，可通过slot自定义 | N
percentage | Number | 0 | 进度条百分比 | N
status | String | - | 进度条状态。可选项：success/error/warning/active。TS 类型：`StatusEnum` `type StatusEnum = 'success' | 'error' | 'warning' | 'active'`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/progress/type.ts) | N
stroke-width | String / Number | - | 进度条线宽。宽度数值不能超过 size 的一半，否则不能输出环形进度 | N
track-color | String | '' | 进度条未完成部分颜色 | N
external-classes | Array | - | 样式类名，分别用于设置 组件外层、进度文字等元素类名。`['t-class', 't-class-label']` | N |
