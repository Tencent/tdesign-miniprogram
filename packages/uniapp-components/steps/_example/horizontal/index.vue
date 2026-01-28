<template>
  <view>
    <view class="demo-desc">
      水平带序号步骤条
    </view>

    <view class="block">
      <t-steps
        :current="first"
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

    <view class="demo-desc">
      水平带图标步骤条
    </view>

    <view class="block">
      <t-steps
        :current="second"
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

    <view class="demo-desc">
      水平简略步骤条
    </view>

    <view class="block">
      <t-steps
        theme="dot"
        :current="third"
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
import TSteps from '@tdesign/uniapp/steps/steps.vue';
import TStepItem from '@tdesign/uniapp/step-item/step-item.vue';


export default {
  components: {
    TSteps,
    TStepItem,
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
      if (value == curr) return '当前步骤';
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
