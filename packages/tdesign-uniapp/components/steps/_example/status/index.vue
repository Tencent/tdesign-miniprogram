<template>
  <view>
    <view class="block">
      <t-steps
        :current="first"
        current-status="error"
        @change="onFirstChange"
      >
        <t-step-item
          v-for="(item, index) in 4"
          :key="index"
          :title="getText(first, index)"
          content="辅助信息"
        />
      </t-steps>
    </view>

    <view class="block">
      <t-steps
        :current="second"
        current-status="error"
        @change="onSecondChange"
      >
        <t-step-item
          v-for="(item, index) in 4"
          :key="index"
          :title="getText(second, index)"
          content="辅助信息"
          icon="cart"
        />
      </t-steps>
    </view>

    <view class="block">
      <t-steps
        theme="dot"
        :current="third"
        current-status="error"
        @change="onThirdChange"
      >
        <t-step-item
          v-for="(item, index) in 4"
          :key="index"
          :title="getText(third, index)"
          content="辅助信息"
        />
      </t-steps>
    </view>
  </view>
</template>

<script>
import tSteps from 'tdesign-uniapp/steps/steps.vue';
import tStepItem from 'tdesign-uniapp/step-item/step-item.vue';


export default {
  components: {
    tSteps,
    tStepItem,
  },
  data() {
    return {
      first: 1,
      second: 1,
      third: 1,
    };
  },
  created() {},
  methods: {
    getText(value, curr) {
      if (value > curr) return '已完成';
      if (value == curr) return '错误步骤';
      return '未完成';
    },
    onFirstChange(e) {
      this.first = e.current;
    },
    onSecondChange(e) {
      this.second = e.current;
    },
    onThirdChange(e) {
      this.third = e.current;
    },
  },
};
</script>
<style>
.block {
    background-color: var(--bg-color-demo);
    padding: 32rpx 0;
    margin: 32rpx 0 48rpx;
}
</style>
