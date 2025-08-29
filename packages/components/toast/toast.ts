import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import transition from '../mixins/transition';
import { calcIcon } from '../common/utils';
import { ToastOptionsType } from './index';
import useCustomNavbar from '../mixins/using-custom-navbar';

const { prefix } = config;
const name = `${prefix}-toast`;

type Timer = NodeJS.Timeout | null;

@wxComponent()
export default class Toast extends SuperComponent {
  externalClasses = [`${prefix}-class`];

  options = {
    multipleSlots: true,
  };

  behaviors = [transition(), useCustomNavbar];

  hideTimer: Timer = null;

  data = {
    prefix,
    classPrefix: name,
    typeMapIcon: '',
  };

  properties = props;

  lifetimes = {
    detached() {
      this.destroyed();
    },
  };

  pageLifetimes = {
    hide() {
      this.hide();
    },
  };

  methods = {
    show(options: ToastOptionsType) {
      if (this.hideTimer) clearTimeout(this.hideTimer);
      const iconMap = {
        loading: 'loading',
        success: 'check-circle',
        warning: 'error-circle',
        error: 'close-circle',
      };
      const typeMapIcon = iconMap[options?.theme];
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
        isLoading: options?.theme === 'loading',
        _icon: calcIcon(typeMapIcon ?? options.icon),
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
      if (!this.data.visible) return; // 避免重复触发（页面关闭、定时关闭都会触发）
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

    loop() {},
  };
}
