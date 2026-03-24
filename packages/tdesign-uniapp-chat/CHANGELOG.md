---
title: 更新日志
spline: explain
toc: false
docClass: timeline
---

## 🌈 0.2.2 `2026-03-23`

### 🚨 Breaking Changes

- `ChatSender`: 附件末尾没有添加入口，移除无实际意义的 `fileAdd` 事件 @zydemail ([#4331](https://github.com/Tencent/tdesign-miniprogram/pull/4331))

### 🐞 Bug Fixes

- `Attachments`: 修复小程序下使用标签选择器的警告问题 @novlan1 ([#4320](https://github.com/Tencent/tdesign-miniprogram/pull/4320))
- `ChatActionbar`: 修复 `actionBar` 属性无效以及长按气泡框不显示浮层的问题 @zydemail ([#4348](https://github.com/Tencent/tdesign-miniprogram/pull/4348))
- `ChatMarkdown`: 修复组件输入值为一个空项的列表时出现 `undefined` 的问题 @mimaoxiao ([#4334](https://github.com/Tencent/tdesign-miniprogram/pull/4334))

### 📝 Documentation

- `Attachments`: 移除 `addable` 属性相关文档描述 @zydemail ([#4331](https://github.com/Tencent/tdesign-miniprogram/pull/4331))

## 🌈 0.2.1 `2026-03-04`

### 🚀 Features

- `ChatThinking`: 新增 `content` 插槽 @zydemail ([#4270](https://github.com/Tencent/tdesign-miniprogram/pull/4270))

## 🌈 0.2.0 `2026-01-30`

### 🚀 Features

- `ChatActionbar`: actionbar 支持长按展示 @mimaoxiao ([#4211](https://github.com/Tencent/tdesign-miniprogram/pull/4211))

### 🐞 Bug Fixes

- `ChatContent`: 修复英文单词在换行时被截断的问题 @mimaoxiao ([#4227](https://github.com/Tencent/tdesign-miniprogram/pull/4227))
- `ChatList`: 修复 `scrollToBottom` 在 `reverse` 为 `false` 时，滑动的方向错误 @zydemail ([#4191](https://github.com/Tencent/tdesign-miniprogram/pull/4191))

## 🌈 0.1.3 `2026-01-05`

### 🚀 Features

- `ChatMarkdown`: 兼容 `APP-PLUS` 平台 @novlan1 ([#142](https://github.com/novlan1/tdesign-uniapp/pull/142))

## 🌈 0.1.2 `2025-11-25`

### 🚀 Features

- `ChatMarkdown`: 兼容 `Vue2.x` @novlan1 ([#92](https://github.com/novlan1/tdesign-uniapp/pull/92))

## 🌈 0.1.1 `2025-11-17`

### 🐞 Bug Fixes

- `Attachments`: 修复图标点击事件冒泡问题 @novlan1 ([#72](https://github.com/novlan1/tdesign-uniapp/pull/72))
