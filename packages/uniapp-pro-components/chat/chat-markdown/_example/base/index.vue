<template>
  <view class="chat-example-block">
    <t-chat-markdown
      :content="markdownContent"
      @click="handleNodeTap"
    />
  </view>
</template>

<script>
import TChatMarkdown from '@tdesign/uniapp-chat/chat-markdown/chat-markdown.vue';

const markdownData = `
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

正文

**加粗正文**

~~删除线~~

行内代码: \`console.log('Hello')\`
`;

export default {
  components: {
    TChatMarkdown,
  },
  data() {
    return {
      markdownContent: markdownData,
    };
  },
  methods: {
    handleNodeTap(e) {
      const node = e.node;
      // 打印节点信息
      console.log('节点信息', node);
      // 图片节点预览
      if (node && node.type === 'image') {
        uni.previewImage({
          urls: [node.href],
          current: node.href,
        });
      }
    },
  },
};
</script>
<style>
.chat-example-block {
    background-color: var(--td-bg-color-container);
    padding: 32rpx;
}
</style>
