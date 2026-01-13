<template>
  <view class="wrapper">
    <t-upload
      :disabled="false"
      :media-type="['video', 'image']"
      :max="1"
      :files="fileList"
      @add="handleAdd"
      @remove="handleRemove"
    />
  </view>
</template>

<script>
import tUpload from 'tdesign-uniapp/upload/upload.vue';
export default {
  components: {
    tUpload,
  },
  data() {
    return {
      fileList: [],
    };
  },
  created() {},
  methods: {
    handleAdd(e) {
      const { fileList } = this;
      console.log('add: ', e);
      const { files } = e;

      // 方法1：选择完所有图片之后，统一上传，因此选择完就直接展示
      this.fileList = [...fileList, ...files]; // 此时设置了 fileList 之后才会展示选择的图片

      // 方法2：每次选择图片都上传，展示每次上传图片的进度
      // files.forEach(file => this.uploadFile(file))
    },
    onUpload(file) {
      const { fileList } = this;
      this.fileList = [
        ...fileList,
        {
          ...file,
          status: 'loading',
        },
      ];

      console.log('onUpload', file);
      const { length } = fileList;
      const task = uni.uploadFile({
        url: 'https://example.weixin.qq.com/upload',
        // 仅为示例，非真实的接口地址
        filePath: file.url,
        name: 'file',
        formData: {
          user: 'test',
        },
        success: () => {
          this[`fileList[${length}].status`] = 'done';
        },
      });
      task.onProgressUpdate((res) => {
        this[`fileList[${length}].percent`] = res.progress;
      });
    },
    handleRemove(e) {
      const { index } = e;
      const { fileList } = this;
      fileList.splice(index, 1);
      this.fileList = fileList;
    },
  },
};
</script>
<style>
</style>
