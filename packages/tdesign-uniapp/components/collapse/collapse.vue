<template>
  <view
    :style="_._style([customStyle])"
    :class="[
      tClass,
      _.cls(classPrefix, [['hairline--top-bottom', border], theme])
    ]"
  >
    <slot />
  </view>
</template>
<script>
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import { coalesce } from '../common/utils';
import props from './props';
import _ from '../common/utils.wxs';
import { ParentMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-collapse`;


export default uniComponent({
  name,
  controlledProps: [
    {
      key: 'value',
      event: 'change',
    },
  ],
  options: {
    styleIsolation: 'shared',
  },
  externalClasses: [`${prefix}-class`],
  mixins: [ParentMixin(RELATION_MAP.CollapsePanel)],
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
      _,
      border: false,
      dataValue: coalesce(this.value, this.defaultValue),
      mounted: false,
    };
  },
  watch: {
    value: {
      handler(value) {
        this.dataValue = value;
      },
      immediate: true,
    },
    dataValue: {
      handler() {
        this.waitUntilMounted(this.updateExpanded);
      },
      immediate: true,
      deep: true,
    },
    expandMutex: {
      handler() {
        this.waitUntilMounted(this.updateExpanded);
      },
      immediate: true,
    },

  },
  mounted() {
    let interval = 0;
    // #ifdef APP-PLUS
    interval = 33;
    // #endif
    setTimeout(() => {
      this.mounted = true;
    }, interval);
  },
  methods: {
    waitUntilMounted(cb) {
      if (this.mounted) {
        cb.call(this);
        return;
      }
      setTimeout(() => {
        cb.call(this);
      }, 33);
    },

    updateExpanded() {
      this.children?.forEach((e) => {
        e.updateExpanded(this.dataValue);
      });
    },
    switch(panelValue) {
      const { expandMutex, dataValue: activeValues } = this;

      let value = [];
      const hit = activeValues?.indexOf(panelValue);

      if (hit > -1) {
        value = activeValues.filter(item => item !== panelValue);
      } else {
        value = expandMutex ? [panelValue] : activeValues.concat(panelValue);
      }

      this._trigger('change', { value });
    },
  },
});
</script>
<style scoped>
@import './collapse.css';
</style>
