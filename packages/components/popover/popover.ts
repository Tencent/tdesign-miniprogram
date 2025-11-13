import { getWindowInfo } from 'tdesign-miniprogram/common/wechat';
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
    _placement: 'top',
    theme: 'dark',
    contentStyle: '',
    arrowStyle: '',
  };

  observers = {
    visible(val: boolean) {
      if (val === undefined || val === null) return;
      this.updateVisible(val);
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
        this.updateVisible(true);
      }
    },
  };

  methods = {
    updateVisible(visible: boolean) {
      if (visible === this.data.visible) return;
      this.setData({ visible }, () => {
        this.triggerEvent('visible-change', { visible });
      });
    },

    onOverlayTap() {
      if (this.properties.closeOnClickOutside) {
        this.updateVisible(false);
      }
    },

    // getPopperPlacement = (placement: TdPopoverProps['placement']): Placement => {
    //   return placement?.replace(/-(left|top)$/, '-start').replace(/-(right|bottom)$/, '-end') as Placement;
    // },

    // getPopoverOptions = () => ({
    //   placement: getPopperPlacement(props.placement),
    //   modifiers: [
    //     {
    //       name: 'arrow',
    //       options: {
    //         padding: placementPadding,
    //       },
    //     },
    //   ],
    // }),

    // 计算箭头偏移的样式：仅作用于箭头元素，不修改内容 padding
    calcArrowStyle(placement: string, contentDom: any, popoverDom: any) {
      const horizontal = ['top', 'bottom'];
      const vertical = ['left', 'right'];
      const isBase = [...horizontal, ...vertical].find((item) => item === placement);
      if (isBase) {
        return '';
      }

      const { width, left } = contentDom;
      const { width: popperWidth, height: popperHeight } = popoverDom;
      const { windowWidth } = getWindowInfo();

      const isHorizontal = horizontal.find((item) => placement.includes(item));
      const isVertical = vertical.find((item) => placement.includes(item));
      const isEnd = placement.includes('end');

      if (isHorizontal) {
        const padding = isEnd ? Math.min(width + left, popperWidth) : Math.min(windowWidth - left, popperWidth);
        if (isEnd) {
          return `left:${padding - 22}px;`;
        }
        return `right:${padding - 22}px;`;
      }
      if (isVertical) {
        const offset = popperHeight - 22;
        if (isEnd) {
          return `top:${offset}px;`;
        }
        return `bottom:${offset}px;top:unset;`;
      }
      return '';
    },

    async computePosition() {
      // 计算触发元素和内容尺寸，设置 contentStyle
      const { placement } = this.data;
      const _placement = placement.replace(/-(left|top)$/, '-start').replace(/-(right|bottom)$/, '-end');
      this.setData({ _placement });
      const query = this.createSelectorQuery();
      query.select(`#${name}-wrapper`).boundingClientRect();
      query.select(`#${name}-content`).boundingClientRect();

      query.selectViewport().scrollOffset();
      query.exec((res) => {
        const [triggerRect, contentRect, viewportOffset] = res;
        if (!triggerRect || !contentRect) return;

        // 间距 8rpx => px
        const offset = unitConvert(8);
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

        const { scrollTop = 0, scrollLeft = 0 } = viewportOffset;
        top += scrollTop;
        left += scrollLeft;

        const style = `top:${Math.max(top, 0)}px;left:${Math.max(left, 0)}px;`;
        const arrowStyle = this.calcArrowStyle(_placement, triggerRect, contentRect);
        this.setData({ contentStyle: style, arrowStyle });
      });
    },
  };
}
