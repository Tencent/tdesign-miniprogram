<template>
  <view
    :class="tClass + ' ' + classPrefix + ' ' + transitionClass"
    :style="tools._style([visible ? '' : 'display: none', customStyle])"
    @transitionend="onTransitionEnd"
  >
    <slot />
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import transition from '../mixins/transition';
import { prefix } from '../common/config';
import tools from '../common/utils.wxs';


const name = `${prefix}-transition`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
  ],
  mixins: [transition()],
  props: {
  },
  data() {
    return {
      classPrefix: name,
      tools,
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
@import './transition.css';
</style>
