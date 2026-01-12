<template>
  <view
    :style="tools._style([customStyle])"
    :class="classPrefix + ' ' + (bordered ? classPrefix + '--border' : '') + ' ' + tClass"
  >
    <view :class="classPrefix + '__label ' + tClassLabel">
      <block v-if="label">
        {{ label }}
      </block>
      <slot name="label" />
    </view>
    <view :class="classPrefix + '__wrapper'">
      <textarea
        :class="classPrefix + '__wrapper-inner ' + (disabled ? prefix + '-is-disabled' : '') + ' ' + tClassTextarea"
        :style="textareaStyle(autosize)"
        :maxlength="allowInputOverMax ? -1 : maxlength"
        :disabled="disabled || readonly"
        :placeholder="placeholder"
        :placeholder-class="classPrefix + '__placeholder ' + placeholderClass"
        :placeholder-style="placeholderStyle"
        :value="dataValue"
        :auto-height="!!autosize"
        :auto-focus="autofocus"
        :fixed="fixed"
        :focus="focus"
        :cursor="cursor"
        :cursor-spacing="cursorSpacing"
        :adjust-position="adjustPosition"
        :confirm-type="confirmType"
        :confirm-hold="confirmHold"
        :disable-default-padding="disableDefaultPadding"
        :show-confirm-bar="showConfirmBar"
        :selection-start="selectionStart"
        :selection-end="selectionEnd"
        :hold-keyboard="holdKeyboard"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        @confirm="onConfirm"
        @linechange="onLineChange"
        @keyboardheightchange="onKeyboardHeightChange"
      />
      <view
        v-if="indicator && (maxcharacter > 0 || maxlength > 0)"
        :class="classPrefix + '__indicator ' + tClassIndicator"
      >
        {{ count }} / {{ maxcharacter || maxlength }}
      </view>
    </view>
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { getCharacterLength, coalesce, nextTick } from '../common/utils';
import tools from '../common/utils.wxs';
import { textareaStyle } from './computed.js';
// import { getInnerMaxLen } from '../input/utils';
import { RELATION_MAP } from '../common/relation/parent-map.js';


const name = `${prefix}-textarea`;

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-textarea`,
    `${prefix}-class-label`,
    `${prefix}-class-indicator`,
  ],
  inject: {
    [RELATION_MAP.FormKey]: {
      default: null,
    },
  },
  props: {
    ...props,
  },

  emits: [
    'update:value',
  ],

  data() {
    return {
      prefix,
      classPrefix: name,
      count: 0,
      tools,

      dataValue: coalesce(this.value, this.defaultValue, ''),
    };
  },
  watch: {
    value(val) {
      this.updateValue(val);

      if (this[RELATION_MAP.FormKey]
        && this[RELATION_MAP.FormKey].onValueChange) {
        this[RELATION_MAP.FormKey].onValueChange(val);
      }
    },
  },
  mounted() {
    const { value, defaultValue } = this;
    this.updateValue(coalesce(value, defaultValue, ''));
  },
  methods: {
    textareaStyle,
    updateCount(val) {
      const { maxcharacter, maxlength } = this;
      const { count } = this.calculateValue(val, maxcharacter, maxlength);
      this.count = count;
    },

    updateValue(val) {
      const { maxcharacter, maxlength } = this;
      const { value, count } = this.calculateValue(val, maxcharacter, maxlength);

      this.dataValue = val;


      nextTick().then(() => {
        this.dataValue = value;
        this.count = count;
      });
      // this.updateInnerMaxLen();
    },

    calculateValue(value, maxcharacter, maxlength) {
      const { allowInputOverMax } = this;
      if (maxcharacter > 0 && !Number.isNaN(maxcharacter)) {
        const { length, characters } = getCharacterLength(
          'maxcharacter',
          value,
          allowInputOverMax ? Infinity : maxcharacter,
        );
        return {
          value: characters,
          count: length,
        };
      }
      if (maxlength > 0 && !Number.isNaN(maxlength)) {
        const { length, characters } = getCharacterLength('maxlength', value, allowInputOverMax ? Infinity : maxlength);
        return {
          value: characters,
          count: length,
        };
      }
      return {
        value,
        count: value ? String(value).length : 0,
      };
    },

    onInput(event) {
      const { value, cursor } = event.detail;
      this.updateValue(value);
      this.emitChange({ value: this.dataValue, cursor });
    },

    emitChange(data) {
      this.$emit('change', data);
      this.$emit('update:value', data.value);
    },

    onFocus(event) {
      this.$emit('focus', {
        ...event.detail,
      });
    },
    onBlur(event) {
      this.$emit('blur', {
        ...event.detail,
      });

      if (this[RELATION_MAP.FormKey]
        && this[RELATION_MAP.FormKey].onBlur) {
        this[RELATION_MAP.FormKey].onBlur(event.detail.value);
      }
    },
    onConfirm(event) {
      this.$emit('enter', {
        ...event.detail,
      });
    },
    onLineChange(event) {
      this.$emit('line-change', {
        ...event.detail,
      });
    },
    onKeyboardHeightChange(e) {
      this.$emit('keyboardheightchange', e.detail);
    },

    // updateInnerMaxLen() {
    //   this.innerMaxLen = this.getInnerMaxLen();
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
  },
});
</script>
<style scoped>
@import './textarea.css';
</style>
