---
title: ChatRecord 语音输入
description: 用于聊天场景的语音输入组件，支持语音转文字、录音时长控制等功能。
spline: base
isComponent: true
---

<div style="background: #ecf2fe; padding: 14px 24px; border-radius: 3px; color: #555a65">
  <div style="border-left: 2px solid #c6c6c6; padding: 0 8px;margin-bottom: 16px">该组件于 1.16.0 版本上线，请留意版本</div>
  <div style="border-left: 2px solid #0052d9; padding: 0 8px">渲染框架支持情况：WebView</div>
</div>

## 引入

全局引入，在 miniprogram 根目录下的`app.json`中配置，局部引入，在需要引入的页面或组件的`index.json`中配置。

```json
"usingComponents": {
  "t-chat-record": "tdesign-miniprogram/chat-record/chat-record"
}
```

## 代码演示

<a href="https://developers.weixin.qq.com/s/9to5g0mJ8xbW" title="在开发者工具中预览效果" target="_blank" rel="noopener noreferrer"> 在开发者工具中预览效果 </a>

<blockquote style="background-color: #d9e1ff; font-size: 15px; line-height: 26px;margin: 16px 0 0;padding: 16px; border-radius: 6px; color: #0052d9" >
<p>Tips: 请确保开发者工具为打开状态。导入开发者工具后，依次执行：npm i > 构建npm包 > 勾选 "将JS编译成ES5"</p>
</blockquote>

### 组件类型

#### 基础使用

{{ base }}

## FAQ

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
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
auto-send | Boolean | false | 是否自动发送（预留扩展）  | N
bottom-height | Number | 0 | 底部高度，用于适配键盘弹出时的布局 | N
duration | Number | 60000 | 最大录音时长（ms） | N
lang | String | zh_CN | 识别语言（WechatSI 插件参数） | N

### ChatRecord Events

名称 | 参数 | 描述
-- | -- | --
cancel | \- | 取消录音时触发
error | `(err: any)` | 录音识别错误时触发
recognize | `(detail: { voicePath: string, voiceText: string, duration: number })` | 语音识别完成时触发

### ChatRecord Slots

名称 | 描述
-- | --
speech-input | 语音输入按钮插槽，自定义语音输入按钮区域内容
speech-no-auth | 语音授权按钮插槽，自定义语音授权按钮区域内容
