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
      @skip="close"
      @finish="close"
    >
      <template
        #body-1
      >
        <view
          class="slot-body"
        >
          <p>用户引导的说明文案 1</p>
          <t-image
            class="guide-demo-image"
            src="https://tdesign.gtimg.com/demo/demo-image-1.png"
            mode="scaleToFill"
            width="100%"
          />
        </view>
      </template>
    </t-guide>
  </view>
</template>

<script>
import TGuide from '@tdesign/uniapp/guide/guide.vue';
import TInput from '@tdesign/uniapp/input/input.vue';
import TButton from '@tdesign/uniapp/button/button.vue';
import TImage from '@tdesign/uniapp/image/image.vue';
import { getRect } from '@tdesign/uniapp/common/utils';

export default {
  components: {
    TGuide,
    TInput,
    TButton,
    TImage,
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
          placement: 'bottom',
          mode: 'dialog',
        },
        {
          element: () => getRect(this, '.action', false, true),

          title: '用户引导标题',
          body: '用户引导的说明文案',
          placement: 'bottom-right',
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
    margin: 63rpx;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 63rpx;
}

.slot-body {
    margin-top: 8rpx;
    text-align: center;
    color: var(--td-text-color-secondary);
    font-size: 32rpx;
    font-weight: 400;
    line-height: 48rpx;
}

.slot-body .guide-demo-image {
    margin-top: 48rpx;
}
</style>
