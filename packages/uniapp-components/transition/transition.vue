<template>
  <view
    :class="tClass + ' ' + classPrefix + ' ' + transitionClass"
    :style="'' + tools._style([visible ? '' : 'display: none', customStyle])"
    @transitionend="onTransitionEnd"
  >
    <slot />
  </view>
</template>
<script>
import { prefix } from '../common/config';
import { uniComponent } from '../common/src/index';
import tools from '../common/utils.wxs';
import transition from '../mixins/transition';


const name = `${prefix}-transition`;


export default {
  ...uniComponent({
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
  }),
};

</script>
<style scoped src="./transition.css"></style>
