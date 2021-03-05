import TComponent from '../common/component';
TComponent({
  relations: {
    '../checkbox-group/checkbox-group': {
      type: 'ancestor',
    },
  },
  properties: {
    checked: {
      type: Boolean,
      value: false,
      observer(val: boolean) {
        this.setData({
          active: val,
        });
      },
    },
    title: String,
    name: String,
    label: String,
    value: String,
    disabled: {
      type: Boolean,
      value: false,
    },
    bordered: {
      type: Boolean,
      value: true,
    },
  },
  data: {
    active: false,
  },
  methods: {
    onChange() {
      if (this.data.disabled) return;
      const { name, active } = this.data;
      const item = { name, checked: !active };
      const [parent] = this.getRelationNodes('../checkbox-group/checkbox-group');
      if (parent) {
        parent.updateValue(item);
      } else {
        this.triggerEvent('change', item);
        this.toggle();
      }
    },
    toggle() {
      const { active } = this.data;
      this.setData({
        active: !active,
      });
    },
    changeActive(active: boolean) {
      this.setData({
        active,
      });
    },
  },
});
