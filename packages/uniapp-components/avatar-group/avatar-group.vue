<template>
  <view
    :style="tools._style([customStyle])"
    :class="className"
  >
    <slot />
    <view :class="classPrefix + '__collapse--slot'">
      <slot name="collapse-avatar" />
    </view>
    <view
      v-if="max && max < length"
      :class="classPrefix + '__collapse--default'"
      @click="onCollapsedItemClick"
    >
      <t-avatar
        :t-class-image="prefix + '-avatar--border ' + prefix + '-avatar--border-' + size + ' ' + tClassImage"
        :t-class-content="tClassContent"
        :size="size"
        :shape="shape"
        :icon="collapseAvatar ? '' : 'user-add'"
        aria-role="none"
      >
        {{ collapseAvatar }}
      </t-avatar>
    </view>
  </view>
</template>
<script>
import tAvatar from '../avatar/avatar';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import avatarGroupProps from './props';

import tools from '../common/utils.wxs';
import { ParentMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-avatar-group`;
const AVATAR_GROUP_INIT_Z_INDEX = 50;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-content`,
    `${prefix}-class-image`,
  ],
  mixins: [ParentMixin(RELATION_MAP.Avatar)],
  components: {
    tAvatar,
  },
  props: {
    ...avatarGroupProps,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      hasChild: true,
      length: 0,
      className: '',
      tools,
    };
  },
  watch: {
    cascading: 'setClass',
    size: 'setClass',
  },
  mounted() {
    this.setClass();
    this.length = this.children?.length || 0;
    if (this.length) {
      this.handleMax();
    }
  },
  methods: {
    setClass() {
      const { cascading, size } = this;
      const direction = cascading.split('-')[0];
      const classList = [
        name,
        this.tClass,
        `${name}-offset-${direction}`,
        `${name}-offset-${direction}-${size.indexOf('px') > -1 ? 'medium' : size || 'medium'}`,
      ];

      this.className = classList.join(' ');
    },

    handleMax() {
      const { max, cascading } = this;
      const len = this.children.length;
      if (!max || max > len) return;

      const restAvatars = this.children.splice(max, len - max);

      const isLeft = cascading === 'left-up';
      this.children.forEach((child, index) => {
        child.setStyle({
          zIndex: isLeft && `calc(var(--td-avatar-group-init-z-index, ${AVATAR_GROUP_INIT_Z_INDEX}) - ${index})`,
          padding: 'var(--td-avatar-group-line-spacing, 2px) 0',
        });
      });

      restAvatars.forEach((child) => {
        child.hide();
      });
    },
    onCollapsedItemClick(e) {
      this.$emit('collapsed-item-click', e);
    },
  },
});
</script>
<style scoped>
@import './avatar-group.css';
</style>
