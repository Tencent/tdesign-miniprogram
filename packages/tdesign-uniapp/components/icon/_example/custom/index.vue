<template>
  <view class="demo__list">
    <view
      v-for="(item, index) in prefixIcons"
      :key="index"
      class="demo__card"
    >
      <t-icon
        :name="item"
        size="48rpx"
        prefix="icon"
        :data-name="item"
        data-type="prefix"
        @click="onIconTap($event, { name: item, type: 'prefix' })"
      />

      <view class="demo__card-name">
        {{ item }}
      </view>
    </view>
  </view>
</template>

<script>
import tIcon from 'tdesign-uniapp/icon/icon.vue';
export default {
  components: {
    tIcon,
  },
  data() {
    return {
      prefixIcons: ['a-0', 'a-1h', 'a-2h', 'a-3h'],
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
}

.demo__card-name {
    font-size: 24rpx;
    color: #999;
}

/* 自定义图标 */
@font-face {
    font-family: 'icon'; /* Project id 3144196 */
    src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPUAAsAAAAACGAAAAOFAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDGgqEPIQBATYCJAMUCwwABCAFhDcHQhtVBxHVmy/JfhzGjunMd9u7ZdNoJGL95+B5ckPfvzsIgZjoVHHRKe1qNlEdfUoAPFpzlgKhvLdV7dpf4MyYhRbmw1+ObxM9+wDSmJP2okWn0XkEe1sWSOAJJR4mYA3TSx7kD48ggEsZ9VFNm7ftSsjYQVPHk4DBlwpUtTJ21IhBONyBmagVHAR76U6DbMQCtUo9BzZk75cfVIgDCkvjn9NxeLOhPPTb+R31wtqF6PckEgQ4WwEWoIGih7mk93SgK7pIF6FxhwKGPDTZIOB3rK312yWKZ//hgaDQGBAbvzoIgIYwY8BvFxEI+O0JFPgdCDT4HVVfpN0CwAWWfQ68w1yWUQUvFRUUEJMZ0zBmzKILZ26suXbqHGrh2ZNXV18/fV68hafWnInRi06vPskQ3VV6eKqH9vB2nPDWbNu2C1xZtH31VhgiPfbE7kmo2ba78+R9oy6cueOtuXVuHwt3+kNEdfVYNWfEmhMii067q3cK6kYqetu26F2w6GjUtlO79uXprVE7b7r38YsHl62wxmwPBrvdDvyl7A2Os2v65berseOS461n/fL6PbPim4dlpFSGJIdmpmSGMm3NvmaVrZtVNPePPcwtGCU9i0KcX3dKyKGCTUFnY9aHrCNjTeN5PzcGxQd6498Eh4WH5zXPjbbvdIxJHLz4dnx4QLNlC4Y/nd98/MZvwLSjqfOTGoRGhEX8dfOa50XbtyfEJHVbM+JAnW7F8SnLQr7+lxVUpFRN6PF4ZnpY62/ZybnNs8Ki0qIimiWf7HroYciPBM85E3+uGqdmAKjPamomzPiEAAJN2zkJA0Lr/nY8A8DHwLJq4DAszzgoYIrfbuy7UNRYGTKaoc7Ih2BddD9goQJcXKDWj0Tw8RhT5OIkCKahZFAEEAuNIYUyXAYsPHJgYyiHSyHV+z0iGYhGTCCQwxQAwWEXFCEcgsbhAmW4G7CI4QFsHF7AxXn+ZQ85QYZDxpFxgekHag6eQj1npVcULztmKY8ST8xFwTh0dVvPXdBjXrOmvEXPTEA5ODhvvQ+tDRBz0DhzLZnjvmlo6Cn1HNzqkHFkXIDpB6g5eEos3Fx+RfGyYx5QZ74nQl3hclgPdNS0E9TF4Ce7XrS+vEUPMwFkq4MDzlf70AbpAMThaRpnrpEbknFPg8RoqaG+1uTekpz14a+2RIkWI5bYbAdV7S6ydTKm+/ggVysAAAA=')
        format('woff2');
}

.icon {
    font-family: 'icon' !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-a-0:before {
    content: '\e64d';
}

.icon-a-1h:before {
    content: '\e64e';
}

.icon-a-2h:before {
    content: '\e64f';
}

.icon-a-3h:before {
    content: '\e650';
}
</style>
