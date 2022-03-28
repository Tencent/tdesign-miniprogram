/*
 * @Author: rileycai
 * @Date: 2022-01-12 11:26:38
 * @LastEditTime: 2022-03-28 17:06:00
 * @LastEditors: rileycai
 * @Description: 修复t-toast无法设置最大宽度且无icon不居中的问题
 * @FilePath: /tdesign-miniprogram/src/toast/toast.ts
 */
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { ToastOptionsType } from './index';

const { prefix } = config;
const name = `${prefix}-toast`;

type Timer = NodeJS.Timeout | null;

@wxComponent()
export default class Toast extends SuperComponent {
  externalClasses = ['t-class'];

  options = {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  };

  hideTimer: Timer = null;

  removeTimer: Timer = null;

  data = {
    inserted: false,
    show: false,
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
      if (this.removeTimer) clearTimeout(this.removeTimer);
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
        show: true,
        typeMapIcon,
        inserted: true,
      };
      const { duration } = data;
      this.setData(data);
      this.hideTimer = setTimeout(() => {
        this.clear();
      }, duration as any);
    },

    clear() {
      this.setData({ show: false });
      this.removeTimer = setTimeout(() => {
        this.setData({
          inserted: false,
        });
      }, 300);
    },

    destroyed() {
      if (this.removeTimer) {
        clearTimeout(this.removeTimer);
        this.removeTimer = null;
      }
      if (this.hideTimer) {
        clearTimeout(this.hideTimer);
        this.hideTimer = null;
      }
    },
  };
}
