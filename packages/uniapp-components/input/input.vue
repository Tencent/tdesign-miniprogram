<template>
  <view
    :style="tools._style([customStyle])"
    :class="tools.cls(classPrefix, [['border', !borderless], ['readonly', readonly], ['disabled', disabled]])
      + ' ' + classPrefix + '--layout-' + layout + ' ' + tClass"
    aria-describedby
  >
    <view :class="classPrefix + '__wrap--prefix'">
      <view :class="classPrefix + '__icon--prefix'">
        <slot name="prefix-icon" />
        <block
          v-if="_prefixIcon"
          name="icon"
        >
          <t-icon
            :custom-style="_prefixIcon.style || ''"
            :t-class="tClassPrefixIcon"
            :prefix="_prefixIcon.prefix"
            :name="_prefixIcon.name"
            :size="_prefixIcon.size"
            :color="_prefixIcon.color"
            :aria-hidden="true"
            :aria-label="_prefixIcon.ariaLabel"
            :aria-role="_prefixIcon.ariaRole"
            @click="_prefixIcon.click || ''"
          />
        </block>
      </view>
      <view
        :class="classPrefix + '__label ' + tClassLabel"
        aria-hidden
      >
        <slot name="label" />
        <block v-if="label">
          {{ label }}
        </block>
      </view>
    </view>
    <view :class="classPrefix + '__wrap'">
      <view
        :class="classPrefix + '__content ' + classPrefix + '--' + status"
        @click="onClick"
      >
        <input
          :class="getInputClass(classPrefix, suffix, align, disabled) + ' ' + tClassInput"
          :maxlength="allowInputOverMax ? -1 : maxlength"
          :disabled="disabled || readonly"
          :placeholder="placeholder"
          :placeholder-style="placeholderStyle"
          :placeholder-class="tools.cls(classPrefix + '__placeholder', [['disabled', disabled]]) + ' ' + placeholderClass"
          :value="dataValue"
          :password="type === 'password'"
          :type="type === 'password' ? 'text' : type"
          :focus="focus"
          :confirm-type="confirmType"
          :confirm-hold="confirmHold"
          :cursor="cursor"
          :cursor-color="cursorColor"
          :cursor-spacing="cursorSpacing"
          :adjust-position="adjustPosition"
          :auto-focus="autoFocus"
          :always-embed="alwaysEmbed"
          :selection-start="selectionStart"
          :selection-end="selectionEnd"
          :hold-keyboard="holdKeyboard"
          :safe-password-cert-path="safePasswordCertPath"
          :safe-password-length="safePasswordLength"
          :safe-password-time-stamp="safePasswordTimeStamp"
          :safe-password-nonce="safePasswordNonce"
          :safe-password-salt="safePasswordSalt"
          :safe-password-custom-hash="safePasswordCustomHash"
          aria-role="textbox"
          :aria-label="label"
          :aria-roledescription="label"
          @input="onInput"
          @change="onChange"
          @focus="onFocus"
          @blur="onBlur"
          @confirm="onConfirm"
          @keyboardheightchange="onKeyboardHeightChange"
          @nicknamereview="onNickNameReview"
        >
        <view
          v-if="_clearIcon && dataValue && dataValue.length && showClearIcon"
          :class="classPrefix + '__wrap--clearable-icon'"
          @click.stop="clearInput"
        >
          <t-icon
            :custom-style="_clearIcon.style || ''"
            :t-class="tClassClearable"
            :prefix="_clearIcon.prefix"
            :name="_clearIcon.name"
            :size="_clearIcon.size"
            :color="_clearIcon.color"
            :aria-hidden="false"
            :aria-label="_clearIcon.ariaLabel || '清除'"
            :aria-role="_clearIcon.ariaRole || 'button'"
            @click="_clearIcon.click || ''"
          />
        </view>
        <view
          :class="classPrefix + '__wrap--suffix ' + tClassSuffix"
          @click="onSuffixClick"
        >
          <text v-if="suffix">
            {{ suffix }}
          </text>
          <slot name="suffix" />
        </view>
        <view
          :class="classPrefix + '__wrap--suffix-icon'"
          @click="onSuffixIconClick"
        >
          <slot name="suffix-icon" />
          <block
            v-if="_suffixIcon"
            name="icon"
          >
            <t-icon
              :custom-style="_suffixIcon.style || ''"
              :t-class="tClassSuffixIcon"
              :prefix="_suffixIcon.prefix"
              :name="_suffixIcon.name"
              :size="_suffixIcon.size"
              :color="_suffixIcon.color"
              :aria-hidden="true"
              :aria-label="_suffixIcon.ariaLabel"
              :aria-role="_suffixIcon.ariaRole || 'button'"
              @click="_suffixIcon.click || ''"
            />
          </block>
        </view>
      </view>
      <view
        v-if="tips && tips.length > 0"
        :class="classPrefix + '__tips ' + classPrefix + '--' + align + ' ' + tClassTips"
      >
        {{ tips }}
      </view>
      <slot name="tips" />
    </view>
    <slot name="extra" />
  </view>
</template>
<script>
import TIcon from '../icon/icon';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { getCharacterLength, calcIcon, coalesce, nextTick } from '../common/utils';
import { isDef } from '../common/validator';
import { getInputClass } from './computed.js';
import tools from '../common/utils.wxs';
import { RELATION_MAP } from '../common/relation/parent-map.js';


