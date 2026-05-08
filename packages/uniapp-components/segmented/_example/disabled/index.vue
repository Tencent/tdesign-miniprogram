<template>
  <view class="example-segmented">
    <t-segmented
      :options="optionsWithDisabled"
      :value="valueWithDisabled"
      @change="onChangeWithDisabled"
    />
  </view>
</template>

<script>
import TSegmented from '@tdesign/uniapp/segmented/segmented.vue';

export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TSegmented,
  },
  data() {
    return {
      valueWithDisabled: 0,
      optionsWithDisabled: [
        { value: 0, label: '选中' },
        { value: 1, label: '默认' },
        { value: 2, label: '禁用', disabled: true },
      ],
    };
  },
  methods: {
    onChangeWithDisabled(e) {
      this.valueWithDisabled = e.value;
    },
  },
};
</script>
<style>
.example-segmented {
  padding: 16rpx 32rpx;
  background-color: var(--bg-color-demo, #fff);
}
</style>
