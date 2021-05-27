import TComponent from '../common/component';
import config from '../common/config';
const { prefix } = config;
const name = `${prefix}-cell`;

TComponent({
  data: {
    classPrefix: name,
  },
  properties: {
    title: null,
    value: null,
    leftIcon: String,
    rightIcon: String,
    size: String,
    label: String,
    bordered: {
      type: Boolean,
      value: true,
    },
    useLabelSlot: {
      type: Boolean,
      value: false,
    },
  },
  methods: {
    onTap(event: any) {
      this.triggerEvent('click', event.detail);
    },
  },
});
