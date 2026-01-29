<template>
  <view>
    <t-demo-navbar
      title="Upload"
    />
    <view class="demo">
      <t-demo-header
        title="Upload 上传"
        notice="渲染框架支持情况：WebView"
      >
        <template
          #desc
        >
          <view>
            用于相册读取或拉起拍照的图片上传功能。
            <text style="color: var(--td-brand-color)">
              <!-- （为避免涉及用户隐私，Upload 组件示例均为禁用态，使用时请自行取消禁用态，以便正常使用上传功能。） -->
              （以下上传仅为示意）
            </text>
          </view>
        </template>
      </t-demo-header>
      <t-demo
        title="01 组件类型"
        desc="单选上传图片"
      >
        <view class="upload-demo">
          <view class="upload-demo__title">
            上传图片
          </view>
          <single-demo />
        </view>
      </t-demo>
      <t-demo
        title=""
        desc="多选上传图片"
      >
        <view class="upload-demo">
          <view class="upload-demo__title">
            上传图片
          </view>
          <multiple-demo />
        </view>
      </t-demo>
      <t-demo
        title=""
        desc="长按拖拽排序图片"
      >
        <view class="upload-demo">
          <view class="upload-demo__title">
            上传图片
          </view>
          <drag-demo />
        </view>
      </t-demo>
      <t-demo
        title="02 组件状态"
        desc="加载状态"
      >
        <view class="upload-demo">
          <view class="upload-demo__title">
            上传图片
          </view>
          <status-demo />
        </view>
      </t-demo>
      <!-- #ifdef MP-WEIXIN -->
      <t-demo
        title=""
        desc="从聊天记录上选"
      >
        <view class="upload-demo">
          <view class="upload-demo__title">
            上传图片
          </view>
          <message-file />
        </view>
      </t-demo>
      <!-- #endif -->
    </view>
  </view>
</template>

<script>

import SingleDemo from './single/index.vue';
import MultipleDemo from './multiple/index.vue';
import StatusDemo from './status/index.vue';
import MessageFile from './messageFile/index.vue';
import DragDemo from './drag/index.vue';
export default {
  components: {
    SingleDemo,
    MultipleDemo,
    StatusDemo,
    MessageFile,
    DragDemo,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './upload.less';
</style>
