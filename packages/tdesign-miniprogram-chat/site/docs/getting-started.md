---
title: Wechat MiniProgram For AI Chat
description: TDesign 微信小程序 AI Chat 组件库。
spline: explain
---

## 预览

小程序 AI Chat 组件暂未发布成独立小程序。

## 使用之前

使用前，请确保你已经学习过微信官方的 [小程序简易教程](https://developers.weixin.qq.com/miniprogram/dev/framework/) 和 [自定义组件介绍](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)。

## 安装

### 使用 NPM

小程序已经支持使用 NPM 安装第三方包，详见 [NPM 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)

```bash
npm i @tencent/tdesign-miniprogram-chat -S --production
```

> 安装完之后，需要在微信开发者工具中对 npm 进行构建：`工具 -  构建 npm`。（构建时若出现`NPM packages not found`字样，请到 `project.config.json` 文件补充 `packNpmManually` 和 `packNpmRelationList` 配置项，具体见[NPM 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)）


> 构建成功后勾选 `将 JS 编译成 ES5`
> <br/>
><img width="200" src="https://tdesign.gtimg.com/miniprogram/docs/getting-started.png" />


## 修改 app.json

将 `app.json` 中的 `"style": "v2"` 移除。

> 因为 [该配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#style) 表示启用新版组件样式，将会导致 TDesign 的组件样式错乱。

## 修改 tsconfig.json
如果使用`typescript`开发，需要修改`tsconfig.json`指定`paths`
```json
{
  "paths": {
      "@tencent/tdesign-miniprogram-chat/*":["./miniprogram/miniprogram_npm/@tencent/tdesign-miniprogram-chat/*"]
    }
}
```

## 使用组件

以聊天组件为例，只需要在 `JSON` 文件中引入聊天对应的自定义组件即可

```json
{
  "usingComponents": {
    "t-chat": "@tencent/tdesign-miniprogram-chat/chat/chat",
    "t-chat-message": "@tencent/tdesign-miniprogram-chat/chat-message/chat-message",
    "t-chat-sender": "@tencent/tdesign-miniprogram-chat/chat-sender/chat-sender"
  }
}
```

接着就可以在 wxml 中直接使用组件

```html
<t-chat layout="single">
  <t-chat-message avatar="{{item.avatar}}" name="{{item.name}}" message="{{item.message}}" role="{{item.role}}" />
  <view slot="footer">
    <t-chat-sender bind:send="onSend" />
  </view>
</t-chat>
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

最低基础库版本`^2.6.5`
