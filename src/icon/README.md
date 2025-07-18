---
title: Icon 图标
description: 图标。
spline: base
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-100%25-blue" /></span>

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-icon": "tdesign-miniprogram/icon/icon"
}
```

## 常见问题

<details>
  <summary>
    控制台告警：Failed to load font
    <span class="icon">👇</span>
  </summary>
  <p style="margin-top: 10px; color: rgba(0, 0, 0, .6)">
    告警属于开发者工具的 bug，可以忽略，具体可以看 <a href="https://developers.weixin.qq.com/miniprogram/dev/api/ui/font/wx.loadFontFace.html" target="_blank">官网文档</a>
  </p>
</details>

## 代码演示

<a href="https://developers.weixin.qq.com/s/wMINibmJ7WSQ" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>


### 基础组件图标

{{ base }}

### 自定义组件图标

{{ custom }}

自定义图标用法，下面以 `iconfont` 为例

#### 准备图标文件

文件后缀应为`.wxss`，如下方代码块所示：

```css
@font-face {
  font-family: 'icon';  // 使用自定义的字体名称
  ···
}

.icon {
  font-family: 'icon' !important;  // 字体名称
  ···
}

.icon-a-0:before {  // icon 图标。注意 FontClass 前缀与 font-family 保持一致
  content: '\e64d';
}
```
- 添加所需图标，下载图标。图标库一般会提供 **在线链接** 或者 **下载至本地** 等使用方式。**在线链接** 方式会指向一个 `.css` 文件，可以下载或复制其内容，将其修改成后缀名为 `.wxss` 的文件
- 将 `.wxss` 文件中的 `FontClass/Symbol前缀` 与 `Font Family` 两项内容保持一致，如: `FontClass/Symbol` 前缀为 `icon-`，则 `Font Family` 为 `icon`。

> 注：若是采用 `下载至本地` 方式，需关注 `.css` 和 `.ttf` 文件。由于微信小程序不支持处理 `ttf、woff、eot` 等文件，但支持 `base64`，所以需要将 `.ttf` 文件转换为 `base64`  (可借助转换工具，如 [transfonter.org](https://transfonter.org/)，会得到一个 `stylesheet.css` 文件)，然后将 `.css` 文件中的 `@font-face {}` 内容替换为 `stylesheet.css` 中的 `base64` 内容，最后将 `.css` 文件修改后缀为 `.wxss`

#### 引入自定义图标

- 全局引入：在项目 `app.wxss`，使用 `@import` 引入上述的 `.wxss` 文件
- 局部引入：在 `page` 对应的 `.wxss` 中，使用 `@import` 引入上述的 `.wxss` 文件

#### 自定义图标的使用

 `<t-icon>` 组件中的 `prefix` 属性值与前面设置的 `Font Family` 保持一致，即 `prefix="icon"`，`name` 属性值为自定义图标名称，如图标的 `className` 为 `icon-a-1h`，则 `name="a-1h"`。

### 图片链接

{{ iconImage }}

### 全部图标

<div style="background: #ecf2fe; display: flex; align-items: center; line-height: 20px; padding: 14px 24px; border-radius: 3px; color: #555a65;margin:16px 0">
  <svg fill="none" viewBox="0 0 16 16" width="16px" height="16px" style="margin-right: 5px">
    <path fill="#0052d9" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fillOpacity="0.9"></path>
  </svg>
 <p style="flex: 1">大部分图标在 1.8.0 版本中新增，如果发现引入组件库后，部分图标无法使用，请检查安装的组件库`tdesign-miniprogram`的版本。支持中文英文搜索，如果觉得可以再增加其他关键词提示，欢迎到 <a href="https://github.com/Tencent/tdesign-icons/blob/develop/packages/view/src/manifest.js" target="_blank" > 图标仓库</a> 提交PR，帮我们一起补充。
 </p>
</div>

<td-icons-view />

## API

### Icon Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
color | String | - | 图标颜色 | N
name | String | - | 必需。图标名称或图片链接 | Y
prefix | String | - | 自定义图标前缀 | N
size | String / Number | - | 图标大小, 如 `20`, `20px`, `48rpx`, 默认单位是 `px` | N

### Icon Events

名称 | 参数 | 描述
-- | -- | --
click | \- | 点击图标时触发。[通用类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/src/common/common.ts)
### Icon External Classes

类名 | 描述
-- | --
t-class | 根节点样式类


### CSS Variables

组件提供了下列 CSS 变量，可用于自定义样式。
名称 | 默认值 | 描述 
-- | -- | --
ant: norma | ant: norma | - 
