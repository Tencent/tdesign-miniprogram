---
title: WeChat MiniProgram
description: TDesign 微信小程序组件库。
spline: explain
---

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

> 安装完之后，需要在微信开发者工具中对 npm 进行构建：`工具 -  构建 npm`。（构建时若出现`NPM packages not found`字样，请到 `project.config.json` 文件补充 `packNpmManually` 和 `packNpmRelationList` 配置项，具体见[NPM 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)）


> 构建成功后勾选 `将 JS 编译成 ES5`
> <br/>
> <img width="200" src="https://tdesign.gtimg.com/miniprogram/docs/getting-started.png" />


## 修改 app.json

将 `app.json` 中的 `"style": "v2"` 移除。

> 因为 [该配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#style) 表示启用新版组件样式，将会导致 TDesign 的组件样式错乱。

## 修改 tsconfig.json
如果使用`typescript`开发，需要修改`tsconfig.json`指定`paths`
```json
{
  "paths": {
      "tdesign-miniprogram/*":["./miniprogram/miniprogram_npm/tdesign-miniprogram/*"]
    }
}
```

## 使用组件

以按钮组件为例，只需要在 `JSON` 文件中引入按钮对应的自定义组件即可

```json
{
  "usingComponents": {
    "t-button": "tdesign-miniprogram/button/button"
  }
}
```

接着就可以在 wxml 中直接使用组件

```html
<t-button theme="primary">按钮</t-button>
```

## 在开发者工具中预览

```bash
# 安装项目依赖
npm install

# 执行组件编译
npm run dev
```

打开[微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，把`_example`目录添加进去就可以预览示例了。

## 关于基础库版本

最低基础库版本 `^2.12.0`。

### 基础库版本选择建议

- **开发调试**：使用微信开发者工具的「最新稳定版」，减少版本差异带来的控制台警告；反馈问题时请注明实际基础库版本。
- **线上最低版本**：在微信公众平台设置合理的最低基础库版本，建议覆盖 95% 以上用户（如 3.x），避免版本过低导致功能异常。
- **兼容测试**：在本地设置中切换到目标最低版本，验证低版本用户的降级与兼容逻辑。

> 可参考官方 [基础库版本分布](https://developers.weixin.qq.com/miniprogram/dev/framework/client-lib/version.html) 确定需要兼容的最低版本。

### 组件与基础库版本对应关系

| 组件  | API    | 最低基础库 | 描述 |
| ----- | ------ | ---------- | ---- |
| Upload | [wx.previewMedia](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewMedia.html) | 2.12.0 | 预览图片和视频 |
| Upload | [wx.chooseMedia](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseMedia.html) | 2.10.0 | 拍摄或从手机相册中选择图片或视频。 |
| Upload | [wx.chooseMessageFile](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseMessageFile.html) | 2.5.0 | 从客户端会话选择文件。 |
| Navbar | [wx.getMenuButtonBoundingClientRect](https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html) | 2.1.0 | 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。 |

## 关于用户隐私保护指引

TDesign 部分组件使用了微信提供的接口，其中部分接口涉及获取用户隐私信息。例如 `Upload` 使用了 `wx.chooseMedia` / `wx.chooseImage`（照片或视频）。

当小程序引入 tdesign-miniprogram 组件库并发布时，根据微信 [《用户隐私保护指引填写说明》](https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/)，如检测到代码中存在涉及用户隐私信息接口，则需要填写用户隐私保护指引信息并通过审核（小程序管理后台 `设置 - 服务内容声明 - 用户隐私保护指引` ）。未声明的接口将直接禁用，已声明的无需重复填写。

### 涉及用户隐私信息的组件

| 组件 | 接口/能力 | 处理的信息 |
| ---- | --------- | ---------- |
| Upload | `wx.chooseImage` / `wx.chooseMedia` | 收集你选中的照片或视频信息 |
| Upload | `wx.chooseMessageFile` | 收集你选中的文件 |
| Typography | `wx.setClipboardData` | 读取你的剪切板 |

> 接口与处理信息的对应关系见 [小程序用户隐私保护指引内容介绍](https://developers.weixin.qq.com/miniprogram/dev/framework/user-privacy/miniprogram-intro.html)。

