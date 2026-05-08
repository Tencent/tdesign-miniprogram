---
title: Uni App Chat
description: TDesign UniApp Chat is a UI component library for Uni App.
spline: explain
---

<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  Starting from version 0.2.0, the npm package name for the TDesign UniApp Chat component library has changed from tdesign-uniapp-chat to @tdesign/uniapp-chat.
</div>

## Preview

Scan the QR code to preview ↓

<img src="https://tdesign.gtimg.com/uniapp/example-qrcode.png" width="600" />

> Other platforms are also supported. Due to platform review and other reasons, previews may not be available, but this does not affect the normal use of the component library.

## Installation

### NPM

```bash
npm i @tdesign/uniapp-chat
```

### UNI_MODULES

The plugin has been uploaded to the [DCloud Plugin Market](https://ext.dcloud.net.cn/plugin?name=tdesign-uniapp-chat). Please open the plugin details page and click `Import plugin with HBuilderX`.

## Usage

> `@tdesign/uniapp-chat` depends on `@tdesign/uniapp`. Please make sure `@tdesign/uniapp` is installed in your project.

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

**CLI Mode**: When using `@tdesign/uniapp-chat` from `node_modules`, configure as follows:

```json
{
  "easycom": {
    "custom": {
      "^t-chat-(.*)": "@tdesign/uniapp-chat/chat-$1/chat-$1.vue",
      "^t-attachments": "@tdesign/uniapp-chat/attachments/attachments.vue",
      "^t-(.*)": "@tdesign/uniapp/$1/$1.vue"
    }
  }
}
```

**HBuilderX Mode**: When using `tdesign-uniapp-chat` from `uni_modules`, configure as follows:

```json
{
  "easycom": {
    "custom": {
      "^t-chat-(.*)": "@/uni_modules/tdesign-uniapp-chat/components/chat-$1/chat-$1.vue",
      "^t-attachments": "@/uni_modules/tdesign-uniapp-chat/components/attachments/attachments.vue",
      "^t-(.*)": "@/uni_modules/tdesign-uniapp/components/$1/$1.vue"
    }
  }
}
```

After configuration, you can use components directly in templates:

```html
<template>
  <t-chat-list />
</template>
```

#### Manual Import

If you don't use easycom, you can also manually import components in `<script>`:

```html
<template>
  <t-chat-list />
</template>

<script lang="ts" setup>
import TChatList from '@tdesign/uniapp-chat/chat-list/chat-list.vue';
</script>
```

> Only on-demand imports are supported. Full imports are not supported (full imports have compatibility issues in mini programs).

### Step 3: Configure Editor Hints (Optional)

It is recommended to install the [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) plugin, and add `@tdesign/uniapp-chat/global` to the `compilerOptions.types` property in your project's `tsconfig.json` to get intelligent hints for component names and APIs in VSCode and other mainstream editors.

```json
{
  "compilerOptions": {
    "types": [
      "@tdesign/uniapp-chat/global",
    ]
  }
}
```

## Platform Compatibility

| Platform         | Vue2 | Vue3 | H5  | Android | iOS | App-nvue | WeChat Mini Program | QQ Mini Program |
| ------------ | ---- | ---- | --- | ------- | --- | -------- | ---------- | -------- |
| **Support** | ✅    | ✅    | ✅   | ✅       | ✅   | ⚠️        | ✅          |  ⚠️        |

## Browser Compatibility

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/> iOS Safari| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |<img src="https://user-images.githubusercontent.com/51158141/189169679-71e045f6-9b9b-4baf-8b9f-e045a40216f5.png" alt="Android Browser" width="24px" height="24px" /><br/>Android Browser|
| --------- | --------- | --------- | --------- | --------- |--------- |
| Firefox >=104| Chrome >=105| iOS Safari >=12.2| Samsung >=10.2 | Opera >=64 | Android Browser >=105 |

For details, see [Mobile Component Library Browser Compatibility](https://github.com/Tencent/tdesign/wiki/Browser-Compatibility)
