<template>
  <view class="button-example">
    <t-button
      theme="primary"
      ghost
      size="large"
      custom-style="margin-right: 16px;"
    >
      幽灵按钮
    </t-button>
    <t-button
      theme="danger"
      ghost
      size="large"
      custom-style="margin-right: 16px;"
    >
      幽灵按钮
    </t-button>
    <t-button
      ghost
      size="large"
    >
      幽灵按钮
    </t-button>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button.vue';
export default {
  components: {
    tButton,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
.button-example {
    display: flex;
    justify-content: space-between;
    background-color: #181818;
    padding: 32rpx;
}
</style>
