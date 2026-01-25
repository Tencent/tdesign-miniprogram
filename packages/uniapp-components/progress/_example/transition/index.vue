<template>
  <view>
    <t-progress
      :percentage="percentage"
      :aria-label="percentage + '%'"
    />

    <view class="button-group">
      <t-button
        theme="primary"
        size="small"
        @click="clickReduce"
      >
        减少
      </t-button>
      <view class="space" />
      <t-button
        theme="primary"
        size="small"
        @click="clickAdd"
      >
        增加
      </t-button>
    </view>
  </view>
</template>

<script>
import TProgress from 'tdesign-uniapp/progress/progress.vue';
import TButton from 'tdesign-uniapp/button/button.vue';
export default {
  components: {
    TProgress,
    TButton,
  },
  data() {
    return {
      percentage: 88,
    };
  },
  created() {},
  methods: {
    clickAdd() {
      this.percentage = Math.min(this.percentage + 10, 100);
    },
    clickReduce() {
      this.percentage = Math.max(0, this.percentage - 10);
    },
  },
};
</script>
<style>
.button-group {
    display: flex;
    justify-content: center;
}

.button-group .space {
    width: 32rpx;
}
</style>
