<template>
  <view>
    <view
      :style="tools._style([customStyle])"
      :class="classPrefix + ' ' + tClass"
    >
      <view
        :class="
          classPrefix +'__input-box ' +
            prefix + '-' +(focus ? 'is-focused' : 'not-focused') +
            ' ' + classPrefix + '__input-box--' + (center ? 'center' : '') +
            ' ' + classPrefix + '__input-box--' + shape +
            ' ' + tClassInputContainer
        "
      >
        <t-icon
          v-if="leftIcon"
          :name="leftIcon"
          :t-class="prefix + '-icon ' + tClassLeft"
          :aria-hidden="true"
        />
        <slot
          v-else
          name="left-icon"
        />
        <input
          :type="type"
          name="input"
          :maxlength="maxlength"
          :disabled="disabled || readonly"
          :class="prefix + '-input__keyword ' + tClassInput + ' ' + (disabled ? prefix + '-input--disabled' : '')"
          :focus="focus"
          :value="dataValue"
          :confirm-type="confirmType"
          :confirm-hold="confirmHold"
          :cursor="cursor"
          :adjust-position="adjustPosition"
          :always-embed="alwaysEmbed"
          :selection-start="selectionStart"
          :selection-end="selectionEnd"
          :hold-keyboard="holdKeyboard"
          :cursor-spacing="cursorSpacing"
          :cursor-color="cursorColor"
          :placeholder="placeholder"
          :placeholder-style="placeholderStyle"
          :placeholder-class="placeholderClass + ' ' + classPrefix + '__placeholder ' + classPrefix + '__placeholder--' + (center ? 'center' : 'normal')"
          @input="onInput"
          @focus="onFocus"
          @blur="onBlur"
          @confirm="onConfirm"
        >
        <view
          v-if="dataValue !== '' && clearable && showClearIcon"
          :class="classPrefix + '__clear hotspot-expanded ' + tClassClear"
          aria-role="button"
          aria-label="清除"
          @touchstart.stop.prevent="handleClear"
        >
          <t-icon
            name="close-circle-filled"
            size="inherit"
            color="inherit"
          />
        </view>
      </view>
      <view
        v-if="action"
        :class="classPrefix + '__search-action ' + tClassAction"
        aria-role="button"
        @click.stop.prevent="onActionClick"
      >
        {{ action }}
      </view>
      <slot
        v-else
        name="action"
      />
    </view>
    <view
      v-if="isShowResultList && !isSelected"
      :class="classPrefix + '__result-list'"
      aria-role="listbox"
    >
      <t-cell
        v-for="(item, index) in resultList"
        :key="index"
        :data-index="index"
        :t-class="classPrefix + '__result-item'"
        hover
        aria-role="option"
        @click="onSelectOption($event, { index })"
      >
        <template
          #title
        >
          <rich-text
            :nodes="highLight(item, dataValue)"
          />
        </template>
      </t-cell>
    </view>
  </view>
</template>
<script>
import TIcon from '../icon/icon';
import TCell from '../cell/cell';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import props from './props';
import { getCharacterLength, nextTick } from '../common/utils';
import tools from '../common/utils.wxs';
import { highLight } from './computed.js';
// import { getInnerMaxLen } from '../input/utils';

const name = `${prefix}-search`;


export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-input-container`,
    `${prefix}-class-input`,
    `${prefix}-class-action`,
    `${prefix}-class-left`,
    `${prefix}-class-clear`,
  ],
  components: {
    TIcon,
    TCell,
  },
  props: {
    ...props,
  },
  emits: [
  ],
  data() {
    return {
      classPrefix: name,
      prefix,
      isShowResultList: false,
      isSelected: false,
      showClearIcon: false,
      tools,

      dataValue: this.value,
      // innerMaxLen: -1,
      // rawValue: '',
    };
  },
  watch: {
    resultList: {
      handler(val) {
        const { isSelected } = this;
        if (val.length) {
          if (isSelected) {
          // 已选择
            this.isShowResultList = false;
            this.isSelected = false;
          } else {
            this.isShowResultList = true;
          }
        } else {
          this.isShowResultList = false;
        }
      },
      immediate: true,
    },

    dataValue: {
      handler() {
        // this.updateInnerMaxLen();
        this.updateClearIconVisible();
      },
    },
    clearTrigger: 'updateClearIconVisible',
    clearable: 'updateClearIconVisible',
    disabled: 'updateClearIconVisible',
    readonly: 'updateClearIconVisible',

    // maxcharacter: 'updateInnerMaxLen',
    // maxlength: 'updateInnerMaxLen',
  },
  mounted() {
    this.updateClearIconVisible();
  },
  methods: {
    updateClearIconVisible(value = false) {
      const { clearTrigger, disabled, readonly, dataValue } = this;
      if (disabled || readonly || !dataValue) {
        this.showClearIcon = false;
        return;
      }

      this.showClearIcon = value || String(clearTrigger) === 'always';
    },

    onInput(e) {
      let { value } = e.detail;
      // this.rawValue = value;
      this.dataValue = value;

      const { maxcharacter } = this;
      if (maxcharacter && typeof maxcharacter === 'number' && maxcharacter > 0) {
        const { characters } = getCharacterLength('maxcharacter', value, maxcharacter);

        value = characters;
      }


      nextTick().then(() => {
        this.dataValue = value;
        this.$emit('change', {
          value,
          trigger: 'input-change',
        });
      });
      // this.updateInnerMaxLen();
    },

    onFocus(e) {
      const { value } = e.detail;
      this.updateClearIconVisible(true);
      this.$emit('focus', { value });
    },

    onBlur(e) {
      const { value } = e.detail;
      this.updateClearIconVisible();
      this.$emit('blur', { value });
    },

    handleClear() {
      this.dataValue = '';
      this.$emit('clear', { value: '' });
      this.$emit('change', {
        value: '',
        trigger: 'clear',
      });
    },

    onConfirm(e) {
      const { value } = e.detail;
      this.$emit('submit', { value });
    },

    onActionClick() {
      this.$emit('action-click');
    },

    onSelectOption(tools, { index }) {
      const item = this.resultList[index];
      this.dataValue = item;
      this.isSelected = true;

      this.$emit('change', {
        value: item,
        trigger: 'option-click',
      });
    },
    highLight,
    // updateInnerMaxLen() {
    //   // this.innerMaxLen = this.getInnerMaxLen();
    // },
    // getInnerMaxLen() {
    //   const {
    //     maxcharacter,
    //     maxlength,
    //     dataValue,
    //     rawValue,
    //     count,
    //   } = this;
    //   return getInnerMaxLen({
    //     allowInputOverMax: false,
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
@import './search.css';
</style>
