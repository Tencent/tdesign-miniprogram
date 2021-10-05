# BackTop 返回顶部

## 介绍

用于当页面过长往下滑动时，帮助用户快速回到页面顶部。

![](https://tdesign.gtimg.com/miniprogram/qrcode/back-top.png)

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
// app.json 或 index.json
"usingComponents": {
"t-back-top": "@tencent/tdesign-miniprogram/back-top/back-top",
}
```

## 代码演示

### 类型

圆型返回顶部。

![圆型](图片链接 'optional title')

```html
<!-- 圆白底 -->
<t-back-top theme="round" text="顶部"></t-back-top>
<!-- 圆黑底 -->
<t-back-top theme="round-dark" text="顶部"></t-back-top>
<!-- 圆白底纯图标 -->
<t-back-top theme="round" text=""></t-back-top>
<!-- 圆黑底纯图标 -->
<t-back-top theme="round-dark" text=""></t-back-top>
```

半圆型返回顶部。

![半圆型](图片链接 'optional title')

```html
<!-- 半圆白底 -->
<t-back-top theme="half-round" text="顶部"></t-back-top>
<!-- 半圆黑底 -->
<t-back-top theme="half-round-dark" text="顶部"></t-back-top>
```

## API

### Props

| 参数  | 说明                                                                       | 类型    | 默认值 | 版本      |
| ----- | -------------------------------------------------------------------------- | ------- | ------ | --------- |
| theme | 预设的样式类型，可选值 `round` `hafl-round` `round-dark` `half-round-dark` | String  | -      | -         |
| fixed | 是否绝对定位固定到屏幕右下方                                               | boolean | `true` | -         |
| text  | 文案                                                                       | String  | -      | -         |
| icon  | 图标                                                                       | String  | -      | `backtop` |

### tab Event

| 事件名 | 说明     | 参数 |
| ------ | -------- | ---- |
| toTop  | 点击触发 | 无   |

### Slots

| 名称 | 说明                     |
| ---- | ------------------------ |
| -    | 默认插槽，可以自定义内容 |

### 外部样式类

| 类名         | 说明            |
| ------------ | --------------- |
| t-class      | 根节点样式类    |
| t-class-icon | icon 部分样式类 |
| t-class-text | 文字部分样式类  |
