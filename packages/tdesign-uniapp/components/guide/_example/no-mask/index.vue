<template>
  <view>
    <view>
      <view class="main-title">
        <view class="title-major">
          用户引导标题
        </view>
        <view class="title-sub">
          按钮用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。
        </view>
      </view>
      <view class="field label-field">
        <t-input
          label="标签文字"
          layout="vertical"
          placeholder="请输入文字"
        />
      </view>
      <view class="field">
        <t-input
          label="标签文字"
          layout="vertical"
          placeholder="请输入文字"
        />
      </view>
      <view class="action">
        <t-button
          block
          theme="light"
          size="large"
        >
          重置
        </t-button>
        <t-button
          block
          theme="primary"
          size="large"
        >
          确定
        </t-button>
      </view>
    </view>

    <t-guide
      :current="current"
      :steps="steps"
      :show-overlay="false"
      @skip="close"
      @finish="close"
    />
  </view>
</template>

<script>
import tGuide from 'tdesign-uniapp/guide/guide.vue';
import tInput from 'tdesign-uniapp/input/input.vue';
import tButton from 'tdesign-uniapp/button/button.vue';
import { getRect } from 'tdesign-uniapp/common/utils';

export default {
  components: {
    tGuide,
    tInput,
    tButton,
  },
  data() {
    return {
      current: -1,
      steps: [],
    };
  },
  mounted() {
    // 处理小程序 attached 生命周期
    setTimeout(() => {
      this.attached();
    }, 33);
  },
  created() {},
  methods: {
    attached() {
      this.current = 0;

      this.steps = [
        {
          element: () => getRect(this, '.main-title', false, true),

          title: '用户引导标题',
          body: '用户引导的说明文案',
          placement: 'center',
        },
        {
          element: () => getRect(this, '.label-field', false, true),

          title: '用户引导标题',
          body: '用户引导的说明文案',
          placement: 'bottom',
          highlightPadding: 0,
        },
        {
          element: () => getRect(this, '.action', false, true),
          title: '用户引导标题',
          body: '用户引导的说明文案',
          placement: 'top-right',
        },
      ];
    },

    close() {
      this.$emit('close');
    },
  },
};
</script>
<style>
.main-title {
    margin: 32rpx;
    display: inline-block;
}

.title-major {
    font-size: 48rpx;
    font-weight: 600;
    line-height: 72rpx;
}

.title-sub {
    font-size: 32rpx;
    font-weight: 400;
    line-height: 48rpx;
    margin-top: 8rpx;
}

.action {
    margin: 64rpx;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 64rpx;
}
</style>
