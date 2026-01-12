<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-navbar
      class="demo-navbar"
      title="Avatar"
      left-arrow
      :delta="-1"
      @go-back="onDemoGoBack"
    />
    <!-- #endif -->
    <scroll-view
      scroll-y
      type="list"
      class="scroll-view"
    >
      <view class="demo">
        <t-demo-header
          title="Avatar 头像"
          desc="用于展示用户头像信息，除了纯展示也可点击进入个人详情等操作。"
        />
        <t-demo
          title="01 组件类型"
          desc="图片头像"
          padding
        >
          <imageAvatar />
        </t-demo>
        <t-demo
          desc="字符头像"
          padding
        >
          <characterAvatar />
        </t-demo>
        <t-demo
          desc="图标头像"
          padding
        >
          <iconAvatar />
        </t-demo>

        <t-demo
          desc="带徽标头像"
          padding
        >
          <badgeAvatar />
        </t-demo>

        <t-demo
          title="02 特殊类型"
          desc="纯展示的头像组"
          padding
        >
          <exhibition />
        </t-demo>
        <t-demo
          desc="带操作的头像组"
          padding
        >
          <action />
        </t-demo>

        <t-demo
          title="03 组件尺寸"
          desc="组件尺寸"
          padding
        >
          <size />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import imageAvatar from './image-avatar/index.vue';
import characterAvatar from './character-avatar/index.vue';
import iconAvatar from './icon-avatar/index.vue';
import badgeAvatar from './badge-avatar/index.vue';
import size from './size/index.vue';
import exhibition from './exhibition/index.vue';
import action from './action/index.vue';
export default {
  components: {
    imageAvatar,
    characterAvatar,
    iconAvatar,
    badgeAvatar,
    size,
    exhibition,
    action,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
@import './avatar.less';
</style>
