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
  };

  data = {
    prefix,
    classPrefix: name,
  };

  methods = {
    handleClick() {
      this.triggerEvent('click', { visible: !this.properties.visible });
    },
  };
}