const name = `${prefix}-input`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  inject: {
    [RELATION_MAP.FormKey]: {
      default: null,
    },
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-prefix-icon`,
    `${prefix}-class-label`,
    `${prefix}-class-input`,
    `${prefix}-class-clearable`,
    `${prefix}-class-suffix`,
    `${prefix}-class-suffix-icon`,
    `${prefix}-class-tips`,
  ],
  components: {
    TIcon,
  },
  props: {
    ...props,
  },
  emits: [
    'blur',
    'change',
    'clear',
    'click',
    'enter',
    'focus',
    'keyboardheightchange',
    'nicknamereview',
    'validate',
    'update:value',
  ],
  data() {
    return {
      prefix,
      classPrefix: name,
      classBasePrefix: prefix,
      showClearIcon: true,
      tools,

      dataValue: coalesce(this.value, this.defaultValue),

      // rawValue: '',
      // innerMaxLen: -1,
    };
  },
  computed: {
  },
  watch: {
    prefixIcon: {
      handler(v) {
        this._prefixIcon = calcIcon(v);
      },
      immediate: true,
    },

    suffixIcon: {
      handler(v) {
        this._suffixIcon = calcIcon(v);
      },
      immediate: true,
    },

    clearable: {
      handler(v) {
        this._clearIcon = calcIcon(v, 'close-circle-filled');
      },
      immediate: true,
    },

    clearTrigger: 'updateClearIconVisible',
    disabled: 'updateClearIconVisible',
    readonly: 'updateClearIconVisible',

    value: {
      handler(v) {
        this.dataValue = v;
        nextTick().then(() => {
          this.dataValue = v;

          if (this[RELATION_MAP.FormKey]
            && this[RELATION_MAP.FormKey].onValueChange) {
            this[RELATION_MAP.FormKey].onValueChange(v);
          }
        });
      },
    },
  },
  mounted() {
    const { value, defaultValue } = this;
    this.updateValue(coalesce(value, defaultValue, ''));

    this.updateClearIconVisible();
  },
  methods: {
    getInputClass,
    updateValue(value) {
      // this.rawValue = value;
      this.dataValue = value;

      const { allowInputOverMax, maxcharacter, maxlength } = this;
      if (!allowInputOverMax && maxcharacter && maxcharacter > 0 && !Number.isNaN(maxcharacter)) {
        const { length, characters } = getCharacterLength('maxcharacter', value, maxcharacter);
        nextTick().then(() => {
          this.dataValue = characters;
        });
        this.count = length;
      } else if (!allowInputOverMax && maxlength && maxlength > 0 && !Number.isNaN(maxlength)) {
        const { length, characters } = getCharacterLength('maxlength', value, maxlength);
        nextTick().then(() => {
          this.dataValue = characters;
        });
        this.count = length;
      } else {
        nextTick().then(() => {
          this.dataValue = value;
        });
        this.dataValue = value;
        this.count = isDef(value) ? String(value).length : 0;
      }

      // this.updateInnerMaxLen();
    },
    // updateInnerMaxLen() {
    // this.innerMaxLen = this.getInnerMaxLen();
    // },
    // getInnerMaxLen() {
    //   const {
    //     allowInputOverMax,
    //     maxcharacter,
    //     maxlength,
    //     dataValue,
    //     rawValue,
    //     count,
    //   } = this;
    //   return getInnerMaxLen({
    //     allowInputOverMax,
    //     maxcharacter,
    //     maxlength,
    //     dataValue,
    //     rawValue,
    //     count,
    //   });
    // },

    updateClearIconVisible(value = false) {
      const { clearTrigger, disabled, readonly } = this;
      if (disabled || readonly) {
        this.showClearIcon = false;
        return;
      }
      this.showClearIcon = value || clearTrigger === 'always';
    },

    onInput(e) {
      const { value, cursor, keyCode } = e.detail;
      this.updateValue(value);
      this.emitChange({ value: this.dataValue, cursor, keyCode });
    },

    onChange(e) {
      if (this.type !== 'nickname') return;
      const { value } = e.detail;
      this.updateValue(value);
      this.emitChange({ value: this.dataValue });
    },

    emitChange(data) {
      this.$emit('change', data);
      this.$emit('update:value', data.value);
    },

    onFocus(e) {
      this.updateClearIconVisible(true);
      this.$emit('focus', e.detail);
    },

    onBlur(e) {
      this.updateClearIconVisible();

      if (this[RELATION_MAP.FormKey]
        && this[RELATION_MAP.FormKey].onBlur) {
        this[RELATION_MAP.FormKey].onBlur(this.dataValue);
      }

      // 失焦时处理 format
      if (typeof this.format === 'function') {
        const v = this.format(e.detail.value);
        this.updateValue(v);
        this.$emit('blur', { value: this.dataValue, cursor: this.count });
        return;
      }
      this.$emit('blur', e.detail);
    },

    onConfirm(e) {
      this.$emit('enter', e.detail);
    },

    onSuffixClick() {
      this.$emit('click', { trigger: 'suffix' });
    },

    onSuffixIconClick() {
      this.$emit('click', { trigger: 'suffix-icon' });
    },

    clearInput(e) {
      this.$emit('clear', e.detail);
      this.dataValue = '';
    },

    onKeyboardHeightChange(e) {
      this.$emit('keyboardheightchange', e.detail);
    },

    onNickNameReview(e) {
      this.$emit('nicknamereview', e.detail);
    },

    onClick() {
      this.$emit('click', { trigger: 'input' });
    },
  },
});

</script>
<style scoped>
@import './input.css';
/* #ifdef H5 */
.t-input--disabled {
  :deep(input) {
    pointer-events: none;
  }
}
.t-input--readonly {
  :deep(input) {
    pointer-events: none;
  }
}
/* #endif */
</style>
