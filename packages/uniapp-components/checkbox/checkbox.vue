<template>
  <view
    :id="tId"
    :style="tools._style([customStyle])"
    :class="tools.cls(classPrefix, [placement, theme, ['checked', dataChecked], ['block', block]]) + ' ' + tClass"
    aria-role="checkbox"
    :aria-checked="dataChecked ? (dataIndeterminate ? 'mixed' : true) : false"
    :aria-disabled="_disabled ? true : false"
    @click.stop="handleTap"
  >
    <view
      v-if="theme == 'default'"
      :class="tools.cls(classPrefix + '__icon', [placement, ['checked', dataChecked], ['disabled', _disabled]]) + ' ' + tClassIcon"
    >
      <slot
        v-if="icon === 'slot'"
        name="icon"
      />
      <view
        v-else-if="tools.isArray(icon)"
        :class="classPrefix + '__icon'"
      >
        <image
          :src="dataChecked ? (dataIndeterminate && icon[2] ? icon[2] : icon[0]) : icon[1]"
          :class="classPrefix + '__icon-image'"
          webp
        />
      </view>
      <block v-else>
        <t-icon
          v-if="dataChecked && (icon == 'circle' || icon == 'rectangle')"
          :name="dataIndeterminate ? 'minus-' + icon + '-filled' : 'check-' + icon + '-filled'"
          :class="tools.cls(classPrefix + '__icon-wrapper', [])"
        />
        <t-icon
          v-if="dataChecked && icon == 'line'"
          :name="dataIndeterminate ? 'minus-' + icon + '-filled' : 'check'"
          :class="tools.cls(classPrefix + '__icon-wrapper', [])"
        />
        <view
          v-else-if="!dataChecked && (icon == 'circle' || icon == 'rectangle')"
          :class="tools.cls(classPrefix + '__icon-' + icon, [['disabled', _disabled]])"
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
        :class="tools.cls(classPrefix + '__description', [['disabled', _disabled]]) + ' ' + tClassContent"
        :style="'-webkit-line-clamp:' + maxContentRow"
      >
        <block v-if="content">
          {{ content }}
        </block>
        <slot name="content" />
      </view>
    </view>
    <view
      v-if="theme == 'default' && !dataBorderless"
      :class="tools.cls(classPrefix + '__border', [placement]) + ' ' + tClassBorder"
    />
  </view>
</template>
<script>
import tIcon from '../icon/icon';
import { uniComponent } from '../common/src/index';
import { coalesce } from '../common/utils';
import { prefix, ISOLATED_RELATION_KEY } from '../common/config';
import props from './props';
import tools from '../common/utils.wxs';
import { ChildrenMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-checkbox`;

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
  mixins: [ChildrenMixin(RELATION_MAP.Checkbox)],
  components: {
    tIcon,
  },
  props: {
    ...props,
    theme: {
      type: String,
      default: 'default',
    },
    tId: {
      type: String,
    },
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      _disabled: false,
      tools,

      dataBorderless: this.borderless,
      dataIndeterminate: this.indeterminate,
      dataChecked: coalesce(this.checked, this.defaultChecked),
    };
  },
  computed: {
    isIsolated() {
      return this.relationKey === ISOLATED_RELATION_KEY;
    },
  },
  watch: {
    borderless: {
      handler(v) {
        this.dataBorderless = v;
      },
      immediate: true,
    },
    indeterminate: {
      handler(v) {
        this.dataIndeterminate = v;
      },
      immediate: true,
    },
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
  },
  mounted() {

  },
  methods: {
    innerAfterLinked() {
      if (this.isIsolated) return;
      const parent = this[RELATION_MAP.Checkbox];
      const { value, disabled, borderless } = parent;
      const { dataValue, checked, checkAll, item, dataIndeterminate } = this;
      const valueSet = new Set(value);
      const checkedFromParent = valueSet.has(this.value);
      const data = {
        _disabled: this.disabled == null ? disabled : this.disabled,
      };

      data.dataBorderless = !!(coalesce(this.borderless, borderless));

      data.dataChecked = this.dataChecked || checkedFromParent;
      if (this.dataChecked) {
        parent.updateValue({
          value: dataValue,
          checked,
          checkAll,
          item,
          indeterminate: dataIndeterminate,
          trigger: 'init',
        });
      }

      if (this.checkAll) {
        data.dataChecked = valueSet.size > 0;
        // data.indeterminate =
      }

      Object.keys(data).forEach((key) => {
        this[key] = data[key];
      });
    },
    handleTap(e) {
      const { _disabled, readonly, contentDisabled } = this;
      const { target } = e.currentTarget.dataset;

      if (_disabled || readonly || (target === 'text' && contentDisabled)) return;

      const { value, label, checkAll, dataIndeterminate } = this;
      const checked = !this.dataChecked;
      const parent = this[RELATION_MAP.Checkbox];


      if (parent && !this.isIsolated) {
        parent.updateValue({ value, checkAll, indeterminate: dataIndeterminate, checked, item: { label, value, checked } });
      } else {
        this._trigger('change', { context: { value, label }, checked });
      }
    },

    setDisabled(disabled) {
      this._disabled = this.disabled || disabled;
    },
  },
});
</script>
<style scoped>
@import './checkbox.css';
</style>
