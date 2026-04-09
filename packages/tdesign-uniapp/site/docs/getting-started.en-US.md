---
title: Uni App
description: TDesign UniApp is a UI component library for Uni App.
spline: explain
---

<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  Starting with version 0.7.0, the npm package name for the TDesign UniApp component library has changed from tdesign-uniapp to @tdesign/uniapp.
</div>

## Preview

Scan the QR code to preview ↓

<img src="https://tdesign.gtimg.com/uniapp/example-qrcode.png" width="600" />

> Other platforms are also supported. Due to platform review and other reasons, previews may not be available, but this does not affect the normal use of the component library.

## Installation

### NPM

```bash
npm i @tdesign/uniapp
```

### UNI_MODULES

The plugin has been uploaded to the [DCloud Plugin Market](https://ext.dcloud.net.cn/plugin?name=tdesign-uniapp). Please open the plugin details page and click `Import plugin with HBuilderX`.

## Usage

### Step 1: Import Style Files

Import the component library styles in `main.ts`:

#### CLI Mode

```js
// Less (recommended, rpx units, fully consistent with tdesign-miniprogram)
import '@tdesign/uniapp/theme.less';

// Or import the compiled CSS file
import '@tdesign/uniapp/theme.css';
```

#### HBuilderX Mode

```js
// Less (recommended, rpx units, fully consistent with tdesign-miniprogram)
import './uni_modules/tdesign-uniapp/components/theme.less';

// Or import the compiled CSS file
import './uni_modules/tdesign-uniapp/components/theme.css';
```

### Step 2: Register Components

#### Auto Import (Recommended)

After configuring [easycom](https://uniapp.dcloud.net.cn/collocation/pages.html#easycom), you can use components directly in templates without manual imports. Add the following configuration in `pages.json`:

**CLI Mode**: When using `@tdesign/uniapp` from `node_modules`, configure as follows:

```json
{
  "easycom": {
    "custom": {
      "^t-(.*)": "@tdesign/uniapp/$1/$1.vue"
    }
  }
}
```

**HBuilderX Mode**: When using `tdesign-uniapp` from `uni_modules`, configure as follows:

```json
{
  "easycom": {
    "custom": {
      "^t-(.*)": "@/uni_modules/tdesign-uniapp/components/$1/$1.vue"
    }
  }
}
```

After configuration, you can use components directly in templates:

```html
<template>
  <t-loading />
</template>
```

#### Manual Import

If you don't use easycom, you can also manually import components in `<script>`:

```html
<template>
  <t-loading />
</template>

<script lang="ts" setup>
import TLoading from '@tdesign/uniapp/loading/loading.vue';
</script>
```

> Only on-demand imports are supported. Full imports are not supported (full imports have compatibility issues in mini programs).

### Step 3: Configure Editor Hints (Optional)

It is recommended to install the [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) plugin, and add `@tdesign/uniapp/global` to the `compilerOptions.types` property in your project's `tsconfig.json` to get intelligent hints for component names and APIs in VSCode and other mainstream editors.

```json
{
  "compilerOptions": {
    "types": [
      "@tdesign/uniapp/global",
    ]
  }
}
```

## Platform Compatibility

| Platform         | Vue2 | Vue3 | H5  | Android | iOS | App-nvue | WeChat Mini Program | QQ Mini Program |
| ------------ | ---- | ---- | --- | ------- | --- | -------- | ---------- | -------- |
| **Support** | ✅    | ✅    | ✅   | ✅       | ✅   | ⚠️        | ✅          | ✅        |

| Platform         | Alipay Mini Program | Douyin Mini Program | Baidu Mini Program | Kuaishou Mini Program | Xiaohongshu Mini Program | JD Mini Program |
| ------------ | ------------ | ---------- | ---------- | ---------- | ------------ | ---------- |
| **Support** | ✅            | ✅          | ✅          | ✅          | ✅            | ✅          |

## Browser Compatibility

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> iOS Safari| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |<img src="https://user-images.githubusercontent.com/51158141/189169679-71e045f6-9b9b-4baf-8b9f-e045a40216f5.png" alt="Android Browser" width="24px" height="24px" /><br/>Android Browser|
| --------- | --------- | --------- | --------- | --------- |--------- |
| Firefox >=104| Chrome >=105| iOS Safari >=12.2| Samsung >=10.2 | Opera >=64 | Android Browser >=105 |

For details, see [Mobile Component Library Browser Compatibility](https://github.com/Tencent/tdesign/wiki/Browser-Compatibility)

## Template Projects

We provide a variety of out-of-the-box template projects to help you get started quickly.

| Template | Description | Preview |
| --- | --- | --- |
| [TDesign UniApp Starter](https://github.com/TDesignOteam/tdesign-uniapp-starter/) | Vue3 + CLI Mode - General | <img src="https://cdn.uwayfly.com/tdesign-uniapp/image/tdesign-uniapp-starter-h5.png" height="100" /> |
| [TDesign UniApp Starter Apply](https://github.com/TDesignOteam/tdesign-uniapp-starter-apply/) | Vue3 + CLI Mode - Event Registration | <img src="https://cdn.uwayfly.com/tdesign-uniapp/image/tdesign-uniapp-starter-apply-h5.png" height="100" /> |
| [TDesign UniApp Starter Vue3 HX](https://github.com/TDesignOteam/tdesign-uniapp-starter-vue3-hx/) | Vue3 + HBuilderX Mode | <img src="https://cdn.uwayfly.com/tdesign-uniapp/image/tdesign-uniapp-starter-vue3-hx-h5.png" height="100" /> |
| [TDesign UniApp Starter Vue2 CLI](https://github.com/TDesignOteam/tdesign-uniapp-starter-vue2-cli/) | Vue2 + CLI Mode | <img src="https://cdn.uwayfly.com/tdesign-uniapp/image/tdesign-uniapp-starter-vue2-cli-h5.png" height="100" /> |
| [TDesign UniApp Starter Vue2 HX](https://github.com/TDesignOteam/tdesign-uniapp-starter-vue2-hx/) | Vue2 + HBuilderX Mode |<img src="https://cdn.uwayfly.com/tdesign-uniapp/image/tdesign-uniapp-starter-vue2-hx-h5.png" height="100" /> |

## Development

```bash
# Install project dependencies
pnpm install

# Site
pnpm run uniapp dev

# H5
pnpm run uniapp dev:h5

# Other platforms are similar, e.g. WeChat Mini Program
pnpm run uniapp dev:mp-weixin

# uniapp-chat project development
pnpm run uniapp:chat site:dev
```

Open [WeChat Developer Tools](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html) and add the `packages/tdesign-uniapp/example/dist/build/mp-weixin` directory to preview the examples.

## Mini Program Base Library Version

- WeChat Mini Program: Minimum base library version `^2.12.0`

### Correspondence between Components and Base Library Versions

| Component   | API | Min Base Library | Description |
| -- | -- | -- | -- |
| Upload | [wx.previewMedia](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewMedia.html)                                   | 2.12.0     | -    |
| Upload | [wx.chooseMedia](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html)                                     | 2.10.0     | -    |
| Upload | [wx.chooseMessageFile](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html)                         | 2.5.0      | -    |
| Navbar | [wx.getMenuButtonBoundingClientRect](https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html) | 2.1.0      | -    |

