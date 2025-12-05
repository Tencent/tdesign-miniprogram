<template>
  <view>
    <view class="swiper-box">
      <t-swiper
        :current="1"
        :autoplay="autoplay"
        :duration="duration"
        :interval="interval"
        :navigation="navigation"
        direction="vertical"
        :pagination-position="paginationPosition"
        :list="swiperList"
      />
    </view>

    <view class="swiper-box swiper-box-option">
      <view class="cell">
        <view class="label">
          自动播放
        </view>
        <view class="option">
          <t-switch
            t-class="swiper-switch"
            :value="autoplay"
            @change="onAutoplayChange"
          />
          <view class="option-desc">
            {{ autoplay ? '开' : '关' }}
          </view>
        </view>
      </view>
      <view class="cell">
        <view class="label">
          自动播放间隔时间(单位毫秒)
        </view>
        <view class="option">
          <t-slider
            t-class="swiper-slider"
            t-class-bar="external-class-bar"
            :value="interval"
            :min="1000"
            :max="5000"
            :label="true"
            :step="500"
            @change="onIntervalChange"
          />
        </view>
      </view>
      <view class="cell">
        <view class="label">
          动画持续时间(单位毫秒)
        </view>
        <view class="option">
          <t-slider
            t-class="swiper-slider"
            t-class-bar="external-class-bar"
            :value="duration"
            :min="200"
            :max="2000"
            :label="true"
            :step="100"
            @change="onDurationChange"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import tSwiper from 'tdesign-uniapp/swiper/swiper.vue';
import tSwitch from 'tdesign-uniapp/switch/switch.vue';
import tSlider from 'tdesign-uniapp/slider/slider.vue';
const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
  {
    value: `${imageCdn}/swiper1.png`,
    ariaLabel: '图片1',
  },
  {
    value: `${imageCdn}/swiper2.png`,
    ariaLabel: '图片2',
  },
  {
    value: `${imageCdn}/swiper1.png`,
    ariaLabel: '图片1',
  },
  {
    value: `${imageCdn}/swiper2.png`,
    ariaLabel: '图片2',
  },
];
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tSwiper,
    tSwitch,
    tSlider,
  },
  data() {
    return {
      current: 1,
      autoplay: true,
      duration: 500,
      interval: 5000,
      swiperList,
      navigation: {
        type: 'dots-bar',
      },
      paginationPosition: 'right',
    };
  },
  created() {},
  methods: {
    onAutoplayChange(e) {
      this.autoplay = e.value;
    },
    onIntervalChange(e) {
      this.interval = e.value;
    },
    onDurationChange(e) {
      this.duration = e.value;
    },
  },
};
</script>
<style lang="less">
.swiper-box {
    margin: 0 32rpx 32rpx;
    border-radius: 16rpx;
    overflow: hidden;
    transform: translateY(0);
}

.swiper-box .img {
    width: 100%;
    height: 100%;
}

:deep(.swiper-switch) {
  margin: 22rpx 0;
  .t-switch__label {
    display: none;
  }
}

.cell {
    padding: 10rpx 0;
    font-size: 28rpx;
    color: #999;
}
.cell.row {
    display: flex;
    flex-direction: row;
}

.cell .label {
    color: #999;
    margin-right: 20rpx;
}

.cell .option-desc {
    width: 68rpx;
}

.cell :deep(.swiper-slider) {
    margin: 32rpx 0;
}

.swiper-box-vertical .item {
    line-height: 400rpx;
}

.swiper-box-option {
    overflow: visible;
    border-radius: 0;
}

:deep(.external-class-bar) {
    margin: 0 !important;
}
</style>
