# ChatGroup 聊天分组

## 简介

ChatGroup 组件用于将聊天消息按照一问一答的形式进行分组展示，通常与 ChatList 配合使用。

## 特性

- 📦 **自动分组**：将用户提问和 AI 回答组织在一起
- 📌 **置顶支持**：支持新消息置顶交互
- 🎨 **灵活布局**：支持左右对齐和单侧对齐
- 🎭 **动画效果**：内置多种加载动画效果

## 引入

全局引入，在 miniprogram 根目录下的 `app.json` 中配置，局部引入，在需要引入的页面或组件的 `index.json` 中配置。

```json
"usingComponents": {
  "chat-group": "tdesign-miniprogram-chat/chat-group/chat-group"
}
```

## 代码演示

### 基础用法

```html
<chat-group
  group-data="{{groupData}}"
  layout="both"
  animation="skeleton"
/>
```

```js
Page({
  data: {
    groupData: [
      {
        role: 'user',
        content: '你好',
        datetime: '2024-01-01 10:00',
      },
      {
        role: 'assistant',
        content: '你好！有什么可以帮你的吗？',
        datetime: '2024-01-01 10:01',
      }
    ]
  }
});
```

### 配合 ChatList 使用

```html
<chat-list
  data="{{chatList}}"
  group-mode="{{true}}"
  layout="both"
  anchor-height="{{anchorHeight}}"
/>
```

```js
Page({
  data: {
    chatList: [
      { role: 'user', content: '第一个问题' },
      { role: 'assistant', content: '第一个回答' },
      { role: 'user', content: '第二个问题' },
      { role: 'assistant', content: '第二个回答' },
    ],
    anchorHeight: 0,
  },
  
  onReady() {
    // 获取组件实例
    const chatList = this.selectComponent('#chatList');
    
    // 获取高度信息
    chatList.getElementsHeight().then((res) => {
      this.setData({
        anchorHeight: res.chatListHeight || 0,
      });
      
      // 触发置顶
      chatList.setQueryOnTop();
    });
  }
});
```

## API

### Props

| 属性名 | 类型 | 默认值 | 说明 | 必传 |
| --- | --- | --- | --- | --- |
| groupData | Array | [] | 分组数据，包含一问一答的消息对 | N |
| groupIndex | Number | 0 | 分组索引 | N |
| layout | String | both | 对话布局形式。可选项：both/single | N |
| animation | String | skeleton | 动画效果。可选项：skeleton/moving/gradient/dot | N |
| isLatest | Boolean | false | 是否是最新的分组（用于置顶交互） | N |
| anchorHeight | Number | 0 | 锚点高度，用于占位实现置顶效果 | N |

## 与 ChatList 的新功能

### ChatList 新增属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| groupMode | Boolean | false | 是否启用分组模式 |
| anchorHeight | Number | 0 | 锚点高度，用于新消息置顶 |

### ChatList 新增方法

| 方法名 | 参数 | 返回值 | 说明 |
| --- | --- | --- | --- |
| setQueryOnTop | - | - | 触发新消息置顶 |
| setQueryOnTopLock | lock: boolean | - | 设置置顶锁，防止重复触发 |
| getElementsHeight | - | Promise<{chatListHeight}> | 获取聊天列表高度信息 |

## 置顶交互实现原理

1. **数据分组**：将聊天数据按 2 个一组（一问一答）进行分组
2. **高度计算**：获取最后一组的高度和列表容器高度
3. **智能置顶**：
   - 如果最后一组高度 < 列表高度：将最后一组置顶显示
   - 否则：滚动到底部
4. **防抖控制**：通过 `queryOnTopLock` 锁防止置顶动画期间重复触发

## 注意事项

1. 启用 `groupMode` 后，数据会自动按 2 个一组进行分组，请确保数据是成对的（用户消息 + AI 消息）
2. `anchorHeight` 需要在消息发送前通过 `getElementsHeight()` 方法获取
3. 置顶功能需要在 `setQueryOnTopLock(true)` 后使用，完成后记得 `setQueryOnTopLock(false)`
4. 虚拟列表模式下，分组数量会影响性能，建议合理设置 `fragmentLen`

## 示例场景

### 发送消息时自动置顶

```js
// 发送消息
async sendMessage(content) {
  const chatList = this.selectComponent('#chatList');
  
  // 开启置顶锁
  chatList.setQueryOnTopLock(true);
  
  // 添加消息
  this.data.chatList.push(
    { role: 'user', content },
    { role: 'assistant', content: '' }
  );
  this.setData({ chatList: this.data.chatList });
  
  // 等待渲染完成后获取高度并置顶
  this.$nextTick(() => {
    chatList.getElementsHeight().then((res) => {
      this.setData({
        anchorHeight: res.chatListHeight || 0,
      });
      
      // 触发置顶
      chatList.setQueryOnTop();
      
      // 置顶完成后延迟关闭锁
      setTimeout(() => {
        chatList.setQueryOnTopLock(false);
      }, 500);
    });
  });
}
```
