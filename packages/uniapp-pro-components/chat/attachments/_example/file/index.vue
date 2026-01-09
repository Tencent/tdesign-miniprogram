<template>
  <view class="chat-example">
    <!-- 有效的示例，呈现效果为 单行滚动 -->
    <!-- <view class="chat-example-block">
    <t-attachments items="{{items}}" bind:fileClick="onFileClick" bind:remove="onRemove" bind:add="onAdd" />
  </view> -->

    <view
      v-for="(item, index) in items"
      :key="index"
      class="chat-example-block"
    >
      <TAttachments
        :items="[item]"
        @fileClick="onFileClick"
        @remove="onRemove"
        @add="onAdd"
      />
    </view>
  </view>
</template>

<script>
import TAttachments from 'tdesign-uniapp-chat/attachments/attachments.vue';
export default {
  components: {
    TAttachments,
  },
  data() {
    return {
      items: [
        {
          fileType: 'doc',
          name: 'word-file.doc',
          url: 'https://example.com/word-file.doc',
          size: 222859,
          status: 'success',
        },
        {
          fileType: 'excel',
          name: 'excel-file.xlsx',
          url: 'https://example.com/excel-file.xlsx',
          size: 222859,
          status: 'success',
        },
        {
          fileType: 'pdf',
          name: 'pdf-file.pdf',
          url: 'https://example.com/pdf-file.pdf',
          size: 222859,
          status: 'success',
        },
        {
          fileType: 'ppt',
          name: 'ppt-file.pptx',
          url: 'https://example.com/ppt-file.pptx',
          size: 222859,
          status: 'success',
        },
        {
          fileType: 'video',
          name: 'video-file.mp4',
          url: 'https://example.com/video-file.mp4',
          size: 222859,
          status: 'success',
        },
        {
          fileType: 'file',
          name: 'file',
          url: 'https://example.com/audio-file.mp3',
          size: 222859,
          status: 'success',
        },
      ],
    };
  },
  methods: {
    onFileClick(e) {
      const { item } = e;
      console.log('点击文件:', item);
      uni.showToast({
        title: `点击了${item.name}`,
        icon: 'none',
      });
    },

    onRemove(e) {
      const { item, index } = e;
      console.log('删除文件:', e, item, '索引:', index);

      // 从列表中移除文件
      const newItems = [...this.items];
      newItems.splice(index, 1);

      this.items = newItems;
      uni.showToast({
        title: '删除成功',
        icon: 'success',
      });
    },

    onAdd() {
      console.log('点击添加按钮');
      uni.showToast({
        title: '点击了添加按钮',
        icon: 'none',
      });

      // 模拟添加新文件
      const newFile = {
        fileType: 'txt',
        name: `新文件${this.items.length + 1}.txt`,
        url: 'https://example.com/newfile.txt',
        size: 256,
        status: 'success',
      };

      this.items = [...this.items, newFile];
    },
  },
};
</script>
<style>
.chat-example {
    padding: 32rpx;
    box-sizing: border-box;
    background-color: var(--td-bg-color-container);
}

.chat-example-block {
    display: inline-flex;
    width: 336rpx;
    margin-bottom: 26rpx;
}

</style>
