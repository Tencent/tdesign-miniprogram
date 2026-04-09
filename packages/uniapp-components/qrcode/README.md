---
title: QRCode 二维码
description: 二维码能够将文本转换生成二维码的组件，支持自定义配色和 Logo 配置。
spline: message
isComponent: true
---

## 引入

可在 `main.ts` 或在需要使用的页面或组件中引入。

```js
import TQRCode from '@tdesign/uniapp/qrcode/qrcode.vue';
```

### 01 组件类型

#### 基本用法

{{ base }}

#### 带 Icon 的二维码

{{ icon }}



#### 二维码纠错等级

{{ level }}

### 02 组件状态

{{ status }}

### 03 组件样式

#### 二维码颜色

{{ color }}

#### 二维码尺寸

{{ size }}


### FAQ

#### 关于二维码纠错等级
纠错等级也叫纠错率，就是指二维码可以被遮挡后还能正常扫描，而这个能被遮挡的最大面积就是纠错率。

通常情况下二维码分为 4 个纠错级别：`L级` 可纠正约 `7%` 错误、`M级` 可纠正约 `15%` 错误、`Q级` 可纠正约 `25%` 错误、`H级` 可纠正约 `30%` 错误。但并不是所有位置都可以缺损，像最明显的三个角上的方框，直接影响初始定位。中间零散的部分是内容编码，可以容忍缺损。当二维码的内容编码携带信息比较少的时候，也就是链接比较短的时候，设置不同的纠错等级，生成的图片不会发生变化。
有关更多信息，可参阅[官方文档](https://www.qrcode.com/zh/about/error_correction)的相关资料

#### 生成的二维码无法扫描？
若二维码无法扫码识别，可能是因为链接地址过长导致像素过于密集，可以通过 `size` 配置二维码更大，或者通过短链接服务等方式将链接变短。

##

## API

### QRCode Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
custom-style | Object | - | 自定义样式 | N
bg-color | String | - | 二维码背景颜色 | N
borderless | Boolean | false | 是否有边框 | N
color | String | - | 二维码颜色 | N
icon | String | - | 二维码中图片的地址 | N
icon-size | Number / Object | 40 | 二维码中图片的大小。TS 类型：`number \| { width: number; height: number }` | N
level | String | M | 二维码纠错等级。可选项：L/M/Q/H | N
size | Number | 160 | 二维码大小 | N
status | String | active | 二维码状态。可选项：active/expired/loading/scanned。TS 类型：`QRStatus` `type QRStatus = "active" \| "expired" \| "loading" \| "scanned"`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/qrcode/type.ts) | N
status-render | Boolean | false | 是否启用自定义渲染 | N
value | String | - | 扫描后的文本 | N

### QRCode Events

名称 | 参数 | 描述
-- | -- | --
refresh | \- | 点击"点击刷新"的回调

### QRCode Slots

名称 | 描述
-- | --
status-render | 自定义状态渲染器

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-font-size-title-small | --td-font-size-title-small | - 
--td-brand-color-hover | --td-brand-color-hover | - 
--td-success-color | --td-success-color | -