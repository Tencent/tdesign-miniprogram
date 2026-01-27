<template>
  <view
    :style="tools._style([customStyle])"
    :class="tClass + ' ' + classPrefix"
    :aria-checked="checked"
    :aria-disabled="disabled"
    aria-role="switch"
    @click="handleSwitch"
  >
    <view :class="tools.cls(classPrefix + '__body', [['checked', checked], ['disabled', disabled || loading], size]) + ' ' + tClassBody">
      <view
        :class="
          tools.cls(classPrefix + '__dot', [['checked', checked], ['disabled', disabled], ['plain', label.length != 2 && icon.length != 2 && !loading], size]) +
            ' ' +
            tClassDot
        "
        :aria-hidden="true"
      >
        <view
          v-if="label"
          :class="tools.cls(classPrefix + '__label', [['checked', checked], ['disabled', disabled], size]) + ' ' + tClassLabel"
        >
          <t-loading
            v-if="loading"
            inherit-color
            size="32rpx"
          />
          <text v-else-if="label.length == 2">
            {{ checked ? label[0] : label[1] }}
          </text>
          <t-icon
            v-else-if="icon.length == 2"
            :name="checked ? icon[0] : icon[1]"
            :t-class="tools.cls(classPrefix + '__icon', [['checked', checked], size])"
          />
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import TIcon from '../icon/icon';
import TLoading from '../loading/loading';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import { coalesce } from '../common/utils';
import props from './props';
import tools from '../common/utils.wxs';


const name = `${prefix}-switch`;

export default uniComponent({
  name,
  options: {
    styleIsolation: 'shared',
  },
  controlledProps: [
    {
      key: 'value',
      event: 'change',
    },
  ],
  externalClasses: [
    `${prefix}-class`,
    `${prefix}-class-label`,
    `${prefix}-class-body`,
    `${prefix}-class-dot`,
  ],
  components: {
    TIcon,
    TLoading,
  },
  props: {
    ...props,
  },
  emits: ['change'],
  data() {
    return {
      prefix,
      classPrefix: name,
      checked: false,
      tools,

      dataValue: coalesce(this.value, this.defaultValue),
    };
  },
  watch: {
    value: {
      handler(v) {
        this.dataValue = v;
      },
      immediate: true,
    },
    dataValue: {
      handler(val) {
        const [activeValue] = this.customValue;

        this.checked = val === activeValue;
      },
      immediate: true,
    },
  },
  mounted() {

  },
  methods: {
    handleSwitch() {
      const { loading, disabled, dataValue, customValue } = this;
      const [activeValue, inactiveValue] = customValue;
      if (loading || disabled) return;

      this._trigger('change', {
        value: dataValue === activeValue ? inactiveValue : activeValue,
      });
    },
  },
});
</script>
<style scoped>
@import './switch.css';
</style>
