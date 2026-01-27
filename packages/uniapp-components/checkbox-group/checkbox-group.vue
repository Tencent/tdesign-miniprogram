<template>
  <view
    :class="classPrefix + ' ' + tClass"
    :style="tools._style([customStyle])"
  >
    <slot />
    <t-checkbox
      v-for="(item, index) in checkboxOptions"
      :key="index"
      :ref="prefix + '-checkbox-option'"
      :class="prefix + '-checkbox-option'"
      :data-item="item"
      :label="item.label || item.text || ''"
      :value="item.value == null ? '' : item.value"
      :block="item.block || true"
      :check-all="item.checkAll || false"
      :checked="item.checked || false"
      :content="item.content || ''"
      :content-disabled="item.contentDisabled || false"
      :icon="item.icon || 'circle'"
      :indeterminate="item.indeterminate || false"
      :disabled="item.disabled == null ? disabled : item.disabled"
      :max-content-row="item.maxContentRow || 5"
      :max-label-row="item.maxLabelRow || 3"
      :name="item.name || ''"
      :borderless="borderless"
      :readonly="item.readonly || false"
      :placement="item.placement || 'left'"
      :relation-key="relationKey"
      @change="({checked}) => handleInnerChildChange($event, { item, checked })"
    />
  </view>
</template>
<script>
import TCheckbox from '../checkbox/checkbox';
import { uniComponent } from '../common/src/index';
import { prefix } from '../common/config';
import { coalesce } from '../common/utils';
import props from './props';
import tools from '../common/utils.wxs';
import { ParentMixin, RELATION_MAP } from '../common/relation';


const name = `${prefix}-checkbox-group`;


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
  ],

  inject: {
    [RELATION_MAP.FormKey]: {
      default: null,
    },
  },

  mixins: [ParentMixin(RELATION_MAP.Checkbox)],
  components: {
    TCheckbox,
  },
  props: {
    ...props,
  },
  data() {
    return {
      prefix,
      classPrefix: name,
      checkboxOptions: [],
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
      deep: true,
    },
    dataValue: {
      handler() {
        this.updateChildren();
      },
      immediate: true,
      deep: true,
    },
    options: {
      handler() {
        this.initWithOptions();
      },
      immediate: true,
      deep: true,
    },
    disabled: {
      handler(v) {
        if (this.options?.length) {
          this.initWithOptions();
          return;
        }
        this.getChildren()?.forEach((item) => {
          item.setDisabled(v);
        });
      },
      immediate: true,
    },
  },
  created() {
    this.$checkAll = null;
  },
  mounted() {
    this.setCheckall();

    this.getChildren()?.forEach((item) => {
      item.setDisabled(this.disabled);
    });
    setTimeout(() => {
      this.updateChildren();
    }, 33);
  },
  methods: {
    getChildren() {
      let items = this.children;
      if (!items?.length) {
        items = this.$refs[`${prefix}-checkbox-option`];
      }
      return items || [];
    },

    updateChildren() {
      const items = this.getChildren();
      const { dataValue } = this;


      if (items.length > 0) {
        items.forEach((item) => {
          if (!item.checkAll) {
            item.dataChecked = dataValue?.includes(item.value);
          }
        });
        // 关联可全选项
        if (items.some(item => item.checkAll)) {
          this.setCheckall();
        }
      }
    },

    updateValue({ validChildren, trigger, value, checked, checkAll, item, indeterminate }) {
      let { dataValue: newValue } = this;
      const { max } = this;

      if (validChildren !== false) {
        const keySet = new Set(this.getChildren().map(item => item.value));
        newValue = newValue.filter(value => keySet.has(value));
      }

      if (max && checked && newValue.length === max) return;

      if (checkAll) {
        const items = this.getChildren();
        newValue = !checked && indeterminate
          ? items
            .filter(data => !(data.disabled && !newValue.includes(data.value)))
            .map(item => item.value)
          : items
            .filter((data) => {
              if (data.disabled) {
                return newValue.includes(data.value);
              }
              return checked && !data.checkAll;
            })
            .map(data => data.value);
      } else if (checked) {
        newValue = newValue.concat(value);
      } else {
        const index = newValue.findIndex(v => v === value);
        newValue.splice(index, 1);
      }

      if (trigger !== 'init') {
        this._trigger('change', { value: newValue, context: item });

        this.onChange(newValue);
      }
    },

    onChange(value) {
      if (this[RELATION_MAP.FormKey]
        && this[RELATION_MAP.FormKey].onValueChange) {
        this[RELATION_MAP.FormKey].onValueChange(value);
      }
    },

    initWithOptions() {
      const { options, dataValue: value, keys } = this;

      if (!options?.length || !Array.isArray(options)) return;

      const checkboxOptions = options.map((item) => {
        const isLabel = ['number', 'string'].includes(typeof item);
        return isLabel
          ? {
            label: `${item}`,
            value: item,
            checked: value?.includes(item),
          }
          : {
            ...item,
            label: item[coalesce(keys?.label, 'label')],
            value: item[coalesce(keys?.value, 'value')],
            checked: value?.includes(item[coalesce(keys?.value, 'value')]),
          };
      });

      this.checkboxOptions = checkboxOptions;
    },

    handleInnerChildChange(tools, { item, checked }) {
      const rect = {};

      if (item.checkAll) {
        rect.indeterminate = this.$checkAll?.indeterminate;
      }

      this.updateValue({ ...item, checked, item, ...rect });
    },

    setCheckall() {
      const items = this.getChildren();

      if (!this.$checkAll) {
        this.$checkAll = items.find(item => item.checkAll);
      }

      if (!this.$checkAll) return;

      const { dataValue } = this;
      const valueSet = new Set(dataValue?.filter(val => val !== this.$checkAll.value));
      const isCheckall = items.every(item => (item.checkAll ? true : valueSet.has(item.value)));

      this.$checkAll.dataChecked = valueSet.size > 0;
      this.$checkAll.dataIndeterminate = !isCheckall;
    },
  },
});

</script>
<style scoped>
</style>
