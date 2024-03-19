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

### npm

TDesign MiniProgram already supports using NPM to install third-party packages. For details, see [NPM Support](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)

```bash
npm i tdesign-miniprogram -S --production
```

> After installation, npm needs to be built in WeChat developer tools: `tool -  build npm`

## Modify app.json

Remove `"style": "v2"` in `app.json`.

> Because [v2 configuration](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#style) means enabling a new version of component styles, it will cause TDesign component styles to be disordered.

## Modify tsconfig.json

If you use `typescript` to develop, you need to modify `tsconfig.json` to specify `paths`

```json
{
  "paths": {
      "tdesign-miniprogram/*":["./miniprogram/miniprogram_npm/tdesign-miniprogram/*"]
    }
}
```

## Use components

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
