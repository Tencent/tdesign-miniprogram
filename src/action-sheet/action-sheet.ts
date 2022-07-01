import { chunk } from '../common/utils';
import { SuperComponent, wxComponent } from '../common/src/index';
import config from '../common/config';
import { ActionSheetTheme, show } from './show';
import props from './props';

const { prefix } = config;
const name = `${prefix}-action-sheet`;

@wxComponent()
export default class ActionSheet extends SuperComponent {
  static show = show;

  externalClasses = [`${prefix}-class`, `${prefix}-class-content`, `${prefix}-class-cancel`];

  properties = {
    ...props,
  };

  data = {
    prefix,
    classPrefix: name,
    gridThemeItems: [],
    currentSwiperIndex: 0,
  };

  controlledProps = [
    {
      key: 'visible',
      event: 'visible-change',
    },
  ];

  ready() {
    this.memoInitialData();
  }

  methods = {
    onSwiperChange(e: WechatMiniprogram.TouchEvent) {
      const {
        detail: { current },
      } = e;
      this.setData({
        currentSwiperIndex: current,
      });
    },

    splitGridThemeActions() {
      if (this.data.theme !== ActionSheetTheme.Grid) return;
      this.setData({
        gridThemeItems: chunk(this.data.items, this.data.count),
      });
    },

    /** 指令调用显示 */
    show() {
      this.splitGridThemeActions();
      this._trigger('visible-change', { visible: true });
    },

    resetData(cb: () => void) {
      this.setData({ ...this.initialData }, cb);
    },

    memoInitialData() {
      this.initialData = {
        ...this.properties,
        ...this.data,
      };
    },

    /** 指令调用隐藏 */
    close() {
      this._trigger('visible-change', { visible: false });
    },

    /** 默认点击遮罩关闭 */
    onPopupVisibleChange({ detail }) {
      if (!detail.visible) {
        this._trigger('visible-change', { visible: false });
      }
    },

    onSelect(event: WechatMiniprogram.TouchEvent) {
      const { currentSwiperIndex, items, gridThemeItems, count } = this.data;
      const { index } = event.currentTarget.dataset;
      const isSwiperMode = items.length > count;
      const item = isSwiperMode ? gridThemeItems[currentSwiperIndex][index] : items[index];
      const realIndex = isSwiperMode ? index + currentSwiperIndex * count : index;
      if (item) {
        this.triggerEvent('selected', { selected: item, index: realIndex });
        this._trigger('visible-change', { visible: false });
      }
    },

    onCancel() {
      this.triggerEvent('cancel');
    },
  };
}
