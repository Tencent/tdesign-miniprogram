<template>
  <view>
    <t-demo-navbar
      class="demo-navbar"
      title="Attachments"
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
        <base-demo />
      </t-demo>
      <t-demo desc="文件类型">
        <file-demo />
      </t-demo>
      <t-demo
        title="02 组件状态"
        desc="图片类型加载状态"
      >
        <image-loading />
      </t-demo>
      <t-demo desc="文件类型加载状态">
        <file-loading />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseDemo from './base/index.vue';
import FileLoading from './file-loading/index.vue';
import ImageLoading from './image-loading/index.vue';
import FileDemo from './file/index.vue';

export default {
  components: {
    BaseDemo,
    FileLoading,
    ImageLoading,
    FileDemo,
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
