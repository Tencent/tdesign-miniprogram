<template>
  <view>
    <view
      v-if="title"
      :class="[
        classPrefix + '__title ',
        tClassTitle
      ]"
    >
      {{ title }}
    </view>
    <view
      :style="'' + tools._style([customStyle])"
      :class="[
        tools.cls(classPrefix, [['bordered', bordered], theme]),
        tClass
      ]"
    >
      <slot />
    </view>
  </view>
</template>
<script>
import { prefix } from '../common/config';
import { ParentMixin, RELATION_MAP } from '../common/relation';
import { uniComponent } from '../common/src/index';

import tools from '../common/utils.wxs';

import props from './props';


const name = `${prefix}-cell-group`;


export default {
  ...uniComponent({
    name,
    options: {
      styleIsolation: 'shared',
    },
    externalClasses: [`${prefix}-class`, `${prefix}-class-title`],
    mixins: [ParentMixin(RELATION_MAP.Cell)],
    props: {
      ...props,
    },
    data() {
      return {
        prefix,
        classPrefix: name,
        tools,
      };
    },
    methods: {
      innerAfterLinked() {
        this.updateLastChid();
      },
      innerAfterUnLinked() {
        this.updateLastChid();
      },
      updateLastChid() {
        const { children } = this;
        children.forEach((child, index) => {
          child.isLastChild = index === children.length - 1;
        });
      },
    },
  }),
};
</script>
<style scoped src="./cell-group.css"></style>
