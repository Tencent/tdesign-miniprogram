# Button

## 介绍

按钮

### 特性及兼容性

待补充

## 引入

### 引入组件

在 `app.json` 或 `page.json` 中引入组件：

```json
"usingComponents": {
  "t-button": "@tencent/tdesign-miniprogram/button/button"
}
```

## 用法

### 组件方式

```html
<!-- page.wxml -->
<t-button theme="primary" open-type="getUserInfo" bindgetuserinfo="someFunction">
  按钮文案
</t-button>
```

## API

### `<button>` 组件

组件路径：`@tencent/tdesign-miniprogram/button/button`

#### Props

| 属性               | 值类型     | 默认值    | 必传      | 说明                                                                                                                                                           |
| ------------------ | ---------- | --------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------ | --- | -------- |
| theme              | `'default' | 'primary' | 'danger'  | 'text'                                                                                                                                                         | 'ghost'` | `'default'`  | N   | 按钮样式 |
| size               | `'large'   | 'middle'  | 'small'`  | `'middle'`                                                                                                                                                     | N        | 按钮大小     |
| icon               | `TNode`    | -         | N         | 按钮图标                                                                                                                                                       |
| block              | `Boolean`  | `false`   | N         | 是否为块级元素                                                                                                                                                 |
| plain              | `Boolean`  | `false`   | N         | 是否镂空，背景色透明                                                                                                                                           |
| shape              | `'square'  | 'round'   | 'circle'` | `'round'`                                                                                                                                                      | N        | 按钮边角类型 |
| loading            | `Boolean`  | `false`   | N         | 是否显示为加载状态                                                                                                                                             |
| form-type          | `String`   | -         | N         | 用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件                                                                                                   |
| open-type          | `String`   | -         | N         | 微信开放能力                                                                                                                                                   |
| lang               | `String`   | `en`      | N         | 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文                                                                                                |
| session-from       | `String`   | -         | N         | 会话来源，open-type="contact"时有效                                                                                                                            |
| send-message-title | `String`   | -         | N         | 会话内消息卡片标题，open-type="contact"时有效                                                                                                                  |
| send-message-path  | `String`   | -         | N         | 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效                                                                                                    |
| send-message-img   | `String`   | -         | N         | 会话内消息卡片图片，open-type="contact"时有效                                                                                                                  |
| app-parameter      | `String`   | -         | N         | 打开 APP 时，向 APP 传递的参数，open-type=launchApp 时有效                                                                                                     |
| show-message-card  | `Boolean`  | `false`   | N         | 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效 |

#### Events

| 事件               | event.detail | 说明                                                                                                                    |
| ------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| bindgetuserinfo    | -            | 用户点击该按钮时，会返回获取到的用户信息，回调的 detail 数据与 wx.getUserInfo 返回的一致，open-type="getUserInfo"时有效 |
| bindcontact        | -            | 客服消息回调，open-type="contact"时有效                                                                                 |
| bindgetphonenumber | -            | 获取用户手机号回调，open-type=getPhoneNumber 时有效                                                                     |
| binderror          | -            | 获取用户手机号回调，open-type=getPhoneNumber 时有效                                                                     |
| bindopensetting    | -            | 在打开授权设置页后回调，open-type=openSetting 时有效                                                                    |
| bindlaunchapp      | -            | 打开 APP 成功的回调，open-type=launchApp 时有效                                                                         |
