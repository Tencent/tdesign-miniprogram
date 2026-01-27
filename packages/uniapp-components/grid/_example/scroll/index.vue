<template>
  <view
    class="block"
  >
    <t-grid
      :column="0"
    >
      <t-grid-item
        v-for="(item, index) in gridItemList"
        :key="index"
        t-class-image="image"
        :text="item.text"
        :image="item.img"
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
      gridItemList: [
        {
          text: '标题文字',
          img: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
        },
        {
          text: '标题文字',
          img: 'https://tdesign.gtimg.com/mobile/demos/example2.png',
        },
        {
          text: '标题文字',
          img: 'https://tdesign.gtimg.com/mobile/demos/example3.png',
        },
        {
          text: '最多五个字',
          img: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
        },
        {
          text: '最多五个字',
          img: 'https://tdesign.gtimg.com/mobile/demos/example2.png',
        },
        {
          text: '最多五个字',
          img: 'https://tdesign.gtimg.com/mobile/demos/example3.png',
        },
      ],
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
