<template>
  <view>
    <view class="example-segmented">
      <t-segmented
        :options="options"
        :default-value="0"
      />
    </view>

    <view class="example-segmented">
      <t-segmented
        :options="optionsWithIcon"
        :value="valueWithIcon"
        @change="onChangeWithIcon"
      />
    </view>
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
      options: [
        { value: 0, label: '选项' },
        { value: 1, label: '选项' },
        { value: 2, label: '选项' },
      ],
      valueWithIcon: 0,
      optionsWithIcon: [
        { value: 0, label: '选项', icon: 'home' },
        { value: 1, label: '选项', icon: 'home' },
        { value: 2, label: '选项', icon: 'home' },
      ],
    };
  },
  methods: {
    onChangeWithIcon(e) {
      this.valueWithIcon = e.value;
    },
  },
};
</script>
<style>
.example-segmented {
  padding: 16rpx 32rpx;
  background-color: var(--bg-color-demo, #fff);
}
.example-segmented + .example-segmented {
  margin-top: 16rpx;
}
</style>
