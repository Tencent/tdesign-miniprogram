---
title: TDesign MiniProgram
description: TDesign官方小程序版本。
spline: explain
---

<div style="background: #d4e3fc; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="rgb(0, 82, 217)" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  目前组件库处于 Alpha 阶段，快速迭代中，请留意版本变化。
</div>

## 预览

小程序组件示例小程序，请使用微信扫码预览 ↓
<br/>

<img width="260" src="https://tdesign.gtimg.com/site/qrcode.jpeg" />

## 使用之前

使用前，请确保你已经学习过微信官方的 [小程序简易教程](https://developers.weixin.qq.com/miniprogram/dev/framework/) 和 [自定义组件介绍](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)。

## 安装

### 使用 NPM

小程序已经支持使用 NPM 安装第三方包，详见 [NPM 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)

```bash
npm i tdesign-miniprogram -S --production
```

### 通过 Git Clone

克隆到 TDesign-miniprogram 的源代码之后，需要执行 `npm run build` 进行构建

然后将 `miniprogram_dist` 目录拷贝到自己的项目中

```bash
git clone git@github.com:TDesignOteam/tdesign-miniprogram.git
```

## 使用组件

以按钮组件为例，只需要在 `JSON` 文件中引入按钮对应的自定义组件即可

```json
{
  "usingComponents": {
    "t-button": "/path/to/tdesign-miniprogram/dist/button/index"
  }
}
```

接着就可以在 wxml 中直接使用组件

```html
<t-button type="primary">按钮</t-button>
```

## 在开发者工具中预览

```bash
# 安装项目依赖
npm install

# 执行组件编译
npm run dev
```

打开[微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，把`_example`目录添加进去就可以预览示例了。

## 基础库版本

最低基础库版本`^2.6.1`
