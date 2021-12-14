---
title: Navbar 导航栏
description: 用于不同页面之间切换或者跳转，位于内容区的上方，系统状态栏的下方。
spline: navigation
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-navbar": "tdesign-miniprogram/navbar/navbar",
}
```

## 代码演示

### 基础导航栏

导航栏，可以带返回，主页按钮，或自定义展示内容

<img src="https://tdesign.gtimg.com/miniprogram/readme/navbar-1.png" width="375px" height="50%">

```html
<!-- 基础导航栏 -->
<t-navbar title="标题" t-class-title="nav-title" />
```

<img src="https://tdesign.gtimg.com/miniprogram/readme/navbar-2.png" width="375px" height="50%">

```html
<!-- 带返回，主页按钮导航栏 -->
<t-navbar
  title="标题"
  leftIcon="chevron-left"
  homeIcon="home"
  bindgohome="onGoHome"
  t-class-left-icon="left-icon-back"
  t-class-home-icon="home-icon"
  t-class-title="nav-title"
/>
```

<img src="https://tdesign.gtimg.com/miniprogram/readme/navnar-3.png" width="375px" height="50%">

```html
<!-- 自定义插槽导航栏 -->
<t-navbar leftIcon="slot">
  <t-image
    t-class="img"
    class="size-l radius-m slot-left"
    src="https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/mobile/%E5%8D%A0%E4%BD%8D%E5%9B%BE%402x.png"
    mode="aspectFill"
    slot="left-icon"
  ></t-image>
</t-navbar>
```

```js
  onGoHome() {
    wx.navigateTo({
      url: '/pages/index',
    });
  },
```

## API

### Navbar Props

| 名称             | 类型          | 默认值 | 说明                                                                                                                                                                                                             | 必传 |
| ---------------- | ------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| animation        | Boolean       | true   | 是否添加动画效果                                                                                                                                                                                                 | N    |
| background       | String        | -      | 背景                                                                                                                                                                                                             | N    |
| delta            | Number        | 1      | 后退按钮后退层数，含义参考 [wx.navigateBack](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html)，特殊的，传入 0 不会发生执行 wx.navigateBack，只会触发一个 goback 事件供自行处理。 | N    |
| external-classes | Array         | -      | 组件类名，分别用于设置组件外层元素、标题、左侧图标、首页图标、胶囊等元素类名。`['t-class', 't-class-title', 't-class-left-icon', 't-class-home-icon', 't-class-capsule']`                                        | N    |
| fixed            | Boolean       | true   | 是否固定在顶部                                                                                                                                                                                                   | N    |
| home-icon        | String / Slot | -      | 首页图标地址。值为 '' 或者 undefiend 则表示不显示返回图标，值为 'circle' 表示显示默认图标，值为 'slot' 表示使用插槽渲染，值为其他则表示图标地址                                                                  | N    |
| left-icon        | String / Slot | -      | 左侧图标地址，值为 '' 或者 undefiend 则表示不显示返回图标，值为 'arrow-left' 表示显示返回图标，值为 'slot' 表示使用插槽渲染，值为其他则表示图标地址                                                              | N    |
| title            | String / Slot | -      | 页面标题                                                                                                                                                                                                         | N    |
| title-max-length | Number        | -      | 标题文字最大长度，超出的范围使用 `...` 表示                                                                                                                                                                      | N    |
| visible          | Boolean       | true   | 是否显示                                                                                                                                                                                                         | N    |

### Navbar Events

| 名称     | 参数 | 描述                                              |
| -------- | ---- | ------------------------------------------------- |
| complete | -    | navigateBack 执行完成后触发（失败或成功均会触发） |
| fail     | -    | navigateBack 执行失败后触发                       |
| go-back  | -    | delta 值为 0 时，点击返回，触发该事件             |
| go-home  | -    | 点击 Home 触发                                    |
| success  | -    | navigateBack 执行成功后触发                       |
