import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import transition from '../mixins/transition';

const { prefix } = config;
const name = `${prefix}-overlay`;

@wxComponent()
export default class Overlay extends SuperComponent {
  properties = {
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

    customStyle: {
      type: String,
      value: '',
    },
  };

  behaviors = [transition()];

  data = {
    prefix,
    classPrefix: name,
    computedStyle: '',
    _zIndex: 11000,
  };

  observers = {
    backgroundColor(v) {
      this.setData({
        computedStyle: `background-color: ${v};`,
      });
    },
    zIndex(v) {
      if (v !== 0) {
        this.setData({
          _zIndex: v,
        });
      }
    },
  };

  methods = {
    handleClick() {
      this.triggerEvent('click', { visible: !this.properties.visible });
    },
    noop() {},
  };
}
