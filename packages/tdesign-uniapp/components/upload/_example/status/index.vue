<template>
  <view class="wrapper">
    <t-upload
      :media-type="['video', 'image']"
      :files="originFiles"
      :grid-config="gridConfig"
      @success="handleSuccess"
      @remove="handleRemove"
      @click="handleClick"
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
      originFiles: [
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example4.png',
          name: 'uploaded1.png',
          type: 'image',
          status: 'loading',
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example5.png',
          name: 'uploaded2.png',
          type: 'image',
          percent: 68,
          status: 'loading',
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example6.png',
          name: 'uploaded3.png',
          type: 'image',
          status: 'reload',
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example5.png',
          name: 'uploaded4.png',
          type: 'image',
          status: 'failed',
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
    handleClick(e) {
      console.log(e.file);
    },
  },
};
</script>
<style>
</style>
