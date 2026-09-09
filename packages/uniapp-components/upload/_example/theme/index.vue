<template>
  <view class="wrapper">
    <view class="upload-demo">
      <view class="upload-demo__title">宫格布局上传</view>
      <t-upload
        :files="gridFiles"
        draggable
        theme="grid"
        :media-type="['video', 'image']"
        :source="source"
        @add="handleGridAdd"
        @remove="handleGridRemove"
        @drop="handleGridDrop"
      />
    </view>

    <view class="upload-demo" style="margin-top: 32rpx">
      <view class="upload-demo__title">列表布局上传</view>
      <t-upload
        :files="listFiles"
        draggable
        theme="list"
        :media-type="['video', 'image']"
        :source="source"
        @add="handleListAdd"
        @remove="handleListRemove"
        @drop="handleListDrop"
      />
    </view>
  </view>
</template>

<script>
import TUpload from '@tdesign/uniapp/upload/upload.vue';

const IMAGE_URL = 'https://tdesign.gtimg.com/mobile/demos/upload6.png';

export default {
  components: {
    TUpload,
  },
  data() {
    return {
      gridFiles: [
        {
          url: 'loading-file.txt',
          name: 'loading-file.txt',
          status: 'loading',
        },
        {
          url: 'loading-file2.txt',
          name: 'loading-file2.txt',
          status: 'loading',
          percent: 68,
        },
        {
          url: '',
          name: 'failed-file.txt',
          status: 'reload',
        },
        {
          url: '',
          name: 'error-file.txt',
          status: 'failed',
        },
        {
          url: '',
          name: 'report.xlsx',
          size: 153600,
          status: 'done',
        },
        {
          url: '',
          name: 'document.pdf',
          size: 327680,
          status: 'done',
        },
        {
          url: '',
          name: 'presentation.pptx',
          size: 524288,
          status: 'done',
        },
        {
          url: '',
          name: 'article.docx',
          size: 262144,
          status: 'done',
        },
        {
          url: IMAGE_URL,
          name: 'image-loading.png',
          type: 'image',
          status: 'loading',
        },
        {
          url: IMAGE_URL,
          name: 'image-percent.png',
          type: 'image',
          status: 'loading',
          percent: 68,
        },
        {
          url: IMAGE_URL,
          name: 'image-reload.png',
          type: 'image',
          status: 'reload',
        },
        {
          url: IMAGE_URL,
          name: 'image-failed.png',
          type: 'image',
          status: 'failed',
        },
        {
          url: IMAGE_URL,
          name: 'image-done.png',
          type: 'image',
          status: 'done',
        },
      ],
      listFiles: [
        {
          url: 'Technical Design Document.pdf',
          name: 'Technical Design Document.pdf',
          size: 222208,
          status: 'loading',
          percent: 30,
        },
        {
          url: 'Technical Design Document.pdf-1',
          name: 'Technical Design Document.pdf',
          size: 222208,
          status: 'failed',
        },
        {
          url: 'Design Mockup.png',
          name: 'Design Mockup.png',
          type: 'image',
          size: 1048576,
          status: 'done',
        },
        {
          url: 'Product Demo.mp4',
          name: 'Product Demo.mp4',
          type: 'video',
          size: 5242880,
          status: 'done',
        },
        {
          url: 'Project Proposal.docx',
          name: 'Project Proposal.docx',
          size: 131072,
          status: 'done',
        },
        {
          url: 'Financial Report.xlsx',
          name: 'Financial Report.xlsx',
          size: 262144,
          status: 'done',
        },
        {
          url: 'User Manual.pdf',
          name: 'User Manual.pdf',
          size: 524288,
          status: 'done',
        },
        {
          url: 'Quarterly Review.pptx',
          name: 'Quarterly Review.pptx',
          size: 786432,
          status: 'done',
        },
      ],
    };
  },
  computed: {
    source() {
      let result = 'media';
      // #ifdef MP-WEXIN
      result = 'messageFile';
      // #endif
      return result;
    },
  },
  methods: {
    handleGridAdd(e) {
      const { gridFiles } = this;
      const { files } = e;
      this.gridFiles = [...gridFiles, ...files];
    },
    handleGridRemove(e) {
      const { index } = e;
      const { gridFiles } = this;
      gridFiles.splice(index, 1);
      this.gridFiles = gridFiles;
    },
    handleGridDrop(e) {
      const { files } = e;
      this.gridFiles = files;
    },
    handleListAdd(e) {
      const { listFiles } = this;
      const { files } = e;
      this.listFiles = [...listFiles, ...files];
    },
    handleListRemove(e) {
      const { index } = e;
      const { listFiles } = this;
      listFiles.splice(index, 1);
      this.listFiles = listFiles;
    },
    handleListDrop(e) {
      const { files } = e;
      this.listFiles = files;
    },
  },
};
</script>
<style scoped>
.upload-demo {
  background-color: var(--bg-color-demo);
  box-sizing: border-box;
  padding: 32rpx;
}
.upload-demo__title {
  font-size: 32rpx;
  color: var(--td-text-color-primary);
  padding-bottom: 32rpx;
}
</style>
