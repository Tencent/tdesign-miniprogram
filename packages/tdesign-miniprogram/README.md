
<p align="center">
  <a href="https://tdesign.tencent.com/" target="_blank">
    <img alt="TDesign Logo" width="200" src="https://tdesign.gtimg.com/site/TDesign.png">
  </a>
</p>

<p align="center">
  <a href="https://github.com/Tencent/tdesign-miniprogram/blob/develop/LICENSE">
    <img src="https://img.shields.io/npm/l/tdesign-miniprogram.svg?sanitize=true" alt="License">
  </a>
  <a href="https://www.npmjs.com/package/tdesign-miniprogram">
    <img src="https://img.shields.io/npm/v/tdesign-miniprogram.svg?sanitize=true" alt="Version">
  </a>
  <a href="https://www.npmjs.com/package/tdesign-miniprogram">
    <img src="https://img.shields.io/npm/dm/tdesign-miniprogram" alt="Downloads">
  </a>
   <a href="https://pkg.pr.new/~/Tencent/tdesign-miniprogram">
    <img src="https://pkg.pr.new/badge/Tencent/tdesign-miniprogram?style=flat&color=000&logoSize=auto" alt="Downloads">
  </a>
  <a href="https://deepwiki.com/Tencent/tdesign-miniprogram">
    <img src="https://deepwiki.com/badge.svg" alt="Ask DeepWiki">
  </a>
</p>


[TDesign](https://github.com/Tencent/tdesign) 适配微信小程序的组件库。

## 预览

小程序组件示例小程序，请使用微信扫码预览 ↓
<br/>

<img width="260" src="https://user-images.githubusercontent.com/7017290/146479952-b05298e8-f6ac-44a1-b73c-7abd8b9b3914.jpeg" />

## 安装

### 使用 NPM

小程序已经支持使用 NPM 安装第三方包。

具体使用方式，可以参考小程序官网文档： [《NPM 支持》](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)

```bash
npm i tdesign-miniprogram -S --production
```

> 建议使用 NPM，不再推荐“源码拷贝的方式”

## 使用组件

以按钮组件为例，只需要在 `JSON` 文件中引入按钮对应的自定义组件即可

```json
{
  "usingComponents": {
    "t-button": "tdesign-miniprogram/button/button"
  }
}
```

## 在开发者工具中预览

```bash
# 安装项目依赖
pnpm install

# 执行组件编译
npm run dev
```

打开[微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，把 `_example` 目录添加进去就可以预览示例了。

## 基础库版本

最低基础库版本`^2.6.5`

## 贡献成员

<a href="https://openomy.app/github/tencent/tdesign-miniprogram" target="_blank">
  <img src="https://openomy.app/svg?repo=tencent/tdesign-miniprogram&chart=bubble&latestMonth=12" alt="Contribution Leaderboard" />
</a>

## 反馈

有任何问题，建议通过 [Github issues](https://github.com/Tencent/tdesign-miniprogram/issues) 反馈或扫码加入用户微信群。

<img src="https://raw.githubusercontent.com/Tencent/tdesign/main/packages/site-components/src/images/groups/wx-group.png" width="200" />

## 开源协议

TDesign 遵循 [MIT 协议](https://github.com/Tencent/tdesign-miniprogram/LICENSE)。
