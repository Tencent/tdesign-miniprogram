# Footer

## 介绍

页脚

### 特性及兼容性

无

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-footer": "@tencent/tdesign-miniprogram/footer/footer"
}
```

## 用法

### 组件方式

```html
<!-- type 为 text，只有版权信息 -->
<t-footer type="text" textCopyrightInfo="{{textCopyrightInfo}}" class="footer" />
<!-- type 为 text，含有底部链接 -->
<t-footer
  type="text"
  textCopyrightInfo="{{textCopyrightInfo}}"
  textLinkList="{{textLinkList}}"
  class="footer"
/>
<!-- type 为 logo -->
<t-footer
  type="logo"
  logoIconUrl="{{logoIconUrl}}"
  logoTitleUrl="{{logoTitleUrl}}"
  class="footer"
/>
```

```javascript
Page({
  data: {
    textCopyrightInfo: 'Copyright © 2021-2031 TD.All Rights Reserved.',
    textLinkListOne: [
      {
        name: '底部链接',
        url: '/pages/index',
        openType: 'navigate',
      },
    ],
    textLinkListTwo: [
      {
        name: '底部链接',
        url: '/pages/index',
        openType: 'navigate',
      },
      {
        name: '底部链接',
        url: '',
        openType: 'navigateBack',
      },
    ],
    logoIconUrl: 'https://cdn-we-retail.ym.tencent.com/miniapp/articleFooter/logo-icon.png', // 占位图片
    logoTitleUrl: 'https://cdn-we-retail.ym.tencent.com/miniapp/articleFooter/logo-title.png', // 占位图片
  },
});
```

## API

### `<t-footer>` 组件

组件路径：`@tencent/tdesign-miniprogram/footer/footer`

#### Props

|       参数        |                   说明                   |     类型     | 默认值 | 必填 |
| :---------------: | :--------------------------------------: | :----------: | :----: | :--: |
|       type        |               页脚展示类型               | `FooterType` | `text` |  是  |
| textCopyrightInfo |       版权信息，type 为`text`生效        |   `String`   |   -    |  否  |
|   textLinkList    |       链接列表，type 为`text`生效        | `LinkObj[]`  |   []   |  否  |
|    logoIconUrl    |   logo 图标链接地址，type 为`logo`生效   |   `String`   |   -    |  否  |
|     logoTitle     |     logo 标题文本，type 为`logo`生效     |   `String`   |   ``   |  否  |
|   logoTitleUrl    | logo 标题图片链接地址，type 为`logo`生效 |   `String`   |   -    |  否  |

- 注意： `logoTitle`与`logoTitleUrl`二选一，且`logoTitle`优先级高于`logoTitleUrl`

- `FooterType`参数说明：

```javascript
// 页脚展示类型有两种，文本或图标，默认值为文本。
type FooterType = `text` | `logo`;
```

- `LinkObj`参数说明：使用 navigator 组件跳转，详见：[微信官方文档 navigator](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html)

```javascript
interface LinkObj {
  name: String; // 链接名称
  url: String; // 链接page路径，目前只支持小程序内部跳转
  openType: OpenTypeVal; // 跳转方式
}

// openType合法值：
type OpenTypeVal = 'navigate' | 'redirect' | 'relaunch' | 'switchTab' | 'navigateBack';
```
