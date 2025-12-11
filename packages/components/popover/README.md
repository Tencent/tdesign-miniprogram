---
title: Popover 弹出气泡
description: 用于文字提示的气泡框。
spline: data
isComponent: true
---


## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-popover": "tdesign-miniprogram/popover/popover"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/MbaI79m38K5J" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

### 组件类型
#### 带箭头的弹出气泡

{{ base }}

### 组件样式

#### 气泡主题
{{ theme }}

#### 气泡位置
{{ placement }}

## FAQ

如果使用场景为 `fixed`，除了需要显示指定 `fixed` 属性为 `true`，还需在触发元素的顶层添加`t-popover-wrapper--fixed` 类，用于定位触发元素。

```html
<t-popover fixed>
  <view class="t-popover-wrapper--fixed" />
</t-popover>
```

## API

### Popover Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
close-on-click-outside | Boolean | true | 是否在点击外部元素后关闭菜单  | N
content | String | - | 确认框内容 | N
fixed | Boolean | false | 如果 popover 是在一个 `position:fixed` 的区域，需要显式指定属性 fixed 为 true | N
placement | String | top | 浮层出现位置。可选项：top/left/right/bottom/top-left/top-right/bottom-left/bottom-right/left-top/left-bottom/right-top/right-bottom | N
show-arrow | Boolean | true | 是否显示浮层箭头 | N
theme | String | dark | 弹出气泡主题。可选项：dark/light/brand/success/warning/error | N
visible | Boolean | - | 是否显示气泡确认框 | N

### Popover Events

名称 | 参数 | 描述
-- | -- | --
visible-change | `(visible: boolean)` | 确认框显示或隐藏时触发

### Popover Slots

名称 | 描述
-- | --
\- | 默认插槽，作用同 `content` 插槽
content | 自定义 `content` 显示内容

### Popover External Classes

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-content | 内容样式类

### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
--td-popover-padding | 24rpx | -
