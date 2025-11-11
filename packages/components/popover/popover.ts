import { TdPopoverProps } from './type';
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { unitConvert } from '../common/utils';
import transition from '../mixins/transition';

// 保留 visible 以支持受控用法
delete props.visible;

export interface PopoverProps extends TdPopoverProps {}

const { prefix } = config;
const name = `${prefix}-popover`;

@wxComponent()
export default class Popover extends SuperComponent {
  behaviors = [transition()];

  externalClasses = [`${prefix}-class`, `${prefix}-class-content`, `${prefix}-class-trigger`];

  options = {
    multipleSlots: true,
  };

  properties = props;

  data = {
    prefix,
    classPrefix: name,
    placement: 'top',
    theme: 'dark',
    contentStyle: '',
    _triggerRect: null as WechatMiniprogram.BoundingClientRectCallbackResult | null,
  };

  observers = {
    visible(v: boolean) {
      if (v === undefined || v === null) return;
      this.updateVisible(v, 'prop');
    },
    placement() {
      if (this.data.realVisible) this.computePosition();
    },
    realVisible(v: boolean) {
      if (v) {
        this.computePosition();
      }
    },
  };

  lifetimes = {
    attached() {
      if (this.properties.defaultVisible) {
        this.updateVisible(true, 'default');
      }
    },
  };

  methods = {
    updateVisible(visible: boolean, trigger: string) {
      if (visible === this.data.visible) return;
      this.setData({ visible }, () => {
        this.triggerEvent('visible-change', { visible, trigger });
      });
    },

    onToggle() {
      const { realVisible } = this.data;
      this.updateVisible(!realVisible, 'trigger');
    },

    onOverlayTap() {
      if (this.properties.closeOnClickOutside) {
        this.updateVisible(false, 'overlay');
      }
    },

    async computePosition() {
      // 计算触发元素和内容尺寸，设置 contentStyle
      // 简化：仅处理四个基础方向 top/right/bottom/left 以及带 start/end 的 12 种。
      const { placement } = this.data;
      const query = this.createSelectorQuery();
      query.select(`#${name}-wrapper`).boundingClientRect();
      query.select(`#${name}-content`).boundingClientRect();
      query.exec((res) => {
        const [triggerRect, contentRect] = res as [
          WechatMiniprogram.BoundingClientRectCallbackResult,
          WechatMiniprogram.BoundingClientRectCallbackResult,
        ];
        if (!triggerRect || !contentRect) return;
        const offset = unitConvert(8); // 间距 8rpx => px
        let top = 0;
        let left = 0;

        const base = placement.split('-')[0];
        const second = placement.split('-')[1];

        switch (base) {
          case 'top':
            top = triggerRect.top - contentRect.height - offset;
            break;
          case 'bottom':
            top = triggerRect.top + triggerRect.height + offset;
            break;
          case 'left':
            left = triggerRect.left - contentRect.width - offset;
            break;
          case 'right':
            left = triggerRect.left + triggerRect.width + offset;
            break;
          default:
            top = triggerRect.top - contentRect.height - offset;
        }

        // 垂直方向的水平居中/偏移
        if (['top', 'bottom'].includes(base)) {
          if (!second) {
            left = triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
          } else if (second === 'left') {
            left = triggerRect.left;
          } else if (second === 'right') {
            left = triggerRect.left + triggerRect.width - contentRect.width;
          }
        }
        // 水平方向的垂直居中/偏移
        if (['left', 'right'].includes(base)) {
          if (!second) {
            top = triggerRect.top + triggerRect.height / 2 - contentRect.height / 2;
          } else if (second === 'top') {
            top = triggerRect.top;
          } else if (second === 'bottom') {
            top = triggerRect.top + triggerRect.height - contentRect.height;
          }
        }

        const style = `top:${Math.max(top, 0)}px;left:${Math.max(left, 0)}px;`;
        this.setData({ contentStyle: style, _triggerRect: triggerRect });
      });
    },
  };
}
