<template>
  <view class="wrapper">
    <t-upload
      :media-type="['video', 'image']"
      :files="originFiles"
      :grid-config="gridConfig"
      :remove-btn="false"
      @success="handleSuccess"
      @remove="handleRemove"
      @click="handleClick"
      @sort-end="handleSortEnd"
    />
  </view>
</template>

<script>
import TUpload from 'tdesign-uniapp/upload/upload.vue';
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
          removeBtn: true,
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example6.png',
          name: 'uploaded2.png',
          type: 'image',
          removeBtn: true,
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example5.png',
          name: 'uploaded3.png',
          type: 'image',
          removeBtn: true,
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

    handleSortEnd() {
      console.log('占位：函数 handleSortEnd 未声明');
    },
  },
};
</script>
<style>
</style>
