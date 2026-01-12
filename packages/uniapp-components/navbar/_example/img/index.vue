<template>
  <view>
    <t-navbar
      t-class-placeholder="t-navbar-placeholder"
      t-class-content="t-navbar-content"
    >
      <template #left>
        <view>
          <t-image
            t-class="custom-image"
            :src="theme === 'dark' ? 'https://tdesign.gtimg.com/mobile/demos/image-dark.png' : 'https://tdesign.gtimg.com/mobile/demos/logo-light.png'"
            aria-label="导航栏图片"
            custom-style="width: 87px;height: 24px;"
          />
        </view>
      </template>
    </t-navbar>
  </view>
</template>

<script>
import tNavbar from 'tdesign-uniapp/navbar/navbar.vue';
import tImage from 'tdesign-uniapp/image/image.vue';
import { themeMixin } from 'tdesign-uniapp/mixins/theme-change';

export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    tNavbar,
    tImage,
  },
  mixins: [themeMixin],
  data() {
    return {};
  },
  computed: {
  },
};
</script>
<style scoped>
/* :deep(.custom-image) {
    height: 24px;
    width: 87px;
} */
</style>
