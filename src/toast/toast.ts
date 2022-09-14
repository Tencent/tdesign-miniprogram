import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { ToastOptionsType } from './index';
import transition from '../mixins/transition';

const { prefix } = config;
const name = `${prefix}-toast`;

type Timer = NodeJS.Timeout | null;

@wxComponent()
export default class Toast extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  options = {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  };

  behaviors = [transition()];

  hideTimer: Timer = null;

  data = {
    prefix,
    classPrefix: name,
    typeMapIcon: '',
  };

  properties = props;

  detached() {
    this.destroyed();
  }

  methods = {
    show(options: ToastOptionsType) {
      if (this.hideTimer) clearTimeout(this.hideTimer);
      const iconMap = {
        loading: 'loading',
        success: 'check-circle',
        fail: 'error-circle',
      };
      const typeMapIcon = iconMap[options?.theme] || '';
      const defaultOptions = {
        direction: props.direction.value,
        duration: props.duration.value,
        icon: props.icon.value,
        message: props.message.value,
        placement: props.placement.value,
        preventScrollThrough: props.preventScrollThrough.value,
        theme: props.theme.value,
      };

      const data = {
        ...defaultOptions,
        ...options,
        visible: true,
        typeMapIcon,
      };
      const { duration } = data;
      this.setData(data);

      if (duration > 0) {
        this.hideTimer = setTimeout(() => {
          this.hide();
        }, duration);
      }
    },

    hide() {
      this.setData({ visible: false });
      this.data?.close?.();
      this.triggerEvent('close');
    },

    destroyed() {
      if (this.hideTimer) {
        clearTimeout(this.hideTimer);
        this.hideTimer = null;
      }
      this.triggerEvent('destory');
    },
  };
}
