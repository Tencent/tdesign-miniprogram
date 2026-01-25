<template>
  <view class="button-example">
    <t-button
      theme="primary"
      size="large"
      custom-style="margin-right: 16px;"
    >
      按钮48
    </t-button>
    <t-button
      theme="primary"
      custom-style="margin-right: 16px;"
    >
      按钮40
    </t-button>
    <t-button
      theme="primary"
      size="small"
      custom-style="margin-right: 16px;"
    >
      按钮32
    </t-button>
    <t-button
      theme="primary"
      size="extra-small"
    >
      按钮28
    </t-button>
  </view>
</template>

<script>
import TButton from 'tdesign-uniapp/button/button.vue';
export default {
  components: {
    TButton,
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
    align-items: flex-start;
    justify-content: space-between;
    margin: 0 32rpx;
}
</style>
