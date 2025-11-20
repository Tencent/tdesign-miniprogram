<template>
  <view class="demo__list">
    <view
      v-for="(item, index) in icons"
      :key="index"
      class="demo__card"
    >
      <t-icon
        :name="item"
        size="48rpx"
        :data-name="item"
        @click="onIconTap($event, { name: item })"
      />

      <view class="demo__card-name">
        {{ item }}
      </view>
    </view>
  </view>
</template>

<script>
import tIcon from 'tdesign-uniapp/icon/icon.vue';
import icons from '../data';

export default {
  components: {
    tIcon,
  },
  data() {
    return {
      icons,
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
    text-align: center;
    margin-bottom: 30rpx;
    color: var(--td-text-color-primary);
}

.demo__card-name {
    font-size: 24rpx;
    color: #999;
}
</style>
