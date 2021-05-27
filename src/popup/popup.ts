import TComponent from '../common/component';
import config from '../common/config';
import { classNames } from '../common/utils';
const { prefix } = config;
const name = `${prefix}-popup`;

const defaultTransitionProps = {
  name: `${name}--transition`,
  durations: [300, 300],
  appear: false,
};

TComponent({
  options: {
    styleIsolation: 'shared',
  },
  properties: {
    visible: Boolean,
    // center | top | bottom | left | right
    position: {
      type: String,
      value: 'center',
    },
    maskTransparent: Boolean,
    maskClosable: {
      type: Boolean,
      value: true,
    },
    destroyOnHide: Boolean,
    customClass: String,
    transitionProps: Object,
  },
  data: {
    className: name,
    dataTransitionProps: { ...defaultTransitionProps },
  },
  lifetimes: {
    attached() {
      this.setClass();
      this.setTransitionProps();
    },
  },
  methods: {
    setClass() {
      const { customClass, position, maskTransparent } = this.data;
      const className = classNames(name, customClass, `${name}--position-${position}`, {
        [`${name}--mask-transparent`]: maskTransparent,
      });
      this.setData({
        className,
      });
    },
    setTransitionProps() {
      if (!this.data.transitionProps) {
        return;
      }
      const transitionProps = Object.assign({}, defaultTransitionProps, this.data.transitionProps);

      this.setData({
        dataTransitionProps: transitionProps,
      });
    },
    onMaskClick() {
      const { maskClosable } = this.data;
      if (maskClosable) {
        this.triggerEvent('close', { trigger: 'mask' });
      }
      this.triggerEvent('mask-click');
    },
  },
});
