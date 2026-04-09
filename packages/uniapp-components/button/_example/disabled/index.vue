<template>
  <view>
    <view class="button-example">
      <t-button
        theme="primary"
        size="large"
        disabled
        custom-style="margin-right: 16px;"
      >
        填充按钮
      </t-button>
      <t-button
        theme="light"
        size="large"
        disabled
        custom-style="margin-right: 16px;"
      >
        填充按钮
      </t-button>
      <t-button
        size="large"
        disabled
      >
        填充按钮
      </t-button>
    </view>

    <view class="button-example">
      <t-button
        theme="primary"
        size="large"
        variant="outline"
        disabled
        custom-style="margin-right: 16px;"
      >
        描边按钮
      </t-button>
      <t-button
        theme="primary"
        size="large"
        variant="dashed"
        disabled
        custom-style="margin-right: 16px;"
      >
        虚框按钮
      </t-button>
      <t-button
        theme="primary"
        size="large"
        variant="text"
        disabled
      >
        文字按钮
      </t-button>
    </view>
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
    display: flex;
    justify-content: space-between;
}

.button-example:after {
    content: '';
    flex: auto;
}
</style>
