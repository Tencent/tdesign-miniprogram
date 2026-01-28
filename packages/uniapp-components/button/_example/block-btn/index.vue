<template>
  <view class="button-example">
    <t-button
      theme="primary"
      size="large"
      block
    >
      填充按钮
    </t-button>
  </view>
</template>

<script>
import TButton from '@tdesign/uniapp/button/button.vue';


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
    margin: 32rpx;
}
</style>
