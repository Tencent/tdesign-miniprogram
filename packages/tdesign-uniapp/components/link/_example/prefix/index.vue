<template>
  <view class="link-example">
    <t-link
      size="small"
      theme="primary"
      content="跳转链接"
      prefix-icon="link"
      hover
    />
    <t-link
      size="small"
      content="跳转链接"
      prefix-icon="link"
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
