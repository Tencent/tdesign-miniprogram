<template>
  <view class="button-example">
    <t-button
      theme="primary"
      icon="app"
      content="填充按钮"
      size="large"
      custom-style="margin-right: 16px;"
    />
    <t-button
      v-if="skylineRender"
      theme="light"
      size="large"
      custom-style="margin-right: 16px;"
    >
      <t-loading
        t-class="loading"
        theme="spinner"
        size="40rpx"
        text="加载中..."
      />
    </t-button>
    <t-button
      v-else
      theme="primary"
      size="large"
      loading
      custom-style="margin-right: 16px;"
    >
      加载中
    </t-button>
    <t-button
      theme="primary"
      icon="search"
      shape="square"
      size="large"
      aria-label="搜索"
    />
  </view>
</template>

<script>
import TButton from 'tdesign-uniapp/button/button.vue';
import TLoading from 'tdesign-uniapp/loading/loading.vue';
import SkylineBehavior from 'tdesign-uniapp/mixins/skyline.js';

export default {
  components: {
    TButton,
    TLoading,
  },
  mixins: [SkylineBehavior],
  data() {
    return {
    };
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

.button-example .loading {
    display: flex;
}
</style>
