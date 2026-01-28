<template>
  <view
    :style="tools._style([customStyle])"
    :class="tools.cls(classPrefix, [layout, ['readonly', readonly]]) + ' ' + tClass"
    :aria-role="ariaRole || readonly ? 'option' : 'button'"
    :aria-label="ariaLabel || getAriaLabel(index, title, content)"
    :aria-current="curStatus == 'process' ? 'step' : ''"
    @click="onTap"
  >
    <view
      :class="tools.cls(classPrefix + '__anchor', [layout])"
      :aria-hidden="true"
    >
      <view
        v-if="isDot"
        :class="tools.cls(classPrefix + '__dot', [curStatus])"
      />
      <view
        v-else-if="icon"
        :class="tools.cls(classPrefix + '__icon', [curStatus])"
      >
        <slot
          v-if="icon == 'slot'"
          name="icon"
        />
        <t-icon
          v-else
          :name="icon"
          size="44rpx"
        />
      </view>
      <view
        v-else
        :class="tools.cls(classPrefix + '__circle', [curStatus])"
      >
        <t-icon
          v-if="curStatus == 'finish'"
          name="check"
        />
        <t-icon
          v-else-if="curStatus == 'error'"
          name="close"
        />
        <block v-else>
          {{ index + 1 }}
        </block>
      </view>
    </view>
    <view
      :class="tools.cls(classPrefix + '__content', [layout, ['last', isLastChild]]) + ' ' + tClassContent"
      :aria-hidden="true"
    >
      <slot />
      <view :class="tools.cls(classPrefix + '__title', [curStatus, layout]) + ' ' + tClassContent">
        <block v-if="title">
          {{ title }}
        </block>
        <slot name="title" />
        <slot
          v-if="layout === 'vertical'"
          name="title-right"
        />
      </view>
      <view :class="tools.cls(classPrefix + '__description', [layout]) + ' ' + tClassDescription">
        <block v-if="content">
          {{ content }}
        </block>
        <slot name="content" />
      </view>
      <view :class="tools.cls(classPrefix + '__extra', [layout]) + ' ' + tClassExtra">
        <slot name="extra" />
      </view>
    </view>
    <view
      v-if="!isLastChild"
      :class="tools.cls(classPrefix + '__line', [curStatus, layout, theme, sequence])"
      :aria-hidden="true"
    />
  </view>
</template>
<script>
import TIcon from '../icon/icon';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import tools from '../common/utils.wxs';
import { getAriaLabel } from './computed.js';
import { ChildrenMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-steps-item`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
    virtualHost: true,
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-content`,
    `${prefix}-class-title`,
    `${prefix}-class-description`,
    `${prefix}-class-extra`,
  ],
  mixins: [ChildrenMixin(RELATION_MAP.StepItem, {
    indexKey: 'tIndex',
  })],
  props: {
    ...props,
  },
  components: {
    TIcon,
  },
  data() {
    return {
      classPrefix: name,
      prefix,
      index: 0,
      isDot: false,
      curStatus: '',
      layout: 'vertical',
      isLastChild: false,
      sequence: 'positive',
      tools,

      readonly: false,
      theme: '',
    };
  },
  watch: {
    status(value) {
      const { curStatus } = this;

      if (curStatus === '' || value === curStatus) return;

      this.curStatus = value;
    },
  },
  mounted() {

  },
  methods: {
    getAriaLabel,
    updateStatus({ current, currentStatus, index, theme, layout, items, sequence }) {
      let curStatus = this.status;

      if (curStatus === 'default') {
        if (index < Number(current)) {
          curStatus = 'finish';
        } else if (index === Number(current)) {
          curStatus = currentStatus;
        }
      }

      this.curStatus = curStatus;
      this.index = index;
      this.layout = layout;
      this.theme = theme;
      this.sequence = sequence;
      this.isDot = theme === 'dot';
      this.isLastChild = index === (sequence === 'positive' ? items.length - 1 : 0);
    },

    onTap() {
      this[RELATION_MAP.StepItem].handleClick(this.index);
    },
  },
});

</script>
<style scoped>
@import './step-item.css';
</style>
