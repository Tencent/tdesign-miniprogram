<template>
  <scroll-view
    :class="tClass"
    type="list"
    scroll-y
    enhanced
    :show-scrollbar="false"
    :scroll-into-view="scrollIntoView"
  >
    <slot />
  </scroll-view>
</template>

<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
// import { canUseProxyScrollView } from '../common/version';


const name = `${prefix}-scroll-view`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [`${prefix}-class`],
  props: {
    scrollIntoView: {
      type: [String, Number, null],
      default: null,
    },
  },
  data() {
    return {

    };
  },
  watch: {

  },
  mounted() {

  },
  methods: {

  },
});
</script>
<style scoped>
</style>
