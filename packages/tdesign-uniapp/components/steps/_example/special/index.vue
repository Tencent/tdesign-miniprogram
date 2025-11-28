<template>
  <view>
    <view class="demo-desc">
      垂直自定义步骤条
    </view>

    <view class="block">
      <t-steps
        layout="vertical"
        theme="dot"
        :current="count - 1"
        @change="onCascader"
      >
        <t-step-item
          v-for="(item, index) in count"
          :key="index"
          :title="getText(count - 1, index)"
        >
          <template
            #title-right
          >
            <t-icon
              name="chevron-right"
              size="44rpx"
              color="rgba(0, 0, 0, .4)"
            />
          </template>
        </t-step-item>
      </t-steps>

      <TButton
        :style="`margin-top: 32rpx; display: block`"
        block
        @click="toNext"
      >
        下一步
      </TButton>
    </view>

    <view class="demo-desc">
      纯展示步骤条
    </view>

    <view class="block">
      <t-steps
        layout="vertical"
        readonly
        theme="dot"
        :current="5"
      >
        <t-step-item
          v-for="(item, index) in 4"
          :key="index"
          title="步骤展示"
          content="可自定义此处内容"
        />
      </t-steps>
    </view>
  </view>
</template>

<script>
import tSteps from 'tdesign-uniapp/steps/steps.vue';
import tStepItem from 'tdesign-uniapp/step-item/step-item.vue';
import tIcon from 'tdesign-uniapp/icon/icon.vue';
import TButton from 'tdesign-uniapp/button/button.vue';

export default {
  components: {
    tSteps,
    tStepItem,
    tIcon,
    TButton,
  },
  data() {
    return {
      count: 4,
    };
  },
  created() {},
  methods: {
    getText(value, curr) {
      if (value > curr) return '已完成步骤';
      if (value == curr) return '当前步骤';
      return '未完成步骤';
    },
    toNext() {
      this.count = this.count + 1;
    },
    onCascader(e) {
      const { current } = e;
      this.count = current + 1;
    },
  },
};
</script>
<style>
.block {
    background-color: var(--bg-color-demo);
    padding: 32rpx;
    margin: 32rpx 0 48rpx;
}
</style>
