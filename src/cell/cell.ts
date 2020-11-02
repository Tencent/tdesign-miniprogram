import TComponent from '../common/component';
TComponent({
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
