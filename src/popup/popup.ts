import { TdPopupProps } from './type';
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { classNames } from '../common/utils';
import transition from '../mixins/transition';

delete props.visible;

export type PopupProps = TdPopupProps;

const { prefix } = config;
const name = `${prefix}-popup`;

@wxComponent()
export default class Popup extends SuperComponent {
  externalClasses = ['t-class', 't-class-content'];

  behaviors = [transition()];

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    className: name,
  };

  lifetimes = {
    attached() {
      this.setClass();
    },
  };

  setClass() {
    const { placement, showOverlay } = this.properties;
    const className = classNames(name, `${name}--${placement}`, {
      [`${name}--overlay-transparent`]: !showOverlay,
    });
    this.setData({
      className,
    });
  }

  handleOverlayClick() {
    const { closeOnOverlayClick } = this.properties;
    if (closeOnOverlayClick) {
      this.triggerEvent('visible-change', { visible: false });
    }
  }

  handleClose() {
    this.triggerEvent('visible-change', { visible: false });
  }

  preventEvent() {}
}
