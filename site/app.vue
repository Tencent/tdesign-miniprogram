<template>
  <tdesign-doc
    :nav-data="navData"
    base="components"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TdesignDoc from './pages/doc.vue';
import config from './config';

const navData = config.navs.components.docs;

export default defineComponent({
  components: {
    TdesignDoc,
  },
  data() {
    return {
      navData,
    };
  },
});
</script>

<style lang="less">
@import '../common/style/miniprogram/_variables.less';
@import '../common/style/mobile/_reset.less';
</style>
