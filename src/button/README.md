# Button 按钮

用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-button": "tdesign-miniprogram/button/button"
}
```

## 代码演示

### 类型

基础按钮

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

### 状态

按钮禁用态

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

### 规格

按钮尺寸

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
disabled | Boolean | false | 是否禁用按钮 | N
external-classes | Array | - | 组件类名。`['t-class']` | N
ghost | Boolean | false | 是否为幽灵按钮（镂空按钮） | N
icon | String | - | 图标名称 | N
loading | Boolean | false | 是否显示为加载状态 | N
shape | String | square | 按钮形状，有二种：方形、圆角方形。可选项：square/round | N
size | String | medium | 组件尺寸。可选项：small/medium/large。TS 类型：`SizeEnum` | N
theme | String | undefined | 组件风格，依次为品牌色、危险色。可选项：default/primary/danger | N
type | String | - | 同小程序的 formType。可选项：submit/reset | N
variant | String | base | 按钮形式，基础、线框、文字。可选项：base/outline/text | N
open-type | String | - | 微信开放能力 [查看小程序文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)。可选项：contact/share/getPhoneNumber/getUserInfo/launchApp/openSetting/feedback | N
hover-stop-propagation | Boolean | false | 指定是否阻止本节点的祖先节点出现点击态 | N
hover-start-time | Number | 20 | 按住后多久出现点击态，单位毫秒 | N
hover-stay-time | Number | 70 | 手指松开后点击态保留时间，单位毫秒 | N
lang | String | en | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。 [查看小程序文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)。可选项：en/zh_CN/zh_TW | N
session-from | String | - | 会话来源，open-type=contact时有效 | N
send-message-title | String | 当前标题 | 会话内消息卡片标题，open-type=contact时有效 | N
send-message-path | String | 当前分享路径 | 会话内消息卡片点击跳转小程序路径，open-type=contact时有效 | N
send-message-img | String | 截图 | 会话内消息卡片图片，open-type=contact时有效 | N
app-parameter | String | - | 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 | N
show-message-card | Boolean | false | 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示可能要发送的小程序提示，用户点击后可以快速发送小程序消息，open-type=contact时有效 | N
bindgetuserinfo | Eventhandle | - | 用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与<a href="../api/open-api/user-info/wx.getUserInfo.html">wx.getUserInfo</a>返回的一致，open-type=getUserInfo时有效 | N
bindcontact | Eventhandle | - | 客服消息回调，open-type=contact时有效 | N
bindgetphonenumber | Eventhandle | - | 获取用户手机号回调，open-type=getPhoneNumber时有效 | N
binderror | Eventhandle | - | 当使用开放能力时，发生错误的回调，open-type=launchApp时有效 | N
bindopensetting | Eventhandle | - | 在打开授权设置页后回调，open-type=openSetting时有效 | N
bindlaunchapp | Eventhandle | - | 打开 APP 成功的回调，open-type=launchApp时有效 | N
