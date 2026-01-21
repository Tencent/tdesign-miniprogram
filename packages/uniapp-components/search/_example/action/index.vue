<template>
  <view class="example-search">
    <t-search
      :value="value"
      center
      placeholder="搜索预设文案"
      :action="actionText"
      @blur="blurHandle"
      @focus="focusHandle"
      @action-click="actionHandle"
      @change="changeHandle"
    />
  </view>
</template>

<script>
import tSearch from 'tdesign-uniapp/search/search.vue';
export default {
  components: {
    tSearch,
  },
  data() {
    return {
      value: '',
      actionText: '',
    };
  },
  created() {},
  methods: {
    changeHandle(e) {
      const { value } = e;
      this.value = value;
    },
    focusHandle() {
      this.actionText = '取消';
    },
    blurHandle() {
      this.actionText = '';
    },
    actionHandle() {
      this.actionText = '';
      this.value = '';
    },
  },
};
</script>
<style>
.example-search {
    background-color: var(--bg-color-demo);
    padding: 16rpx 32rpx;
}
</style>
