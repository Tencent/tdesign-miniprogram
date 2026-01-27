<template>
  <view>
    <t-loading
      :theme="skylineRender ? 'spinner' : 'circular'"
      size="52rpx"
      text="加载中..."
      t-class-text="text-l"
      :duration="2000 - duration"
    />
    <view class="slider-container">
      <t-slider
        t-class="slider-class"
        style="flex-grow: 1;"
        :value="duration"
        :min="100"
        :max="1500"
        label
        @change="durationChange"
      />
    </view>
  </view>
</template>

<script>
import TLoading from 'tdesign-uniapp/loading/loading.vue';
import TSlider from 'tdesign-uniapp/slider/slider.vue';
import SkylineBehavior from 'tdesign-uniapp/mixins/skyline.js';


export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TLoading,
    TSlider,
  },
  mixins: [SkylineBehavior],
  data() {
    return {
      duration: 800,
    };
  },
  created() {},
  methods: {
    durationChange(e) {
      this.duration = e.value;
    },
  },
};
</script>
<style>
.slider-container {
    display: flex;
    align-items: center;
    width: 718rpx;
}

:deep(.slider-class) {
    flex-grow: 1;
}
</style>
