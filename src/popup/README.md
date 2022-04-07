---
title: Popup 弹出层
description: 由其他控件触发，屏幕滑出或弹出一块自定义内容区域。
spline: message
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-popup": "tdesign-miniprogram/popup/popup"
}
```

## 代码演示

### 顶部弹出层

<img src="https://tdesign.gtimg.com/miniprogram/readme/popup-1.png" width="35%" height="35%">

```xml
<t-popup
  visible="{{visible}}" placement="top" >
  <view  slot="content" >顶部弹出</view>
</t-popup>
```

### 底部弹出层

<img src="https://tdesign.gtimg.com/miniprogram/readme/popup-2.png" width="35%" height="35%">

```xml
<t-popup
  visible="{{visible}}" placement="bottom" >
  <view  slot="content" >底部弹出</view>
</t-popup>
```

### 中部弹出层

<img src="https://tdesign.gtimg.com/miniprogram/readme/popup-3.png" width="35%" height="35%">

```xml
<t-popup
  visible="{{visible}}" placement="center" >
  <view  slot="content" >中部弹出</view>
</t-popup>
```

### 左侧弹出层

<img src="https://tdesign.gtimg.com/miniprogram/readme/popup-4.png" width="35%" height="35%">

```xml
<t-popup
  visible="{{visible}}" placement="left" >
  <view  slot="content" >左侧弹出</view>
</t-popup>
```

### 右侧弹出层

<img src="https://tdesign.gtimg.com/miniprogram/readme/popup-5.png" width="35%" height="35%">

```xml
<t-popup
  visible="{{visible}}" placement="right" >
  <view slot="content" >右侧弹出</view>
</t-popup>
```

## API

### Popup Props

| 名称                   | 类型           | 默认值 | 说明                                                                                                                                           | 必传 |
| ---------------------- | -------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| close-btn              | Boolean / Slot | -      | 关闭按钮，值类型为 Boolean 时表示是否显示关闭按钮。也可以自定义关闭按钮                                                                        | N    |
| close-on-overlay-click | Boolean        | true   | 点击遮罩层是否关闭                                                                                                                             | N    |
| content                | String / Slot  | -      | 浮层里面的内容                                                                                                                                 | N    |
| destroy-on-close       | Boolean        | false  | 是否在关闭浮层时销毁浮层                                                                                                                       | N    |
| external-classes       | Array          | -      | 组件类名，分别用于设置 组件外层元素、遮罩层、浮层内容 等元素类名。`['t-class', 't-class-overlay', 't-class-content']`                          | N    |
| placement              | String         | top    | 浮层出现位置。可选项：top/left/right/bottom/center                                                                                             | N    |
| prevent-scroll-through | Boolean        | true   | 防止滚动穿透                                                                                                                                   | N    |
| show-overlay           | Boolean        | true   | 是否显示遮罩层                                                                                                                                 | N    |
| transition-props       | Object         | -      | 动画效果定义。TS 类型：`TdTransitionProps`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/popup/type.ts) | N    |
| visible                | Boolean        | false  | 是否显示浮层。TS 类型：`boolean`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/popup/type.ts)           | N    |
| z-index                | Number         | -      | 组件层级，Web 侧样式默认为 5500，移动端和小程序样式默认为 1500                                                                                 | N    |

### Popup Events

名称 | 参数 | 描述
-- | -- | --
visible-change | `(visible: boolean, trigger: PopupSource) ` | 当浮层隐藏或显示时触发。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/popup/type.ts)。<br/>`type PopupSource = 'close-btn' | 'overlay'`<br/>
