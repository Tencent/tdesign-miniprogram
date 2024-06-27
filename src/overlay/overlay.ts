import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import transition from '../mixins/transition';
import useCustomNavbar from '../mixins/using-custom-navbar';

const { prefix } = config;
const name = `${prefix}-overlay`;

@wxComponent()
export default class Overlay extends SuperComponent {
  properties = props;

  behaviors = [transition(), useCustomNavbar];

  data = {
    prefix,
    classPrefix: name,
    computedStyle: '',
    _zIndex: 11000,
  };

  observers = {
    backgroundColor(v) {
      this.setData({
        computedStyle: v ? `background-color: ${v};` : '',
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
