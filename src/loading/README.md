# Loading

## 介绍

加载

### 特性及兼容性

无

## 引入

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-loading": "@tencent/tdesign-miniprogram/loading/loading"
}
```

## 演示

### 01 基本用法

Loading 分纯 icon、icon 加文字、纯文字、带刷新

```html
<!-- page.wxml -->
<t-loading
  type="circular"
  color="#0052D9"
  textColor="#333"
  background-color="white"
  size="40rpx"
></t-loading>
<t-loading type="circular" color="#0052D9" textColor="#333" background-color="white" size="40rpx">
  加载中...
</t-loading>
<t-loading type="none" textColor="#333">加载中...</t-loading>
<t-loading type="none" error textColor="rgba(0,0,0,0.26)" bind:reload="reloadPage">
  加载中...
</t-loading>
```

### 02 布局类型

横向排列、垂直排列

```html
<t-loading
  type="circular"
  color="#0052D9"
  textColor="#333"
  background-color="white"
  size="40rpx"
  textSize="24rpx"
>
  加载中...
</t-loading>
<t-loading
  type="circular"
  color="#0052D9"
  textColor="#333"
  background-color="white"
  size="40rpx"
  textSize="24rpx"
  vertical
>
  加载中...
</t-loading>
```

### 03 样式类型

标准、自定义 icon、区块 loading、页面进度条加载

```html
<t-loading
  type="circular"
  color="black"
  textColor="#333"
  background-color="white"
  size="40rpx"
  textSize="24rpx"
>
  加载中...
</t-loading>
<t-loading
  type="circular"
  color="#0052D9"
  textColor="#0052D9"
  background-color="white"
  size="40rpx"
  textSize="24rpx"
>
  加载中...
</t-loading>
<t-loading type="spinner" color="black" textColor="#333" size="40rpx" textSize="24rpx">
  加载中...
</t-loading>
<t-loading type="spinner" color="#0052D9" textColor="#0052D9" size="40rpx" textSize="24rpx">
  加载中...
</t-loading>
<t-loading
  type="dots"
  duration="0.8"
  color="black"
  textColor="#333"
  size="80rpx"
  textSize="28rpx"
></t-loading>
<t-loading
  type="dots"
  duration="1.8"
  color="#306AFF"
  textColor="#306AFF"
  size="80rpx"
  textSize="28rpx"
></t-loading>
<t-loading type="bar" progress="{{progress}}" loading="{{loading}}"></t-loading>
```

### 04 规格

加载规格分 L、M、S

```html
<t-loading
  type="circular"
  color="#0052D9"
  textColor="#333"
  background-color="white"
  size="40rpx"
  textSize="24rpx"
>
  S加载中...
</t-loading>
<t-loading
  type="circular"
  color="#0052D9"
  textColor="#333"
  background-color="white"
  size="48rpx"
  textSize="28rpx"
>
  M加载中...
</t-loading>
<t-loading
  type="circular"
  color="#0052D9"
  textColor="#333"
  background-color="white"
  size="52rpx"
  textSize="32rpx"
>
  L加载中...
</t-loading>
```

## API

### `<Loading>` 组件

组件路径：`@tencent/tdesign-miniprogram/loading/loading`

#### Props

<!-- | 属性        | 值类型    | 默认值     | 说明                                                                       |
| ----------- | --------- | ---------- | -------------------------------------------------------------------------- |
| loading     | `Boolean` | `true`     | 是否显示加载                                                               |
| layout      | `String`  | `default`  | 显示类型，可选`default` - 默认，`full` - 整页，`bar` - 顶部进度条          |
| size        | `String`  | `40px`     | 加载圆圈大小，带单位                                                       |
| textSize    | `String`  | `14px`     | 加载文字大小，带单位                                                       |
| textPadding | `String`  | `0`        | 加载文字 padding 大小，带单位                                              |
| vertical    | `Boolean` | `true`     | 是否纵向排版，否则横向排版                                                 |
| type        | `String`  | `circular` | 加载图标类型(spinner/d)                                                    |
| error       | `Boolean` | `false`    | 是否显示加载错误                                                           |
| showType    | `String`  | `all`      | 显示类型，可选`text-only` - 仅文字，`icon-only` - 仅图标，`all` - 全部显示 |
| title       | `String`  | `加载中`   | 加载文字                                                                   |
| progress    | `Number`  | `-1`       | 顶部进度条加载进度（选填）                                                 | -->

| ｜参数          | 说明                                                      | 类型      | 默认值     | 版本    |
| --------------- | --------------------------------------------------------- | --------- | ---------- | ------- | --- |
| type            | 类型，可选值`circular`, `circular-ext`, `spinner`, `dots` | _string_  | `circular` | -       |
| vertical        | 文字是否显示在 loading 下方                               | _boolean_ | `false`    | -       |
| size            | loading 的大小                                            | _string_  | `50rpx`    | -       |
| textSize        | 文字的大小                                                |           | _string_   | `24rpx` | -   |
| color           | loading 的颜色                                            | _string_  | `#c8c9cc`  | -       |
| textColor       | 文字的颜色                                                | _string_  | `#969799`  | -       |
| backgroundColor | loading 背景色，`circular-ext`必填                        | _string_  | -          | -       |
| reverse         | 反向旋转                                                  | _boolean_ | `false`    | -       |
| duration        | 动画循环一次的时间，决定动画速度                          | _number_  | `0.8`      | -       |
| paused          | 暂停动画                                                  | _boolean_ | `false`    | -       |

#### Events

| 事件        | event.detail | 说明                     |
| ----------- | ------------ | ------------------------ |
| bind:reload | -            | 点击失败页面刷新按钮触发 |
