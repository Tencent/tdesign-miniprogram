<template>
  <view
    :style="tools._style([customStyle])"
    :class="[
      tClass,
      tools.cls(classPrefix, [['bordered', bordered || isLastChild]])
    ]"
    :hover-class="hover ? classPrefix + '--hover' : ''"
    hover-stay-time="70"
    :aria-role="ariaRole || (arrow ? 'button' : '')"
    :aria-label="ariaLabel"
    @click="onClick"
  >
    <view :class="classPrefix + '__left ' + tClassLeft">
      <block
        v-if="iLeftIcon"
        name="icon"
      >
        <t-icon
          :custom-style="leftIconCustomStyle"
          :t-class="classPrefix + '__left-icon ' + tClassLeftIcon"
          :name="iLeftIcon.name"
          :size="iLeftIcon.size"
          :color="iLeftIcon.color"
          :aria-hidden="true"
          :aria-label="iLeftIcon.ariaLabel"
          :aria-role="iLeftIcon.ariaRole"
          @click="'handleClose' || ''"
        />
      </block>
      <slot name="left-icon" />
      <t-image
        v-if="image"
        shape="round"
        :t-class="classPrefix + '__left-image ' + tClassImage"
        :src="image"
        :custom-style="leftImageCustomStyle"
      />
      <slot name="image" />
    </view>
    <view :class="classPrefix + '__title ' + tClassCenter">
      <view
        :class="[
          classPrefix + '__title-text ',
          tClassTitle
        ]"
        :style="tools._style(titleStyle)"
      >
        <block v-if="title">
          {{ title }}
        </block>
        <slot name="title" />
        <block v-if="required">
          <text
            decode
            :class="classPrefix + '--required'"
          >
            &nbsp;*
          </text>
        </block>
      </view>
      <view
        :class="[
          classPrefix + '__description ',
          tClassDescription
        ]"
      >
        <view
          v-if="description"
          :class="classPrefix + '__description-text'"
        >
          {{ description }}
        </view>
        <slot name="description" />
      </view>
    </view>
    <view
      :class="[
        classPrefix + '__note ',
        tClassNote
      ]"
      :style="tools._style(noteStyle)"
    >
      <text v-if="note">
        {{ note }}
      </text>
      <slot name="note" />
    </view>
    <view
      :class="[
        tools.cls(classPrefix + '__right', [align]),
        tClassRight
      ]"
    >
      <t-icon
        v-if="rightArrow"
        :custom-style="rightArrowCustomStyle"
        :t-class=" classPrefix + '__right-icon ' + tClassRightIcon"
        :name="rightArrow.name || ''"
        :size="rightArrow.size"
        :color="rightArrow.color"
        :aria-hidden="true"
        :aria-label="rightArrow.ariaLabel"
        :aria-role="rightArrow.ariaRole"
        @click="'handleClose' || ''"
      />
      <block v-else>
        <block
          v-if="iRightIcon"
          name="icon"
        >
          <t-icon
            :custom-style="rightIconCustomStyle"
            :t-class=" classPrefix + '__right-icon ' + tClassRightIcon"
            :name="iRightIcon.name"
            :size="iRightIcon.size"
            :color="iRightIcon.color || ''"
            :aria-hidden="true"
            :aria-label="iRightIcon.ariaLabel"
            :aria-role="iRightIcon.ariaRole"
            @click="'handleClose' || ''"
          />
        </block>
        <slot name="right-icon" />
      </block>
    </view>
  </view>
</template>
<script>
import TIcon from '../icon/icon';
import TImage from '../image/image';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { calcIcon, addUnit } from '../common/utils';
import tools from '../common/utils.wxs';

import { ChildrenMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-cell`;
const COMMON_RIGHT_ICON_STYLE = {
  color: 'var(--td-cell-right-icon-color, var(--td-text-color-placeholder, var(--td-font-gray-3, rgba(0, 0, 0, .4))))',
  fontSize: 'var(--td-cell-right-icon-font-size, 24px)',
};

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-title`,
    `${prefix}-class-description`,
    `${prefix}-class-note`,
    `${prefix}-class-hover`,
    `${prefix}-class-image`,
    `${prefix}-class-left`,
    `${prefix}-class-left-icon`,
    `${prefix}-class-center`,
    `${prefix}-class-right`,
    `${prefix}-class-right-icon`,
  ],
  mixins: [ChildrenMixin(RELATION_MAP.Cell)],
  components: {
    TIcon,
    TImage,
  },
  props: {
    ...props,
  },
  emits: [
    'click',
  ],
  data() {
    return {
      prefix,
      classPrefix: name,
      rightArrow: null,
      iRightIcon: null,
      iLeftIcon: null,
      isLastChild: false,
      tools,
    };
  },
  computed: {
    rightArrowCustomStyle() {
      return tools._style([
        {
          color: this.rightArrow.color
            ? this.rightArrow.color
            : COMMON_RIGHT_ICON_STYLE.color,
          fontSize: this.rightArrow.size
            ? addUnit(this.rightArrow.size)
            : COMMON_RIGHT_ICON_STYLE.fontSize,
        },
        this.rightIconStyle || '',
        this.rightArrow.style || '',
      ]);
    },
    rightIconCustomStyle() {
      return tools._style([
        {
          color: this.iRightIcon.color
            ? this.iRightIcon.color
            : COMMON_RIGHT_ICON_STYLE.color,
          fontSize: this.iRightIcon.size
            ? addUnit(this.iRightIcon.size)
            : COMMON_RIGHT_ICON_STYLE.fontSize,
        },
        this.rightIconStyle || '',
        this.iRightIcon.style || '',
      ]);
    },
    leftIconCustomStyle() {
      return tools._style([
        {
          color: this.iLeftIcon.color
            ? this.iLeftIcon.color
            : 'var(--td-cell-left-icon-color, var(--td-brand-color, var(--td-primary-color-7, #0052d9)))',
          fontSize: this.iLeftIcon.size
            ? addUnit(this.iLeftIcon.size)
            : 'var(--td-cell-left-icon-font-size, 24px)',
        },
        this.iLeftIcon.style || '',
      ]);
    },
    leftImageCustomStyle() {
      return tools._style({
        height: 'var(--td-cell-image-height, 48px)',
        width: 'var(--td-cell-image-width, 48px)',
      });
    },
  },
  watch: {
    leftIcon: {
      handler(e) {
        this.setIcon('iLeftIcon', e, '');
      },
      immediate: true,
    },
    rightIcon: {
      handler(e) {
        this.setIcon('iRightIcon', e, '');
      },
      immediate: true,
    },
    arrow: {
      handler(e) {
        this.setIcon('rightArrow', e, 'chevron-right');
      },
      immediate: true,
    },
  },
  methods: {
    setIcon(e, t, s) {
      this[e] = calcIcon(t, s);
    },
    onClick(e) {
      this.$emit('click', e);
      this.jumpLink();
    },
    jumpLink(e = 'url', t = 'jumpType') {
      const s = this[e];
      const i = this[t];
      if (s) {
        uni[i]({
          url: s,
        });
      }
    },
  },
});
</script>
<style scoped src="./cell.css"></style>
