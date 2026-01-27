<template>
  <view>
    <view class="block">
      <t-grid
        :column="4"
        theme="card"
      >
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          :image="img1"
        />
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          :image="img2"
        />
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          :image="img3"
        />
        <t-grid-item
          t-class-image="image"
          text="最多五个字"
          :image="img1"
        />
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          :image="img1"
        />
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          :image="img3"
        />
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          :image="img2"
        />
        <t-grid-item
          t-class-image="image"
          text="最多五个字"
          :image="img2"
        />
      </t-grid>
    </view>

    <view class="block">
      <t-grid
        :column="2"
        theme="card"
        align="left"
      >
        <t-grid-item
          t-class-image="image"
          text="标题文字"
          description="描述文字"
          layout="horizontal"
          :image="img1"
        />
        <t-grid-item
          t-class-image="image"
          text="标题最多六字"
          description="描述文字"
          layout="horizontal"
          :image="img2"
        />
      </t-grid>
    </view>
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
      border: '',
    };
  },
  created() {},
  methods: {},
};
</script>
<style>
.block {
    display: block;
    margin-bottom: 32rpx;
}

.block :deep(.image) {
    position: inherit;
}

.block :deep(.image)::before {
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
