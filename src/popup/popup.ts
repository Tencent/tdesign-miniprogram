import { TdPopupProps } from './type';
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { classNames } from '../common/utils';

export type PopupProps = TdPopupProps;

const { prefix } = config;
const name = `${prefix}-popup`;
const defaultTransitionProps = {
  name: `${name}--transition`,
  durations: [300, 300],
  appear: false,
};

@wxComponent()
export default class Popup extends SuperComponent {
  externalClasses = ['t-class', 't-class-overlay', 't-class-content'];

  options = {
    multipleSlots: true, // 多slot支持
    styleIsolation: 'shared' as const,
  };

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    className: name,
    dataTransitionProps: { ...defaultTransitionProps },
  };

  lifetimes = {
    attached() {
      this.setClass();
      this.setTransitionProps();
    },
  };

  setClass() {
    const { placement, showOverlay } = this.properties;
    const className = classNames(name, 't-class', `${name}--position-${placement}`, {
      [`${name}--overlay-transparent`]: !showOverlay,
    });
    this.setData({
      className,
    });
  }

  setTransitionProps() {
    if (!this.properties.transitionProps) {
      return;
    }
    const transitionProps = {
      ...defaultTransitionProps,
      ...this.properties.transitionProps,
    };

    this.setData({
      dataTransitionProps: transitionProps,
    });
  }

  onOverlayClick() {
    const { closeOnOverlayClick } = this.properties;
    if (closeOnOverlayClick) {
      this.setData({
        visible: false
      });
      this.triggerEvent('visible-change', { visible: false });
    }
  }

  onCloseClick() {
    this.setData({
      visible: false
    });
    this.triggerEvent('visible-change', { visible: false });
  }

  preventEvent() {}
}
