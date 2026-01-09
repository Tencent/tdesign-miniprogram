<template>
  <view :class="layout === 'vertical' ? classPrefix + '--vertical-center' : ''">
    <view
      :class="[
        classPrefix,
        tClass,
        classPrefix + '--' + layout + ' ' + classPrefix + '--' + align + ' ' + (dashed ? classPrefix + '--dashed' : '')
      ]"
      :style="tools._style([dividerStyle, customStyle])"
    >
      <view
        :class="[
          tClassContent,
          classPrefix + '__content'
        ]"
      >
        <view v-if="content">
          {{ content }}
        </view>
        <slot
          v-else
          name="content"
        />
      </view>
    </view>
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import tools from '../common/utils.wxs';


const name = `${prefix}-divider`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-content`,
  ],
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      tools,
      dividerStyle: '',
    };
  },
  watch: {
    lineColor: {
      handler() {
        this.setStyle();
      },
      immediateU: true,
    },
  },
  methods: {
    setStyle() {
      const {
        lineColor,
      } = this;
      const dividerStyle = `${lineColor ? `border-color: ${lineColor};` : ''}`;
      this.dividerStyle = dividerStyle;
    },
  },
});
</script>
<style scoped>
@import './divider.css';
</style>
