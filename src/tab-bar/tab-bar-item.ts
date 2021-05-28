import TComponent from '../common/component';
import config from '../common/config';

const { prefix } = config;
const classPrefix = `${prefix}-tab-bar-item`;

TComponent({
  relations: {
    './tab-bar': {
      type: 'ancestor',
    },
  },
  data: {
    prefix,
    classPrefix,
    isSpread: false,
    isChecked: false,
    parent: null,
    hasChildren: false,
    currentName: '',
  },
  properties: {
    name: {
      type: String,
      optionalTypes: [Number],
      value: '',
    },
    icon: {
      type: String,
      value: '',
    },
    children: {
      type: Array,
      value: [],
      observer(value: Array<Object>) {
        this.setData({
          hasChildren: value.length > 0,
        });
      },
    },
  },
  methods: {
    toggle() {
      const { parent, currentName, isSpread, hasChildren } = this.data;

      if (hasChildren) {
        this.setData({
          isSpread: !isSpread,
        });
        if (Array.isArray(parent.value) && parent.value[0] === currentName) {
          parent.updateValue([currentName]);
        }
      }
      parent.updateValue(currentName);
    },
    selectChild(event) {
      const { parent, currentName } = this.data;
      const childName = event.target.dataset.name;

      if (!(Array.isArray(parent.value) && parent.value[1] === childName)) {
        parent.updateValue([currentName, childName]);
      }
      this.setData({
        isSpread: false,
      });
    },
    checkActive(value) {
      const { currentName, hasChildren } = this.data;

      if (hasChildren && Array.isArray(value)) {
        return value.indexOf(currentName) > -1;
      }
      this.setData({
        isChecked: currentName === value,
      });
    },
  },
  ready() {
    const [parent] = this.getRelationNodes('./tab-bar') || [];

    if (parent) {
      if (this.name === undefined) {
        this.setData({
          parent,
          currentName: parent.initName(),
        });
      } else {
        this.setData({
          parent,
        });
      }
    }
  },
});
