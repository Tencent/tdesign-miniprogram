<template>
  <view class="wrapper">
    <t-upload
      :media-type="['video', 'image']"
      :files="originFiles"
      :grid-config="gridConfig"
      :config="config"
      source="messageFile"
      @success="handleSuccess"
      @remove="handleRemove"
    />
  </view>
</template>

<script>
import TUpload from '@tdesign/uniapp/upload/upload.vue';
export default {
  components: {
    TUpload,
  },
  data() {
    return {
      originFiles: [
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example4.png',
          name: 'uploaded1.png',
          type: 'image',
        },
      ],
      gridConfig: {
        column: 4,
        width: 160,
        height: 160,
      },
      config: {
        count: 1,
      },
    };
  },
  created() {},
  methods: {
    handleSuccess(e) {
      const { files } = e;
      this.originFiles = files;
    },
    handleRemove(e) {
      const { index } = e;
      const { originFiles } = this;
      originFiles.splice(index, 1);
      this.originFiles = originFiles;
    },
  },
};
</script>
<style>
</style>
