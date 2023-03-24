import { TdPopupProps } from './type';
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import transition from '../mixins/transition';

delete props.visible;

export type PopupProps = TdPopupProps;

const { prefix } = config;
const name = `${prefix}-popup`;

@wxComponent()
export default class Popup extends SuperComponent {
  externalClasses = [`${prefix}-class`, `${prefix}-class-content`];

  behaviors = [transition()];

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    prefix,
    classPrefix: name,
  };

  methods = {
    onStopPropagation() {},

    handleOverlayClick() {
      const { closeOnOverlayClick } = this.properties;
      if (closeOnOverlayClick) {
        this.triggerEvent('visible-change', { visible: false });
      }
    },

    handleClose() {
      this.triggerEvent('visible-change', { visible: false });
    },
  };
}
