<template>
  <view>
    <t-navbar
      t-class-placeholder="t-navbar-placeholder"
      t-class-content="t-navbar-content"
      title="标题文字"
    >
      <template
        #capsule
      >
        <view
          class="custom-capsule"
        >
          <t-icon
            size="40rpx"
            aria-role="button"
            aria-label="返回"
            name="chevron-left"
            :t-class="getIconTClass('back')"
            :class="getIconClass('back')"
            @click="onBack"
          />
          <t-icon
            size="40rpx"
            aria-role="button"
            aria-label="首页"
            name="home"
            :t-class="getIconTClass('home')"
            :class="getIconClass('home')"
            @click="onGoHome"
          />
        </view>
      </template>
    </t-navbar>
  </view>
</template>

<script>
import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import tIcon from 'tdesign-uniapp/icon/icon.vue';
import { canUseVirtualHost } from 'tdesign-uniapp/common/version';


export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tNavbar,
    tIcon,
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onBack() {
      uni.navigateBack();
    },
    onGoHome() {
      uni.reLaunch({
        url: '/pages/home/home',
      });
    },
    getIconTClass(name) {
      return canUseVirtualHost() ? this.getIconRealClass(name) : '';
    },
    getIconClass(name) {
      return !canUseVirtualHost() ? this.getIconRealClass(name) : '';
    },
    getIconRealClass(name) {
      return `custom-capsule__icon ${name}`;
    },
  },
};
</script>
<style scoped>
.custom-capsule {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

:deep(.custom-capsule__icon) {
    flex: 1;
    position: relative;
}

:deep(.custom-capsule__icon.home:before) {
    content: '';
    display: block;
    position: absolute;
    left: -1px;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 18px;
    background: #e7e7e7;
}
</style>
