
<p align="center">
  <a href="https://tdesign.tencent.com/" target="_blank">
    <img alt="TDesign Logo" width="200" src="https://tdesign.gtimg.com/site/TDesign.png">
  </a>
</p>

<p align="center">
  <a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/tdesign-uniapp-chat/LICENSE">
    <img src="https://img.shields.io/npm/l/@tdesign/uniapp-chat.svg?sanitize=true" alt="License">
  </a>
  <a href="https://www.npmjs.com/package/@tdesign/uniapp-chat">
    <img src="https://img.shields.io/npm/v/@tdesign/uniapp-chat.svg?sanitize=true" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/@tdesign/uniapp-chat">
    <img src="https://img.shields.io/npm/dm/@tdesign/uniapp-chat" alt="Downloads">
  </a>
  <a href="https://pkg.pr.new/~/Tencent/tdesign-miniprogram">
    <img src="https://pkg.pr.new/badge/Tencent/tdesign-miniprogram?style=flat&color=000&logoSize=auto" alt="Downloads">
  </a>
  <a href="https://deepwiki.com/Tencent/tdesign-miniprogram">
    <img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki">
  </a>
</p>

[TDesign Chat](https://github.com/Tencent/tdesign) 适配 [uniapp](https://uniapp.dcloud.net.cn/) 的组件库。

## 文档

[点此查看](https://tdesign.tencent.com/uniapp-chat/)

## 预览

扫码查看 ↓

<img src="https://tdesign.gtimg.com/uniapp/example-qrcode.png" width="600" />

> 其他平台同样支持，仅因平台审核等原因未能上架预览，不影响组件库正常使用。

## 安装

### NPM 方式

```bash
npm i @tdesign/uniapp-chat
```

### UNI_MODULES 方式

已上传 [插件](https://ext.dcloud.net.cn/plugin?name=tdesign-uniapp-chat) 到 DCloud 插件市场，请打开插件详情页并点击`使用 HBuilderX 导入插件`。

## 使用

1. 在 `main.ts` 中引入样式文件

```js
import '@tdesign/uniapp/common/style/theme/index.css';
```

也可以引入 `rpx` 单位的 `less` 文件，该文件与 `tdesign-miniprogram` 完全一致。

```js
import '@tdesign/uniapp/common/style/theme/index.less';
```

2. 在文件中使用

```html
<template>
  <t-chat-list />
</template>

<script lang="ts" setup>
import TChatList from '@tdesign/uniapp-chat/chat-list/chat-list.vue';
</script>
```

只提供按需导入方式，不支持全量导入（全量导入在小程序下有兼容性问题）。

## 编辑器提示

安装注册 TDesign 之后，在开发项目时，可以配合插件在VSCode等主流编辑器中达到提示组件名及API的效果。

推荐安装 `Volar`，并在项目的 `tsconfig.json` 的 `includes` 属性中增加 `node_modules/@tdesign/uniapp-chat/global.d.ts`，即可实现该效果。

## 平台兼容性

| 平台         | Vue2 | Vue3 | H5  | Android | iOS | App-nvue | 微信小程序 | QQ小程序 |
| ------------ | ---- | ---- | --- | ------- | --- | -------- | ---------- | -------- |
| **支持情况** | ✅    | ✅    | ✅   | ✅       | ✅   | ⚠️        | ✅          |  ⚠️        |

## 浏览器兼容性

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> iOS Safari| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |[<img src="https://user-images.githubusercontent.com/51158141/189169679-71e045f6-9b9b-4baf-8b9f-e045a40216f5.png" alt="Android Browser" width="24px" height="24px" />]()<br/>Android Browser|
| --------- | --------- | --------- | --------- | --------- |--------- |
| Firefox >=104| Chrome >=105| iOS Safari >=12.2| Samsung >=10.2 | Opera >=64 | Android Browser >=105 |

详情参见[移动端组件库浏览器兼容性说明](https://github.com/Tencent/tdesign/wiki/Browser-Compatibility)

## 反馈

有任何问题，建议通过 [Github issues](https://github.com/Tencent/tdesign-miniprogram/issues) 反馈或扫码加入用户微信群。

<img src="https://raw.githubusercontent.com/Tencent/tdesign/main/packages/site-components/src/images/groups/wx-group.png" width="200" />

## 开源协议

TDesign 遵循 [MIT 协议](https://github.com/Tencent/tdesign-miniprogram/tree/develop/LICENSE)。
