
<p align="center">
  <a href="https://tdesign.tencent.com/" target="_blank">
    <img alt="TDesign Logo" width="200" src="https://tdesign.gtimg.com/site/TDesign.png">
  </a>
</p>

<p align="center">
  <a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/LICENSE">
    <img src="https://img.shields.io/npm/l/tdesign-miniprogram.svg?sanitize=true" alt="License">
  </a>
  <a href="https://www.npmjs.com/package/tdesign-qq-miniprogram">
    <img src="https://img.shields.io/npm/v/tdesign-qq-miniprogram.svg?sanitize=true" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/tdesign-qq-miniprogram">
    <img src="https://img.shields.io/npm/dw/tdesign-qq-miniprogram" alt="Downloads">
  </a>
</p>


[TDesign](https://github.com/Tencent/tdesign) 适配微信小程序的组件库。

---
title: QQ MiniProgram
description: TDesign QQ小程序组件库。
spline: explain
---

<div style="background: #d4e3fc; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="rgb(0, 82, 217)" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
  目前组件库处于 Alpha 阶段，快速迭代中，请留意版本变化。
</div>

## 预览

小程序组件示例小程序，请使用QQ扫码预览 ↓
<br/>

<img width="260" src="https://spark-static.gamecenter.qq.com/xy/openqa/qrcode.jpeg" />

## 使用之前

使用前，请确保你已经学习过QQ官方的 [开发教程](https://q.qq.com/wiki/develop/miniprogram/frame/) 和 [自定义组件介绍](https://q.qq.com/wiki/develop/miniprogram/frame/diy_components/)。

## 安装

### 使用 NPM

小程序已经支持使用 NPM 安装第三方包，详见 [NPM 支持](https://q.qq.com/wiki/cloud/guide/functions/npm.html)

```bash
npm i tdesign-qq-miniprogram -S --production
```

> 安装完之后，需要在QQ开发者工具中对 npm 进行构建：`工具 -  构建 npm`

### 通过 Git Clone

克隆到源代码之后，切换到 `qq` 分支， 然后将 `tdesign-qq-miniprogram` 目录拷贝到自己的项目中

```bash
git clone git@github.com:Tencent/tdesign-miniprogram.git
```


## 使用组件

以按钮组件为例，只需要在 `JSON` 文件中引入按钮对应的自定义组件即可

```json
{
  "usingComponents": {
    "t-button": "/path/to/tdesign-qq-miniprogram/dist/button/index"
  }
}
```

接着就可以在 wxml 或 qml 中直接使用组件

```html
<t-button type="primary">按钮</t-button>
```

## 在开发者工具中预览

```bash
# 安装项目依赖
npm install

# 执行组件编译
npm run dev:qq
```

打开[QQ开发者工具](https://q.qq.com/wiki/tools/devtool/)，把`_example`目录添加进去就可以预览示例了。

## 基础库版本

最低基础库版本`^1.1.7`


## 开源协议

TDesign 遵循 [MIT 协议](https://github.com/Tencent/tdesign-miniprogram/LICENSE)。
