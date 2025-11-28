<template>
  <view>
    <view class="link-example">
      <t-link
        :navigator-props="navigatorProps"
        size="small"
        theme="primary"
        content="跳转链接"
        suffix-icon="jump"
        disabled
        hover
      />
      <t-link
        size="small"
        content="跳转链接"
        suffix-icon="jump"
        disabled
      />
      <t-link
        size="small"
        theme="danger"
        content="跳转链接"
        suffix-icon="jump"
        disabled
      />
    </view>
    <view class="link-example">
      <t-link
        size="small"
        theme="warning"
        content="跳转链接"
        suffix-icon="jump"
        disabled
      />
      <t-link
        size="small"
        theme="success"
        content="跳转链接"
        suffix-icon="jump"
        disabled
      />
    </view>
  </view>
</template>

<script>
import tLink from 'tdesign-uniapp/link/link.vue';
export default {
  components: {
    tLink,
  },
  data() {
    return {
      navigatorProps: {
        url: '/pages/home/home',
      },
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.link-example {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 96rpx;
    background-color: var(--bg-color-demo);
}

.link-example:not(:last-child) {
    margin-bottom: 32rpx;
}
</style>
