import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';

const { prefix } = config;
const name = `${prefix}-overlay`;

@wxComponent()
export default class Overlay extends SuperComponent {
  properties = {
    visible: {
      type: Boolean,
      value: false,
    },

    zIndex: {
      type: Number,
      value: 11000,
    },

    duration: {
      type: Number,
      value: 300,
    },

    backgroundColor: {
      type: String,
      value: '',
    },

    preventScrollThrough: {
      type: Boolean,
      value: true,
    },
  };

  data = {
    prefix,
    classPrefix: name,
    computedStyle: '',
  };

  observers = {
    backgroundColor(v) {
      this.setData({
        computedStyle: `; background-color: ${v}`,
      });
    },
  };

  methods = {
    handleClick() {
      this.triggerEvent('click', { visible: !this.properties.visible });
    },
    noop() {},
  };
}
