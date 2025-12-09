# chat-group 组件使用示例

## 📝 示例说明

本示例展示了如何使用 `t-chat-group` 组件来实现聊天对话的分组展示和新消息置顶功能。

## 🎯 核心功能

### 1. **消息分组展示**
将聊天消息按一问一答（用户消息 + AI 回复）自动分组显示。

### 2. **新消息置顶**
当 AI 回复完成后，自动将最新的对话组置顶显示。

### 3. **流式输出**
支持 AI 回复的流式输出效果。

## 📂 文件结构

```
group/
├── index.wxml       # 模板文件
├── index.js         # 逻辑文件
├── index.json       # 配置文件
├── index.wxss       # 样式文件
└── README.md        # 使用说明
```

## 🔧 核心实现

### 1. 数据分组逻辑

```javascript
// 将 chatList 分组（一问一答为一组）
groupChatList() {
  const { chatList } = this.data;
  const grouped = [];
  
  for (let i = 0; i < chatList.length; i += 2) {
    const group = [chatList[i]];
    if (i + 1 < chatList.length) {
      group.push(chatList[i + 1]);
    }
    grouped.push(group);
  }
  
  this.setData({
    groupedChatList: grouped,
  });
}
```

### 2. 新消息置顶

```javascript
// 新消息置顶
setQueryOnTop() {
  const chatListComponent = this.selectComponent('#chatList');
  if (!chatListComponent) return;

  // 开启置顶锁
  chatListComponent.setQueryOnTopLock(true);

  wx.nextTick(() => {
    // 获取高度信息
    chatListComponent.getElementsHeight().then((res) => {
      this.setData({
        anchorHeight: res.chatListHeight || 0,
      });

      // 执行置顶
      chatListComponent.setQueryOnTop();

      // 500ms 后关闭锁
      setTimeout(() => {
        chatListComponent.setQueryOnTopLock(false);
      }, 500);
    });
  });
}
```

### 3. WXML 模板

```xml
<t-chat id="chatList" bindscroll="onScroll" bindscrolltoupper="onScrollToUpper">
  <block wx:for="{{groupedChatList}}" wx:for-index="groupIndex" wx:key="groupIndex">
    <t-chat-group
      group-data="{{item}}"
      group-index="{{groupIndex}}"
      layout="both"
      animation="{{animation}}"
      is-latest="{{groupIndex === groupedChatList.length - 1}}"
      anchor-height="{{anchorHeight}}"
    />
  </block>
  <view slot="footer">
    <t-chat-sender ... />
  </view>
</t-chat>
```

## 💡 关键点说明

### 数据结构要求

每条消息必须包含 `chatId`：

```javascript
const message = {
  chatId: generateId(),        // 唯一ID
  role: 'user',                // 角色：user | assistant
  content: [...],              // 消息内容
  status: 'complete',          // 状态：pending | streaming | complete
  avatar: 'xxx',               // 头像（可选）
};
```

### 分组规则

- **顺序**：`chatList` 按时间正序（最新消息在末尾）
- **分组**：每 2 条消息为一组（user + assistant）
- **奇数处理**：最后一条消息单独成组
- **渲染方向**：使用 `reverse="{{false}}"` 正向渲染

### 置顶时机

在 AI 回复完成后调用：

```javascript
complete() {
  // 获取最后一条消息（最新的 AI 回复）
  const lastIndex = that.data.chatList.length - 1;
  
  // 更新消息状态
  that.data.chatList[lastIndex].status = 'complete';
  that.setData({ chatList: that.data.chatList });
  
  // 更新分组
  that.groupChatList();
  
  // 触发置顶
  that.setQueryOnTop();
}
```

## 🎨 交互流程

```
┌─────────────────────────────────────┐
│ 1. 用户发送消息                      │
│    - 创建 user 消息                  │
│    - 插入 chatList 末尾              │
│    - 调用 groupChatList()            │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│ 2. 创建 AI 回复占位                  │
│    - 创建 assistant 消息（空内容）   │
│    - status = 'pending'              │
│    - 插入 chatList 末尾              │
│    - 调用 groupChatList()            │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│ 3. 流式输出                          │
│    - 逐字更新最后一条消息的 content  │
│    - status = 'streaming'            │
│    - 每次更新调用 groupChatList()    │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│ 4. 回复完成                          │
│    - status = 'complete'             │
│    - 调用 groupChatList()            │
│    - 调用 setQueryOnTop() 置顶       │
└─────────────────────────────────────┘
```

## 📊 两种使用方式对比

### 方式一：手动渲染（本示例）

**优点**：
- ✅ 完全控制渲染逻辑
- ✅ 可以为每条消息添加自定义 slot（如 actionbar）
- ✅ 灵活性高

**缺点**：
- ❌ 需要手动管理分组数据
- ❌ 代码量较多

**使用场景**：需要高度自定义的场景

```xml
<t-chat id="chatList">
  <block wx:for="{{groupedChatList}}" wx:key="groupIndex">
    <t-chat-group group-data="{{item}}" />
  </block>
</t-chat>
```

### 方式二：data 属性（推荐）

**优点**：
- ✅ 组件内部自动分组
- ✅ 代码简洁
- ✅ 支持虚拟列表优化

**缺点**：
- ❌ 自定义能力受限

**使用场景**：标准聊天场景

```xml
<t-chat 
  data="{{chatList}}"
  group-mode="{{true}}"
  anchor-height="{{anchorHeight}}"
/>
```

## ⚠️ 注意事项

### 1. **chatId 唯一性**
确保每条消息的 `chatId` 全局唯一：

```javascript
const generateId = () => {
  return `msg_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
};
```

### 2. **分组更新时机**
在以下情况下需要调用 `groupChatList()`：
- 发送新消息后
- 添加 AI 回复后
- 流式输出过程中（可选，避免频繁更新）
- 回复完成后

### 3. **置顶锁管理**
- 在置顶开始时开启锁
- 在置顶动画完成后（500ms）关闭锁
- 避免在锁定期间重复触发置顶

### 4. **性能优化**
- 使用虚拟列表处理大量消息（1000+ 条）
- 避免在流式输出时频繁重新分组
- 使用 `wx.nextTick()` 确保 DOM 更新后再操作

## 🚀 扩展功能

### 1. 加载历史消息

```javascript
onScrollToUpper() {
  // 加载更多历史消息（插入到开头）
  this.loadMoreMessages().then((messages) => {
    this.setData({
      chatList: [...messages, ...this.data.chatList],
    });
    this.groupChatList();
  });
}
```

### 2. 消息重新生成

```javascript
handleRegenerate(chatId) {
  // 找到对应消息索引
  const index = this.data.chatList.findIndex(msg => msg.chatId === chatId);
  
  // 删除旧回复
  this.data.chatList.splice(index, 1);
  
  // 触发新回复（会添加到末尾）
  this.simulateAssistantReply();
}
```

### 3. 消息删除

```javascript
handleDelete(chatId) {
  // 删除消息
  const newList = this.data.chatList.filter(msg => msg.chatId !== chatId);
  
  this.setData({
    chatList: newList,
  });
  
  // 重新分组
  this.groupChatList();
}
```

## 📚 相关文档

- [chat-group 组件文档](../../chat-group/README.md)
- [chat-list 组件文档](../../README.md)
- [chat-group 样式系统](../../chat-group/STYLE_UPDATE.md)
- [chat-group 完整示例](../../chat-group/EXAMPLE.md)
