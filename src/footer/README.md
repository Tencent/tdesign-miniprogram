# Footer 页脚

用于基础列表展示，可附带文字、品牌 logo、操作，常用商详、个人中心、设置等页面。

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-footer": "@tencent/tdesign-miniprogram/footer/footer"
}
```

## 代码演示

### 类型

<img src="https://tdesign.gtimg.com/miniprogram/readme/footer.png" width="50%" height="50%">

```html
<!-- 基础页脚 只有版权信息 -->
<t-footer
  theme="text"
  copyright="Copyright © 2021-2031 TD.All Rights Reserved."
  class="t-footer-demo"
/>

<!-- 基础加连接页脚 -->
<t-footer
  theme="text"
  copyright="Copyright © 2021-2031 TD.All Rights Reserved."
  textLinkList="{{textLinkListTwo}}"
  class="footer"
/>

<!-- 基础加连接页脚 -->
<t-footer theme="logo" logo="{{'xxx.png'}}" class="t-footer-demo" />
```

```js
data: {
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
},
```

## API

#### Props

|     参数     |                                                                                                            说明                                                                                                            |     类型     | 默认值 | 必填 |
| :----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------: | :----: | :--: |
|    theme     |                                                                                                        页脚展示类型                                                                                                        | `FooterType` | `text` |  是  |
|  Copyright   |                                                                                                版权信息，theme 为`text`生效                                                                                                |   `String`   |   -    |  否  |
| textLinkList |                                                                                                链接列表，theme 为`text`生效                                                                                                | `LinkObj[]`  |   []   |  否  |
|     logo     | 图标配置，theme 为`logo`生效。`logo.icon` 表示图标链接地址，`logo.title` 表示标题文本，`logo.url` 表示链接跳转地址 TS 类型定义：`FooterLogo【interface FooterLogo { icon: string; title?: string; titleUrl?: string }】`。 |   `object`   |   -    |  否  |

- 注意： `logo.title`与`logo.url`二选一，且`logo.title`优先级高于`logo.url`

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
