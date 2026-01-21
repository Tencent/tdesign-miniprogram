<template>
  <view>
    <view
      v-if="showControls"
      :class="classPrefix + '__btn ' + ' ' + tClass"
      :style="tools._style([customStyle])"
    >
      <view
        :class="classPrefix + '__btn--prev'"
        data-dir="prev"
        aria-role="button"
        aria-label="上一张"
        @click="nav($event, { dir: 'prev'})"
      />
      <view
        :class="classPrefix + '__btn--next'"
        data-dir="next"
        aria-role="button"
        aria-label="下一张"
        @click="nav($event, { dir: 'next'})"
      />
    </view>
    <view
      v-if="total >= minShowNum"
      :style="tools._style([customStyle])"
      :class="
        tClass +
          ' ' + classPrefix +
          ' ' + classPrefix + '--' + direction +
          ' ' + classPrefix + '__' + type +
          ' ' + classPrefix + '--' + paginationPosition
      "
    >
      <block v-if="type === 'dots' || type === 'dots-bar'">
        <view
          v-for="(item, idx) in total"
          :key="idx"
          :class="tools.cls(classPrefix + '__' + type + '-item', [['active', current === idx], direction])"
        />
      </block>
      <block v-if="type === 'fraction'">
        {{ current + 1 }}/{{ total }}
      </block>
    </view>
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import tools from '../common/utils.wxs';
import { ChildrenMixin, RELATION_MAP } from '../common/relation';

const name = `${prefix}-swiper-nav`;

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [`${prefix}-class`],
  mixins: [ChildrenMixin(RELATION_MAP.SwiperNav)],
  components: { },
  props: {
    ...props,
  },
  emits: [
    'nav-btn-change',
  ],
  data() {
    return {
      prefix,
      classPrefix: name,
      tools,
    };
  },

  methods: {
    nav(e, dataset) {
      const { dir } = dataset;
      const source = 'nav';
      this.$emit('nav-btn-change', { dir, source });
      const parent = this[RELATION_MAP.SwiperNav];
      if (parent) {
        parent.doNavBtnChange(dir, source);
      }
    },
  },
});
</script>
<style scoped>
@import './swiper-nav.css';
</style>
