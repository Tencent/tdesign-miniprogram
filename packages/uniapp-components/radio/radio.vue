<template>
  <view
    :id="tId"
    :style="tools._style([customStyle])"
    :class="tools.cls(classPrefix, [innerPlacement, ['block', block], ['disabled', _disabled]]) + ' ' + tClass"
    :disabled="_disabled"
    aria-role="radio"
    :aria-checked="dataChecked"
    :aria-label="label + content"
    :aria-disabled="_disabled"
    @click.stop="handleTap"
  >
    <view :class="tools.cls(classPrefix + '__icon', [innerPlacement, ['checked', dataChecked], ['disabled', _disabled]]) + ' ' + tClassIcon">
      <slot
        v-if="slotIcon"
        name="icon"
      />
      <view
        v-else-if="customIcon"
        :class="classPrefix + '__image'"
      >
        <image
          :src="dataChecked ? iconVal[0] : iconVal[1]"
          :class="classPrefix + '-icon__image'"
          webp
        />
      </view>
      <block v-else>
        <t-icon
          v-if="dataChecked && (icon == 'circle' || icon == 'line')"
          :name="icon == 'circle' ? 'check-circle-filled' : 'check'"
          :class="classPrefix + '__icon-wrap'"
        />
        <view
          v-if="dataChecked && icon == 'dot'"
          :class="tools.cls(classPrefix + '__icon-' + icon, [['disabled', _disabled]])"
        />
        <view
          v-if="!dataChecked && (icon == 'circle' || icon == 'dot')"
          :class="tools.cls(classPrefix + '__icon-circle', [['disabled', _disabled]])"
        />
        <view
          v-if="!dataChecked && icon == 'line'"
          class="placeholder"
        />
      </block>
    </view>
    <view
      :class="classPrefix + '__content'"
      data-target="text"
      @click.stop="handleTap"
    >
      <view
        :class="
          tools.cls(classPrefix + '__title', [
            ['disabled', _disabled],
            ['checked', dataChecked]
          ]) +
            ' ' +
            tClassLabel
        "
        :style="'-webkit-line-clamp:' + maxLabelRow"
      >
        <block v-if="label">
          {{ label }}
        </block>
        <slot />
        <slot name="label" />
      </view>
      <view
        :class="
          tools.cls(classPrefix + '__description', [
            ['disabled', _disabled],
            ['checked', dataChecked]
          ]) +
            ' ' +
            tClassContent
        "
        :style="'-webkit-line-clamp:' + maxContentRow"
      >
        <block v-if="content">
          {{ content }}
        </block>
        <slot name="content" />
      </view>
    </view>
    <view
      v-if="!borderless"
      :class="tools.cls(classPrefix + '__border', [innerPlacement]) + ' ' + tClassBorder"
    />
  </view>
</template>
<script>
import TIcon from '../icon/icon';
import { prefix, ISOLATED_RELATION_KEY } from '../common/config';
import { coalesce } from '../common/utils';
import { uniComponent } from '../common/src/index';
import props from './props';
import tools from '../common/utils.wxs';
import { ChildrenMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-radio`;

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  controlledProps: [
    {
      key: 'checked',
      event: 'change',
    },
  ],
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-label`,
    `${prefix}-class-icon`,
    `${prefix}-class-content`,
    `${prefix}-class-border`,
  ],
  mixins: [ChildrenMixin(RELATION_MAP.Radio)],
  components: {
    TIcon,
  },
  props: {
    ...props,
    borderless: {
      type: Boolean,
      default: false,
    },
    tId: {
      type: String,
    },
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      customIcon: false,
      slotIcon: false,
      optionLinked: false,
      iconVal: [],
      innerPlacement: '',
      _disabled: false,
      _readonly: false,
      tools,

      dataChecked: coalesce(this.checked, this.defaultChecked),
    };
  },
  computed: {
    isIsolated() {
      return this.relationKey === ISOLATED_RELATION_KEY;
    },
  },
  watch: {
    checked: {
      handler(v) {
        this.dataChecked = v;
      },
      immediate: true,
    },
    disabled: {
      handler(v) {
        this._disabled = v;
      },
      immediate: true,
    },
    readonly: {
      handler(v) {
        this._readonly = v;
      },
      immediate: true,
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    handleTap(e) {
      const { _disabled, _readonly, contentDisabled } = this;
      const { target } = e.currentTarget.dataset;

      if (_disabled || _readonly || (target === 'text' && contentDisabled)) return;

      this.doChange();
    },
    doChange() {
      const { value, dataChecked, allowUncheck } = this;
      const parent = this.isIsolated ? null : this[RELATION_MAP.Radio];

      const isAllowUncheck = Boolean(allowUncheck || parent?.allowUncheck);

      if (parent) {
        this[RELATION_MAP.Radio].updateValue(dataChecked && isAllowUncheck ? null : value);
      } else {
        this._trigger('change', { checked: isAllowUncheck ? !dataChecked : true });
      }
    },
    init() {
      const { icon } = this;
      const parent = this.isIsolated ? null : this[RELATION_MAP.Radio];
      const isIdArr = Array.isArray(parent?.icon || icon);

      this.customIcon = isIdArr;
      this.slotIcon = icon === 'slot';
      this.iconVal = isIdArr ? parent?.icon || icon : [];
      this.innerPlacement = this.placement || parent?.placement || 'left';
    },

    setDisabled(disabled) {
      if (this.isIsolated) return;

      this._disabled = this.disabled || disabled;
    },

    setReadonly(readonly) {
      this._readonly = this.readonly || readonly;
    },
  },
});
</script>
<style scoped>
@import './radio.css';
</style>
