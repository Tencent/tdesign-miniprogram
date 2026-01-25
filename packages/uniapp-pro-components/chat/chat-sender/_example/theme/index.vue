<template>
  <view>
    <view class="button-example">
      <t-button size="large">
        填充按钮
      </t-button>
      <t-button
        size="large"
        variant="outline"
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
      >
        填充按钮
      </t-button>
      <t-button
        size="large"
        theme="primary"
        variant="outline"
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
      >
        填充按钮
      </t-button>
      <t-button
        size="large"
        theme="danger"
        variant="outline"
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
      >
        填充按钮
      </t-button>
      <t-button
        size="large"
        theme="light"
        variant="outline"
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
<style>
.button-example {
    margin: 32rpx;
    display: flex;
    justify-content: space-between;
}

</style>
