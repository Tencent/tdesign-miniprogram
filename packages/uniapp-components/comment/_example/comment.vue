<template>
  <view>
    <t-demo-navbar title="Comment" />
    <view class="demo">
      <t-demo-header
        title="Comment 评论"
        desc="用于展示评论信息，支持回复、点赞等操作，以及折叠/展开回复区。"
      />
      <t-demo title="01 组件类型" desc="基础评论">
        <base-demo />
      </t-demo>
      <t-demo desc="图片评论">
        <image-demo />
      </t-demo>
      <t-demo desc="文字+图片评论">
        <mixed-demo />
      </t-demo>
      <t-demo title="02 组件样式" desc="展开 + 收起">
        <collapse-demo />
      </t-demo>
    </view>
  </view>
</template>

<script>
import BaseDemo from './base/index.vue';
import ImageDemo from './image/index.vue';
import MixedDemo from './mixed/index.vue';
import CollapseDemo from './collapse/index.vue';

export default {
  components: {
    BaseDemo,
    ImageDemo,
    MixedDemo,
    CollapseDemo,
  },
};
</script>
<style lang="less">
@import './comment.less';
</style>
