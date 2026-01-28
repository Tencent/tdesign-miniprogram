<template>
  <view>
    <view class="demo-desc">
      红点徽标
    </view>
    <view class="demo-wrapper">
      <t-badge
        dot
        t-class="wrapper"
        content="消息"
      />
      <t-badge
        dot
        :offset="[1, -1]"
        t-class="wrapper"
      >
        <t-icon
          name="notification"
          size="48rpx"
          aria-label="通知"
        />
      </t-badge>
      <t-badge
        dot
        :offset="[1, 1]"
        t-class="wrapper"
      >
        <t-button>按钮</t-button>
      </t-badge>
    </view>

    <view class="demo-desc">
      数字徽标
    </view>
    <view class="demo-wrapper">
      <t-badge
        count="8"
        content="消息"
        :offset="[4]"
        t-class="wrapper"
      />
      <t-badge
        count="2"
        :offset="[2, -2]"
        t-class="wrapper"
      >
        <t-icon
          name="notification"
          size="48rpx"
          aria-label="通知"
        />
      </t-badge>
      <t-badge
        count="8"
        :offset="[2, 2]"
        t-class="wrapper"
      >
        <t-button>按钮</t-button>
      </t-badge>
    </view>

    <view class="demo-desc">
      自定义徽标
    </view>
    <view class="demo-wrapper">
      <t-badge
        count="NEW"
        :offset="[0, 2]"
        aria-role="button"
      >
        <t-button
          icon="notification"
          aria-label="通知"
          shape="square"
          size="large"
        />
      </t-badge>
    </view>
  </view>
</template>

<script>
import TBadge from '@tdesign/uniapp/badge/badge.vue';
import TIcon from '@tdesign/uniapp/icon/icon.vue';
import TButton from '@tdesign/uniapp/button/button.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TBadge,
    TIcon,
    TButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style>
:deep(.wrapper) {
    margin-right: 48px;
}

.demo-wrapper {
    display: flex;
    margin-left: 32rpx;
    margin-top: 28px;
    margin-bottom: 24px;
    align-items: center;
}
</style>
