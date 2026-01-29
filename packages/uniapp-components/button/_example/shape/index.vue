<template>
  <view>
    <view class="button-example">
      <t-button
        theme="primary"
        size="large"
        custom-style="margin-right: 16px;"
      >
        填充按钮
      </t-button>
      <t-button
        theme="primary"
        size="large"
        icon="search"
        shape="square"
        aria-label="搜索"
        custom-style="margin-right: 16px;"
      />
      <t-button
        theme="primary"
        size="large"
        shape="round"
        custom-style="margin-right: 16px;"
      >
        填充按钮
      </t-button>
      <t-button
        theme="primary"
        size="large"
        icon="search"
        shape="circle"
        aria-label="搜索"
      />
    </view>

    <t-button
      theme="primary"
      size="large"
      block
      t-class="external-class"
      custom-style="border-radius: 0"
    >
      填充按钮
    </t-button>
  </view>
</template>

<script>
import TButton from '@tdesign/uniapp/button/button.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
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
    justify-content: space-between;
    margin: 0 32rpx 32rpx;
}
</style>
