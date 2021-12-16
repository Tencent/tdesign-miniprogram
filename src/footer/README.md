---
title: Footer 页脚
description: 用于基础列表展示，可附带文字、品牌 logo、操作，常用商详、个人中心、设置等页面。
spline: data
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-footer": "tdesign-miniprogram/footer/footer"
}
```

## 代码演示

### 基础页脚

<img src="https://tdesign.gtimg.com/miniprogram/readme/footer.png" width="375px" height="50%">

```html
<!-- 基础页脚 只有版权信息 -->
<t-footer
  theme="text"
  copyright="Copyright © 2021-2031 TD.All Rights Reserved."
  class="t-footer-demo"
/>

<!-- 基础加连接页脚 -->
<t-footer
  theme="text"
  copyright="Copyright © 2021-2031 TD.All Rights Reserved."
  textLinkList="{{textLinkListTwo}}"
  class="footer"
/>

<!-- 基础加连接页脚 -->
<t-footer theme="logo" logo="{{'xxx.png'}}" class="t-footer-demo" />
```

```js
data: {
  textLinkListTwo: [
    {
      name: '底部链接',
      url: '/pages/index',
      openType: 'navigate',
    },
    {
      name: '底部链接',
      url: '',
      openType: 'navigateBack',
    },
  ],
},
```

## API

### Footer Props

| 名称           | 类型   | 默认值 | 说明                                                                                                                                                                                                                                                     | 必传 |
| -------------- | ------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| copyright      | String | ''     | 版权信息，type 为`text`生效                                                                                                                                                                                                                              | N    |
| logo           | Object | -      | 图标配置，type 为`logo`生效。`logo.icon` 表示图标链接地址，`logo.title` 表示标题文本，`logo.url` 表示链接跳转地址。TS 类型：`FooterLogo`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/footer/type.ts)            | N    |
| text-link-list | Array  | []     | 链接列表，type 为`text`生效。name 表示链接名称， url 表示链接 page 路径，目前只支持小程序内部跳转，openType 表示跳转方式。TS 类型：`Array<LinkObj>`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/footer/type.ts) | N    |
| theme          | String | 'text' | 页脚展示类型。可选项：text/logo                                                                                                                                                                                                                          | N    |
