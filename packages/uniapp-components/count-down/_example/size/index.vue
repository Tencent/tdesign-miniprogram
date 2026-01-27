<template>
  <view>
    <view class="demo-count-down">
      <text class="demo-count-down-desc">
        时分秒
      </text>
      <view class="demo-count-down-content">
        <t-count-down
          size="small"
          :time="time"
        />
      </view>
      <view class="demo-count-down-content">
        <t-count-down :time="time" />
      </view>
      <view class="demo-count-down-content">
        <t-count-down
          size="large"
          :time="time"
        />
      </view>
    </view>

    <view class="demo-count-down">
      <text class="demo-count-down-desc">
        带毫秒
      </text>
      <view class="demo-count-down-content">
        <t-count-down
          size="small"
          format="HH:mm:ss:SSS"
          :time="time"
          millisecond
        />
      </view>
      <view class="demo-count-down-content">
        <t-count-down
          format="HH:mm:ss:SSS"
          :time="time"
          millisecond
        />
      </view>
      <view class="demo-count-down-content">
        <t-count-down
          size="large"
          format="HH:mm:ss:SSS"
          :time="time"
          millisecond
        />
      </view>
    </view>

    <view class="demo-count-down">
      <text class="demo-count-down-desc">
        带方形底
      </text>
      <view class="demo-count-down-content">
        <t-count-down
          size="small"
          format="HH:mm:ss"
          :time="time"
          theme="square"
        />
      </view>
      <view class="demo-count-down-content">
        <t-count-down
          format="HH:mm:ss"
          :time="time"
          theme="square"
        />
      </view>
      <view class="demo-count-down-content">
        <t-count-down
          size="large"
          format="HH:mm:ss"
          :time="time"
          theme="square"
        />
      </view>
    </view>

    <view class="demo-count-down">
      <text class="demo-count-down-desc">
        带圆形底
      </text>
      <view class="demo-count-down-content">
        <t-count-down
          size="small"
          format="HH:mm:ss"
          :time="time"
          theme="round"
        />
      </view>
      <view class="demo-count-down-content">
        <t-count-down
          format="HH:mm:ss"
          :time="time"
          theme="round"
        />
      </view>
      <view class="demo-count-down-content">
        <t-count-down
          size="large"
          format="HH:mm:ss"
          :time="time"
          theme="round"
        />
      </view>
    </view>

    <view class="demo-count-down">
      <text class="demo-count-down-desc">
        带单位
      </text>
      <view class="demo-count-down-content">
        <t-count-down
          size="small"
          format="HH:mm:ss"
          :time="time"
          split-with-unit
          theme="round"
        />
      </view>
      <view class="demo-count-down-content">
        <t-count-down
          format="HH:mm:ss"
          :time="time"
          split-with-unit
          theme="round"
        />
      </view>
      <view class="demo-count-down-content">
        <t-count-down
          size="large"
          format="HH:mm:ss"
          :time="time"
          split-with-unit
          theme="round"
        />
      </view>
    </view>
  </view>
</template>

<script>
import TCountDown from '@tdesign/uniapp/count-down/count-down.vue';
export default {
  components: {
    TCountDown,
  },
  data() {
    return {
      time: 5760000,
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.demo-count-down {
    padding-bottom: 32rpx;
}

.demo-count-down-desc {
    color: var(--td-text-color-secondary);
    font-size: 28rpx;
}

.demo-count-down-content {
    margin: 24rpx 0;
}
</style>
