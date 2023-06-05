---
title: Button 按钮
description: 用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。
spline: base
isComponent: true
---

<span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20lines-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20functions-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20statements-100%25-blue" /></span><span class="coverages-badge" style="margin-right: 10px"><img src="https://img.shields.io/badge/coverages%3A%20branches-83%25-blue" /></span>
## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-button": "tdesign-miniprogram/button/button"
}
```

## 代码演示

### 01 组件类型

基础按钮

{{ base }}

图标按钮

{{ icon-btn }}

幽灵按钮

{{ ghost-btn }}

组合按钮

{{ group-btn }}

通栏按钮

{{ block-btn }}

### 02 组件状态

按钮禁用态

{{ disabled }}

### 03 组件样式

按钮尺寸

{{ size }}

按钮形状

{{ shape }}

按钮主题

{{ theme }}

## API
### Button Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
block | Boolean | false | 是否为块级元素 | N
content | String / Slot | - | 按钮内容 | N
custom-dataset | Object | - | 自定义 dataset，可通过 event.currentTarget.dataset.custom 获取。TS 类型：`any` | N
disabled | Boolean | false | 禁用状态 | N
external-classes | Array | - | 组件类名。`['t-class', 't-class-icon', 't-class-loading']` | N
ghost | Boolean | false | 是否为幽灵按钮（镂空按钮） | N
icon | String / Object | - | 图标名称。值为字符串表示图标名称，值为 `Object` 类型，表示透传至 `icon`。 | N
loading | Boolean | false | 是否显示为加载状态 | N
loading-props | Object | - | 透传至 Loading 组件。TS 类型：`LoadingProps`，[Loading API Documents](./loading?tab=api)。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/tree/develop/src/button/type.ts) | N
shape | String | rectangle | 按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形。可选项：rectangle/square/round/circle | N
size | String | medium | 组件尺寸。可选项：extra-small/small/medium/large。TS 类型：`SizeEnum` | N
suffix | Slot | - | 右侧内容，可用于定义右侧图标 | N
theme | String | default | 组件风格，依次为品牌色、危险色。可选项：default/primary/danger/light | N
type | String | - | 同小程序的 formType。可选项：submit/reset | N
variant | String | base | 按钮形式，基础、线框、文字。可选项：base/outline/dashed/text | N
open-type | String | - | 微信开放能力。<br />具体释义：<br />`contact` 打开客服会话，如果用户在会话中点击消息卡片后返回小程序，可以从 bindcontact 回调中获得具体信息，<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/customer-message/customer-message.html">具体说明</a> （*小程序插件中不能使用*）；<br />`share` 触发用户转发，使用前建议先阅读<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/share.html#使用指引">使用指引</a>；<br />`getPhoneNumber` 获取用户手机号，可以从 bindgetphonenumber 回调中获取到用户信息，<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html">具体说明</a> （*小程序插件中不能使用*）；<br />`getUserInfo` 获取用户信息，可以从 bindgetuserinfo 回调中获取到用户信息 （*小程序插件中不能使用*）；<br />`launchApp` 打开APP，可以通过 app-parameter 属性设定向 APP 传的参数<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/launchApp.html">具体说明</a>；<br />`openSetting` 打开授权设置页；<br />`feedback` 打开“意见反馈”页面，用户可提交反馈内容并上传<a href="https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getLogManager.html">日志</a>，开发者可以登录<a href="https://mp.weixin.qq.com/">小程序管理后台</a>后进入左侧菜单“客服反馈”页面获取到反馈内容；<br />`chooseAvatar` 获取用户头像，可以从 bindchooseavatar 回调中获取到头像信息。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)。可选项：contact/share/getPhoneNumber/getUserInfo/launchApp/openSetting/feedback/chooseAvatar | N
hover-class | String | '' | 指定按钮按下去的样式类，按钮不为加载或禁用状态时有效。当 `hover-class="none"` 时，没有点击态效果 | N
hover-stop-propagation | Boolean | false | 指定是否阻止本节点的祖先节点出现点击态 | N
hover-start-time | Number | 20 | 按住后多久出现点击态，单位毫秒 | N
hover-stay-time | Number | 70 | 手指松开后点击态保留时间，单位毫秒 | N
lang | String | en | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。。<br />具体释义：<br />`en` 英文；<br />`zh_CN` 简体中文；<br />`zh_TW` 繁体中文。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)。可选项：en/zh_CN/zh_TW | N
session-from | String | - | 会话来源，open-type="contact"时有效 | N
send-message-title | String | 当前标题 | 会话内消息卡片标题，open-type="contact"时有效 | N
send-message-path | String | 当前分享路径 | 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效 | N
send-message-img | String | 截图 | 会话内消息卡片图片，open-type="contact"时有效 | N
app-parameter | String | - | 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 | N
show-message-card | Boolean | false | 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效 | N
bindgetuserinfo | Eventhandle | - | 用户点击该按钮时，会返回获取到的用户信息，回调的 detail 数据与<a href="https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html">wx.getUserInfo</a>返回的一致，open-type="getUserInfo"时有效 | N
bindcontact | Eventhandle | - | 客服消息回调，open-type="contact"时有效 | N
bindgetphonenumber | Eventhandle | - | 获取用户手机号回调，open-type=getPhoneNumber时有效 | N
binderror | Eventhandle | - | 当使用开放能力时，发生错误的回调，open-type=launchApp时有效 | N
bindopensetting | Eventhandle | - | 在打开授权设置页后回调，open-type=openSetting时有效 | N
bindlaunchapp | Eventhandle | - | 打开 APP 成功的回调，open-type=launchApp时有效 | N
bindchooseavatar | Eventhandle | - | 获取用户头像回调，open-type=chooseAvatar时有效 | N

### Button Events

名称 | 参数 | 描述
-- | -- | --
tap | `event` | 点击按钮，当按钮不为加载或禁用状态时触发
