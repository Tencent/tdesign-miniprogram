---
title: Uni App
description: TDesign UniApp 组件库。
spline: explain
---

<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  TDesign UniApp 组件库 npm 包名自 0.7.0 版本开始，从 tdesign-uniapp 变更为 @tdesign/uniapp
</div>

## 预览

扫码查看 ↓

<img src="https://tdesign.gtimg.com/uniapp/example-qrcode.png" width="600" />

> 其他平台同样支持，仅因平台审核等原因未能上架预览，不影响组件库正常使用。

## 安装

### NPM 方式

```bash
npm i @tdesign/uniapp
```

### UNI_MODULES 方式

已上传 [插件](https://ext.dcloud.net.cn/plugin?name=tdesign-uniapp) 到 DCloud 插件市场，请打开插件详情页并点击`使用 HBuilderX 导入插件`。

## 使用

1. 在 `main.ts` 中引入样式文件

```js
// CLI 模式
import '@tdesign/uniapp/common/style/theme/index.css';

// HBuilderX 模式
// import './uni_modules/tdesign-uniapp/components/common/style/theme/index.css';
```

也可以引入 `rpx` 单位的 `less` 文件，该文件与 `tdesign-miniprogram` 完全一致。

```js
// CLI 模式
import '@tdesign/uniapp/common/style/theme/index.less';

// HBuilderX 模式
// import './uni_modules/tdesign-uniapp/components/common/style/theme/index.less';
```

2. 在文件中使用

```html
<template>
  <t-loading />
</template>

<script lang="ts" setup>
import TLoading from '@tdesign/uniapp/loading/loading.vue';
</script>
```

只提供按需导入方式，不支持全量导入（全量导入在小程序下有兼容性问题）。

## 自动导入

在 `pages.json` 配置 [easycom](https://uniapp.dcloud.net.cn/collocation/pages.html#easycom)，可实现自动导入。

### CLI 模式

使用 CLI 模式，即使用 `node_modules` 下的 `@tdesign/uniapp` 时，配置如下。

```json
{
  "easycom": {
    "custom": {
      "^t-(.*)": "@tdesign/uniapp/$1/$1.vue"
    }
  }
}
```

### UNI_MODULES 模式

使用 `uni_modules` 下的 `tdesign-uniapp` 时，配置如下。

```json
{
  "easycom": {
    "custom": {
      "^t-(.*)": "@/uni_modules/tdesign-uniapp/components/$1/$1.vue"
    }
  }
}
```

### 基于 vite 配置自动引入组件
如果不熟悉 `easycom`，也可以通过 [@uni-helper/vite-plugin-uni-components](https://github.com/uni-helper/vite-plugin-uni-components) 实现组件的自动引入。

<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <ul style="list-style-position: outside; margin: 0; padding-left: 20px;">
    <li style="color: #0052d9;"><span style="color: #555a65;">推荐使用 @uni-helper/vite-plugin-uni-components@0.2.10+ 版本，该版本内置了 @tdesign/uniapp 的 resolver</span></li>
    <li style="color: #0052d9;"><span style="color: #555a65;">自动引入样式文件，无需手动引入</span></li>
    <li style="color: #0052d9;"><span style="color: #555a65;">提供完备的组件类型支持，无需手动配置</span></li>
  </ul>
</div>

```bash
npm i @uni-helper/vite-plugin-uni-components less -D
```

```js
// vite.config.ts
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

import Components from '@uni-helper/vite-plugin-uni-components'
import { TDesignUniappResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'


export default defineConfig({
  plugins: [
    Components({
      resolvers: [TDesignUniappResolver()]
    }),
    uni(),
  ],
});
```

## 编辑器提示

安装注册 TDesign 之后，在开发项目时，可以配合插件在VSCode等主流编辑器中达到提示组件名及API的效果。

推荐安装 `Volar`，并在项目的 `tsconfig.json` 的 `includes` 属性中增加 `node_modules/@tdesign/uniapp/global.d.ts`，即可实现该效果。

## 脚手架

你也可以使用 [create-uni](https://github.com/uni-helper/create-uni)，通过以下命令快速创建一个包含 TDesign 的起手项目：
```bash
npm create uni@latest <你的项目名称> -- -u tdesign
```

## 平台兼容性

| 平台         | Vue2 | Vue3 | H5  | Android | iOS | App-nvue | 微信小程序 | QQ小程序 |
| ------------ | ---- | ---- | --- | ------- | --- | -------- | ---------- | -------- |
| **支持情况** | ✅    | ✅    | ✅   | ✅       | ✅   | ⚠️        | ✅          | ✅        |

| 平台         | 支付宝小程序 | 抖音小程序 | 百度小程序 | 快手小程序 | 小红书小程序 | 京东小程序 |
| ------------ | ------------ | ---------- | ---------- | ---------- | ------------ | ---------- |
| **支持情况** | ✅            | ✅          | ✅          | ✅          | ✅            | ✅          |

## 浏览器兼容性

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> iOS Safari| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |[<img src="https://user-images.githubusercontent.com/51158141/189169679-71e045f6-9b9b-4baf-8b9f-e045a40216f5.png" alt="Android Browser" width="24px" height="24px" />]()<br/>Android Browser|
| --------- | --------- | --------- | --------- | --------- |--------- |
| Firefox >=104| Chrome >=105| iOS Safari >=12.2| Samsung >=10.2 | Opera >=64 | Android Browser >=105 |

详情参见[移动端组件库浏览器兼容性说明](https://github.com/Tencent/tdesign/wiki/Browser-Compatibility)

## 开发

```bash
# 安装项目依赖
npm install

# 执行组件编译
npm run dev

# 小程序
npm run dev:mp
```

打开[微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，把 `packages/demo/dist/dev` 目录添加进去就可以预览示例了。

## 小程序基础库版本

- 微信小程序：最低基础库版本`^2.12.0`

### 组件与微信小程序基础库版本对应关系

| 组件   | API | 最低基础库 | 描述 |
| -- | -- | -- | -- |
| Upload | [wx.previewMedia](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewMedia.html)                                   | 2.12.0     | -    |
| Upload | [wx.chooseMedia](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html)                                     | 2.10.0     | -    |
| Upload | [wx.chooseMessageFile](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html)                         | 2.5.0      | -    |
| Navbar | [wx.getMenuButtonBoundingClientRect](https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html) | 2.1.0      | -    |
