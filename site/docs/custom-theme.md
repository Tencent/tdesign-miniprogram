---
title: 自定义主题
description: 如何使用 CSS Variables 自定义主题
spline: explain
---

组件库通用的 Design Token 均使用 CSS Variables 声明，你可以在自己的项目中声明同名变量来覆盖他们的值。

但在 **小程序需要特殊处理**。

在 TDesign 小程序里，CSS Variables 均在 `page` 上声明，以 `Rate` 举例：

```css
page {
  --td-rate-selected-color: #ed7b2f; /* 选中的颜色 */
  --td-rate-unselected-color: #e3e6eb; /* 未选中的颜色 */
}
```

此时如果你要修改对应的颜色，不能在 `page` 上声明，因为可能**权重不够**：

![css-specific](/css-specific.png)

比较妥当的做法是，在使用组件的外层元素修改同名变量，假设 `WXML` 是这样的：

```html
<view class="wrapper">
  <rate default-value="2" />
</view>
```

那么 `CSS` 可以这么定义:

```css
.wrapper {
  --td-rate-selected-color: navy;
}
```

## 自定义 TabBar

当然，有些组件可能不会被包裹在 `page` 里，比如自定义 `tab-bar`。

此时，可以通过给组件增加 `class` 来实现自定义主题：

```html
<t-tab-bar class="custom-tab-bar">
  <t-tab-bar-item value="home" icon="home">home</t-tab-bar-item>
</t-tab-bar>
```

对应的 `CSS` 可以这么定义：

```css
.custom-tab-bar {
  --td-tab-bar-item-color: red;
}
```

> 目前仅有部分组件支持自定义主题，支持的组件在其文档有陈列对应的 CSS Varialbes，如 [TabBar](https://tdesign.tencent.com/miniprogram/components/tab-bar)