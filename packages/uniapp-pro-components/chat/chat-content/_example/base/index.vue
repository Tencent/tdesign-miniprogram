<template>
  <view>
    <view class="chat-example">
      <view class="title">
        用户内容纯文本支持HTML转义
      </view>
      <view class="chat-example-block">
        <t-chat-content
          :content="userContent"
          role="user"
        />
      </view>
    </view>

    <view class="chat-example">
      <view class="title">
        助手内容（Markdown）
      </view>
      <view class="chat-example-block">
        <t-chat-content
          :content="assistantContent"
          role="assistant"
        />
      </view>
    </view>
  </view>
</template>

<script>
import TChatContent from 'tdesign-uniapp-chat/chat-content/chat-content.vue';


const markdownData = `# Markdown功能测试 (H1标题)

## 基础语法测试 (H2标题)

### 列表测试

- 无序列表项1
- 无序列表项2
    - 缩进列表项1（4个空格缩进）
    - 缩进列表项2（4个空格缩进）

1. 有序列表项1
2. 有序列表项2
    1. 缩进有序列表项1（4个空格缩进）
    2. 缩进有序列表项2（4个空格缩进）

### 代码块测试

\`\`\`javascript
// JavaScript 代码块
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
greet('Markdown');
\`\`\`

### 其他元素

> 引用文本块
> 多行引用内容

**加粗文字** _斜体文字_ ~~删除线~~

这是一个链接 [TDesign](https://tdesign.tencent.com)。
`;

export default {
  components: {
    TChatContent,
  },
  data() {
    return {
      userContent: {
        type: 'text',
        data: '这是用户发送的普通文本内容',
      },
      assistantContent: {
        type: 'markdown',
        data: markdownData,
      },
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.chat-example {
    margin-bottom: 32rpx;
}

.chat-example-block {
    padding: 32rpx;
    background-color: var(--td-bg-color-container);
}

.title {
    padding: 0 32rpx 32rpx;
    font-size: 28rpx;
    line-height: 44rpx;
    color: var(--bg-color-demo-desc);
}
</style>
