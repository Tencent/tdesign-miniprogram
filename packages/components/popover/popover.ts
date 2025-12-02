import { getWindowInfo } from '../common/wechat';
import { TdPopoverProps } from './type';
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import props from './props';
import { unitConvert } from '../common/utils';
import transition from '../mixins/transition';

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
    _placement: 'top',
    contentStyle: '',
    arrowStyle: '',
  };

  controlledProps = [
    {
      key: 'visible',
      event: 'visible-change',
    },
  ];

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
        this._trigger('visible-change', { visible });
      });
    },

    onOverlayTap() {
      if (this.properties.closeOnClickOutside) {
        this.updateVisible(false);
      }
    },

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

        const offset = unitConvert(8);
        let top = 0;
        let left = 0;

        const isTopBase = _placement.startsWith('top');
        const isBottomBase = _placement.startsWith('bottom');
        const isLeftBase = _placement.startsWith('left');
        const isRightBase = _placement.startsWith('right');

        if (isTopBase) {
          top = triggerRect.top - contentRect.height - offset;
        } else if (isBottomBase) {
          top = triggerRect.top + triggerRect.height + offset;
        } else if (isLeftBase) {
          left = triggerRect.left - contentRect.width - offset;
        } else if (isRightBase) {
          left = triggerRect.left + triggerRect.width + offset;
        } else {
          top = triggerRect.top - contentRect.height - offset;
        }

        const isStart = _placement.includes('start');
        const isEnd = _placement.includes('end');

        // 垂直方向的水平居中/偏移
        if (isTopBase || isBottomBase) {
          if (isStart) {
            left = triggerRect.left;
          } else if (isEnd) {
            left = triggerRect.left + triggerRect.width - contentRect.width;
          } else {
            left = triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
          }
        }

        // 水平方向的垂直居中/偏移
        if (isLeftBase || isRightBase) {
          if (isStart) {
            top = triggerRect.top;
          } else if (isEnd) {
            top = triggerRect.top + triggerRect.height - contentRect.height;
          } else {
            top = triggerRect.top + triggerRect.height / 2 - contentRect.height / 2;
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
