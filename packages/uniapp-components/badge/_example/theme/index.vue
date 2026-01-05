<template>
  <view>
    <!--
  由于 button 被 t-badeg包裹，t-badge 中存在 role="option", 导致button中的 role=button 失去作用。相当于button 被申明了 role=presentation
  因此提升了 aria-role=button 到 t-badge上
  可参考： https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/option_role
  https://www.zhangxinxu.com/wordpress/2017/01/voiceover-aria-web-accessible-iphone/
-->

    <view class="demo-desc">
      圆形徽标
    </view>
    <view class="demo-wrapper">
      <t-badge
        count="2"
        :offset="[2, -2]"
      >
        <t-icon
          name="notification"
          size="48rpx"
          aria-label="通知"
        />
      </t-badge>
    </view>

    <view class="demo-desc">
      方形徽标
    </view>
    <view class="demo-wrapper">
      <t-badge
        count="2"
        shape="square"
        :offset="[1, -2]"
      >
        <t-icon
          name="notification"
          size="48rpx"
          aria-label="通知"
        />
      </t-badge>
    </view>

    <view class="demo-desc">
      气泡徽标
    </view>
    <view class="demo-wrapper">
      <t-badge
        count="领积分"
        shape="bubble"
        aria-role="button"
      >
        <t-button
          icon="shop"
          aria-label="商店"
          shape="square"
          size="large"
        />
      </t-badge>
    </view>

    <view
      class="demo-desc"
      style="margin-bottom: 32rpx"
    >
      角标
    </view>
    <t-cell
      title="单行标题"
      t-class="t-class-cell"
    >
      <template
        #note
      >
        <t-badge
          count="New"
          :offset="skylineRender ? ['-16rpx', '-56rpx'] : [0, 0]"
          shape="ribbon"
        />
      </template>
    </t-cell>
  </view>
</template>

<script>
import tBadge from 'tdesign-uniapp/badge/badge.vue';
import tCell from 'tdesign-uniapp/cell/cell.vue';
import tIcon from 'tdesign-uniapp/icon/icon.vue';
import tButton from 'tdesign-uniapp/button/button.vue';
import SkylineBehavior from 'tdesign-uniapp/mixins/skyline.js';

export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tBadge,
    tCell,
    tIcon,
    tButton,
  },
  mixins: [SkylineBehavior],
  data() {
    return {
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.demo-wrapper {
    display: flex;
    margin-left: 32rpx;
    margin-top: 28px;
    margin-bottom: 24px;
    align-items: center;
}

:deep(.t-class-cell) {
    overflow: hidden;
}
</style>
