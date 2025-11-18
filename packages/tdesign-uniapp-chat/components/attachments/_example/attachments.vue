<template>
  <view>
    <t-navbar
      class="demo-navbar"
      title="Attachments"
      left-arrow
    />
    <view class="demo">
      <t-demo-header
        title="Attachments 文件附件"
        desc="用于聊天场景中上传、预览和管理附件的组件。"
        notice="渲染框架支持情况：WebView"
      />
      <t-demo
        title="01 组件类型"
        desc="图片类型"
      >
        <baseDemo />
      </t-demo>
      <t-demo desc="文件类型">
        <file />
      </t-demo>
      <t-demo
        title="02 组件状态"
        desc="图片类型加载状态"
      >
        <imageLoading />
      </t-demo>
      <t-demo desc="文件类型加载状态">
        <fileLoading />
      </t-demo>
    </view>
  </view>
</template>

<script>
import baseDemo from './base/index.vue';
import fileLoading from './file-loading/index.vue';
import imageLoading from './image-loading/index.vue';
import file from './file/index.vue';

export default {
  components: {
    baseDemo,
    fileLoading,
    imageLoading,
    file,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './attachments.less';
</style>
