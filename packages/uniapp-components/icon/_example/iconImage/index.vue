<template>
  <view class="demo__list">
    <view
      v-for="(item, index) in imageIconList"
      :key="index"
      class="demo__card"
    >
      <t-icon
        :name="item"
        size="48rpx"
        :data-name="item"
        @click="onIconTap($event, { name: item })"
      />
    </view>
  </view>
</template>

<script>
import TIcon from 'tdesign-uniapp/icon/icon.vue';
export default {
  components: {
    TIcon,
  },
  data() {
    return {
      imageIconList: ['https://tdesign.gtimg.com/mobile/demos/icon1.png', 'https://tdesign.gtimg.com/mobile/demos/icon2.png'],
    };
  },
  created() {},
  methods: {
    onIconTap(event, { name, type }) {
      if (type === 'prefix') {
        return;
      }

      uni.showToast({
        title: name,
        icon: 'none',
        duration: 1000,
      });
    },
  },
};
</script>
<style>
.demo__list {
    display: flex;
    flex-wrap: wrap;
    padding: 16rpx 32rpx;
}

.demo__card {
    flex: 0 0 25%;
    display: flex;
    justify-content: center;
    text-align: center;
}
</style>
