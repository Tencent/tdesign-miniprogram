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

### 步骤一：引入样式文件

在 `main.ts` 中引入组件库样式：

#### CLI 模式

```js
// Less（推荐，rpx 单位，与 tdesign-miniprogram 完全一致）
import '@tdesign/uniapp/theme.less';

// 或者引入编译后的 CSS 文件
import '@tdesign/uniapp/theme.css';
```

#### HBuilderX 模式

```js
// Less（推荐，rpx 单位，与 tdesign-miniprogram 完全一致）
import './uni_modules/tdesign-uniapp/components/theme.less';

// 或者引入编译后的 CSS 文件
import './uni_modules/tdesign-uniapp/components/theme.css';
```

### 步骤二：注册组件

#### 自动导入（推荐）

配置 [easycom](https://uniapp.dcloud.net.cn/collocation/pages.html#easycom) 后，无需手动引入组件即可直接在模板中使用，在 `pages.json` 中添加以下配置：

**CLI 模式**：使用 `node_modules` 下的 `@tdesign/uniapp` 时，配置如下。

```json
{
  "easycom": {
    "custom": {
      "^t-(.*)": "@tdesign/uniapp/$1/$1.vue"
    }
  }
}
```

**HBuilderX 模式**：使用 `uni_modules` 下的 `tdesign-uniapp` 时，配置如下。

```json
{
  "easycom": {
    "custom": {
      "^t-(.*)": "@/uni_modules/tdesign-uniapp/components/$1/$1.vue"
    }
  }
}
```

配置完成后，可以直接在模板中使用组件：

```html
<template>
  <t-loading />
</template>
```

#### 手动导入

如果不使用 easycom，也可以在 `<script>` 中手动导入组件：

```html
<template>
  <t-loading />
</template>

<script lang="ts" setup>
import TLoading from '@tdesign/uniapp/loading/loading.vue';
</script>
```

> 只提供按需导入方式，不支持全量导入（全量导入在小程序下有兼容性问题）。

### 步骤三：配置编辑器提示（可选）

推荐安装 [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 插件，并在项目的 `tsconfig.json` 的 `compilerOptions.types` 属性中增加 `@tdesign/uniapp/global`，即可在 VSCode 等主流编辑器中获得组件名及 API 的智能提示。

```json
{
  "compilerOptions": {
    "types": [
      "@tdesign/uniapp/global",
    ]
  }
}
```

## 平台兼容性

| 平台         | Vue2 | Vue3 | H5  | Android | iOS | App-nvue | 微信小程序 | QQ小程序 |
| ------------ | ---- | ---- | --- | ------- | --- | -------- | ---------- | -------- |
| **支持情况** | ✅    | ✅    | ✅   | ✅       | ✅   | ⚠️        | ✅          | ✅        |

| 平台         | 支付宝小程序 | 抖音小程序 | 百度小程序 | 快手小程序 | 小红书小程序 | 京东小程序 |
| ------------ | ------------ | ---------- | ---------- | ---------- | ------------ | ---------- |
| **支持情况** | ✅            | ✅          | ✅          | ✅          | ✅            | ✅          |

## 浏览器兼容性

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> iOS Safari| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |<img src="https://user-images.githubusercontent.com/51158141/189169679-71e045f6-9b9b-4baf-8b9f-e045a40216f5.png" alt="Android Browser" width="24px" height="24px" /><br/>Android Browser|
| --------- | --------- | --------- | --------- | --------- |--------- |
| Firefox >=104| Chrome >=105| iOS Safari >=12.2| Samsung >=10.2 | Opera >=64 | Android Browser >=105 |

详情参见[移动端组件库浏览器兼容性说明](https://github.com/Tencent/tdesign/wiki/Browser-Compatibility)

## 模板项目

我们提供了多种开箱即用的模板项目，帮助你快速开始开发。

| 模板 | 描述 | 预览 |
| --- | --- | --- |
| [TDesign UniApp Starter](https://github.com/TDesignOteam/tdesign-uniapp-starter/) | Vue3 + CLI 模式模板 - 通用类 | <img src="https://cdn.uwayfly.com/tdesign-uniapp/image/tdesign-uniapp-starter-h5.png" height="100" /> |
| [TDesign UniApp Starter Apply](https://github.com/TDesignOteam/tdesign-uniapp-starter-apply/) | Vue3 + CLI 模式模板 - 活动报名 | <img src="https://cdn.uwayfly.com/tdesign-uniapp/image/tdesign-uniapp-starter-apply-h5.png" height="100" /> |
| [TDesign UniApp Starter Vue3 HX](https://github.com/TDesignOteam/tdesign-uniapp-starter-vue3-hx/) | Vue3 + HBuilderX 模式模板 | <img src="https://cdn.uwayfly.com/tdesign-uniapp/image/tdesign-uniapp-starter-vue3-hx-h5.png" height="100" /> |
| [TDesign UniApp Starter Vue2 CLI](https://github.com/TDesignOteam/tdesign-uniapp-starter-vue2-cli/) | Vue2 + CLI 模式模板 | <img src="https://cdn.uwayfly.com/tdesign-uniapp/image/tdesign-uniapp-starter-vue2-cli-h5.png" height="100" /> |
| [TDesign UniApp Starter Vue2 HX](https://github.com/TDesignOteam/tdesign-uniapp-starter-vue2-hx/) | Vue2 + HBuilderX 模式模板 |<img src="https://cdn.uwayfly.com/tdesign-uniapp/image/tdesign-uniapp-starter-vue2-hx-h5.png" height="100" /> |

## 开发

```bash
# 安装项目依赖
pnpm install

# 站点
pnpm run uniapp dev

# H5
pnpm run uniapp dev:h5

# 其他平台类似，比如微信小程序
pnpm run uniapp dev:mp-weixin

# uniapp-chat 项目开发
pnpm run uniapp:chat site:dev
```

打开[微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，把 `packages/tdesign-uniapp/example/dist/build/mp-weixin` 目录添加进去就可以预览示例了。

## 小程序基础库版本

- 微信小程序：最低基础库版本`^2.12.0`

### 组件与微信小程序基础库版本对应关系

| 组件   | API | 最低基础库 | 描述 |
| -- | -- | -- | -- |
| Upload | [wx.previewMedia](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewMedia.html)                                   | 2.12.0     | -    |
| Upload | [wx.chooseMedia](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html)                                     | 2.10.0     | -    |
| Upload | [wx.chooseMessageFile](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html)                         | 2.5.0      | -    |
| Navbar | [wx.getMenuButtonBoundingClientRect](https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html) | 2.1.0      | -    |
