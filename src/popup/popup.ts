import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { classNames } from '../common/utils';
const { prefix } = config;
const name = `${prefix}-popup`;

const defaultTransitionProps = {
  name: `${name}--transition`,
  durations: [300, 300],
  appear: false,
};

@wxComponent()
export default class Loading extends SuperComponent {
  externalClasses = ['t-class', 't-class-overlay', 't-class-content'];
  properties = props;
  data = {
    ...props,
    className: name,
    dataTransitionProps: { ...defaultTransitionProps },
  };
  lifetimes = {
    attached() {
      // this.setClass();
      this.setTransitionProps();
    },
  };
  // setClass() {
  //   const { customClass, position, maskTransparent } = this.data;
  //   const className = classNames(name, customClass, `${name}--position-${position}`, {
  //     [`${name}--mask-transparent`]: maskTransparent,
  //   });
  //   this.setData({
  //     className,
  //   });
  // }
  setTransitionProps() {
    if (!this.data.transitionProps) {
      return;
    }
    const transitionProps = Object.assign({}, defaultTransitionProps, this.data.transitionProps);

    this.setData({
      dataTransitionProps: transitionProps,
    });
  }
  onMaskClick() {
    const { closeOnOverlayClick } = this.data;
    if (closeOnOverlayClick) {
      this.triggerEvent('close', { trigger: 'mask' });
    }
    this.triggerEvent('mask-click');
  }
}
