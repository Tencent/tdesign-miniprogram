<template>
  <view>
    <view class="button-example">
      <t-button
        size="large"
        custom-style="margin-right: 16px;"
      >
        填充按钮
      </t-button>
      <t-button
        size="large"
        variant="outline"
        custom-style="margin-right: 16px;"
      >
        描边按钮
      </t-button>
      <t-button
        size="large"
        variant="text"
      >
        文字按钮
      </t-button>
    </view>

    <view class="button-example">
      <t-button
        size="large"
        theme="primary"
        custom-style="margin-right: 16px;"
      >
        填充按钮
      </t-button>
      <t-button
        size="large"
        theme="primary"
        variant="outline"
        custom-style="margin-right: 16px;"
      >
        描边按钮
      </t-button>
      <t-button
        size="large"
        theme="primary"
        variant="text"
      >
        文字按钮
      </t-button>
    </view>

    <view class="button-example">
      <t-button
        size="large"
        theme="danger"
        custom-style="margin-right: 16px;"
      >
        填充按钮
      </t-button>
      <t-button
        size="large"
        theme="danger"
        variant="outline"
        custom-style="margin-right: 16px;"
      >
        描边按钮
      </t-button>
      <t-button
        size="large"
        theme="danger"
        variant="text"
      >
        文字按钮
      </t-button>
    </view>

    <view class="button-example">
      <t-button
        size="large"
        theme="light"
        custom-style="margin-right: 16px;"
      >
        填充按钮
      </t-button>
      <t-button
        size="large"
        theme="light"
        variant="outline"
        custom-style="margin-right: 16px;"
      >
        描边按钮
      </t-button>
      <t-button
        size="large"
        theme="light"
        variant="text"
      >
        文字按钮
      </t-button>
    </view>
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
    margin: 32rpx;
    display: flex;
    justify-content: space-between;
}
</style>
