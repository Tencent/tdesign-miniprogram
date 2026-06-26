---
title: ChatRecord 语音输入
description: 用于聊天场景的语音输入组件，支持语音识别、按住说话、上滑取消等功能。
spline: base
isComponent: true
---
## 引入

推荐使用 easycom 模式引入组件，配置后无需手动 import 即可直接在模板中使用 `<t-chat-record />`。

如需手动引入：

```js
import TChatRecord from '@tdesign/uniapp-chat/chat-record/chat-record.vue';
```

## 前置配置
内置[微信同声传译插件](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/extended/translator.html)，
需要提前在微信小程序中开启同声传译插件，操作方法：登录微信公众平台后台，进入"设置"->"第三方设置"->"插件管理"，通过插件AppID搜索并添加，审核通过后即可在代码中配置使用

### 1. 添加插件声明

在 `app.json` 中声明微信同声传译插件：

```json
{
  "plugins": {
    "WechatSI": {
      "version": "0.3.6",
      "provider": "wx069ba97219f66d99"
    }
  }
}
```

### 2. 麦克风权限

使用语音输入需要用户授权麦克风权限。组件会自动处理授权流程，但开发者需要了解以下场景：

#### 首次使用
- 组件会自动调用 `uni.authorize` 申请麦克风权限
- 用户同意后即可正常使用

#### 用户拒绝授权
- 如果用户点击拒绝，会显示"请授权麦克风权限"提示
- 点击提示区域会引导用户前往设置页面开启权限

#### 权限问题排查

如果在小程序设置页面看不到麦克风权限选项：

1. **检查微信 App 权限**
   - 进入手机系统设置 > 应用管理 > 微信
   - 确保微信有麦克风权限

2. **检查小程序授权**
   - 微信中下拉打开最近使用小程序列表
   - 长按目标小程序 > 关于小程序 > 设置
   - 查看是否有麦克风权限选项

3. **重新授权**
   - 删除小程序后重新搜索进入
   - 首次点击语音输入时会重新触发授权弹窗

4. **真机调试**
   - 模拟器无法测试录音功能
   - 必须使用真机预览或体验版测试

### 示例用法
#### 基础类型

{{ base }}

## API

### ChatRecord Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
lang | String | 'zh_CN' | 识别语言（WechatSI 插件参数） | N
duration | Number | 60000 | 最大录音时长（ms） | N
auto-send | Boolean | false | 是否自动发送（预留扩展） | N
bottom-height | Number | 0 | 底部高度，用于适配键盘弹出时的布局 | N

### ChatRecord Events

名称 | 参数 | 描述
-- | -- | --
recognize | `(context: { voicePath: string, voiceText: string, duration: number })` | 语音识别完成时触发
error | `(err: any)` | 录音识别错误时触发
statechange | `(context: { processStatus, interactStatus, translateResult, bottomHeight, activeBtnCancel, activeBtnSend })` | 录音状态变化时触发

### ChatRecord Slots

名称 | 描述
-- | --
speechInput | 语音输入按钮插槽（已授权时显示）
speechNoAuth | 语音授权按钮插槽（未授权时显示）
