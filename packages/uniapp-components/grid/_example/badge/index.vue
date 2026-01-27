<template>
  <view>
    <t-grid class="t-grid badge">
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img1"
        :badge-props="{ dot: true }"
      />
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img2"
        :badge-props=" { count: 8 } "
      />
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img3"
        :badge-props="{ count: 13 } "
      />
      <t-grid-item
        t-class-image="image"
        text="标题文字"
        :image="img3"
        :badge-props="{ count: 'NEW' } "
      />
    </t-grid>
  </view>
</template>

<script>
import TGrid from 'tdesign-uniapp/grid/grid.vue';
import TGridItem from 'tdesign-uniapp/grid-item/grid-item.vue';
export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TGrid,
    TGridItem,
  },
  data() {
    return {
      img1: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
      img2: 'https://tdesign.gtimg.com/mobile/demos/example2.png',
      img3: 'https://tdesign.gtimg.com/mobile/demos/example3.png',
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.external-class-content {
    padding: 32rpx 0 !important;
}

.text {
    font-size: 24rpx !important;
    line-height: 40rpx !important;
    padding-top: 20rpx !important;
}
:deep(.image) {
    width: 64rpx !important;
    height: 64rpx !important;
}
.image-icon {
    width: 64rpx;
    height: 64rpx;
}

.badge-circle {
    display: flex;
    justify-content: center;
    background-color: #e34d59;
    border-radius: 15rpx;
    width: 36rpx;
    height: 32rpx;
    align-items: center;
    position: absolute;
    top: -15rpx;
    left: 46rpx;
}

.circle {
    width: 4rpx;
    height: 4rpx;
    border-radius: 2rpx;
    background-color: white;
    margin-left: 4rpx;
}

.badge-circle-container {
    margin-left: -4rpx;
    display: flex;
}

.badge :deep(.image) {
    position: inherit;
}

.badge :deep(.image)::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    border-radius: 24rpx;
    border: 2rpx solid var(--td-gray-color-4);
    transform-origin: 0 0;
    transform: scale(0.5);
}
</style>
