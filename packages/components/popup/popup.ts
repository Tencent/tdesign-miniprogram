import { TdPopupProps } from './type';
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import transition from '../mixins/transition';
import useCustomNavbar from '../mixins/using-custom-navbar';

delete props.visible;

export type PopupProps = TdPopupProps;

const { prefix } = config;
const name = `${prefix}-popup`;

@wxComponent()
export default class Popup extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-content`];

  behaviors = [transition(), useCustomNavbar];

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    prefix,
    classPrefix: name,
  };

  methods = {
    handleOverlayClick() {
      const { closeOnOverlayClick } = this.properties;
      if (closeOnOverlayClick) {
        this.triggerEvent('visible-change', { visible: false, trigger: 'overlay' });
      }
    },

    handleClose() {
      this.triggerEvent('visible-change', { visible: false, trigger: 'close-btn' });
    },
  };
}
