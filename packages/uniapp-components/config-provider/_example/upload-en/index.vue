<template>
  <t-config-provider :global-config="globalConfig">
    <view class="upload-demo">
      <t-upload
        :media-type="['video', 'image']"
        :files="originFiles"
        :grid-config="gridConfig"
        @success="handleSuccess"
        @remove="handleRemove"
        @click="handleClick"
      />
    </view>
  </t-config-provider>
</template>

<script>
import TConfigProvider from '@tdesign/uniapp/config-provider/config-provider.vue';
import TUpload from '@tdesign/uniapp/upload/upload.vue';
import enUS from '@tdesign/uniapp/locale/en_US';

export default {
  components: {
    TConfigProvider,
    TUpload,
  },
  data() {
    return {
      globalConfig: enUS,
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
    };
  },
  methods: {
    handleSuccess(e) {
      const { files } = e;
      this.originFiles = files;
    },
    handleRemove(e) {
      const { index } = e;
      this.originFiles.splice(index, 1);
    },
    handleClick(e) {
      console.log(e.file);
    },
  },
};
</script>
<style scoped lang="less">
.upload-demo {
  background-color: var(--td-bg-color-container);
  padding: 32rpx;
}
</style>
