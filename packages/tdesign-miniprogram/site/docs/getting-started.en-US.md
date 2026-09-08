---
title: WeChat MiniProgram
description: TDesign is a UI component library for WeChat Mini Programs.
spline: explain
---

## Preview

Scan the QR code with WeChat to preview the Mini Program component demo. ↓
<br/>

<img width="260" src="https://tdesign.gtimg.com/site/qrcode.jpeg" />

## Before you start

Before using the library, make sure you have read WeChat’s official [Simple Tutorial on Mini Programs](https://developers.weixin.qq.com/miniprogram/dev/framework/) and [Introduction to Custom Components](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/).

## Installation

### Install with NPM

Mini Programs support installing third-party packages with NPM. For details, see [NPM Support](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)

```bash
npm i tdesign-miniprogram -S --production
```

> After installation, build npm packages in WeChat DevTools: `Tools - Build npm`. (If `NPM packages not found` appears during the build, add `packNpmManually` and `packNpmRelationList` to `project.config.json`. For details, see [NPM Support](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm).)

> After a successful build, check `Compile JS to ES5`.
> <br/>
> <img width="200" src="https://tdesign.gtimg.com/miniprogram/docs/getting-started.png" />

## Update `app.json`

Remove `"style": "v2"` from `app.json`.

> This [configuration](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#style) enables the new component style mode, which can break TDesign component styles.

## Update `tsconfig.json`

If you use `TypeScript`, update `tsconfig.json` and specify `paths`:

```json
{
  "paths": {
      "tdesign-miniprogram/*":["./miniprogram/miniprogram_npm/tdesign-miniprogram/*"]
    }
}
```

## Use components

Take the button component as an example: you only need to register the corresponding custom component in the `JSON` file.

```json
{
  "usingComponents": {
    "t-button": "tdesign-miniprogram/button/button"
  }
}
```

Then you can use the component directly in `wxml`.

```html
<t-button theme="primary">Button</t-button>
```

## Preview in WeChat DevTools

```bash
# Install project dependencies
npm install

# Build components
npm run dev
```

Open [WeChat DevTools](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html), then add the `_example` directory to preview the demo.

## About base library version

The minimum base library version is `^2.12.0`.

### Recommended base library version strategy

- **Development and debugging**: use the "latest stable" version in WeChat DevTools to reduce console warnings caused by version differences. When reporting issues, please include the actual base library version.
- **Minimum production version**: set a reasonable minimum base library version in the WeChat Mini Program admin console. It is recommended to cover more than 95% of users (for example, 3.x) to avoid issues caused by versions that are too low.
- **Compatibility testing**: switch to the target minimum version in local settings to verify fallback and compatibility behavior for users on lower versions.

> You can refer to the official [Base Library Version Distribution](https://developers.weixin.qq.com/miniprogram/dev/framework/client-lib/version.html) to determine the minimum version you need to support.

### Component-to-base-library mapping

| Component | API    | Minimum base library | Description |
| --------- | ------ | -------------------- | ----------- |
| Upload | [wx.previewMedia](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewMedia.html) | 2.12.0 | Preview images and videos. |
| Upload | [wx.chooseMedia](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html) | 2.10.0 | Capture photos/videos or choose images/videos from the phone album. |
| Upload | [wx.chooseMessageFile](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html) | 2.5.0 | Select files from a chat session. |
| Navbar | [wx.getMenuButtonBoundingClientRect](https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html) | 2.1.0 | Get layout information for the menu button (the capsule button in the top-right corner). Coordinates use the top-left corner of the screen as the origin. |

## About user privacy protection guidelines

Some TDesign components use WeChat APIs, and some of these APIs involve users’ personal information. For example, `Upload` uses `wx.chooseMedia` / `wx.chooseImage` (photos or videos).

When your Mini Program uses TDesign via the `tdesign-miniprogram` npm package and is published, according to WeChat’s [Instructions for Filling in the User Privacy Protection Guidelines](https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/), if APIs involving personal information are detected in code, you must complete the user privacy protection guideline declaration and pass review (Mini Program admin console: `Settings - Service Content Declaration - User Privacy Protection Guidelines`). Undeclared APIs will be disabled directly; APIs already declared do not need to be declared again.

### Components involving users’ personal information

| Component | API/Capability | Information processed |
| --------- | -------------- | --------------------- |
| Upload | `wx.chooseImage` / `wx.chooseMedia` | Collects the photo or video information you select. |
| Upload | `wx.chooseMessageFile` | Collects the files you select. |
| Typography | `wx.setClipboardData` | Reads your clipboard. |

> For the mapping between APIs and processed information, see [Introduction to Mini Program User Privacy Protection Guidelines](https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/miniprogram-intro.html).

