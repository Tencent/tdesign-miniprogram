---
title: Button 按钮
description: 用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。
spline: base
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-button": "tdesign-miniprogram/button/button"
}
```

## 代码演示

### 基础按钮

<img src="https://tdesign.gtimg.com/miniprogram/readme/button-1.png" width="375px" height="50%">

```html
<t-button theme="primary" size="large">强按钮</t-button>
<t-button theme="primary" size="large" variant="plain">弱按钮</t-button>
<t-button size="large" variant="plain">次按钮</t-button>
<t-button theme="primary" size="large" icon="app" variant="plain">带图标按钮</t-button>
<t-button theme="danger" size="large">强告警按钮</t-button>
<t-button theme="danger" size="large" variant="plain">弱告警按钮</t-button>
<view class="box">
  <t-button ghost size="large">幽灵按钮</t-button>
</view>
<t-button variant="text" size="large">文字按钮</t-button>
<t-button theme="primary" size="large" shape="square" block>通栏按钮</t-button>
<t-button-group>
  <t-button size="large" block shape="square">次按钮</t-button>
  <t-button theme="primary" size="large" block shape="square">主按钮</t-button>
</t-button-group>
```

### 不同状态的按钮

<img src="https://tdesign.gtimg.com/miniprogram/readme/button-2.png" width="375px" height="50%">

```html
<t-button theme="primary" size="large" disabled>强按钮</t-button>
<t-button theme="primary" size="large" variant="plain" disabled>弱按钮</t-button>
<t-button size="large" variant="plain" disabled>次按钮</t-button>
<t-button theme="primary" size="large" icon="app" disabled>带图标按钮</t-button>
<t-button theme="danger" size="large" disabled>强告警按钮</t-button>
<t-button theme="danger" size="large" variant="plain" disabled>弱告警按钮</t-button>
<view class="box">
  <t-button ghost size="large" disabled>幽灵按钮</t-button>
</view>
<t-button variant="text" size="large" disabled>文字按钮</t-button>
<t-button theme="primary" size="large" shape="square" block disabled>通栏按钮</t-button>
<t-button-group>
  <t-button size="large" shape="square" block disabled>次按钮</t-button>
  <t-button theme="primary" size="large" block shape="square" disabled>主按钮</t-button>
</t-button-group>
```

### 不同尺寸的按钮

<img src="https://tdesign.gtimg.com/miniprogram/readme/button-3.png" width="375px" height="50%">

```html
<t-button theme="primary" size="large">按钮 44</t-button>
<t-button theme="primary" style="margin-left: 16px">按钮 40</t-button>
<t-button theme="primary" size="small" style="margin-left: 16px">按钮 36</t-button>
```

## API
### Button Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
block | Boolean | false | 是否为块级元素 | N
content | String / Slot | - | 按钮内容 | N
disabled | Boolean | false | 是否禁用按钮 | N
external-classes | Array | - | 组件类名。`['t-class', 't-class-icon']` | N
ghost | Boolean | false | 是否为幽灵按钮（镂空按钮） | N
icon | String | - | 图标名称 | N
loading | Boolean | false | 是否显示为加载状态 | N
shape | String | rectangle | 按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形。可选项：rectangle/square/round/circle | N
size | String | medium | 组件尺寸。可选项：small/medium/large。TS 类型：`SizeEnum` | N
theme | String | default | 组件风格，依次为品牌色、危险色。可选项：default/primary/danger | N
type | String | - | 同小程序的 formType。可选项：submit/reset | N
variant | String | base | 按钮形式，基础、线框、文字。可选项：base/outline/text | N
group-id | String | - | 打开群资料卡时，传递的群号，open-type="openGroupProfile" | N
guild-id | String | - | 打开频道页面时，传递的频道号，open-type="openGuildProfile" | N
public-id | String | - | 打开公众号资料卡时，传递的号码，open-type="openPublicProfile" | N
open-id | String | - | 添加好友时，对方的 openid，open-type="addFriend" | N
share-message-friend-info | <a herf="https://q.qq.com/wiki/develop/miniprogram/frame/open_ability/interactive-data.html#friendinfo-%E5%AF%B9%E8%B1%A1">FriendInfo</a> | - | 发送对象的 FriendInfo，open-type="shareMessageToFriend" | N
share-message-title | String | - | 转发标题，不传则默认使用当前小程序的昵称。open-type="shareMessageToFriend" | N
share-message-img | String | - | 转发显示图片的链接，可以是网络图片路径（仅 QQ CDN 域名路径）或本地图片文件路径或相对代码包根目录的图片文件路径。显示图片长宽比是 5:4，open-type="shareMessageToFriend" | N
open-type | String | - | QQ开放能力。可选项及具体释义请参考：<a herf="https://q.qq.com/wiki/develop/miniprogram/component/form/button.html">QQ 小程序 Button open-type</a> | N
hover-stop-propagation | Boolean | false | 指定是否阻止本节点的祖先节点出现点击态 | N
hover-start-time | Number | 20 | 按住后多久出现点击态，单位毫秒 | N
hover-stay-time | Number | 70 | 手指松开后点击态保留时间，单位毫秒 | N
lang | String | en | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。。<br />具体释义：<br />`en` 英文；<br />`zh_CN` 简体中文；<br />`zh_TW` 繁体中文。<br />[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)。可选项：en/zh_CN/zh_TW | N
app-parameter | String | - | 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 | N
bindgetuserinfo | Eventhandle | - | 用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与<a href="https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html">wx.getUserInfo</a>返回的一致，open-type="getUserInfo"时有效 | N
bindcontact | Eventhandle | - | 客服消息回调，open-type="contact"时有效 | N
binderror | Eventhandle | - | 当使用开放能力时，发生错误的回调，open-type=launchApp时有效 | N
bindopensetting | Eventhandle | - | 在打开授权设置页后回调，open-type=openSetting时有效 | N
bindlaunchapp | Eventhandle | - | 打开 APP 成功的回调，open-type=launchApp时有效 | N
bindchooseavatar | Eventhandle | - | 获取用户头像回调，open-type=chooseAvatar时有效 | N
bindaddfriend | Eventhandle | | 添加好友的回调 | N
bindaddgroupapp | Eventhandle | | 添加群应用的回调。errCode 错误码：41004（当前用户非管理员或群主，无权操作），41005（超过可添加群应用的群数量）| N

### Button Events

名称 | 参数 | 描述
-- | -- | --
click | `(e: MouseEvent)` | 点击时触发
