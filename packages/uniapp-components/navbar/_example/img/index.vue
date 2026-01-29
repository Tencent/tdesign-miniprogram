<template>
  <view>
    <t-navbar
      :fixed="false"
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
import TNavbar from '@tdesign/uniapp/navbar/navbar.vue';
import TImage from '@tdesign/uniapp/image/image.vue';
import { themeMixin } from '@tdesign/uniapp/mixins/theme-change';

export default {
  options: {
    styleIsolation: 'shared',
  },
  components: {
    TNavbar,
    TImage,
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
