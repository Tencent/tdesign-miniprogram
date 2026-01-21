<template>
  <view class="link-example">
    <t-link
      size="small"
      theme="primary"
      content="S号链接"
      suffix-icon="jump"
      hover
    />
    <t-link
      theme="primary"
      content="M号链接"
      suffix-icon="jump"
      hover
    />
    <t-link
      size="large"
      theme="primary"
      content="L号链接"
      suffix-icon="jump"
      hover
    />
  </view>
</template>

<script>
import tLink from 'tdesign-uniapp/link/link.vue';
export default {
  components: {
    tLink,
  },
  data() {
    return {};
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
</style>
