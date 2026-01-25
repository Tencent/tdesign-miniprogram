<template>
  <view class="skyline">
    <!-- #ifndef MP-ALIPAY -->
    <t-demo-navbar
      custom-class="demo-navbar"
      title="Avatar"
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
          <image-avatar />
        </t-demo>
        <t-demo
          desc="字符头像"
          padding
        >
          <character-avatar />
        </t-demo>
        <t-demo
          desc="图标头像"
          padding
        >
          <icon-avatar />
        </t-demo>

        <t-demo
          desc="带徽标头像"
          padding
        >
          <badge-avatar />
        </t-demo>

        <t-demo
          title="02 特殊类型"
          desc="纯展示的头像组"
          padding
        >
          <exhibition-demo />
        </t-demo>
        <t-demo
          desc="带操作的头像组"
          padding
        >
          <action-demo />
        </t-demo>

        <t-demo
          title="03 组件尺寸"
          desc="组件尺寸"
          padding
        >
          <size-demo />
        </t-demo>
      </view>
    </scroll-view>
  </view>
</template>

<script>

import ImageAvatar from './image-avatar/index.vue';
import CharacterAvatar from './character-avatar/index.vue';
import IconAvatar from './icon-avatar/index.vue';
import BadgeAvatar from './badge-avatar/index.vue';
import SizeDemo from './size/index.vue';
import ExhibitionDemo from './exhibition/index.vue';
import ActionDemo from './action/index.vue';
export default {
  components: {
    ImageAvatar,
    CharacterAvatar,
    IconAvatar,
    BadgeAvatar,
    SizeDemo,
    ExhibitionDemo,
    ActionDemo,
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
