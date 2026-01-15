---
title: 常见问题
description: 看看有没有你想要的。
spline: explain
---

### 与 TDesign UniApp 库的关系

[TDsign UniApp](https://www.npmjs.com/package/tdesign-uniapp) 和 [TDesign UniApp Chat](https://www.npmjs.com/package/tdesign-uniapp-chat) 是两个不同的包，后者依赖前者。

样式文件从 TDesign UniApp 引入一份即可。

```js
import 'tdesign-uniapp/common/style/theme/index.css';

// 或者引入与 tdesign-miniprogram 完全一致的文件，单位为 rpx
import 'tdesign-uniapp/common/style/theme/index.less';
```

### ChatList 抖动问题

`chat-list` 新增消息时，页面元素如果抖动，，可以加唯一 `key` 解决。

### ChatList 为什么默认倒序

倒序的话，新消息来时页面可以自然的滚动上去，以及下拉加载更多也会更顺滑。

你也可以设置 `reverse` 为 `false`，来禁用这一效果。
