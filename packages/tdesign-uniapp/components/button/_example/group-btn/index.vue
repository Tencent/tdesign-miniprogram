<template>
  <view class="button-example">
    <t-button
      theme="light"
      block
      size="large"
      t-class="group-btn"
      :custom-style="useVirtualHost ? flex1Mr16 : ''"
      :style="!useVirtualHost ? flex1Mr16 : ''"
    >
      填充按钮
    </t-button>
    <t-button
      theme="primary"
      block
      size="large"
      t-class="group-btn"
      :custom-style="useVirtualHost ? flex1 : ''"
      :style="!useVirtualHost ? flex1 : ''"
    >
      填充按钮
    </t-button>
  </view>
</template>

<script>
import tButton from 'tdesign-uniapp/button/button.vue';
import { canUseVirtualHost } from 'tdesign-uniapp/common/version';


export default {
  components: {
    tButton,
  },
  data() {
    return {
      flex1Mr16: 'flex: 1;margin-right: 16px;',
      flex1: 'flex: 1;',
    };
  },
  computed: {
    useVirtualHost() {
      return canUseVirtualHost();
    },
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
.button-example {
    margin: 32rpx;
    display: flex;
}
</style>
