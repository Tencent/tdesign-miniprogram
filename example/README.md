
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
    <img src="https://img.shields.io/npm/dw/tdesign-miniprogram" alt="Downloads">
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
npm install

# 执行组件编译
npm run dev
```

打开[微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，把 `_example` 目录添加进去就可以预览示例了。

## 基础库版本

最低基础库版本`^2.6.5`

## 仓库

TDesign 是一个 `multi-repo`， TDesign 有如下代码仓库：

### 桌面端组件库

| 仓库                                                            | 描述                 | 状态     |
| --------------------------------------------------------------- | -------------------- | -------- |
| [tdesign-vue](https://github.com/Tencent/tdesign-vue)           | Vue 2.x 技术栈       | `Beta`   |
| [tdesign-vue-next](https://github.com/Tencent/tdesign-vue-next) | Vue 3.x 技术栈       | `Alpha`  |
| [tdesign-react](https://github.com/Tencent/tdesign-react)       | React 16.x 技术栈    | `Alpha`  |
| tdesign-angular                                                 | 基于 Angular 10 实现 | `待上线` |

### 移动端组件库

| 仓库                                                                  | 描述              | 状态     |
| --------------------------------------------------------------------- | ----------------- | -------- |
| [tdesign-miniprogram](https://github.com/Tencent/tdesign-miniprogram) | 微信小程序        | `Alpha`  |
| [tdesign-mobile-vue](https://github.com/Tencent/tdesign-mobile-vue)   | Vue 3.x 技术栈    | `Alpha` |
| tdesign-mobile-react                                                  | React 16.x 技术栈 | `待上线` |
| tdesign-flutter                                                       | 1.17.0            | `待上线` |

### 基础通用仓库

| 仓库                                                        | 描述                 |
| ----------------------------------------------------------- | -------------------- |
| [tdesign](https://github.com/Tencent/tdesign)               | TDesign 主仓库和文档 |
| [tdesign-icons](https://github.com/Tencent/tdesign-icons)   | TDesign 公共图标     |
| [tdesign-common](https://github.com/Tencent/tdesign-common) | TDesign 公共样式     |

### 解决方案及周边

| 仓库                                                                            | 描述                             |
| ------------------------------------------------------------------------------- | -------------------------------- |
| [tdesign-starter-cli](https://github.com/Tencent/tdesign-starter-cli)           | TDesign 解决方案的脚手架         |
| [tdesign-vue-starter](https://github.com/Tencent/tdesign-vue-starter)           | 基于 tdesign-vue 的解决方案      |
| [tdesign-vue-next-starter](https://github.com/Tencent/tdesign-vue-next-starter) | 基于 tdesign-vue-next 的解决方案 |
| [tdesign-react-starter](https://github.com/Tencent/tdesign-react-starter)       | 基于 tdesign-react 的解决方案    |
| [tdesign-miniprogram-starter-retail](https://github.com/Tencent/tdesign-miniprogram-starter-retail)       | 基于 tdesign-miniprogram 的零售行业解决方案    |


## 开源协议

TDesign 遵循 [MIT 协议](https://github.com/Tencent/tdesign-miniprogram/LICENSE)。
