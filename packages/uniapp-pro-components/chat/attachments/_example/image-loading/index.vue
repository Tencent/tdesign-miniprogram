<template>
  <view class="chat-example">
    <view class="chat-example-block">
      <TAttachments
        :items="items"
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
          fileType: 'image',
          name: 'sample-image.jpg',
          url: 'https://tdesign.gtimg.com/site/avatar.jpg',
          size: 1024,
          status: 'pending',
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
.chat-example-block {
    padding: 32rpx;
    background-color: var(--td-bg-color-container);
}

</style>
