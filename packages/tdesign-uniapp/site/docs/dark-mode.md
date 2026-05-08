---
title: 深色模式
description: 组件库提供了深色模式支持，可以点击官网右上角开关切换整体浅色与深色模式体验
spline: design-mode
---
<!-- 
<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
 该特性于 1.3.0 上线，请留意版本。
</div> -->

## 使用之前

使用之前，请确保你已阅读 [微信小程序深色模式适配文档](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/darkmode.html)。

## 实现方案

TDesign UniApp 基于 Design Token 变量和媒体查询 `prefers-color-scheme` 实现了深色模式。默认情况下，每个组件自带了组件级别 light 样式变量，无需手动引入。如需使用深色模式，请按照以下步骤操作。

## 使用方式

### 1. 修改配置

在 `manifest.json` 中配置 `darkmode` 为 `true`，即表示当前平台已适配 DarkMode。

```json
{
  "h5": {
    "darkmode": true // 开启深色模式
  },
  "mp-weixin": {
    "darkmode": true // 开启深色模式
  }
}
```

> ⚠️ 注意：如果你仍然在使用小程序原生导航栏，需要参考 [微信小程序文档](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/darkmode.html#%E7%9B%B8%E5%85%B3%E9%85%8D%E7%BD%AE) 自行适配。

### 2. 引入 Design Token 样式文件

在 `main.ts` 中引入 Design Token 文件：

#### CLI 模式

```js
// Less（推荐，rpx 单位，与 tdesign-miniprogram 完全一致）
import '@tdesign/uniapp/theme.less';

// 或者引入编译后的 CSS 文件
import '@tdesign/uniapp/theme.css';
```

#### HBuilderX 模式

```js
// Less（推荐，rpx 单位，与 tdesign-miniprogram 完全一致）
import './uni_modules/tdesign-uniapp/components/theme.less';

// 或者引入编译后的 CSS 文件
import './uni_modules/tdesign-uniapp/components/theme.css';
```

### 3. 深色模式适配

现在，在页面级别的样式文件中，所有的 CSS Variable 都已可用。请替换你的样式文件中原有的颜色值，以实现深色模式适配。

```css
/* 例如 */
.text {
  font-size: 28rpx;
  color: var(--td-text-color-secondary); // 使用 CSS Variable
}
```

> 💡Tips：所有的 [Design Token](https://github.com/Tencent/tdesign-miniprogram/tree/develop/packages/uniapp-components/common/style/_variables.less) 可以在这里找到。

### 4. 体验深色模式

在微信开发者工具的调试中打开深色模式，请参见 [微信文档](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/darkmode.html#%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7%E8%B0%83%E8%AF%95)。

## 特殊组件适配深色模式

我们的全局 `CSS Variables` 声明在 `page` 标签选择器下，对非页面内容无效。目前已知两种场景：1. 基于`TabBar`组件的`custom-tab-bar` 组件，`TabBar` 的深色模式失效；2. `root-portal` 组件包裹的组件，在 `webview` 下其深色模式失效。

为了处理这个问题，我们补充了一个同级类选择器：`.page` ，需要在对应的位置手动添加 `.page` 类名。

```html
// 开启虚拟节点
<view class="page" >
  <t-tab-bar  />
</view>

// 不开启虚拟节点
<t-tab-bar class="page" />

// root-portal 场景
<root-portal>
	<view class="page">
	</view>
</root-portal>
```

> 💡Tips：什么是虚拟节点请参考 [微信文档](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E8%99%9A%E6%8B%9F%E5%8C%96%E7%BB%84%E4%BB%B6%E8%8A%82%E7%82%B9)。

## 禁用深色模式

如果你不需要深色模式，希望应用始终保持浅色主题（即使用户系统切换到深色模式也不会变色），可以使用纯浅色版本的主题文件替代默认的主题文件：

#### CLI 模式

```js
// Less（推荐）
import '@tdesign/uniapp/theme-light.less';

// 或者引入编译后的 CSS 文件
import '@tdesign/uniapp/theme-light.css';
```

#### HBuilderX 模式

```js
// Less（推荐）
import './uni_modules/tdesign-uniapp/components/theme-light.less';

// 或者引入编译后的 CSS 文件
import './uni_modules/tdesign-uniapp/components/theme-light.css';
```

> 💡Tips：`theme-light` 与 `theme` 的区别在于：`theme` 包含浅色和深色两套变量，通过 `@media (prefers-color-scheme)` 媒体查询自动切换；而 `theme-light` 仅包含浅色变量，不含任何媒体查询包裹，因此不会响应系统深色模式的切换。
