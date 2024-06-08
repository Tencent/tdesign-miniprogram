---
title: Wechat MiniProgram
description: TDesign MiniProgram is a UI component library for Wechat MiniProgram.
spline: explain
---

## Preview

Please use WeChat to scan the QR code to preview the TDesign MiniProgram example. ↓
<br/>

<img width="260" src="https://tdesign.gtimg.com/site/qrcode.jpeg" />


## Before use

Before using it, please make sure you have studied WeChat’s official [Simple Tutorial on Mini Programs](https://developers.weixin.qq.com/miniprogram/dev/framework/) and [Introduction to Custom Components](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/).

## Installation

### MiniProgram Usage

#### npm

TDesign MiniProgram already supports using NPM to install third-party packages. For details, see [NPM Support](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)

```bash
npm i tdesign-miniprogram -S --production
```

> After installation, npm needs to be built in WeChat developer tools: `tool -  build npm`

#### Modify app.json

Remove `"style": "v2"` in `app.json`.

> Because [v2 configuration](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#style) means enabling a new version of component styles, it will cause TDesign component styles to be disordered.

#### Modify tsconfig.json

If you use `typescript` to develop, you need to modify `tsconfig.json` to specify `paths`

```json
{
  "paths": {
      "tdesign-miniprogram/*":["./miniprogram/miniprogram_npm/tdesign-miniprogram/*"]
    }
}
```

#### Use components

Taking the button component as an example, you only need to introduce the custom component corresponding to the button in the `JSON` file.

```json
{
  "usingComponents": {
    "t-button": "tdesign-miniprogram/button/button"
  }
}
```

Then you can use the component directly in wxml.

```html
<t-button theme="primary">按钮</t-button>
```

### uni-app Usage

#### Installation dependencies

Create a new WeChat component directory wxcomponents under the project path (reference for naming other mini program component directories [Mini Program Custom Component Support](https://zh.uniapp.dcloud.io/tutorial/miniprogram-subject.html#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81)And install the tdesign-miniprogram dependency in this directory.

```bash
mkdir wxcomponents
cd wxcomponents

# npm install
npm init -y
npm i tdesign-miniprogram -S --production

# yarn install
yarn init -y
yarn add tdesign-miniprogram
```
#### Use components

Taking the button component as an example, Just introduce the custom component corresponding to the button in the `pages.json` file, and refer to the [Pages.json Page Style Configuration](https://zh.uniapp.dcloud.io/collocation/pages.html#style).


```diff
{
  "pages": [
    {
      "path": "pages/index/index",
      "style": {
+        "mp-weixin": {
+         "usingComponents": {
+           "t-button": "/wxcomponents/miniprogram_npm/tdesign-miniprogram/button/button"
+         }
+       },
        "navigationBarTitleText": "demo"
      }
    }
  ]
}
```
Then you can directly use components in wxml

```html
<t-button theme="primary" @tap="increment"> click me {{state.count}} </t-button>
```

```diff
<script setup lang="ts">
import {reactive} from 'vue';
const state = reactive({count: 0})

function increment() {
  state.count++
}
</script>
```

#### Compile and Build

You need to build NPM in the WeChat developer tool: `Tools - Build NPM`, and then click `Compile` to preview and view.


## Preview in developer tools

```bash
# Install project dependencies
npm install

# compile
npm run dev
```

Open [WeChat Developer Tools](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html) and add the `_example` directory to preview the example.

## Base library version

Minimum base library version `^2.6.5`
