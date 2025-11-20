---
title: Uni App Chat
description: TDesign UniApp Chat is a UI component library for Uni App.
spline: explain
---

## Preview

Please use WeChat to scan the QR code to preview the TDesign UniApp example. ↓
<br/>

<img src="https://cdn.uwayfly.com/tdesign-uniapp/tdesign-uniapp-qrcodes.png?a=3" width="600" />

## Before use

Before using it, please make sure you have studied WeChat’s official [Simple Tutorial on Mini Programs](https://developers.weixin.qq.com/miniprogram/dev/framework/) and [Introduction to Custom Components](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/).

## Installation

### npm

TDesign MiniProgram already supports using NPM to install third-party packages. For details, see [NPM Support](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)

```bash
npm i tdesign-miniprogram -S --production
```

> After installation, npm needs to be built in WeChat developer tools: `tool -  build npm`.(If `NPM packages not found` appears during the build, please go to the `project.config.json` file to add the `packNpmManually` and `packNpmRelationList` configuration items. For details, see [NPM Support](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm))

> After the build is successful, check the box `Compile JS to ES5`
> <br/>
><img width="200" src="https://tdesign.gtimg.com/miniprogram/docs/getting-started.png" />

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

Minimum base library version `^2.12.0`

### Correspondence between component and basic library versions

| 组件   | API  | 最低基础库 | 描述 |
| -- | -- | -- | -- | 
| Upload | [wx.previewMedia](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewMedia.html)                                   | 2.12.0     | -    |
| Upload | [wx.chooseMedia](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html)                                     | 2.10.0     | -    |
| Upload | [wx.chooseMessageFile](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html)                         | 2.5.0      | -    |
| Navbar | [wx.getMenuButtonBoundingClientRect](https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html) | 2.1.0      | -    |

