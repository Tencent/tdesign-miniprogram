<template>
  <view>
    <t-grid
      t-class="block"
      :column="5"
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
        text="标题文字"
        :image="img2"
      />
      <t-grid-item
        t-class-image="image"
        text="最多四字"
        :image="img1"
      />
    </t-grid>

    <t-grid t-class="block">
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
    </t-grid>

    <t-grid
      t-class="block"
      :column="3"
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
        text="最多六个文字"
        :image="img3"
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
:deep(.block) {
    display: block;
    margin-bottom: 32rpx;
}

:deep(.block .image) {
    position: inherit;
}

:deep(.block .image::before) {
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
