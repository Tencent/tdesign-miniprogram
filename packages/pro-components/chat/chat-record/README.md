---
title: ChatRecord 聊天记录
description: 用于展示聊天对话的历史记录列表，支持时间分组、滚动加载、消息交互等功能。
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

## 代码演示

### 01 组件类型

#### 基础类型

展示基础的聊天记录列表。

```xml
<t-chat-record records="{{records}}" />
```

#### 带时间分组

支持按时间间隔自动分组显示时间标签。

```xml
<t-chat-record 
  records="{{records}}" 
  show-time-group="{{true}}"
  time-group-interval="{{5}}"
/>
```

#### 滚动加载更多

支持滚动到顶部时加载更多历史记录。

```xml
<t-chat-record 
  records="{{records}}"
  loading="{{loading}}"
  finished="{{finished}}"
  bind:loadmore="handleLoadMore"
/>
```

#### 自定义消息渲染

支持通过插槽自定义消息的渲染方式。

```xml
<t-chat-record records="{{records}}">
  <view slot="message" slot-scope="record">
    <!-- 自定义消息内容 -->
  </view>
</t-chat-record>
```

## API

### ChatRecord Props

名称 | 类型 | 默认值 | 描述 | 必传
-- | -- | -- | -- | --
style | Object | - | 样式 | N
custom-style | Object | - | 样式，一般用于开启虚拟化组件节点场景 | N
records | Array | [] | 聊天记录数据列表。TS 类型：`ChatRecordItem[]` `interface ChatRecordItem { id: string; role: 'user' \| 'assistant' \| 'system'; content: ChatMessageContent[]; timestamp: number; avatar?: string; name?: string; status?: 'pending' \| 'streaming' \| 'complete' \| 'stop' \| 'error'; variant?: 'base' \| 'outline' \| 'text'; placement?: 'left' \| 'right'; }`。[详细类型定义](https://github.com/Tencent/tdesign-miniprogram/blob/develop/packages/pro-components/chat/chat-record/type.ts) | N
loading | Boolean | false | 是否显示加载状态 | N
finished | Boolean | false | 是否已加载全部数据 | N
loading-text | String | 加载中... | 加载提示文案 | N
finished-text | String | 没有更多了 | 加载完成提示文案 | N
empty-text | String | 暂无聊天记录 | 空状态提示文案 | N
show-time-group | Boolean | true | 是否显示时间分组 | N
time-group-interval | Number | 5 | 时间分组间隔（分钟） | N
virtual-scroll | Boolean | false | 是否启用虚拟滚动 | N
scroll-view-height | String | 100vh | 滚动视图高度 | N
auto-scroll-to-bottom | Boolean | true | 是否自动滚动到底部 | N

### ChatRecord Events

名称 | 参数 | 描述
-- | -- | --
loadmore | - | 滚动到顶部时触发，用于加载更多历史记录
scroll | `(detail: ScrollDetail)` | 滚动时触发
message-click | `(detail: { record: ChatRecordItem })` | 点击消息时触发
message-long-press | `(detail: { record: ChatRecordItem })` | 长按消息时触发

### ChatRecord Slots

名称 | 描述
-- | --
empty | 自定义空状态显示内容
message | 自定义消息显示内容，接收 record 参数

### ChatRecord 外部样式类

类名 | 描述
-- | --
t-class | 根节点样式类
t-class-empty | 空状态样式类
t-class-time | 时间分组样式类
t-class-message | 消息项样式类

## 示例代码

```javascript
Page({
  data: {
    records: [
      {
        id: '1',
        role: 'user',
        content: [{ type: 'text', data: '你好' }],
        timestamp: Date.now() - 600000,
        avatar: 'https://example.com/avatar1.png',
        name: '用户',
        placement: 'right',
      },
      {
        id: '2',
        role: 'assistant',
        content: [{ type: 'text', data: '你好！有什么可以帮助你的吗？' }],
        timestamp: Date.now() - 300000,
        avatar: 'https://example.com/avatar2.png',
        name: '助手',
        placement: 'left',
      },
    ],
    loading: false,
    finished: false,
  },

  handleLoadMore() {
    if (this.data.loading || this.data.finished) return;
    
    this.setData({ loading: true });
    
    // 模拟加载更多数据
    setTimeout(() => {
      const moreRecords = [
        // ... 更多历史记录
      ];
      
      this.setData({
        records: [...moreRecords, ...this.data.records],
        loading: false,
        finished: moreRecords.length === 0,
      });
    }, 1000);
  },

  handleMessageClick(e) {
    console.log('点击消息:', e.detail.record);
  },

  handleMessageLongPress(e) {
    console.log('长按消息:', e.detail.record);
  },
});
```
