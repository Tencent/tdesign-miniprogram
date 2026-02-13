---
title: ChatRecord 语音输入
description: 用于聊天场景的语音输入组件，支持语音转文字、录音时长控制等功能。
spline: base
isComponent: true
---

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-chat-record": "tdesign-miniprogram/chat-record/chat-record"
}
```

## 前置配置

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
- 组件会自动调用 `wx.authorize` 申请麦克风权限
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


## API

### ChatRecord Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
useSpeechNoAuthSlot | Boolean | false | 是否启用语音输入无权限时显示插槽 | N
useSpeechInputSlot | Boolean | false | 是否启用语音输入时显示插槽 | N
autoSendHeight| Number | 0 | 自动发送消息的高度 | N
speechInput | slot | false |  语音输入按钮插槽 | N
speechNoAuth | slot | false | 语音授权按钮插槽 | N


### ChatRecord Events

名称 | 参数 | 描述
-- | -- | --
recognize | msg: string | 识别到的文本内容

### ChatRecord Slots

名称 | 描述
-- | --
speechInput | 语音输入按钮插槽
speechNoAuth | 语音授权按钮插槽
 
