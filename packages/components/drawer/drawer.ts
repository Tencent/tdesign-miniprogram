import { ComponentsOptionsType, SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import useCustomNavbar from '../mixins/using-custom-navbar';

const { prefix } = config;
const name = `${prefix}-drawer`;

@wxComponent()
export default class Drawer extends SuperComponent {
  behaviors = [useCustomNavbar];

  externalClasses = [];

  options: ComponentsOptionsType = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    classPrefix: name,
  };

  methods = {
    // closeOnOverlayClick为true时才能触发popup的visible-change事件
    visibleChange({ detail }) {
      const { visible } = detail;
      const { showOverlay } = this.data;

      this.setData({
        visible,
      });

      if (!visible) {
        this.triggerEvent('close', { trigger: 'overlay' });
      }

      if (showOverlay) {
        this.triggerEvent('overlay-click', { visible: visible });
      }
    },

    itemClick(detail) {
      const { index, item } = detail.currentTarget.dataset;

      this.triggerEvent('item-click', { index, item });
    },
  };
}
